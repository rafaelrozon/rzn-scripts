/* eslint-disable no-console */
const path = require('path');
const cp = require('child_process');

function runScript(scriptFile) {
    cp.exec(path.resolve(__dirname, `../scripts/${scriptFile}`), (error, stdout, stderr) => {
        if (error) {
            console.log('runScript/error: ', error);
        }

        if (stderr) {
            console.log('runScript/stderr: ', stderr);
        }

        console.log('runScript/stdout: ', stdout);
    });
}

module.exports = runScript;
