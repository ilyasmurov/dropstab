# Stage 1
FROM node:10-alpine

ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package*.json /
RUN npm install --silent

STOPSIGNAL SIGTERM

EXPOSE 3333

CMD ["npm","run","dev"]
