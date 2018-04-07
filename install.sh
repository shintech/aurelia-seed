#!/usr/bin/env bash

if [ -d "node_modules" ] || [ -d "build" ]; then
  echo "Removing existing files..."
  rm -rv node_modules dist --force
fi

echo "Creating file directories..." && \
mkdir dist && \

printf "\nInstalling packages...\n" && \
yarn install && \

printf "\nBuilding in progress...\nPlease wait...\n\n" && \
webpack --progress --display-reasons --display-modules --display-chunks && \
printf "\n " && \
npm run -s build && \

printf "All done...\n"