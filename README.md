# ![RealWorld Example App](logo.png)

> ### [ElysiaJS](https://elysiajs.com/) codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.


### [Demo](https://demo.realworld.io/)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)


This codebase was created to demonstrate a fully fledged backend application built with **ElysiaJS** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **ElysiaJS** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.


# How it works

The application uses [ElysiaJS](https://elysiajs.com/) framework to implement the [backend API](https://realworld-docs.netlify.app/docs/specs/backend-specs/introduction) outlined in the [RealWorld docs](https://realworld-docs.netlify.app/).

It relies on [Postgres.js](https://github.com/porsager/postgres) to store data, and interacts with it through [DrizzleORM](https://orm.drizzle.team/docs/quick-postgresql/postgresjs).

The runtime is [Bun](https://bun.sh/) and the code is written in [TypeScript](https://www.typescriptlang.org/).

# Getting started

> [!NOTE]
> This project includes support for [Dev Container](https://code.visualstudio.com/docs/remote/containers) in VSCode. If you have VSCode installed, and Docker daemon running, you can simply open the project in VSCode and click on the "_Reopen in Container_" button in the notification that pops up. This will automatically perform the steps below and open a new VSCode window with the project running inside a container ready for development.

> [!WARNING]
> For now, you must _rebuild_ the container using `cmd+p > Dev Containers: Rebuild Container` after building the container the first time. See [#55](https://github.com/agnyz/elysia-realworld-example-app/issues/55) for details; PRs welcome.

1. **Clone and install dependencies**

    ```bash
    gh repo clone agnyz/elysia-realworld-example-app
    cd elysia-realworld-example-app
    bun i
    ```

2. **Ensure Docker daemon is running and spin up the Postgres container**

    ```bash
    bun db:up
    ```
3. **Push the schema to the database**

    ```bash
    bun db:push
    ```

4. **Run the app**

    ```bash
    bun dev
    ```

# Contributing

See [Contributing Guide](CONTRIBUTING.md).

# License

[MIT](LICENSE) License © 2023 Agnyz Technologies FC
