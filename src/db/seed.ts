import { exit } from 'process';
import { db } from './index';
import { users } from './schemas/users';


console.log("Migrations complete.")
const data = {
    id: users.id.default,
    email: 'test@email.com',
    username: 'test',
    password: 'test',
    bio: 'test',
    image: 'test',
}
console.log("Inserting user: ", data)
await db.insert(users).values(data)
console.log("User inserted")

const userResult = await db.select().from(users);
console.log("User result: ", userResult);

exit(0);