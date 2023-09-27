import { Elysia } from 'elysia';
import { setupUsers } from '@/users/users.module';

export const usersPlugin = new Elysia()
  .use(setupUsers)
  .model({})
  .group(
    '/users',
    {
      detail: {
        tags: ['Users'],
      },
    },
    (app) =>
      app
        .post('', ({ store }) => store.usersService.findAll())
        .post('/login', ({ store }) => store.usersService.findAll()),
  );
