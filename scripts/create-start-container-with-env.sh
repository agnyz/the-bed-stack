#!/bin/bash

# this script extends docker-compose up by supporting .env files in the same way as bun
# see: https://bun.sh/docs/runtime/env#setting-environment-variables

current_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$current_path/.."


env_prefix="environments"
# Default env folder
env_folder="$env_prefix/local"

# Determine which env file to use based on NODE_ENV
if [ "$NODE_ENV" == "production" ]; then
  env_folder="$env_prefix/production"
elif [ "$NODE_ENV" == "development" ]; then
  env_folder="$env_prefix/development"
elif [ "$NODE_ENV" == "test" ]; then
  env_folder="$env_prefix/test"
fi



# Run docker-compose with the selected env file and pass along any arguments
docker-compose --env-file "$env_folder/.env.db" --env-file "$env_folder/.env.app" -f docker/docker-compose.yml up "$@"
