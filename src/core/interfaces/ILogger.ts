// define the logging contract (interface)
//
//

export type LogLevel = 'debug' | 'info' | 'warn' | 'error'

// structured log metadata, extra fields like sticky notes about the log
export interface LogContext {
  requestId?: string
  userId?: string
  feature?: string
  [key: string]: unknown // arbitrary # of additional fields
}

export interface ILogger {
  log(level: LogLevel, message: string, context?: LogContext): void
  info(message: string, context?: LogContext): void
  warn(message: string, context?: LogContext): void
  error(message: string, context?: LogContext): void
  debug(message: string, context?: LogContext): void
} // DI contract, frontend and backend depend on message shape
