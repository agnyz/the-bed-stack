import type { Config } from "drizzle-kit";

export default {
    out: "./src/db/migrations",
    schema: "./src/db/schemas/*.ts",
    breakpoints: false,
    driver: "pg",
    dbCredentials: {
        host: "0.0.0.0",
        port: 5432,
        user: "postgres",
        password: "postgres",
        database: "medium"
    }
} satisfies Config;