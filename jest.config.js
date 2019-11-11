require('dotenv').config({ path: './test.env' });

module.exports = {
  verbose: true,
  timers: 'fake',
  moduleNameMapper: {},
  collectCoverage: false,
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
