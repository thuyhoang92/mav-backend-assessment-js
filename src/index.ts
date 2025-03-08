import { Hono } from "hono";
import productRoutes from "./api/products";
import { Env } from "./config/env";

// Initialize Hono application with Cloudflare env bindings
const app = new Hono<{ Bindings: Env }>();

// Root endpoint to verify the service is running
app.get("/", (c) => {
	return c.json({
		message: "Hello World!",
	});
});

// Register product-related API routes
app.route("/api/products", productRoutes);

export default app;
