import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
 
// for migrations
const migrationClient = postgres("postgres://postgres:postgres@0.0.0.0:5432/medium", { max: 1 });
migrate(drizzle(migrationClient), {migrationsFolder: './migrations'})
 
// for query purposes
const queryClient = postgres("postgres://postgres:postgres@0.0.0.0:5432/medium");
export const db: PostgresJsDatabase = drizzle(queryClient);