import { pgTable, text, varchar, bigint, timestamp } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
	id: bigint({ mode: "bigint" }).primaryKey(),
	title: varchar({ length: 255 }),
	tags: text(),
	created_at: timestamp(),
	updated_at: timestamp(),
	sku: varchar({ length: 255 }),
});
