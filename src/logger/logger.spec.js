import winston from 'winston';

jest.mock('winston', () => ({
  format: {
    json: jest.fn(),
    label: jest.fn(),
    timestamp: jest.fn(),
    combine: jest.fn(),
    printf: jest.fn(),
  },
  transports: {
    Console: jest.fn(),
    File: jest.fn(),
  },
  createLogger: jest.fn().mockImplementation(() => ({
    info: jest.fn(),
    debug: jest.fn(),
    error: jest.fn(),
    log: jest.fn(),
  })),
}));

describe('logger', () => {
  test('should create a console logger for development environment', () => {
    jest.mock('./logger.config', () => ({
      environment: 'development',
      label: 'app-dev',
      path: './dist',
    }));

    const logger = require('./logger').default;
    logger.info('dev log');

    expect(winston.format.printf.mock.calls[0][0]({
      label: 'app',
      level: 'info',
      timestamp: 'ts',
      message: 'message',
    })).toBe('ts [app] info: message');

    expect(winston.createLogger).toHaveBeenCalledTimes(1);
    expect(winston.createLogger).toHaveBeenCalledWith({
      level: 'silly',
      transports: [new winston.transports.Console()],
    });
  });

  test('should create a console logger for test environment', () => {
    jest.mock('./logger.config', () => ({
      environment: 'test',
      label: 'app-test',
      path: './dist',
    }));

    const logger = require('./logger').default;
    logger.info('test log');

    expect(winston.createLogger).toHaveBeenCalledTimes(1);
    expect(winston.createLogger).toHaveBeenCalledWith({
      level: 'silly',
      transports: [new winston.transports.Console()],
    });
  });

  test('should create a file logger for prod environment', () => {
    jest.mock('./logger.config', () => ({
      environment: 'prod',
      label: 'app-test',
      path: './dist',
    }));

    const logger = require('./logger').default;
    logger.info('test log');

    expect(winston.createLogger).toHaveBeenCalledTimes(1);
    expect(winston.createLogger).toHaveBeenCalledWith({
      level: 'silly',
      transports: [new winston.transports.File()],
    });
  });
});
