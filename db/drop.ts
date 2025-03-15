import { exit } from 'node:process';
import { db } from '@/database.providers';
import { userFollows, users } from '@users/users.model';
import { getTableName } from 'drizzle-orm';

const tables = [users, userFollows];
console.log('Dropping the entire database');

try {
  // Use a transaction to ensure all deletions succeed or none do
  await db.transaction(async (tx) => {
    for (const table of tables) {
      const name = getTableName(table);
      console.log(`Dropping ${name}`);
      await tx.delete(table);
      console.log(`Dropped ${name}`);
      const tableResult = await tx.select().from(table);
      console.log(`${name} result: `, tableResult);
    }
  });

  console.log('Database dropped');

  exit(0);
} catch (error) {
  console.error('Failed to drop database:', error);
  exit(1);
}
