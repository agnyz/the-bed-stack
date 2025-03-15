#!/bin/bash

# this script extends docker-compose up by supporting .env files in the same way as bun
# see: https://bun.sh/docs/runtime/env#setting-environment-variables

# Default env file
env_file=".env"

# Determine which env file to use based on NODE_ENV
if [ "$NODE_ENV" == "production" ]; then
  env_file=".env.production"
elif [ "$NODE_ENV" == "development" ]; then
  env_file=".env.development"
elif [ "$NODE_ENV" == "test" ]; then
  env_file=".env.test"
fi

# If .env.local exists, use that instead
if [ -f ".env.local" ]; then
  env_file=".env.local"
fi

# Run docker-compose with the selected env file and pass along any arguments
docker compose --env-file $env_file up "$@"
