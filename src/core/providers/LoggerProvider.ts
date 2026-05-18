import { ILogger } from '../interfaces/ILogger'
import { BrowserLogger } from '../adapters/BrowserLogger'
import { WinstonLogger } from '../adapters/WinstonLogger'

export function createLogger(): ILogger {
  if (typeof window === 'undefined') {
    // Server-side
    return new WinstonLogger()
  }

  // Client-side
  return new BrowserLogger()
}
