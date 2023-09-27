import type { Config } from 'drizzle-kit';
export const dbCredentials = {
  host: process.env.POSTGRES_HOST || '0.0.0.0',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'medium',
};

export const dbCredentialsString = `postgres://${dbCredentials.user}:${dbCredentials.password}@${dbCredentials.host}:${dbCredentials.port}/${dbCredentials.database}`;

export default {
    out: "./db/migrations",
    schema: "**/*.schema.ts",
    breakpoints: false,
    driver: "pg",
    dbCredentials
} satisfies Config;
