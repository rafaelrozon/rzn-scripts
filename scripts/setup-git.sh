#! /bin/bash

echo "Setting up Git..."

set -v -o allexport;
source ~/.rzn-scripts/.env;
set +o allexport;

git config user.name "$USER_NAME";
git config user.email "$USER_EMAIL";

echo "✅ Git is ready!"
