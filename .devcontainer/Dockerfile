# Even though this is a Bun project, the base image is Node.
# Currently, node is still needed for everything to run smoothly.
# Specifically, for this project, we need it for the Biome extension.
# Bun is setup as a 'feature' in devcontainer.json
# -bookworm also comes with updated git and bash
FROM node:20-bullseye


# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# Install node 18 (for biome extension)
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install 18"

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# we might need to use node:18-bookworm for biome extension. keep an eye on this.

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

# Install bun dependencies
# RUN bun i


# start a dev server
# CMD bun dev