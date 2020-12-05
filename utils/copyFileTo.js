const { copyFileSync } = require('fs-extra');
const path = require('path');

const copyFileTo = (file, dest) => {
    try {
        const source = path.resolve(__dirname, `../templates/${file}`);
        copyFileSync(source, dest);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('error: ', error);
    }
};

module.exports = copyFileTo;
