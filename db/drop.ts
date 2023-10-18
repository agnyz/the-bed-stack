import { db } from '@/database.providers';
import { users } from '@users/users.model';
import { getTableName } from 'drizzle-orm';
import { exit } from 'process';
// TODO: use react-ink

const tables = [users];

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
