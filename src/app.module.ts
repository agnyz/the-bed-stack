import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { usersPlugin } from '@users/users.plugin';
import { title, version, description } from '../package.json';

/**
 * Add all plugins to the app
 */
export const setupApp = () => {
  return new Elysia()
    .use(
      swagger({
        documentation: {
          info: { title, version, description },
        },
      }),
    )
    .group('/api', (app) => app.use(usersPlugin));
};
