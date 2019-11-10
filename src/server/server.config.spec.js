
import config from './server.config';

describe('server.config', () => {
  test('should load required environment config', () => {
    expect(config.server).toBe('auth-api-test');
    expect(config.port).toBe('1000');
  });
});
