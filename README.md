<div align='center'>

<img src="docs/public/logo.png" alt="Logo for The BED Stack RealWorld example" width=500>

###### _[RealWorld](https://realworld-docs.netlify.app/) example app for [Bun](https://bun.sh/) + [ElysiaJS](https://elysiajs.com/) + [DrizzleORM](https://orm.drizzle.team/)_

[![Tests Status](https://github.com/agnyz/the-bed-stack/actions/workflows/tests.yml/badge.svg?event=push&branch=main)](https://github.com/agnyz/the-bed-stack/actions/workflows/tests.yml?query=branch%3Amain) [![RealWorld](https://img.shields.io/badge/RealWorld-compliant-success?labelColor=2f1c42)](https://github.com/gothinkster/realworld) [![Bed Puns](https://img.shields.io/badge/bed%20puns-welcome-limegreen)](https://discord.gg/PH4rBdTU) [![GitHub License](https://img.shields.io/github/license/agnyz/the-bed-stack)](https://github.com/agnyz/the-bed-stack/blob/main/LICENSE) [![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/agnyz/the-bed-stack?utm_source=oss&utm_medium=github&utm_campaign=agnyz%2Fthe-bed-stack&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)](https://github.com/agnyz/the-bed-stack/pulls) 

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

2. **Create a `.env` file**

    ```sh
    cp .env.example .env
    ```

    Use the provided example values or replace them with your own.

3. **Ensure Docker daemon is running and spin up the Postgres+Bun container**

    ```sh
    bun up
    ```
3. **Migrate the schema to the database**

    ```sh
    bun db:migrate
    ```

4. **Run the development server**

    ```sh
    bun dev
    ```

### Building for production

> [!TIP]
> See more info in ElysiaJS's [Building for production](https://elysiajs.com/tutorial.html#build-for-production) guide.

1. **Build the app**

    ```sh
    bun build
    ```

2. **Run the server**

    ```sh
    bun preview
    ```

### Contributing

See [Developer's Guide](CONTRIBUTING.md).
