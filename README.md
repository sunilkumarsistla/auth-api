# REST API

## To start
```
yarn
yarn start (monitored)
yarn test (collects coverage too: check jest.config.js for configuration)
yarn run serve (unmonitored for prod purpose)
yarn run lint (eslint rules and fixing)
```

## docker creation
```
docker build -t <image-name>:<label> .
docker run -d -p <external-port>:8010 --name <container-name> <image-name>:<label>
```

## Code lint guide
https://github.com/airbnb/javascript