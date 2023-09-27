import { Elysia } from "elysia";
import {UsersService} from "@/users/users.service";
import {UsersRepository} from "@/users/users.repository";
import { db } from "@/database.providers";

export const setupUsers = () => {
    const usersRepository = new UsersRepository(db);
    // more repositories that are related to users can be added here
    // this will be useful when we get to articles which should also interact
    // with the users repository
    // alternatively, we can define more services here and inject them into the users service
    const usersService = new UsersService(usersRepository);
    return new Elysia().state(()=>({usersService}));
}
