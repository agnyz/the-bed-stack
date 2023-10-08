import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { migrationsClient } from '@/database.providers';
import { exit } from 'process';

await migrate(drizzle(migrationsClient), {
  migrationsFolder: `${import.meta.dir}`,
});

exit();
