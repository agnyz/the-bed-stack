import { sql } from 'drizzle-orm';
import {
  date,
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey().notNull(),
  email: text('email').notNull().unique(),
  bio: text('bio').default('').notNull(),
  image: text('image')
    .default('https://api.realworld.io/images/smiley-cyrus.jpg')
    .notNull(),
  password: text('password').notNull(),
  username: text('username').notNull().unique(),
  created_at: date('created_at').default(sql`CURRENT_DATE`).notNull(),
  updated_at: date('updated_at').default(sql`CURRENT_DATE`).notNull(),
});

export const userFollows = pgTable(
  'user_follows',
  {
    user_id: integer('user_id')
      .references(() => users.id)
      .notNull(),
    follower_id: integer('follower_id')
      .references(() => users.id)
      .notNull(),
    created_at: date('created_at').default(sql`CURRENT_DATE`).notNull(),
    updated_at: date('updated_at').default(sql`CURRENT_DATE`).notNull(),
  },
  (table) => [primaryKey({ columns: [table.user_id, table.follower_id] })],
);
