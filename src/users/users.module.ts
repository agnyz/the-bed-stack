import { db } from '@/database.providers';
import { UsersRepository } from '@/users/users.repository';
import { UsersService } from '@/users/users.service';
import { Elysia } from 'elysia';

export const setupUsers = () => {
  const usersRepository = new UsersRepository(db);
  const usersService = new UsersService(usersRepository);
  return new Elysia().state(() => ({ usersService }));
};
