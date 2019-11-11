
import config from './server.config';

describe('server.config', () => {
  test('should load required environment config', () => {
    expect(config.server).toBe('authservice');
    expect(config.port).toBe('8010');
  });
});
