# Base Image
FROM node:18

WORKDIR /backend
# install dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]