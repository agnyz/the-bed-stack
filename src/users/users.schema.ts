import { type Static, Type } from '@sinclair/typebox';
// Do not use path aliases here (i.e. '@/users/users.model'), as that doesn't work with Drizzle Studio
import { users } from '@users/users.model';
import { createInsertSchema, createSelectSchema } from 'drizzle-typebox';

// Schema for inserting a user - can be used to validate API requests
export const insertUserSchemaRaw = createInsertSchema(users);
export const InsertUserSchema = Type.Object({
  user: Type.Omit(insertUserSchemaRaw, [
    'id',
    'created_at',
    'updated_at',
    'bio',
    'image',
  ]),
});

export const UpdateUserSchema = Type.Object({
  user: Type.Partial(
    Type.Omit(insertUserSchemaRaw, ['id', 'created_at', 'updated_at']),
  ),
});

export const ReturnedUserSchema = Type.Object({
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

export type UserToCreate = Static<typeof InsertUserSchema>['user'];
export type UserToUpdate = Static<typeof UpdateUserSchema>['user'];
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
