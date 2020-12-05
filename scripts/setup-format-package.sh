#! /bin/bash

echo "Setting up format-package";

npx json -I -f package.json -e 'this.scripts["format:pkg"]="format-package -w"';

npx json -I -f package.json -e 'this.scripts["postinstall"]="yarn format:pkg"';

echo "✅ format-package is ready!";



