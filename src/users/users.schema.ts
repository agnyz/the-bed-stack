import { Type } from '@sinclair/typebox';
import { createInsertSchema, createSelectSchema } from 'drizzle-typebox';
import { users } from '@users/users.model';

// Schema for inserting a user - can be used to validate API requests
const insertUserSchemaRaw = createInsertSchema(users);
export const InsertUserSchema = Type.Object({
  user: Type.Omit(insertUserSchemaRaw, ['id', 'created_at', 'updated_at']),
});

export const UserAuthSchema = Type.Object({
  user: Type.Composite([
    Type.Omit(insertUserSchemaRaw, [
      'id',
      'password',
      'created_at',
      'updated_at',
    ]),
    Type.Object({ token: Type.String() }),
  ]),
});

export type UserToCreate = typeof users.$inferInsert;
export type UserInDb = typeof users.$inferSelect;
export type User = Omit<UserInDb, 'password'>;

export const UserLoginSchema = Type.Object({
  user: Type.Object({
    email: Type.String(),
    password: Type.String(),
  }),
});

// Schema for selecting a user - can be used to validate API responses
const selectUserSchemaRaw = createSelectSchema(users);
export const SelectUserSchema = Type.Omit(selectUserSchemaRaw, ['password']);
