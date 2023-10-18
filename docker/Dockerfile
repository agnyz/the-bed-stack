FROM oven/bun:1.0.6-slim

WORKDIR /app

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git

COPY package.json /app/package.json
COPY bun.lockb /app/bun.lockb

RUN bun install

