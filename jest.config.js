require('dotenv').config({ path: './.env.test' });

module.exports = {
  verbose: true,
  automock: true,
  resetModules: true,
  clearMocks: true,
  timers: 'fake',
  moduleNameMapper: {},
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 98,
      functions: 98,
      lines: 98,
      statements: 98,
    },
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
