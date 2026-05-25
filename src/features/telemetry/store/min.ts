// minimum version
import { create } from "zustand"

export const useTelemetryStore = create((set) => ({
  telemetry: null,
  phase: "INIT",
  error: null,
  lastUpdated: null,
  isLoading: false,

  setTelemetry: (data) =>
    set({
      telemetry: data,
      error: null,
      lastUpdated: Date.now(),
    }),

  setPhase: (phase) => set({ phase }),

  setError: (error) =>
    set({
      error,
      isLoading: false,
    }),

  setLoading: (loading) => set({ isLoading: loading }),
}))
