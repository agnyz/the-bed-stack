// the file name is in the spirit of NestJS, where app module is the device in charge of putting together all the pieces of the app
// see: https://docs.nestjs.com/modules

import { Elysia } from "elysia";
import UsersService from "./users/users.service";
import UsersController from "./users/users.controller";
import { db } from "@/database.providers";

// the word 'setup' (instead of  e.g. 'bootstrap') is in correspondence with the official elysiajs docs
// see: https://elysiajs.com/patterns/dependency-injection.html#dependency-injection

export const setup = () => {
    const usersService = UsersService(db);
    const usersController = UsersController(usersService);

    return new Elysia()
        .use(usersController)
}
