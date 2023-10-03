import { Elysia } from 'elysia';
import { setupUsers } from '@/users/users.module';
import {
  InsertUserSchema,
  UserAuthSchema,
  UserLoginSchema,
} from '@/users/users.schema';

export const usersPlugin = new Elysia()
  .use(setupUsers)
  .group('/users', (app) =>
    app
      .post('', ({ body, store }) => store.usersService.createUser(body.user), {
        body: InsertUserSchema,
        response: UserAuthSchema,
      })
      .post(
        '/login',
        ({ body, store }) =>
          store.usersService.loginUser(body.user.email, body.user.password),
        {
          body: UserLoginSchema,
          response: UserAuthSchema,
        },
      ),
  )
  .group('/user', (app) =>
    app.get(
      '',
      async ({ request, store }) => {
        return store.usersService.findByEmail(
          await store.authService.getUserEmailFromHeader(request.headers),
        );
      },
      {
        beforeHandle: app.store.authService.requireLogin,
        response: UserAuthSchema,
      },
    ),
  );
