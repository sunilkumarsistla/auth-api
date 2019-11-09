const loggerConfiguration = {
  label: process.env.APP_NAME,
  environment: process.env.NODE_ENV,
  path: process.env.LOG_DIR,
};

module.exports = loggerConfiguration;
