# rzn-scripts

CLI utilities for common tasks and configurations for my projects

---

## Instalation

```shell
yarn add -D rzn-scripts
```

## Configuration

Create `~/.rzn-scripts/.env` and add:

```txt
USER_NAME="..."
USER_EMAIL="..."
```

## Usage

### Available commands:

```text
Usage: rzn-scripts [options] [command]

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  setup
  help [command]  display help for command
```

### Setup command

```text
Usage: rzn-scripts setup [options] [command]

Options:
  -h, --help       display help for command

Commands:
  editorconfig     Add editorconfig file
  git              Setup git user name and email
  devDependencies  Install basic packages for development
  eslint           Setup ESLint for Typescript with sensible defaults
  jest             Add default config and run script
  formatPackage    Add format-package to postinstall hook
  husky            Add Husky config
  prettier         Add Prettier config file and run scripts
  commitizen       Add Commitizen config
  nvm              Add NVM config
  help [command]   display help for command
```

Supported configuration for:

-   [ESLint](https://eslint.org/)
    -   [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
    -   Typescript support
    -   Prettier
    -   errors are off. I don't need formatting errors to distract me while coding. Before commiting the code, everything is formatted automatically.
-   [EditorConfig](https://editorconfig.org/)
-   [Jest](https://jestjs.io/) with support for Typescript
-   [Commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly)
-   [NVM](https://github.com/nvm-sh/nvm) setup for 12.18.3 Node version
-   [Prettier](https://prettier.io/)
-   Git hooks
    -   run lint before commit
    -   run tests before push
    -   run Commitizen on commit
-   [format-package](https://www.npmjs.com/package/format-package)

## Inspiration

This was inspired by [kcd-scripts](https://github.com/kentcdodds/kcd-scripts)

## TODO

-   [ ] evaluate if configs should be converted to presets
-   [ ] publish to npm
-   [x] lock yarn version ?
-   [x] update README with documentation output by commander
-   [ ] check existence of .env file before running any commands
-   [ ] check [spotify/web-scripts](https://github.com/spotify/web-scripts)
