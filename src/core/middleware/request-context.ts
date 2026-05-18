import { v4 as uuid } from 'uuid'
import { als } from '../logging/als'

export function withRequestContext(handler: Function) {
  return async (req: Request) => {

    const incomingCorrelationId =
      req.headers.get("X-Correlation-Id") || req.headers.get("x-correlation-id")

    const correlationId = incomingCorrelationId ?? uuid()

    const context = {
      requestId: uuid(),
      correlationId: correlationId,
    }

    return als.run(context, () => handler(req))
  }
}
