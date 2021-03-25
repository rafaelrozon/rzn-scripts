#! /bin/bash

echo "Installing Dev Dependencies";

yarn add -D \
yarn add husky \
better-npm-run \
cz-conventional-changelog \
format-package \
prettier \
typescript \
jest \
ts-jest \
json \
@babel/preset-typescript \
@babel/core \
@types/jest \
@types/react-test-renderer;

echo "✅ Dev Dependencies installed.";
