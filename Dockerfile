FROM node:16.9.0-alpine

COPY package.json /package.json

RUN npm install

COPY index.js /var/www/node/index.js

COPY ./app /var/www/node/app

CMD [ "node", "index.js" ]