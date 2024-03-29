FROM node:alpine

WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

CMD yarn start
