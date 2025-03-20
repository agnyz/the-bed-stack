import * as articlesSchema from '@articles/articles.model';
import { dbCredentialsString } from '@db/config';
import * as usersSchema from '@users/users.model';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const migrationsClient = postgres(dbCredentialsString, { max: 1 });

export const queryClient = postgres(dbCredentialsString);

export const db = drizzle(queryClient, {
  schema: { ...usersSchema, ...articlesSchema },
  logger: true,
});
export type Database = typeof db;
