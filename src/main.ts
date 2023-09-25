import { Elysia } from "elysia";
import { setupApp } from "@/app.module";

const app = new Elysia({"prefix": "/api"})
    .use(setupApp)
    .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
