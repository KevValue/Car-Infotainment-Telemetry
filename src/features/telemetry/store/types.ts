import { VehicleTelemetry } from "@/src/types/domain/telemetry/types"
import { TelemetryPhase } from "@/src/types/domain/telemetry/TelemetryPhase"
import { Gear } from "@/src/types/domain/telemetry/constants"

// store interface
export interface TelemetryStore {
  telemetry: VehicleTelemetry | null
  phase: TelemetryPhase
  error: string | null
  lastUpdated: number | null
  isLoading: boolean

  setSpeed: (speed: number) => void
  updateField: (key: any, value: any) => void
  setTelemetry: (data: Partial<VehicleTelemetry>) => void
  setPhase: (phase: TelemetryPhase) => void
  setError: (error: string) => void
  setLoading: (loading: boolean) => void
}

export interface VehicleControls {
  climate: {
    temperature: number
    fanSpeed: number
    mode: "cool" | "heat" | "auto"
  }
  locks: {
    locked: boolean
  }
  lights: {
    headlights: boolean
    interior: boolean
  }
  gear: Gear

  setClimate: (partial: Partial<VehicleControls["climate"]>) => void
  setLocks: (partial: Partial<VehicleControls["locks"]>) => void
  setLights: (partial: Partial<VehicleControls["lights"]>) => void
  setGear: (gear: Gear) => void
}
