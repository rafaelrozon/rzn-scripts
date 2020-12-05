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

-   ESLint
-   editorconfig
-   Jest with support for Typescript
-   Commitizen
-   NVM setup for 12.18.3 NodeJS version
-   Prettier
-   Git hooks
-   format-package

## Inspiration

This was inspired by [kcd-scripts](https://github.com/kentcdodds/kcd-scripts)

## TODO

-   [ ] evaluate if configs should be converted to presets
-   [ ] publish to npm
-   [ ] lock yarn version ?
-   [x] update README with documentation output by commander
-   [ ] check existence of .env file before running any commands
