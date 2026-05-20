import { ILogger, LogContext, LogLevel } from '../interfaces/ILogger';
import { winstonLogger } from '../logging/winston'
import { als } from '../logging/als'

export class WinstonLogger implements ILogger {
  log(level: LogLevel, message: string, context: LogContext = {}): void {
    const store = als.getStore() ?? {}
    winstonLogger.log(level, {
      message,
      ...context,
      ...store,
      timestamp: new Date().toISOString()
    })
  }

  info(message: string, context?: LogContext): void {
    this.log('info', message, context)
  }

  warn(message: string, context?: LogContext): void {
    this.log('warn', message, context)
  }

  error(message: string, context?: LogContext): void {
    this.log('error', message, context)
  }

  debug(message: string, context?: LogContext): void {
    this.log('debug', message, context)
  }
}

export const winstonLoggerInstance = new WinstonLogger()
