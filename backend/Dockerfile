# Base Image
from  node:18-alpine

# Working directory
WORKDIR /app

#depedincies
COPY  package* .json ./

# copy all code
COPY . .

# port expose
EXPOSE 4000

# run backend service
CMD  ["yarn", "start"]

