import { Elysia } from "elysia";
import { setup } from "@/app.module";

const app = new Elysia()
    .use(setup)
    .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
