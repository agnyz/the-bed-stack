import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { usersPlugin } from '@users/users.plugin';
import { title, version, description } from '../package.json';
import { AuthenticationError, AuthorizationError } from "@/errors";

// the file name is in the spirit of NestJS, where app module is the device in charge of putting together all the pieces of the app
// see: https://docs.nestjs.com/modules
/**
 * Add all plugins to the app
 */
export const setupApp = () => {
  return new Elysia()
    .error({
      AUTHENTICATION: AuthenticationError,
      AUTHORIZATION: AuthorizationError,
    })
    .onError(({ error, code, set }) => {
      // Handle Elysia schema validation errors
      switch (code) {
        case "VALIDATION":
          set.status = 422;
        case "NOT_FOUND":
          set.status = 404;
        case "AUTHENTICATION":
          set.status = 401;
        case "AUTHORIZATION":
          set.status = 403;
      }
      const errorType = "type" in error ? error.type : "internal";
      return { errors: { [errorType]: error.message } };
    })
    .use(
      swagger({
        documentation: {
          info: { title, version, description },
        },
      }),
    )
    .group('/api', (app) => app.use(usersPlugin));
};
