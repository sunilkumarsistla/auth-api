require('dotenv/config');

module.exports = {
  clearMocks: true,
  timers: 'fake',
  moduleNameMapper: {},
  collectCoverage: true,
  setupFiles: ['./jest.setup.js'],
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
