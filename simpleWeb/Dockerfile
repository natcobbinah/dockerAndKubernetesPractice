# Specify a base image
FROM node:19-alpine

#copy files to these directory in the will be created container
WORKDIR /usr/app

# Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]