# Base image
from node:18-alpine

# Working directory
WORKDIR /app

# Dependicies
COPY package*.json ./
RUN yarn install

# Copy code
COPY . .

# port expose
EXPOSE 4001

# run frontend service
CMD  ["yarn", "start"]