import { Elysia } from "elysia";
import { setupApp } from "@/app.module";

const app = new Elysia().use(setupApp).listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
