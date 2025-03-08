import { Hono } from "hono";
import {
	insertProductsAndReturnResult,
	insertProductsFromJson,
	updateProduct,
	deleteProduct,
} from "../controllers/productController";

const productRoutes = new Hono();

// Endpoint to insert products from a JSON mock API
productRoutes.get("/", insertProductsFromJson);

// Endpoint to insert products from a JSON mock API and return the result
productRoutes.post("/", insertProductsAndReturnResult);

// Endpoint to delete a product by ID
productRoutes.delete("/:product_id", deleteProduct);

// Endpoint to update all products from the database
productRoutes.put("/", updateProduct);

export default productRoutes;
