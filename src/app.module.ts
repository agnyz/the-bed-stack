// the file name is in the spirit of NestJS, where app module is the device in charge of putting together all the pieces of the app
// see: https://docs.nestjs.com/modules

import { Elysia } from "elysia";
import { UsersController } from "./users/users.controller";
import { db } from "@/database.providers";

// the word 'setup' (instead of  e.g. 'bootstrap') is in correspondence with the official elysiajs docs
// see: https://elysiajs.com/patterns/dependency-injection.html#dependency-injection

const setupDatabase = new Elysia({ name: "setup" }).state("db", db);

const setupUsersController = new Elysia({ name: "setupUsersController" })
  .use(setupDatabase)
  .state(({ db }) => {
    const usersController = new UsersController(db);
    return { db, usersController };
  });

const usersPlugin = new Elysia({ prefix: "/users" })
  .use(setupUsersController)
  .post("/", ({ body, store: { usersController } }) =>
    usersController.registerUser(body)
  )
  .post("/login", ({ body, store: { usersController } }) =>
    usersController.loginUser(body)
  );

const authPlugin = new Elysia({ prefix: "/user" })
  .use(setupUsersController)
  .get("/", ({ body, store: { usersController } }) =>
    usersController.getCurrentUser(body)
  )
  .put("/", ({ body, store: { usersController } }) =>
    usersController.updateUser(body)
  );

// Add all plugins to the app
export const setupApp = () => {
  return new Elysia().use(authPlugin).use(usersPlugin);
};
