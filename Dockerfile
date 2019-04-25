FROM node:6.9.1
RUN npm install -g ember-cli fastboot-app-server

WORKDIR /usr/src/

ADD package.json ./
RUN npm install

COPY ./ /usr/src/

RUN touch .env && ember build --environment production
RUN cd dist && npm install

EXPOSE 4000
ENTRYPOINT ember build --environment production && node fastboot.js
CMD [ "node", "fastboot.js"]
