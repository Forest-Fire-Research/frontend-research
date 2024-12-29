FROM node:20.16.0-alpine3.20

WORKDIR /wire-ai_app

COPY package*.json .

COPY ./build ./build

RUN npm install -g serve

