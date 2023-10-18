import { exit } from 'process';
import { db } from '@/database.providers';
import { users } from '@/users/users.model';
import { faker } from '@faker-js/faker';

console.log('Truncating the user database');
await db.delete(users);
console.log('The database is empty: ', await db.select().from(users));

for (let i = 0; i < 10; i++) {
  const data = {
    id: faker.datatype.number(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    bio: faker.lorem.text(),
    image: faker.image.imageUrl(),
  };
  console.log('Upserting user:', data);

  await db.insert(users).values(data);
  console.log('User upserted');
}
const userResult = await db.select().from(users);
console.log('User result: ', userResult);

exit(0);
