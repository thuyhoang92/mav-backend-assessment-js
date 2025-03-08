import { products } from "../db/schema";
import { eq } from "drizzle-orm";
import {
	Product,
	ProductResponse,
	ProductResult,
	ProductVariant,
} from "../types";
import { ZodSchema } from "zod";
import { getDB } from "../db/drizzle";

// Service to insert products from a JSON mock API
export const insertProductsFromJsonService = async (
	database_url: string,
	endpoint: string,
	productSchema: ZodSchema
) => {
	try {
		// Get the database instance
		const db = getDB(database_url);

		// Fetch the products from the mock API
		const response = await fetch(endpoint);
		if (!response.ok) {
			return new Error("Error fetching products");
		}

		// Parse the response
		const data: ProductResponse =
			(await response.json()) as ProductResponse;
		if (!data.products) {
			throw new Error("No products found");
		}

		// Validate the product schema
		const validated = productSchema.safeParse(data.products);
		if (!validated.success) {
			throw new Error("Invalid product schema");
		}

		// Insert the products into the database
		await Promise.all(
			validated.data.flatMap((product: Product) =>
				product.variants.map((variant: ProductVariant) =>
					db
						.insert(products)
						.values({
							id: BigInt(variant.id),
							title: product.title + " " + variant.title,
							tags: product.tags,
							created_at: new Date(variant.created_at),
							updated_at: new Date(variant.updated_at),
							sku: variant.sku,
						})
						.onConflictDoUpdate({
							target: products.id,
							set: {
								title: product.title + " " + variant.title,
								tags: product.tags,
								created_at: new Date(variant.created_at),
								updated_at: new Date(variant.updated_at),
								sku: variant.sku,
							},
						})
				)
			)
		);
	} catch (error: any) {
		throw new Error("Error inserting products: " + error.message);
	}
};

// Service to insert products from a JSON mock API and return the result
export const insertProductsAndReturnResultService = async (
	database_url: string,
	endpoint: string,
	productSchema: ZodSchema
) => {
	try {
		// Get the database instance
		const db = getDB(database_url);

		// Fetch the products from the mock API
		const response = await fetch(endpoint);
		if (!response.ok) {
			throw new Error("Error fetching products");
		}

		// Parse the response
		const data: ProductResponse =
			(await response.json()) as ProductResponse;
		if (!data.products) {
			throw new Error("No products found");
		}

		// Validate the product schema
		const validated = productSchema.safeParse(data.products);
		if (!validated.success) {
			throw new Error("Invalid product schema");
		}

		// Insert the products into the database
		const insertedProducts: ProductResult[] = await Promise.all(
			validated.data.flatMap((product: Product) =>
				product.variants.map(async (variant: ProductVariant) => {
					const result = await db
						.insert(products)
						.values({
							id: BigInt(variant.id),
							title: product.title + " " + variant.title,
							tags: product.tags,
							created_at: new Date(variant.created_at),
							updated_at: new Date(variant.updated_at),
							sku: variant.sku,
						})
						.onConflictDoUpdate({
							target: products.id,
							set: {
								title: product.title + " " + variant.title,
								tags: product.tags,
								created_at: new Date(variant.created_at),
								updated_at: new Date(variant.updated_at),
								sku: variant.sku,
							},
						})
						.returning();

					return {
						ProductID: Number(result[0].id),
						Title: result[0].title,
						Tags: result[0].tags,
						CreatedAt: result[0].created_at,
						UpdatedAt: result[0].updated_at,
						ProductCode: result[0].sku,
					};
				})
			)
		);

		return insertedProducts;
	} catch (error: any) {
		throw new Error("Error inserting products: " + error.message);
	}
};

// Service to delete a product by ID
export const deleteProductService = async (
	database_url: string,
	product_id: string
) => {
	try {
		// Get the database instance
		const db = getDB(database_url);

		// Check if the product exists
		const product = await db
			.select()
			.from(products)
			.where(eq(products.id, BigInt(product_id)));

		if (!product || product.length === 0) {
			throw new Error("Product not found");
		}

		// Delete the product
		await db.delete(products).where(eq(products.id, BigInt(product_id)));
	} catch (error: any) {
		throw new Error("Error deleting product: " + error.message);
	}
};

// Service to update all products
export const updateProductService = async (database_url: string) => {
	try {
		// Get the database instance
		const db = getDB(database_url);

		// Get all products from the database
		const productsList = await db.select().from(products);
		if (productsList.length === 0) {
			throw new Error("No products found in the database");
		}

		// Update the products
		await Promise.all(
			productsList.map(async (product) => {
				const updatedTitle = product.title + " " + product.sku;

				await db
					.update(products)
					.set({ title: updatedTitle })
					.where(eq(products.id, product.id));
			})
		);
	} catch (error: any) {
		throw new Error("Error updating products: " + error.message);
	}
};
