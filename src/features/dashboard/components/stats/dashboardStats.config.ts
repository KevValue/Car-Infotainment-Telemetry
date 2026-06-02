// src/features/dashboard/components/stats/dashboardStats.config.ts

export type DashboardStatType =
  | "duration"
  | "event"
  | "simple"

export interface DashboardStatConfig {
  key: string
  enabledConfig: boolean
  enabledDev: boolean
  type: DashboardStatType
  label: string
  duration?: string
  metric?: string
  selector?: (s: any) => any // value
  mock?: any // value
}

export const dashboardStatsConfig: DashboardStatConfig[] = [
  {
    key: "avgSpeed",
    enabledConfig: process.env.NEXT_PUBLIC_SHOW_AVG_SPEED === "true",
    enabledDev: true,
    type: "duration",
    label: "Avg. Speed",
    duration: "1h",
    metric: "mph",
    // selector: (s) => s.telemetry?.speed,
    mock: 100
  },
  {
    key: "harshEvents",
    enabledConfig: process.env.NEXT_PUBLIC_SHOW_HARSH_EVENTS === "true",
    enabledDev: true,
    type: "event",
    label: "Harsh Events",
    mock: {
      "5m": 12,
      "1h": 37,
      "3h": 82
    }
  },
  {
    key: "fuel",
    enabledConfig: process.env.NEXT_PUBLIC_SHOW_FUEL === "true",
    enabledDev: true,
    type: "simple",
    label: "% Fuel Level",
    mock: 100
  },
]
