import { sql } from "drizzle-orm";
import { integer, sqliteTable, text} from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from 'drizzle-typebox'; 



export const users = sqliteTable('users', {
    id: integer('id').primaryKey(),
    email: text('email').notNull(),
    bio: text('bio').notNull(),
    image: text('image').notNull(),
    password: text('password').notNull(),
    username: text('username').notNull(),
    created_at: text('created_at').default(sql`CURRENT_DATE`),
    updated_at: text('updated_at').default(sql`CURRENT_DATE`),
});



// Schema for inserting a user - can be used to validate API requests
export const insertUserSchema = createInsertSchema(users);

// Schema for selecting a user - can be used to validate API responses
export const selectUserSchema = createSelectSchema(users);