import { relations, sql } from 'drizzle-orm';
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

export const userRelations = relations(users, ({ many }) => ({
  followers: many(userFollows, { relationName: 'followed' }),
  following: many(userFollows, { relationName: 'follower' }),
}));

export const userFollows = pgTable(
  'user_follows',
  {
    followed_id: integer('followed_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    follower_id: integer('follower_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    created_at: date('created_at').default(sql`CURRENT_DATE`).notNull(),
    updated_at: date('updated_at').default(sql`CURRENT_DATE`).notNull(),
  },
  (table) => [primaryKey({ columns: [table.followed_id, table.follower_id] })],
);

export const userFollowsRelations = relations(userFollows, ({ one }) => ({
  follower: one(users, {
    fields: [userFollows.follower_id],
    references: [users.id],
    relationName: 'follower',
  }),
  followed: one(users, {
    fields: [userFollows.followed_id],
    references: [users.id],
    relationName: 'followed',
  }),
}));
