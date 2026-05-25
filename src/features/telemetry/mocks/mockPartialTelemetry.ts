import { VehicleTelemetry } from "@/src/types/domain/telemetry/types"
import { coreExtTelemetry } from "./mockVehicleTelemetry"
import { TelemetryResponse } from "@/src/types/domain/telemetry/TelemetryResponse"

export const makePartialTelemetry = (overrides?: Partial<VehicleTelemetry>): VehicleTelemetry => {
  return coreExtTelemetry(overrides)
}

export const mockPartialTelemetry = (overrides?: Partial<VehicleTelemetry>): TelemetryResponse => {
  return {
    ok: true,
    data: coreExtTelemetry(overrides)
  }
}

export const samplePartialTelemetry = makePartialTelemetry({
  speed: Math.floor(Math.random() * 100), // min max, rounded down
  timestamp: Date.now()
})

export const samplePartialTelemetryResponse = mockPartialTelemetry(samplePartialTelemetry)
