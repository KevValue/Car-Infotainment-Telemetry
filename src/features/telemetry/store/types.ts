import { VehicleTelemetry } from "@/src/types/domain/telemetry/types"
import { TelemetryPhase } from "@/src/types/domain/telemetry/TelemetryPhase"

// store interface
export interface TelemetryStore {
  telemetry: VehicleTelemetry | null
  phase: TelemetryPhase
  error: string | null
  lastUpdated: number | null
  isLoading: boolean

  setTelemetry: (data: VehicleTelemetry) => void
  setPhase: (phase: TelemetryPhase) => void
  setError: (error: string) => void
  setLoading: (loading: boolean) => void
}
