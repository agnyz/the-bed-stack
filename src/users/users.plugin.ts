import { Elysia } from "elysia";
import { setupUsers } from "@/users/users.module";

export const usersPlugin = new Elysia({ prefix: "/users" })
  .use(setupUsers)
  .post("/", ({ store }) => store.usersService.findAll())
  .post("/login", ({ store }) => store.usersService.findAll());
