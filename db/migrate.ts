import { exit } from 'node:process';
import { migrationsClient } from '@/database.providers';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

await migrate(drizzle(migrationsClient), {
  migrationsFolder: `${import.meta.dir}/migrations`,
});
exit(0);
