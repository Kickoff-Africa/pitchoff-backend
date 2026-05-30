import winston from 'winston';
const { combine, timestamp, printf, colorize, align, errors, json } = winston.format;

const logger = winston.createLogger({
  level: 'info',
//   format: combine(errors({ stack: true }), (
//     colorize({ all: true }),
//     timestamp({
//       format: 'YYYY-MM-DD hh:mm:ss.SSS A',
//     }),
//     align(),
//     printf((info) => {
//       return `[${info.timestamp}] ${info.level}: ${info.message}`;
//     })
// )),
format: combine(errors({ stack: true }), timestamp(), json()),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

export default logger;
