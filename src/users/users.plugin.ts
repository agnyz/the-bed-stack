import { Elysia } from "elysia";
import {setupUsers} from "@/users/users.module";

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

// export default (usersService: UsersService) => new Elysia({prefix: '/users'})
//     .get("/", () => {
//         return usersService.findAll();
//     })


// Idea 4: use a class that will be injected into the app state
// and it creates its own service (or the service can be injected 
// into the class in the same plugin that creates the class itself)
// export class UsersPlugin {
//     private readonly usersService: UsersService;
//     private readonly db: PostgresJsDatabase
//
//     constructor(db: PostgresJsDatabase) {
//         this.db = db;
//         this.usersService = new UsersService(this.db);
//     }
//
//     registerUser (body: any) {
//         return this.usersService.findAll();
//     }
//
//     loginUser (body: any) {
//         return this.usersService.findAll();
//     }
//
//     getCurrentUser (body: any) {
//         return this.usersService.findAll();
//     }
//
//     updateUser (body: any) {
//         return this.usersService.findAll();
//     }
//
//     getProfile (body: any) {
//         return this.usersService.findAll();
//     }
//
//     followUser (body: any) {
//         return this.usersService.findAll();
//     }
//
//     unfollowUser (body: any) {
//         return this.usersService.findAll();
//     }
// }

// Idea 5: rename the file users.plugin.ts and make it clear that it is in the framework layer
// everything is instantiated once upon setup and then injected into the app state
// lower tiers are kept framework independent and each tier is unaware of the tiers above it


export const usersPlugin = new Elysia({prefix: '/users'})
    .use(setupUsers)
    .post("/", ({store}) => store.usersService.findAll())
    .post("/login", ({store}) => store.usersService.findAll())
