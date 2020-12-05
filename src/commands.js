const copyFileTo = require('../utils/copyFileTo');
const { checkScriptsFieldInPackageJson } = require('../utils/checkScriptsFieldInPackageJson');
const runScript = require('../utils/runScript');

function editorconfig() {
    copyFileTo('editorconfig', '.editorconfig');
}

function eslint() {
    runScript('install-eslint.sh');
    copyFileTo('eslintrc.js', '.eslintrc.js');
}

function jest() {
    checkScriptsFieldInPackageJson();
    copyFileTo('jest.config.js', 'jest.config.js');
}

function husky() {
    runScript('setup-husky.sh');
}

function commitzen() {
    checkScriptsFieldInPackageJson();
    runScript('setup-commitizen.sh');
}

function prettier() {
    checkScriptsFieldInPackageJson();
    copyFileTo('prettierrc.js', '.prettierrc.js');
}

function nvm() {
    copyFileTo('nvmrc', '.nvmrc');
}

function git() {
    runScript('setup-git.sh');
}

function devDependencies() {
    runScript('install-dev-dependencies.sh');
}

function formatPackage() {
    checkScriptsFieldInPackageJson();
    runScript('setup-format-package.sh');
}

function scripts() {
    checkScriptsFieldInPackageJson();
    runScript('setup-scripts.sh');
}

function web() {
    const dependencies = [git, devDependencies, scripts, formatPackage, nvm, prettier, commitzen, husky, jest, eslint, editorconfig];
    dependencies.forEach(dep => dep());
}

module.exports = {
    formatPackage,
    devDependencies,
    git,
    nvm,
    prettier,
    commitzen,
    husky,
    jest,
    eslint,
    editorconfig,
    scripts,
    web
};
