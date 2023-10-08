import { Type } from '@sinclair/typebox';
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-typebox';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull(),
  bio: text('bio').notNull(),
  image: text('image').notNull(),
  password: text('password').notNull(),
  username: text('username').notNull(),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
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
