import { create } from "zustand"
import type { TelemetryStore } from "./types.ts"
import type { VehicleTelemetry } from "@/src/types/domain/telemetry/types.js"
import type { TelemetryPhase } from "@/src/types/domain/telemetry/TelemetryPhase"

export const useTelemetryStore = create<TelemetryStore>((set) => ({
  // initial state
  telemetry: null,
  phase: "INIT" as TelemetryPhase,
  error: null,
  lastUpdated: null,
  isLoading: false,

  setTelemetry: (data: VehicleTelemetry) =>
    set({
      telemetry: data,
      error: null,
      lastUpdated: Date.now(),
    }),

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
