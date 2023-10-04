import { sql } from 'drizzle-orm';
import {
  date,
  pgTable,
  serial,
  text,
  integer,
  primaryKey,
} from 'drizzle-orm/pg-core';

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

export const userFollows = pgTable(
  'user_follows',
  {
    user_id: integer('user_id').references(() => users.id),
    follower_id: integer('follower_id').references(() => users.id),
    created_at: date('created_at').default(sql`CURRENT_DATE`),
    updated_at: date('updated_at').default(sql`CURRENT_DATE`),
  },
  (table) => {
    return {
      pk: primaryKey(table.user_id, table.follower_id),
    };
  },
);
