# Use Node.js as base image
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Install global npm packages
RUN npm install -g npm@latest

# Expose frontend (React) and backend (Node.js) ports
EXPOSE 3000 5001

# Set default shell
CMD [ "bash" ]

