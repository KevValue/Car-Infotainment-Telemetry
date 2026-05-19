import { v4 as uuid } from 'uuid'

// responsiblity through context #1
export function createRequestContext(req: Request) {
  const incomingCorrelationId =
    req.headers.get("X-Correlation-Id") || req.headers.get("x-correlation-id")

  const correlationId = incomingCorrelationId ?? uuid()

  const context = {
    requestId: uuid(),
    correlationId: correlationId,
  }

  return context
}
