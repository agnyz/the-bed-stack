import { Elysia } from "elysia";
import { UsersService} from "./users/users.service";

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
const usersService = new UsersService();
console.log(await usersService.findAll());
