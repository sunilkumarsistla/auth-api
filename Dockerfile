FROM alpine:3.10
ENV NODE_VERSION 13.1.0
ENV YARN_VERSION 1.19.1

WORKDIR /app
COPY . .

RUN yarn

CMD [ "node", "src/server.js" ]
EXPOSE 8010