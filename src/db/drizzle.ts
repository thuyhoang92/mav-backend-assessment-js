import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

export const getDB = (() => {
	let instance: ReturnType<typeof drizzle>;
	return (database_url: string) => {
		if (!instance) {
			instance = drizzle(neon(database_url));
		}
		return instance;
	};
})();
