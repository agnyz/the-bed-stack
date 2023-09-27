import type { Config } from 'drizzle-kit';
export const dbCredentials = {
    host: Bun.env.POSTGRES_HOST || "0.0.0.0",
    port: parseInt(Bun.env.POSTGRES_PORT || '5432'),
    user: Bun.env.POSTGRES_USER || "postgres",
    password: Bun.env.POSTGRES_PASSWORD || "postgres",
    database: Bun.env.POSTGRES_DB || "medium"
}

export const dbCredentialsString = `postgres://${dbCredentials.user}:${dbCredentials.password}@${dbCredentials.host}:${dbCredentials.port}/${dbCredentials.database}`;

export default {
    out: "./migrations",
    schema: "**/*.schema.ts",
    breakpoints: false,
    driver: "pg",
    dbCredentials
} satisfies Config;
