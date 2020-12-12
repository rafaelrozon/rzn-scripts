#! /bin/bash

echo "Setting up scripts..."

npx json -I -f package.json -e 'this.scripts["lint"]="eslint src --ext .ts --ext .tsx --ext .js --ext .jsx"'

npx json -I -f package.json -e 'this.scripts["format"]="prettier-eslint --write \"$PWD/src/**/*.[tj]s\""'

npx json -I -f package.json -e 'this.scripts["format:check"]="prettier --check \"$PWD/src/**/*.[tj]s\""'

npx json -I -f package.json -e 'this.scripts.test="jest"'

echo "✅ scripts is ready!"
