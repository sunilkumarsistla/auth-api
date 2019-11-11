
import config from './logger.config';

describe('logger.config', () => {
  test('should load required environment config', () => {
    expect(config.environment).toBe('test');
    expect(config.label).toBe('authservice');
    expect(config.path).toBe('./logs');
  });
});
