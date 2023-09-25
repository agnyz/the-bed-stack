import { Elysia } from "elysia";
import { UsersService} from "./users/users.service";

const app = new Elysia()
    .decorate("usersService" , new UsersService())
    .get("/", () => "Hello Elysia")
    .get("/users", async ({ usersService }) => {
        return usersService.findAll();
    })
    .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
