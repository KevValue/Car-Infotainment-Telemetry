import { AsyncLocalStorage } from 'async_hooks'

export interface RequestContext {
  requestId: string
  userId?: string
  correlationId?: string
}

export const als = new AsyncLocalStorage<RequestContext>()
