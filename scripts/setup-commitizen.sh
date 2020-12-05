#! /bin/bash

echo "Setting up Commitizen..."

npx commitizen init cz-conventional-changelog --save-dev --save-exact;

npx json -I -f package.json -e 'this.scripts["cm"]="cz"';

echo "✅ Commitizen is ready!"
