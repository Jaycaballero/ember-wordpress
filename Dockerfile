FROM node:6.9.1
RUN npm install -g ember-cli

WORKDIR /usr/src/

ADD package.json ./
RUN npm install

COPY ./ /usr/src/
RUN ember build --environment production
EXPOSE 4000
CMD [ "ember", "serve", "--environment", "production", "--port", "4000"]
