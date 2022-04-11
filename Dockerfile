FROM node:16.9.0-alpine


WORKDIR /var/www/node/
COPY package.json /package.json

RUN npm install

COPY index.js /index.js

COPY ./app /app

CMD [ "node", "index.js" ]