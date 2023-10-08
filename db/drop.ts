import { db } from '@/database.providers';
import { users } from '@/users/users.schema';
// TODO: add commander
console.log('Dropping the entire database');
db.delete(users);
// add more tables here
console.log('Database dropped');
