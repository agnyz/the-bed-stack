import { Elysia } from "elysia";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { setupApp } from "@/app.module";
import { migrationsClient } from "@/database.providers";


await migrate(drizzle(migrationsClient), {
  migrationsFolder: `${import.meta.dir}/../db/migrations`,
});

const app = new Elysia({ prefix: '/api' }).use(setupApp).listen(3000);

console.log(
  `🦊 Elysia is running! Access Swagger UI at http://${app.server?.hostname}:${app.server?.port}/swagger`,
);
