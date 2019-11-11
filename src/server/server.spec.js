import restify from 'restify';
import logger from '@components/logger';

describe('server', () => {
  test('should create a restify server and start listening on port from config', () => {
    jest.isolateModules(() => {
      jest.mock('./server.config', () => ({ port: 1000, server: 'authservice' }));

      const server = require('./server').default;

      expect(restify.createServer).toHaveBeenCalledTimes(1);
      expect(server.listen).toHaveBeenCalledTimes(1);
      expect(server.listen.mock.calls[0][0]).toBe(1000);
      expect(logger.info).toHaveBeenCalledTimes(1);
      expect(logger.info).toHaveBeenCalledWith('restify listening at http://[::]:1000');
    });
  });
});
