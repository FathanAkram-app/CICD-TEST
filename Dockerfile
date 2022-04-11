FROM node:16.9.0-alpine

COPY package.json /package.json

RUN npm install

COPY index.js /index.js

COPY ./app /app
COPY Procfile /Procfile

CMD [ "node", "index.js" ]