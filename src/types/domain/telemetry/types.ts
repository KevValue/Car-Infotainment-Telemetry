import { Gear } from "./constants"

export interface VehicleTelemetry {
  rpm: number
  speed: number
  fuelLevel: number
  coolantTemp: number
  oilPressure: number
  batteryVoltage: number
  gear: Gear
  timestamp: number
}
