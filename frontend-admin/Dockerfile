FROM node:12

WORKDIR /frontend-admin

COPY package.json yarn.lock ./

RUN yarn install --check-files
