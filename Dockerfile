FROM node:6.9.1 as build-stage
RUN npm install -g ember-cli

WORKDIR /usr/src/

ADD package.json ./
RUN npm install

COPY ./ /usr/src/

RUN ember build --environment=production

FROM nginx:stable

COPY --from=build-stage /usr/src/dist /usr/share/nginx/html

COPY build/default_nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

EXPOSE 80
