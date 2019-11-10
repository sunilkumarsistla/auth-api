import restify from 'restify';
import logger from '@components/logger';
import config from './server.config';

const server = restify.createServer();
server.get('/hello/:name', (req, res, next) => {
  res.send(`hello, ${req.params.name}!`);
  next();
});

server.listen(config.port, () => {
  logger.info(`${server.name} listening at ${server.url}`);
});

export default server;
