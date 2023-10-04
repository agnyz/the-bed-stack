import { Elysia } from 'elysia';
import { setupUsers } from '@/users/users.module';
import {
  InsertUserSchema,
  ReturnedUserSchema,
  UserLoginSchema,
  UpdateUserSchema,
} from '@/users/users.schema';

export const usersPlugin = new Elysia()
  .use(setupUsers)
  .group('/users', (app) =>
    app
      .post('', ({ body, store }) => store.usersService.createUser(body.user), {
        body: InsertUserSchema,
        response: ReturnedUserSchema,
        detail: {
          summary: 'Create a user',
        },
      })
      .post(
        '/login',
        ({ body, store }) =>
          store.usersService.loginUser(body.user.email, body.user.password),
        {
          body: UserLoginSchema,
          response: ReturnedUserSchema,
        },
      ),
  )
  .group('/user', (app) =>
    app
      .get(
        '',
        async ({ request, store }) =>
          store.usersService.findByEmail(
            await store.authService.getUserIdFromHeader(request.headers),
          ),
        {
          beforeHandle: app.store.authService.requireLogin,
          response: ReturnedUserSchema,
        },
      )
      .put(
        '',
        async ({ request, store, body }) =>
          store.usersService.updateUser(
            await store.authService.getUserIdFromHeader(request.headers),
            body.user,
          ),
        {
          body: UpdateUserSchema,
          beforeHandle: app.store.authService.requireLogin,
          response: ReturnedUserSchema,
        },
      ),
  );
