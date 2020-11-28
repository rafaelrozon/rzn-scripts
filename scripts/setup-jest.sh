#! /bin/bash

echo "Setting up Jest..."

yarn add -D \
babel-jest \
@babel/core \
@babel/preset-env \
@babel/preset-typescript;

npx json -I -f package.json -e 'this.scripts.test="jest"';

echo "✅ Jest is ready!"
