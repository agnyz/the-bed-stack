import { dbCredentialsString } from '@db/config';
import * as usersSchema from '@users/users.model';
import { type PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const migrationsClient = postgres(dbCredentialsString, { max: 1 });

export const queryClient = postgres(dbCredentialsString);

export const CombinedSchemas = { ...usersSchema };
export type DatabaseSchema = PostgresJsDatabase<typeof CombinedSchemas>;
export const db: DatabaseSchema = drizzle(queryClient, {
  schema: CombinedSchemas,
  logger: true,
});
