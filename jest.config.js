require('dotenv').config({ path: './test.env' });

module.exports = {
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
