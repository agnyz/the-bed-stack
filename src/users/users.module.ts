import { Elysia } from "elysia";
import { UsersService } from "@/users/users.service";
import { UsersRepository } from "@/users/users.repository";
import { db } from "@/database.providers";

export const setupUsers = () => {
  const usersRepository = new UsersRepository(db);
  const usersService = new UsersService(usersRepository);
  return new Elysia().state(() => ({ usersService }));
};
