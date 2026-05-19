export default function isMeasuredError(
  e: unknown
): e is { err: unknown; durationMs: number } {
  return (
    typeof e === "object" &&
    e !== null &&
    "err" in e &&
    "durationMs" in e
  )
}
