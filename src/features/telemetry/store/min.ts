// minimum version
import { create } from "zustand"
import type { VehicleTelemetry } from "@/src/types/domain/telemetry/types.js"
import type { TelemetryPhase } from "@/src/types/domain/telemetry/TelemetryPhase"

export interface TelemetryStoreMin {
  telemetry: VehicleTelemetry | null
  phase: TelemetryPhase
  error: string | null
  lastUpdated: number | null
  isLoading: boolean
  setTelemetry: (data: Partial<VehicleTelemetry>) => void
  setPhase: (phase: TelemetryPhase) => void
  setError: (error: string) => void
  setLoading: (loading: boolean) => void
}

export const useTelemetryStore = create<TelemetryStoreMin>((set) => ({
  telemetry: null,
  phase: "INIT" as TelemetryPhase,
  error: null,
  lastUpdated: null,
  isLoading: false,

  setTelemetry: (data: Partial<VehicleTelemetry>) =>
    set((state) => ({
      telemetry: state.telemetry ? { ...state.telemetry, ...data } : null,
      error: null,
      lastUpdated: Date.now(),
    })),

  setPhase: (phase: TelemetryPhase) =>
    set({ phase }),

  setError: (error: string) =>
    set({
      error,
      isLoading: false,
    }),

  setLoading: (loading: boolean) =>
    set({ isLoading: loading }),
}))
