// import { Elysia } from "elysia";
// import { UsersController } from "./users/users.controller";
// import { UsersService } from "./users/users.service";
//
// export class AppModule {
//     constructor(private readonly app: Elysia) {}
//
//     register() {
//         const usersService = new UsersService();
//         const usersController = new UsersController(usersService);
//
//         // Register services
//         this.app.decorate("usersService", usersService);
//
//         return usersController.registerRoutes(this.app);
//     }
// }

import { Elysia } from "elysia";
import { UsersService } from "./users/users.service";
import usersController from "./users/users.controller";

export default () =>
    new Elysia()
        .use(usersController)
