#! /bin/bash

echo "Installing ESLint Dev Dependencies"

yarn add -D \
eslint \
eslint-config-airbnb \
eslint-config-prettier \
eslint-import-resolver-custom-alias \
eslint-plugin-import \
eslint-plugin-jsx-a11y \
eslint-plugin-react \
eslint-plugin-react-hooks \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
prettier \
prettier-eslint-cli

echo "✅ ESLint Dev Dependencies installed."
