// the file name is in the spirit of NestJS, where app module is the device in charge of putting together all the pieces of the app
// see: https://docs.nestjs.com/modules

import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { usersPlugin } from "@/users/users.plugin";

/**
 * Add all plugins to the app
 */
export const setupApp = () => {
  return new Elysia()
    .use(
      swagger({
        documentation: {
          info: { title: "RealWorld Medium backend", version: "v1" },
        },
      })
    )
    .group("/api", (app) => app.use(usersPlugin));
};
