
import config from './logger.config';

describe('logger.config', () => {
  test('should load required environment config', () => {
    expect(config.environment).toBe('test');
    expect(config.label).toBe('auth-api-test');
    expect(config.path).toBe('./test-logs');
  });
});
