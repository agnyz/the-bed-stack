import type { Config } from "drizzle-kit";
import { dbCredentials } from "./src/config";

export default {
    out: "./src/db/migrations",
    schema: "./src/db/schemas/*.ts",
    breakpoints: false,
    driver: "pg",
    dbCredentials: dbCredentials
} satisfies Config;