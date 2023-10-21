import { exit } from 'process';
import { db } from '@/database.providers';
import { faker } from '@faker-js/faker';
import { UsersRepository } from '@/users/users.repository';
import { UsersService } from '@/users/users.service';
import { AuthService } from '@/auth/auth.service';

const usersRepsitory = new UsersRepository(db);
const authService = new AuthService();
const usersService = new UsersService(usersRepsitory, authService);

console.log('Truncating the user database');
await usersService.deleteAll();
const truncateResult = await usersService.findAll();
console.log('Truncate result: ', truncateResult);

// // in order for the ID's to reset back to 1, we need to manually reset the sequence
// await db.execute(sql`ALTER SEQUENCE users_id_seq RESTART WITH 1`);

// Create 10 new users
for (let i = 1; i <= 10; i++) {
  // Create a new user
  await usersService.createUser({
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
  });

  // Update the user's bio and image
  await usersService.updateUser(i, {
    bio: faker.lorem.paragraph(),
    image: faker.internet.avatar(),
  });
}

const userResult = await usersService.findAll();
console.log('User result: ', userResult);

exit(0);
