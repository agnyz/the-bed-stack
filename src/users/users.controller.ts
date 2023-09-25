// import { Elysia } from "elysia";
// import { UsersService } from "./users.service";
//
// export class UsersController {
//     constructor(private readonly usersService: UsersService) {}
//
//     registerRoutes(app: Elysia) {
//         app.get("/users", async ({ usersService }) => {
//             return usersService.findAll();
//         });
//         // ... more routes
//
//         return app;
//     }
// }

import { Elysia } from "elysia";
import {UsersService} from "@/users/users.service";

export default new Elysia({prefix: '/users'})
    .decorate("usersService", new UsersService())
    .get("/", async ({usersService}) => {
        return usersService.findAll();
    })
