# ![RealWorld Example App](logo.png)

> ### [ElysiaJS](https://elysiajs.com/) codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.


### [Demo](https://demo.realworld.io/)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)


This codebase was created to demonstrate a fully fledged fullstack application built with **ElysiaJS** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **ElysiaJS** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.


# How it works

The application uses [ElysiaJS](https://elysiajs.com/) framework to implement the [backend API](https://realworld-docs.netlify.app/docs/specs/backend-specs/introduction) outlined in the [RealWorld docs](https://realworld-docs.netlify.app/).

It relies on [Bun's native SQLite3 driver](https://bun.sh/docs/api/sqlite) to store data, and interacts with it through [DrizzleORM](https://orm.drizzle.team/docs/quick-sqlite/bun).

The runtime is [Bun](https://bun.sh/) and the code is written in [TypeScript](https://www.typescriptlang.org/).

# Getting started

1. **Clone and install dependencies**

    ```bash
    gh repo clone agnyz/elysia-realworld-example-app
    cd elysia-realworld-example-app
    bun i
    ```
2. **Run the app**

    ```bash
    bun run dev
    ```

# Contributing

See [Contributing Guide](CONTRIBUTING.md).

# License

[MIT](LICENSE) License © 2023 Agnyz Technologies FC