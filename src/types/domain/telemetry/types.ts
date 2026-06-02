import { Gear } from "./constants"

export interface VehicleTelemetry {
  // mainly powertrain telemetry, mainly read only
  rpm: number
  speed: number
  fuelLevel: number
  coolantTemp: number
  oilPressure: number
  batteryVoltage: number
  gear: Gear
  timestamp: number

  // extend to vehicle state or commands
  // climate like temperature, fan speed, and mode.
  // locks like locked and unlocked
  // lights like high beams, interior lighting, fog lights, parking lights, auto, off
  // HVAC like recirculation
  // wipers, defrost, hazard lights
  // Vehicle Controls Store
}
