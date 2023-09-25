import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { dbCredentialsString } from '@db/config';

// for migrations
export const migrationClient = postgres(dbCredentialsString, { max: 1 });

// for query purposes
export const queryClient = postgres(dbCredentialsString);

export const db: PostgresJsDatabase = drizzle(queryClient);
