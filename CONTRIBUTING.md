# Contributing Guide

*This guide is **heavily** inspired by [`antfu/contribute`](https://github.com/antfu/contribute#corepack).*

Hey there! We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great and we truly appreciate your time and effort.

> [!IMPORTANT]
> Before submitting your contribution, please make sure to take a moment and read through the following guidelines.

## 👨‍💻 Repository Setup

> [!NOTE]
> **Windows users**: see [special note](#special-note-for-windows-users) below.

This project uses [Bun](https://bun.sh) as a runtime as well as a package manager. It's a modern, fast, and lightweight alternative to [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). To install Bun, run the following command:

  ```sh
  curl -fsSL https://bun.sh/install | bash
  ```


### Special note for Windows users

This guide assumes you are using a Unix-like environment, since [Bun is working on a Windows port](https://bun.sh/docs/installation#windows). If you are using Windows, you can use [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10) or [Git Bash](https://gitforwindows.org/).

## 💡 Commands

### `bun dev`

Start the development environment in watch mode.

### `bun build`

Build the project for production. The result is under `dist/`.

### `bun lint`

We use [Biome](https://biomejs.dev/) for **both linting and formatting**. It is an ultra-fast, Rust based linter and formatter. 
It also lints JSON.

You can run `bun lint --apply` to apply any safe fixes automatically.

[**We don't use Prettier**](#no-prettier).

### `bun test`

> [!NOTE]
> This is just a placeholder for now. We will add more details later once tests are formally added.

Run the tests. We mostly using [Vitest](https://vitest.dev/) - a replacement of [Jest](https://jestjs.io/).

You can filter the tests to be run by `nr test [match]`, for example, `nr test foo` will only run test files that contain `foo`.

Config options are often under the `test` field of `vitest.config.ts` or `vite.config.ts`.

Vitest runs in [watch mode by default](https://vitest.dev/guide/features.html#watch-mode), so you can modify the code and see the test result automatically, which is great for [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development). To run the test only once, you can do `nr test --run`.

For some projects, we might have multiple types of tests set up. For example `nr test:unit` for unit tests, `nr test:e2e` for end-to-end tests. `nr test` commonly run them together, you can run them separately as needed.

### `bun docs`

Start the documentation dev server. Use `bun docs:build` to build the docs for production.

### `bun run`

Print a full list of available scripts.

## 🙌 The Road to a Great Pull Request

### Discuss First

Before you start to work on a feature pull request, it's always better to open a feature request (FR) issue first to discuss with the maintainers whether the feature is desired and the design of those features. This would help save time for both the maintainers and the contributors and help features to be shipped faster.

For typo fixes, it's recommended to batch multiple typo fixes into one pull request to maintain a cleaner commit history.

### Commit Conventions

We use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages, which allows the changelog to be auto-generated based on the commits. Please read the guide through if you aren't familiar with it already. 

> [!NOTE]
> A full specification can be found in [the AngularJS Git Commit Guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).

Only `perf:`, `fix:`, and `feat:` will be present in the changelog.

Note that `perf:`, `fix:`, and `feat:` are for **actual code changes** (that might affect logic).
For typo fixes or document changes, use `docs:` or `chore:` instead:

- ~~`fix: typo`~~ -> `docs: fix typo`

### Pull Request

If you don't know how to send a Pull Request, we recommend reading [the guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

When sending a pull request, make sure your PR's title also follows the [Commit Convention](#commit-conventions).

If your PR fixes or resolves an existing issue, please add the following line in your PR description according to the following example:

```markdown
Fixes #123
```

Where the template is:

```markdown
<keyword> #<issue-number>
```

Replacing:
* `<keyword>` with one of `close`, `closes`, `closed`, `fix`, `fixes`, `fixed`, `resolve`, `resolves`, `resolved`
* `<issue-number>`: the issue number you are fixing

This will let GitHub know the issues are linked, and automatically close them once the PR gets merged. Learn more at [the guide](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).

It's ok to have multiple commits in a single PR, you don't need to rebase or force push for your changes as we will use `Squash and Merge` to squash the commits into one commit when merging.

## 🧑‍🔧 Maintenance

This section is for maintainers with write access, or if you want to maintain your own forks.

### Release

Before you do, please make sure you have lastest git commit from upstream and all CI checks pass.

When ready to publish a new release, we run `nr release`. It prompts a list for the target version you want to release. After selecting the desired one, it bumps your `package.json` and commit the changes with git tags, powered by [`@antfi/bumpp`](https://github.com/antfu/bumpp).

There are two kinds of publishing setups, both performed by `nr release`.

<table><tr><td>

#### Build Locally

For this type of setup, the building and publishing process is done on your local machine. Make sure you have your local [`npm` logged in](http://npm.github.io/installation-setup-docs/installing/logging-in-and-out.html) before doing that.

In `package.json`, we usually have:

```json
{
  "scripts": {
    "prepublishOnly": "nr build"
  }
}
```

So whenever you run `npm publish`, it will make sure you have the latest change in the distribution.

</td><td>

#### Build on CI

For complex projects that take long time to build, we might move the building and publishing process to CI. So it doesn't block your local workflow.

They will be triggered by the `v` prefixed git tag added by `bumpp`. The action is usually defined under `.github/workflows/release.yml`

> When maintaining your own fork, you might need to see `NPM_TOKEN` secret to your repository for it to publish the packages.

</td></tr></table>

Changelogs are always generated by GitHub Actions.

## 📖 References

### Lint

We use [Biome](https://biomejs.dev/) for both linting and formatting with [a few custom rules](./biome.json). It is an ultra-fast, Rust based linter and formatter.

<table><tr><td>

#### IDE Setup

We recommend using [VS Code](https://code.visualstudio.com/) along with the [Biome extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome).

With the settings on the right, you can have auto fix and formatting when you save the code you are editing.

</td><td><br>

VS Code's `settings.json`

```json
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "quickfix.biome": true
  }
}
```

</td></tr></table>

### No Prettier

> [!WARNING]
> Since ESLint is already configured to format the code, there is no need to duplicate the functionality with Prettier ([*Why I don't Use Prettier*](https://antfu.me/posts/why-not-prettier)). To format the code, you can run `bun lint --apply` or refer to the [Lint section](#lint) for IDE Setup.
>
> If you have Prettier installed in your editor, we recommend you disable it when working on the project to avoid conflict.
> Instead, you may use the [Biome VS Code extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome).

## 🗒 Additional Info

In case you are interested in, here are some interesting tools, many of which inspired or created by [antfu](https://github.com/antfu).

* **Configurations**

  - [antfu/dotfiles](https://github.com/antfu/dotfiles) - ZSH configs and other dotfiles
  - [antfu/vscode-settings](https://github.com/antfu/vscode-settings) - VS Code settings
  - [antfu/eslint-config](https://github.com/antfu/eslint-config) - ESLint config

* **CLI Tools**

  - [ni](https://github.com/antfu/ni) - package manager alias
  - [esno](https://github.com/antfu/esno) - TypeScript runner
  - [taze](https://github.com/antfu/taze) - dependency updater
  - [bumpp](https://github.com/antfu/bumpp) - version bumpper
