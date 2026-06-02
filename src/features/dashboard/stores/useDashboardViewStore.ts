import { create } from "zustand";

interface DashboardViewState {
  selectedStatsKey: string | null
  selectedDuration: string
  selectedMetric: string | null
  selectedZone: string | null

  setSelectedStatsKey: (key: string | null) => void
  setSelectedDuration: (duration: string) => void
  setSelectedMetric: (metric: string | null) => void
  setSelectedZone: (zone: string | null) => void
}

export const useDashboardViewStore = create<DashboardViewState>((set) => ({
  selectedStatsKey: null,
  selectedMetric: null,
  selectedDuration: "1h",
  selectedZone: null,

  setSelectedStatsKey: (key) => set({ selectedStatsKey: key }),
  setSelectedDuration: (duration) => set({ selectedDuration: duration }),
  setSelectedMetric: (metric) => set({ selectedMetric: metric }),
  setSelectedZone: (zone) => set({ selectedZone: zone }),
}))
