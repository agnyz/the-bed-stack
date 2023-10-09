#!/bin/bash

# Source .env file to get environment variables
source .env

# TODO: find a fix for database ('medium') creation without having to rebuild

# Run wait-for-db.sh with the sourced environment variables
# ./scripts/wait-for-db.sh db:5432 --strict --timeout=60 -- psql -h db -U ${POSTGRES_USER} -d ${POSTGRES_DB} -c 'SELECT 1;'

# TODO: find a better way to wait for database ('medium') creation than waiting 10 seconds
sleep 10

bun db:migrate
bun db:seed
