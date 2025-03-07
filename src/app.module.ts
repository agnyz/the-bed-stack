import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { title, version, description } from '../package.json';
import {
  AuthenticationError,
  AuthorizationError,
  BadRequestError,
  ERROR_CODE_STATUS_MAP,
} from '@errors';
import { usersPlugin } from '@users/users.plugin';
import { profilesPlugin } from '@profiles/profiles.plugin';

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
      BAD_REQUEST: BadRequestError,
    })
    .onError(({ error, code, set }) => {
      set.status = ERROR_CODE_STATUS_MAP.get(code);
      const errorType = 'type' in error ? error.type : 'internal';
      return { errors: { [errorType]: error.message } };
    })
    .use(
      swagger({
        documentation: {
          info: { title, version, description },
          components: {
            securitySchemes: {
              bearerAuth: {
                type: 'http',
                description: 'Bearer token to access these api endpoints',
                scheme: 'bearer',
                bearerFormat: 'JWT',
              },
            },
          },
          security: [
            {
              bearerAuth: [],
            },
          ],
        },
        exclude: ['/'],
        swaggerOptions: {
          persistAuthorization: true,
        },
      }),
    )
    .group('/api', (app) => app.use(usersPlugin).use(profilesPlugin));
};
