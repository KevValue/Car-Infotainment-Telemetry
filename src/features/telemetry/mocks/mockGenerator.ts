import { TelemetryResponse } from "@/src/types/domain/telemetry/TelemetryResponse"
import { mockErrorTelemetry } from "./mockErrorTelemetry"
import { mockPartialTelemetry, samplePartialTelemetry } from "./mockPartialTelemetry"
import { mockVehicleTelemetry } from "./mockVehicleTelemetry"

export type MockMode = "full" | "partial" | "error"

export const mockGenerator = (mode: MockMode): TelemetryResponse => {
  switch (mode) {
    case "full":
      return mockVehicleTelemetry()

    case "partial":
      return mockPartialTelemetry()

    case "error":
      return mockErrorTelemetry()

    default:
      return mockErrorTelemetry()
  }
}
