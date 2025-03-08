export interface ProductVariant {
	id: number;
	product_id: number;
	title: string;
	sku: string;
	created_at: string;
	updated_at: string;
}

export interface Product {
	id: number;
	title: string;
	variants: ProductVariant[];
	tags: string;
	created_at: string;
	updated_at: string;
}

export interface ProductResponse {
	products: Product[];
}

export interface ProductResult {
	ProductID: number;
	Title: string | null;
	Tags: string | null;
	CreatedAt: Date | null;
	UpdatedAt: Date | null;
	ProductCode: string | null;
}
