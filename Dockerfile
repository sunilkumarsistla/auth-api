FROM node:alpine
ENV NODE_VERSION 13.1.0
ENV YARN_VERSION 1.19.1

WORKDIR /app
COPY . .

RUN yarn --production

CMD [ "yarn", "run", "serve" ]
EXPOSE 8010