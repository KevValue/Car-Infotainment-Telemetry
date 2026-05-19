import { winstonLogger } from "../../winston"

export function logError(error: unknown, meta: Record<string, any>) {
  //create err class, inject with error context
  // Normalizes unknown -> Error
  const err = error instanceof Error ? error : new Error(String(error))

  // log err with sticky notes
  winstonLogger.error("request failed", {
    // structured
    message: err.message,
    name: err.name,
    stack: err.stack,
    // sticky notes
    ...meta,
  })

  // return err
  return err
}
