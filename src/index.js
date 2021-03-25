#! /usr/bin/env node

const { Command } = require('commander');
const packageJson = require('../package.json');
const commands = require('./commands');

const program = new Command();

program.version(packageJson.version);

const setupCommand = program.command('setup');

setupCommand.command('editorconfig').description('Add editorconfig file').action(commands.editorconfig);

setupCommand.command('git').description('Setup git user name and email').action(commands.git);

setupCommand
    .command('devDependencies')
    .description('Install basic packages for development')
    .action(commands.devDependencies)
    .arguments("W");

setupCommand
    .command('eslint')
    .description('Setup ESLint for Typescript with sensible defaults')
    .action(commands.eslint);

setupCommand.command('jest').description('Add default config and run script').action(commands.jest);

setupCommand
    .command('formatPackage')
    .description('Add format-package to postinstall hook')
    .action(commands.formatPackage);

setupCommand.command('husky').description('Add Husky config').action(commands.husky);

setupCommand.command('prettier').description('Add Prettier config file and run scripts').action(commands.prettier);

setupCommand.command('commitizen').description('Add Commitizen config').action(commands.commitzen);

setupCommand.command('scripts').description('Add run scripts to package.json file').action(commands.scripts);

setupCommand.command('nvm').description('Add NVM config').action(commands.nvm);

setupCommand.command('web').description('Setup all configs for a web app project').action(commands.web);

(function run() {
    program.parse(process.argv);
})();
