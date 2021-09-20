const pino = require('pino');
const { loggingLevel } = require('config');
const logger = pino({
  timestamp: pino.stdTimeFunctions.isoTime,
  level: loggingLevel,
  prettyPrint: {
    colorize: true
  },
  customLevels: {
    db: 15
  }
});

exports.logger = logger;
