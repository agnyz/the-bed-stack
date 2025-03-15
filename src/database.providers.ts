import { dbCredentialsString } from '@db/config';
import { type PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const migrationsClient = postgres(dbCredentialsString, { max: 1 });

export const queryClient = postgres(dbCredentialsString);

export const db: PostgresJsDatabase = drizzle(queryClient);
