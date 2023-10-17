import { Type } from '@sinclair/typebox';
import { User, insertUserSchemaRaw } from '@users/users.schema';

export type Profile = Omit<
  User,
  'id' | 'email' | 'created_at' | 'updated_at'
> & {
  following: boolean;
};

export const ReturnedProfileSchema = Type.Object({
  profile: Type.Composite([
    Type.Omit(insertUserSchemaRaw, [
      'id',
      'email',
      'password',
      'created_at',
      'updated_at',
    ]),
    Type.Object({ following: Type.Boolean() }),
  ]),
});
