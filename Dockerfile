FROM node:10
RUN npm install -g ember-cli fastboot-app-server

WORKDIR /usr/src/

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY ./ /usr/src/

RUN touch .env
RUN JOBS=1 ember build --environment production
RUN cd dist && npm install

EXPOSE 4000
CMD ember build --environment production && node fastboot.js
