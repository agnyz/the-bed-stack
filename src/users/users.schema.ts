import { t } from 'elysia';
import { sql } from 'drizzle-orm';
import { date, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-typebox';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').unique().notNull(),
  bio: text('bio'),
  image: text('image'),
  password: text('password').notNull(),
  username: text('username').notNull(),
  created_at: date('created_at').default(sql`CURRENT_DATE`),
  updated_at: date('updated_at').default(sql`CURRENT_DATE`),
});

// Schema for inserting a user - can be used to validate API requests
const insertUserSchemaRaw = createInsertSchema(users);
export const InsertUserSchema = t.Object({
  user: t.Omit(insertUserSchemaRaw, ['id', 'created_at', 'updated_at']),
});

export const UserAuthSchema = t.Object({
  user: t.Composite([
    t.Omit(insertUserSchemaRaw, ['id', 'password', 'created_at', 'updated_at']),
    t.Object({ token: t.String() }),
  ]),
});

export type UserToCreate = typeof users.$inferInsert;
export type UserInDb = typeof users.$inferSelect;
export type User = Omit<UserInDb, 'password'>;

export const UserLoginSchema = t.Object({
  user: t.Object({
    email: t.String(),
    password: t.String(),
  }),
});

// Schema for selecting a user - can be used to validate API responses
const selectUserSchemaRaw = createSelectSchema(users);
export const SelectUserSchema = t.Omit(selectUserSchemaRaw, ['password']);
