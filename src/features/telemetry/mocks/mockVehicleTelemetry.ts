import { GEARS, GEAR } from "@/src/types/domain/telemetry/constants"
import { TelemetryResponse } from "@/src/types/domain/telemetry/TelemetryResponse"
import { VehicleTelemetry } from "@/src/types/domain/telemetry/types"

export const coreExtTelemetry = (
  overrides: Partial<VehicleTelemetry> = {}
): VehicleTelemetry => {

  const core: VehicleTelemetry = {
    rpm: 0,
    speed: 0,
    fuelLevel: 0,
    coolantTemp: 0,
    oilPressure: 0,
    batteryVoltage: 0,
    gear: GEARS[Math.floor(Math.random() * GEARS.length)],
    timestamp: 0
  }

  return {
    ...core,
    ...overrides
  }
}

export const mockVehicleTelemetry = (): TelemetryResponse => {

  const now = Date.now()

  const mockOverride = {
    rpm: Math.floor(Math.random() * 6000),
    speed: Math.floor(Math.random() * 120),
    fuelLevel: Math.random(),
    coolantTemp: 90 + Math.random() * 10,
    oilPressure: 30 + Math.random() * 5,
    batteryVoltage: 13.5 + Math.random() * 0.2,
    gear: GEAR.DRIVE,
    timestamp: now
  }

  return {
    ok: true,
    data: coreExtTelemetry(mockOverride)
  }
}
