import type { Config } from "drizzle-kit";
 
export default {
    out: "./src/db/migrations",
    schema: "./src/db/schemas/*.ts",
    breakpoints: false,
    driver: "better-sqlite",
    dbCredentials: {
        url: "./src/db/sqlite.db",
    }
} satisfies Config;