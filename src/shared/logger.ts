import { format, createLogger, transports } from 'winston';
import { loglevels, fileOptions, consoleOptions } from './config/logger';

const { combine, colorize, simple } = format;
const { File } = transports;

export const logger = createLogger({
  levels: loglevels.levels,
  format: combine(colorize(), simple()),
  transports: [new transports.Console(consoleOptions), new File(fileOptions)],
  level: 'custom',
});
