import { exit } from 'process';
import { db } from '@/database.providers';
import { users } from '@/users/users.model';

const data = {
  id: 1, //do not use 'users.id.default', seed should be idempotent
  email: 'test@email.com',
  username: 'test',
  password: 'test',
  bio: 'test',
  image: 'test',
};
console.log('Upserting user: ', data);
await db.insert(users).values(data).onConflictDoNothing();
console.log('User upserted');

const userResult = await db.select().from(users);
console.log('User result: ', userResult);

exit(0);
