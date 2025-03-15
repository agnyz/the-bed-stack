import { exit } from 'node:process';
import { db } from '@/database.providers';
import { userFollows, users } from '@users/users.model';
import { getTableName } from 'drizzle-orm';

const tables = [users, userFollows];

console.log('Dropping the entire database');

for (const table of tables) {
  const name = getTableName(table);
  console.log(`Dropping ${name}`);
  await db.delete(users);
  console.log(`Dropped ${name}`);
  const tableResult = await db.select().from(table);
  console.log(`${name} result: `, tableResult);
}

console.log('Database dropped');

exit(0);
