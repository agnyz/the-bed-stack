import { Type } from '@sinclair/typebox';
import { sql } from 'drizzle-orm';
import { date, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-typebox';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull(),
  bio: text('bio').notNull(),
  image: text('image').notNull(),
  password: text('password').notNull(),
  username: text('username').notNull(),
  created_at: date('created_at').default(sql`CURRENT_DATE`),
  updated_at: date('updated_at').default(sql`CURRENT_DATE`),
});

// Schema for inserting a user - can be used to validate API requests
const insertUserSchemaRaw = createInsertSchema(users);
export const insertUserSchema = Type.Omit(insertUserSchemaRaw, [
  'id',
  'created_at',
  'updated_at',
]);

// Schema for selecting a user - can be used to validate API responses
export const selectUserSchema = createSelectSchema(users);
