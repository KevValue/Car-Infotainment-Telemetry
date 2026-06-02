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

  setSpeed: (speed: number) =>
    set((state) => ({
      telemetry: {
        ...(state.telemetry ?? {} as VehicleTelemetry),
        speed
      },
      lastUpdated: Date.now()
    })
    ),

  updateField: (key, value) =>
    set((state) => ({
      telemetry: {
        ...(state.telemetry ?? {} as VehicleTelemetry),
        [key]: value
      },
      lastUpdated: Date.now()
    })),

  setTelemetry: (data: Partial<VehicleTelemetry>) =>
    set((state) => ({
      telemetry: { ...state.telemetry, ...data } as VehicleTelemetry, // assert full type, because type script is hinting that some fields are undefined
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
