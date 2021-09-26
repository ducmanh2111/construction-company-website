FROM node:12

WORKDIR /frontend

COPY package.json yarn.lock ./

RUN yarn install --check-files
