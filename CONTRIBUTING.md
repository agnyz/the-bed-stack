# Contributing Guide

*This guide is **heavily** inspired by [`@antfu/contribute`](https://github.com/antfu/contribute#corepack). Thanks, [antfu](https://github.com/antfu)!*

Hey there! We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great and we truly appreciate your time and effort.

**Before submitting your contribution, please make sure to take a moment and read through the following guidelines.**

## 👨‍💻 Repository Setup

**Windows users**: see [special note](#special-note-for-windows-users) below.

This project uses [Bun](https://bun.sh) as a runtime as well as a package manager. You'll need to install it and use as your package manager for this project. it We recommend using [@antfu/ni](https://github.com/antfu/ni) to avoid worrying about package managers when switching projects.

We will use `ni`'s commands in the following code snippets. If you are not using it, you can run `bun i` instead of `ni`, and `bun run` instead of `nr`.

* **Install the latest version of [Bun](https://bun.sh)**
  ```sh
  curl -fsSL https://bun.sh/install | bash
  ```

* **Install [@antfu/ni](https://github.com/antfu/ni)**
  ```sh
  bun i -g @antfu/ni
  ```

* **Install dependencies**
  ```sh
  ni
  ```

### Special note for Windows users

This guide assumes you are using a Unix-like environment, since [Bun is working on a Windows port](https://bun.sh/docs/installation#windows). If you are using Windows, you can use [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10) or [Git Bash](https://gitforwindows.org/).

## 💡 Commands

### `nr dev`

Start the development environment.

If it's a Node.js package, it will start the build process in watch mode, or [stub the passive watcher when using `unbuild`](https://antfu.me/posts/publish-esm-and-cjs#stubbing).

If it's a frontend project, it usually starts the dev server. You can then develop and see the changes in real time.

### `nr play`

If it's a Node.js package, it starts a dev server for the playground. The code is usually under `playground/`.

### `nr build`

Build the project for production. The result is usually under `dist/`.

### `nr lint`

We use [ESLint](https://eslint.org/) for **both linting and formatting**. It also lints for JSON, YAML and Markdown files if exists.

You can run `nr lint --fix` to let ESLint formats and lints the code.

Learn more about the [ESLint Setup](#eslint).

[**We don't use Prettier**](#no-prettier).

### `nr test`

Run the tests. We mostly using [Vitest](https://vitest.dev/) - a replacement of [Jest](https://jestjs.io/).

You can filter the tests to be run by `nr test [match]`, for example, `nr test foo` will only run test files that contain `foo`.

Config options are often under the `test` field of `vitest.config.ts` or `vite.config.ts`.

Vitest runs in [watch mode by default](https://vitest.dev/guide/features.html#watch-mode), so you can modify the code and see the test result automatically, which is great for [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development). To run the test only once, you can do `nr test --run`.

For some projects, we might have multiple types of tests set up. For example `nr test:unit` for unit tests, `nr test:e2e` for end-to-end tests. `nr test` commonly run them together, you can run them separately as needed.

### `nr docs`

If the project contains documentation, you can run `nr docs` to start the documentation dev server. Use `nr docs:build` to build the docs for production.

### `nr`

For more, you can run bare `nr`, which will prompt a list of all available scripts.

## 🙌 Making a Pull Request

### Discuss First

Before you start to work on a feature pull request, it's always better to open a feature request issue first to discuss with the maintainers whether the feature is desired and the design of those features. This would help save time for both the maintainers and the contributors and help features to be shipped faster.

For typo fixes, it's recommended to batch multiple typo fixes into one pull request to maintain a cleaner commit history.

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages, which allows the changelog to be auto-generated based on the commits. Please read the guide through if you aren't familiar with it already.

Only `fix:` and `feat:` will be presented in the changelog.

Note that `fix:`, `feat:`, and `perf:` are for **actual code changes** (that might affect logic).
For typo or document changes, use `docs:` or `chore:` instead:

- ~~`fix: typo`~~ -> `docs: fix typo`

### Pull Request

If you don't know how to send a Pull Request, we recommend reading [the guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

When sending a pull request, make sure your PR's title also follows the [Commit Convention](#commit-conventions).

If your PR fixes or resolves an existing issue, please add the following line in your PR description:

```markdown
Closes #<issue-number>
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

<table><tr><td width="500px" valign="top">

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

</td><td width="500px" valign="top">

#### Build on CI

For complex projects that take long time to build, we might move the building and publishing process to CI. So it doesn't block your local workflow.

They will be triggered by the `v` prefixed git tag added by `bumpp`. The action is usually defined under `.github/workflows/release.yml`

> When maintaining your own fork, you might need to see `NPM_TOKEN` secret to your repository for it to publish the packages.

</td></tr></table>

Changelogs are always generated by GitHub Actions.

## 📖 References

### ESLint

We use [ESLint](https://eslint.org/) for both linting and formatting with [`@antfu/eslint-config`](https://github.com/antfu/eslint-config).

<table><tr><td width="500px" valign="top">

#### IDE Setup

We recommend using [VS Code](https://code.visualstudio.com/) along with the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

With the settings on the right, you can have auto fix and formatting when you save the code you are editing.

</td><td width="500px"><br>

VS Code's `settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": false,
    "source.fixAll.eslint": true
  }
}
```

</td></tr></table>

### No Prettier

Since ESLint is already configured to format the code, there is no need to duplicate the functionality with Prettier ([*Why I don't Use Prettier*](https://antfu.me/posts/why-not-prettier)). To format the code, you can run `nr lint --fix` or referring the [ESLint section](#eslint) for IDE Setup.

If you have Prettier installed in your editor, we recommend you disable it when working on the project to avoid conflict.

## 🗒 Additional Info

In case you are interested in, here is Anthony's personal configrations and setups:

- [antfu/dotfiles](https://github.com/antfu/dotfiles) - ZSH configs and other dotfiles
- [antfu/vscode-settings](https://github.com/antfu/vscode-settings) - VS Code settings
- [antfu/eslint-config](https://github.com/antfu/eslint-config) - ESLint config

CLI Tools

- [ni](https://github.com/antfu/ni) - package manager alias
- [esno](https://github.com/antfu/esno) - TypeScript runner
- [taze](https://github.com/antfu/taze) - dependency updater
- [bumpp](https://github.com/antfu/bumpp) - version bumpper

In addition of `ni`, here is a few shell aliases to be even lazier:

```bash
alias d="nr dev"
alias b="nr build"
alias t="nr test"
alias tu="nr test -u"
alias p="nr play"
alias c="nr typecheck"
alias lint="nr lint"
alias lintf="nr lint --fix"
alias release="nr release"
```