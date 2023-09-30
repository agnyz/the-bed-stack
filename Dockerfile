# Use an official Node runtime as the base image
FROM oven/bun:latest

# Install git for bun install (husky uses it)
# RUN apt-get update && \
#   apt-get install -y git

# Set the working directory inside the container
WORKDIR /app

# Copy files for installing dependencies
COPY package.json ./
COPY bun.lockb ./
COPY .git ./.git 

# Install dependencies
RUN bun install

# Copy the current directory contents into the container at /app
COPY . .

# Define the command to run your app using CMD which turns your container into an executable
CMD ["bun", "start"]
