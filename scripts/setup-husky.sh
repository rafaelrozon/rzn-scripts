#! /bin/bash

echo "Setting up Git hooks..."

yarn add -D husky@next

yarn husky install;

npx husky add pre-commit "yarn format && yarn lint";

npx husky add pre-push "yarn test";

npx husky add prepare-commit-msg 'exec < /dev/tty && node_modules/.bin/cz --hook || true'

npx json -I -f package.json -e 'this.scripts.postinstall="husky install"';

echo "✅ Git hooks are ready!"
