import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { migrationClient } from '@/database.providers';

await migrate(drizzle(migrationClient), {
  migrationsFolder: `${import.meta.dir}`,
});
