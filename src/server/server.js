const restify = require('restify');
const logger = require('@components/logger');
const config = require('./server.config');

const server = restify.createServer();
server.get('/hello/:name', (req, res, next) => {
  res.send(`hello, ${req.params.name}!`);
  next();
});

server.listen(config.port, () => {
  logger.info(`${server.name} listening at ${server.url}`);
});
