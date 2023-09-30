# Even though this is a Bun project, the base image is Node.
# Currently, node is still needed for everything to run smoothly.
# Specifically, for this project, we need it for the Biome extension.
# Bun is setup as a 'feature' in devcontainer.json
# -bookworm also comes with updated git and bash
FROM node:16-bookworm


# # Install curl and zsh
# RUN apt-get update && apt-get install -y curl zsh

# # Install node 16 (for Biome extension)
# # Get nvm, activate it, install Node 16 and set it as default
# RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | zsh && \
#   source ~/.zshrc && \
#   nvm install 16 && \
#   nvm alias default 16

# # Install node 16 (for Biome extension)

# # Get nvm
# RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | zsh
# # Activate nvm
# RUN source ~/.zshrc
# # Install node 16
# RUN nvm install 16
# # Set node 16 as default
# RUN nvm alias default 16


# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# Install git (for husky)
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#   && apt-get -y install --no-install-recommends git

# Install node 18 (for biome extension)
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install 18"

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"
