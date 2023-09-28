import { exit } from 'process';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { migrationsClient } from '@/database.providers';

await migrate(drizzle(migrationsClient), {
  migrationsFolder: `${import.meta.dir}/migrations`,
});
exit(0);
