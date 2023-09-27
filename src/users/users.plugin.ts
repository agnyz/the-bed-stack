import { Elysia } from "elysia";
import { setupUsers } from "@/users/users.module";
import {
  InsertUserSchema,
  UserAuthSchema,
  UserLoginSchema,
} from "@/users/users.schema";
import { ALG, getUserEmailFromHeader, requireLogin } from "@/auth";
import { jwt } from "@elysiajs/jwt";
import { env } from "@/config";

export const usersPlugin = new Elysia()
  .use(setupUsers)
  .group("/users", (app) =>
    app
      .post("", ({ body, store }) => store.usersService.createUser(body.user), {
        body: InsertUserSchema,
        response: UserAuthSchema,
      })
      .post(
        "/login",
        ({ body, store }) =>
          store.usersService.loginUser(body.user.email, body.user.password),
        {
          body: UserLoginSchema,
          response: UserAuthSchema,
        }
      )
  )
  .group("/user", (app) =>
    app
      .use(
        jwt({
          name: "jwt",
          secret: env.JWT_SECRET,
          alg: ALG,
        })
      )
      .get(
        "",
        async ({ jwt, request, store }) =>
          store.usersService.findByEmail(
            await getUserEmailFromHeader({ jwt, request })
          ),
        {
          beforeHandle: requireLogin,
          response: UserAuthSchema,
        }
      )
  );
