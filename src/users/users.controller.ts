import { Elysia } from "elysia";
import {UsersService} from "@/users/users.service";

// Below are some ideas for how to structure the controller-service relationship.

// Idea 1: use 'Dependency Injection' to inject the service into the controller
// Pros: follows ElysiaJS docs (https://elysiajs.com/patterns/dependency-injection.html)
// Cons: we must explicitly refer to the service in every single route

// export default new Elysia({prefix: '/users'})
//     .decorate("usersService", new UsersService())
//     .get("/", async ({usersService}) => {
//         return usersService.findAll();
//     })

// Idea 2: use a class to wrap the controller and service
// Pros: follows NestJS conventions (https://github.com/lujakob/nestjs-realworld-example-app/blob/master/src/user/user.controller.ts)
// Cons: too noisy, too nested (ha), requires calling the controller with an awkward 'controller.controller' syntax

// export class UsersController {
//     constructor(private readonly usersService: UsersService) {}
//
//     get controller() {
//         return new Elysia({prefix: '/users'})
//             .get("/", () => {
//                 return this.usersService.findAll();
//             })
//     }
// }

// Idea 3: use a factory function to wrap the controller and service
// Pros: simple, supports 'Method Chaining', follows NestJS conventions (in broad strokes)
// Cons: none

export default (usersService: UsersService) => new Elysia({prefix: '/users'})
    .get("/", () => {
        return usersService.findAll();
    })
