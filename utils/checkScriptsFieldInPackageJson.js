const shell = require('shelljs');

function shellOutputHandler(code, stdout, stderr) {
    if (stderr) {
        // eslint-disable-next-line no-console
        console.log('Program stderr:', stderr);
    }
}

function checkScriptsFieldInPackageJson() {
    shell.exec('node_modules/.bin/json -f package.json scripts', (code, stdout) => {
        if (!stdout) {
            shell.exec(`node_modules/.bin/json -I -f package.json -e 'this.scripts={}'`);
        }
    });
}

module.exports = {
    checkScriptsFieldInPackageJson,
    shellOutputHandler
};
