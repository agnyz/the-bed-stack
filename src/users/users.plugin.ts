import { Elysia } from 'elysia';
import { setupUsers } from '@/users/users.module';
import {
  InsertUserSchema,
  UserAuthSchema,
  UserLoginSchema,
} from '@/users/users.schema';
import { getUserEmailFromHeader, requireLogin } from '@/auth';

export const usersPlugin = new Elysia()
  .use(setupUsers)
  .group('/users', (app) =>
    app
      .post('', ({ body, store }) => store.usersService.createUser(body.user), {
        body: InsertUserSchema,
        response: UserAuthSchema,
        detail: {
          summary: 'Create a user',
        }
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
      async ({ request, store }) =>
        store.usersService.findByEmail(
          await getUserEmailFromHeader(request.headers),
        ),
      {
        beforeHandle: requireLogin,
        response: UserAuthSchema,
      },
    ),
  );
