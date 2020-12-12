#! /bin/bash

echo "Setting up Git hooks..."

yarn husky install;

npx husky add .husky/pre-commit "yarn format && yarn lint";

npx husky add .husky/pre-push "yarn test";

npx husky add .husky/prepare-commit-msg 'exec < /dev/tty && node_modules/.bin/cz --hook || true'

npx json -I -f package.json -e 'this.scripts.postinstall="husky install"';

echo "✅ Git hooks are ready!"
