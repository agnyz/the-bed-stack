<div align='center'>

![Logo for The BED Stack RealWorld example](logo.png)

###### _Example app crafted with [Bun](https://github.com/oven-sh/bun) + [ElysiaJS](https://github.com/elysiajs/elysia) + [DrizzleORM](https://github.com/drizzle-team/drizzle-orm) adhering to the [RealWorld](https://github.com/gothinkster/realworld) [API spec](https://realworld-docs.netlify.app/docs/specs/backend-specs/introduction/)._

[![GitHub release (with filter)](https://img.shields.io/github/v/release/agnyz/the-bed-stack?label&color=orange)](https://github.com/agnyz/the-bed-stack/releases)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/agnyz/the-bed-stack/test.yml)](https://github.com/agnyz/the-bed-stack/actions/workflows/test.yml) [![Discord](https://img.shields.io/badge/Discord-Agnyz%20Technologies-%235865F2)](https://discord.gg/PH4rBdTU) [![Docs](https://img.shields.io/badge/docs-website-blue)](https://agnyz.github.io/the-bed-stack) [![Demo](https://img.shields.io/badge/demo-website-blue)](https://demo.realworld.io/) [![GitHub License](https://img.shields.io/github/license/agnyz/the-bed-stack)](https://github.com/agnyz/the-bed-stack/blob/main/LICENSE)

### Visit https://agnyz.github.io/the-bed-stack for docs, guides, and more - learn about the stack you don't want to sleep on 🛌💤

### Let's share a BED - join our [Discord server](https://discord.gg/PH4rBdTU) today


</div>

---

## Quick Start

> [!NOTE]
> **For an even quicker start**: this project includes experimental support for [Dev Containers](https://code.visualstudio.com/docs/remote/containers) in VSCode. Learn more about it in the docs: [Developing in a Dev Container](https://agnyz.github.io/the-bed-stack/dev-container.html).

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

## Contributing

See [Contributing Guide](CONTRIBUTING.md).

## License

[MIT](LICENSE) License © 2023 Agnyz Technologies FC
