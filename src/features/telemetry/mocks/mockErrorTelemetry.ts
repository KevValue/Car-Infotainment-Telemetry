import { TelemetryResponse } from "@/src/types/domain/telemetry/TelemetryResponse"

export const mockErrorTelemetry = (): TelemetryResponse => {
  return {
    ok: false,
    error: "Telemetry unavailable",
    timestamp: Date.now()
  }
}
