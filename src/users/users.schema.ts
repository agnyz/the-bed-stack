import { Type } from '@sinclair/typebox';
import { sql } from 'drizzle-orm';
import { date, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-typebox';

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").unique().notNull(),
  bio: text("bio"),
  image: text("image"),
  password: text("password").notNull(),
  username: text("username").notNull(),
  created_at: date("created_at").default(sql`CURRENT_DATE`),
  updated_at: date("updated_at").default(sql`CURRENT_DATE`),
});

// Schema for inserting a user - can be used to validate API requests
const insertUserSchemaRaw = createInsertSchema(users);
export const InsertUserSchema = Type.Object({
  user: Type.Omit(insertUserSchemaRaw, ["id", "created_at", "updated_at"]),
});

export const UserAuthSchema = Type.Object({
  user: Type.Composite([
    Type.Omit(insertUserSchemaRaw, [
      "id",
      "password",
      "created_at",
      "updated_at",
    ]),
    Type.Object({ token: Type.String() }),
  ]),
});

export type UserToCreate = typeof users.$inferInsert;
export type User = Omit<typeof users.$inferSelect, "password">;

export const UserLoginSchema = Type.Object({
  user: Type.Object({
    email: Type.String(),
    password: Type.String(),
  }),
});

// Schema for selecting a user - can be used to validate API responses
const selectUserSchemaRaw = createSelectSchema(users);
export const SelectUserSchema = Type.Omit(selectUserSchemaRaw, ["password"]);
