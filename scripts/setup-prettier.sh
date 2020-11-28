#! /bin/bash

echo "Setting up Prettier..."

npx mrm lint-staged;
npx json -I -f package.json -e 'this.scripts["lint"]="eslint . --ext .ts --ext .tsx"';
npx json -I -f package.json -e 'this.scripts["format"]="prettier-eslint --write $PWD/**/*.ts"';
npx json -I -f package.json -e 'this.scripts["format:check"]="prettier --check \"$PWD/**/*.ts\"';

echo "✅ Prettier is ready!"
