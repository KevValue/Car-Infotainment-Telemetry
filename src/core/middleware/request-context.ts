import { als } from '../logging/als'
import { winstonLogger } from '../winston'
import { measureDuration } from '@/src/utils/metrics/request-duration'
import { createRequestContext } from './context/createRequestContext'
import { logError } from './utils/logError'
import isMeasuredError from './utils/isMeasuredError'

const ENABLE_DURATION = process.env.LOG_DURATION === "true"

// middleware context responsiblity through context #1
export function withRequestContext(handler: Function) {
  return async (req: Request) => {

    const correlationContext = createRequestContext(req)

    return als.run(correlationContext, async () => {
      try {
        const { result, durationMs } = await measureDuration<Response>(() => handler(req)) // return the result of the handler

        const baseContext = {
          method: req.method,
          url: req.url,
        }

        const durationContext = ENABLE_DURATION ? { durationMs } : {}

        winstonLogger.info("request completed", {
          ...correlationContext,
          ...durationContext,
          ...baseContext,
          status: result.status
        })

        return result
      } catch (error) { // structured error message, from measureDuration

        if (isMeasuredError(error)) { // narrow type when destructuring, narrow the error type to a duration error OR standard Error with unknown type
          // standard pattern to handle inner functions throwing errors, if -> throw
          const { err: durationErr, durationMs } = error


          const durationContext = ENABLE_DURATION ? { durationMs } : {}

          throw logError(durationErr, { ...correlationContext, ...durationContext })
        }

        // give shape to error message, and transport into the error pipeline
        throw logError(error, { ...correlationContext })
      }
    })
  }
}
