import { VehicleTelemetry } from "@/src/types/domain/telemetry/types"
import { initialVehicleTelemetry } from "../mocks/initialState"

export interface TelemetryProvider {
  getTelemetry: () => Promise<{
    ok: boolean
    data?: VehicleTelemetry
    error?: string
  }>
}

export const mockTelemetryProvider: TelemetryProvider = {
  async getTelemetry() {
    try {
      // swap this for mock generator later
      return {
        ok: true,
        data: initialVehicleTelemetry,
      }
    } catch (err) {
      return {
        ok: false,
        error: "Mock telemetry failed",
      }
    }
  },
}
