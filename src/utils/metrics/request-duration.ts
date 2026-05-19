// pure async function, accepts a function and throws an duration error shaped object
//
// a promise with a try block, should either return an object or throw an object, handle both objects at caller location
export async function measureDuration<T>(fn: () => Promise<T>) {
  const start = performance.now()
  try {
    const result = await fn()
    const durationMs = performance.now() - start
    return { result, durationMs }
  } catch (err) {
    const durationMs = performance.now() - start
    throw { err, durationMs } // throw custom duration error object
  }
}
