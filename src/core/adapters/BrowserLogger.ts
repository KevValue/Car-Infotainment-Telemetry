import { ILogger, LogContext, LogLevel } from '../interfaces/ILogger'

const LOG_ENDPOINT = '/api/log'

export class BrowserLogger implements ILogger {
  private send(level: LogLevel, message: string, context: LogContext = {}) {
    void fetch(LOG_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level, message, context }),
    })

    if (process.env.NODE_ENV === 'development') {
      console.log(`[${level}] ${message}`, context)
    }
  }

  // place holder not used in the browser version
  log(level: LogLevel, message: string, context?: LogContext): void {
    this.send(level, message, context)
  }

  info(message: string, context?: LogContext): void {
    this.send('info', message, context)
  }

  warn(message: string, context?: LogContext): void {
    this.send('warn', message, context)
  }

  error(message: string, context?: LogContext): void {
    this.send('error', message, context)
  }

  debug(message: string, context?: LogContext): void {
    this.send('debug', message, context)
  }
}
