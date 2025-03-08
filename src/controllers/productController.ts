import { Context } from "hono";
import {
	insertProductsFromJsonService,
	insertProductsAndReturnResultService,
	deleteProductService,
	updateProductService,
} from "../services/productService";
import { productSchema } from "../utils/validator";
import { logger } from "../utils/logger";

// Controller handling the insertion of products from a JSON mock API
export const insertProductsFromJson = async (c: Context) => {
	try {
		await insertProductsFromJsonService(
			c.env.DATABASE_URL,
			"https://02557f4d-8f03-405d-a4e7-7a6483d26a04.mock.pstmn.io/get",
			productSchema
		);

		logger.info("Products have been inserted into the database");

		return c.json(
			{
				message: "Products have been inserted into the database",
			},
			200
		);
	} catch (error: any) {
		logger.error("Error inserting products: " + error.message);

		return c.json(
			{
				message: error.message || "Internal Server Error",
			},
			500
		);
	}
};

// Controller handling the insertion of products from a JSON mock API and returning the result
export const insertProductsAndReturnResult = async (c: Context) => {
	try {
		const insertedProducts = await insertProductsAndReturnResultService(
			c.env.DATABASE_URL,
			"https://02557f4d-8f03-405d-a4e7-7a6483d26a04.mock.pstmn.io/getProducts",
			productSchema
		);

		logger.info("Products have been inserted into the database");

		return c.json(
			{
				products: insertedProducts,
			},
			200
		);
	} catch (error: any) {
		logger.error("Error inserting products: " + error.message);

		return c.json(
			{
				message: error.message || "Internal Server Error",
			},
			500
		);
	}
};

// Controller handling the deletion of a product by ID
export const deleteProduct = async (c: Context) => {
	try {
		const { product_id } = c.req.param();
		await deleteProductService(c.env.DATABASE_URL, product_id);

		logger.info("Product deleted successfully");

		return c.json(
			{
				message: "Product deleted successfully",
			},
			200
		);
	} catch (error: any) {
		logger.error("Error deleting product: " + error.message);

		return c.json(
			{
				message: error.message || "Internal Server Error",
			},
			500
		);
	}
};

// Controller handling the update of all products
export const updateProduct = async (c: Context) => {
	try {
		await updateProductService(c.env.DATABASE_URL);

		logger.info("All products have been updated");

		return c.json(
			{
				message: "All products have been updated",
			},
			200
		);
	} catch (error: any) {
		logger.error("Error updating products: " + error.message);

		return c.json(
			{
				message: error.message || "Internal Server Error",
			},
			500
		);
	}
};
