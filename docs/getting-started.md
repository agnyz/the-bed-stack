# Getting started

::: info
We are working on a [dev container](https://code.visualstudio.com/docs/remote/containers) experience for ElysiaJS RealWorld. It should make the onboarding process much easier. Stay tuned!
:::

Getting started with this project is as easy as installing a few prerequisites, running a few commands, and opening your favorite text editor. We would love to have you [contribute](https://github.com/agnyz/elysia-realworld-example-app/blob/main/CONTRIBUTING.md) to this project. If you have any questions, please [reach out](
  https://github.com/agnyz/elysia-realworld-example-app/discussions
)!

## Installation

### Prerequisites

* [Bun](https://bun.sh/) version 1.0.6 or higher.
* Terminal for accessing Bun via its command-line interface (CLI).
* Text Editor with TypeScript support.
  * We recommend [Visual Studio Code](https://code.visualstudio.com/); other IDEs have been reported to cause issues with ElysiaJS's type inference system.

```sh
$ bun i
```

### Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
