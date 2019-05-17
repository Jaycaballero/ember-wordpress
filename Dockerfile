FROM node:8.16.0
RUN npm install -g ember-cli fastboot-app-server

WORKDIR /usr/src/

ADD package.json ./
RUN npm install

COPY ./ /usr/src/

RUN touch .env
RUN JOBS=1 ember build --environment production
RUN cd dist && npm install

EXPOSE 4000
CMD ember build --environment production && node fastboot.js
