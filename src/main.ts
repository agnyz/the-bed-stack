import { setupApp } from '@/app.module';
import { Elysia } from 'elysia';

const app = new Elysia({ prefix: '/api' }).use(setupApp).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
