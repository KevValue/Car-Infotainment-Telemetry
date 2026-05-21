import winston from 'winston'

const format = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.printf(({ level, message, ...meta }) => {
    return `[${level}] ${message} ${JSON.stringify(meta, null, 2)}`
  })
)

export const winstonLogger = winston.createLogger({
  level: 'info',
  format: format,
  transports: [
    new winston.transports.Console(),
  ],
})

