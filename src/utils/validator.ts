import { z } from "zod";

export const productSchema = z.array(
	z.object({
		id: z.number(),
		title: z.string(),
		variants: z.array(
			z.object({
				id: z.number(),
				sku: z.string(),
				title: z.string(),
				created_at: z.string(),
				updated_at: z.string(),
			})
		),
		tags: z.string(),
	})
);
