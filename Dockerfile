FROM node:6.9.1
RUN npm install -g ember-cli fastboot-app-server

WORKDIR /usr/src/

ADD package.json ./
RUN npm install

COPY ./ /usr/src/

RUN ember build --environment production
RUN cd dist && npm install

EXPOSE 4000
CMD [ "node", "server.js"]
