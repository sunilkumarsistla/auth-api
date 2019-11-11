import { createLogger, format, transports } from 'winston';
import config from './logger.config';

const jsonFormat = format.json();
const stringFormat = format.printf(({
  label,
  level,
  timestamp,
  message,
}) => `${timestamp} [${label}] ${level}: ${message}`);

const prepareFormat = (f) => format.combine(
  format.label({ label: config.label }),
  format.timestamp(),
  f,
);

const winstonConfig = {
  enc: config.environment,
  level: 'info',
  transports: [],
};

switch (config.environment) {
  case 'development':
  case 'test':
    winstonConfig.level = 'silly';
    winstonConfig.transports.push(
      new transports.Console({
        format: prepareFormat(stringFormat),
      }),
    );
    break;
  default:
    winstonConfig.transports.push(
      new transports.File({
        filename: `${config.path}/app.log`,
        format: prepareFormat(jsonFormat),
      }),
    );
    break;
}

const logger = createLogger(winstonConfig);
export default logger;
