<div align='center'>

<img src="docs/public/logo.png" alt="Logo for The BED Stack RealWorld example" width=500>

###### _Example app crafted with [Bun](https://github.com/oven-sh/bun) + [ElysiaJS](https://github.com/elysiajs/elysia) + [DrizzleORM](https://github.com/drizzle-team/drizzle-orm) adhering to the [RealWorld](https://github.com/gothinkster/realworld) [API spec](https://realworld-docs.netlify.app/docs/specs/backend-specs/introduction/)._

[![Tests Status](https://github.com/agnyz/the-bed-stack/actions/workflows/tests.yml/badge.svg?event=push&branch=main)](https://github.com/agnyz/the-bed-stack/actions/workflows/tests.yml?query=branch%3Amain) ![Bed Puns](https://img.shields.io/badge/bed%20puns-welcome-limegreen) [![Demo](https://img.shields.io/badge/demo-live-blue)](https://demo.realworld.io/) [![GitHub License](https://img.shields.io/github/license/agnyz/the-bed-stack)](https://github.com/agnyz/the-bed-stack/blob/main/LICENSE) ![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/agnyz/the-bed-stack?utm_source=oss&utm_medium=github&utm_campaign=agnyz%2Fthe-bed-stack&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

#### Visit https://agnyz.github.io/the-bed-stack to learn more about the stack you don't want to sleep on 🛌💤

## Let's share a BED - join our [Discord server](https://discord.gg/PH4rBdTU) 

</div>

### Quickstart

1. **Clone and install dependencies**

    ```sh
    gh repo clone agnyz/the-bed-stack
    cd the-bed-stack
    bun i
    ```

2. **Ensure Docker daemon is running and spin up the Postgres+Bun container**

    ```sh
    bun up
    ```
3. **Migrate the schema to the database**

    ```sh
    bun db:migrate
    ```

4. **Run the app**

    ```sh
    bun dev
    ```

### Contributing

See [Contributing Guide](CONTRIBUTING.md).
