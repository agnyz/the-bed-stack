import { sql } from 'drizzle-orm';
import { date, pgTable, serial, text } from 'drizzle-orm/pg-core';

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
