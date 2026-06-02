import { useTelemetryStore } from "@/src/features/telemetry/store/useTelemetryStore"
import { DurationCard } from "../cards/DurationCard"
import { DashboardStatConfig, dashboardStatsConfig, DashboardStatType } from "./dashboardStats.config"
import { EventCard } from "../cards/EventCard"
import { SimpleCard } from "../cards/SimpleCard"
import { useDashboardViewStore } from "../../stores/useDashboardViewStore"

export const CARD_MAP: Record<DashboardStatType, React.ComponentType<any>> = {
  duration: DurationCard,
  event: EventCard,
  simple: SimpleCard
}

export function isEnabled(stat: DashboardStatConfig) {
  return process.env.NODE_ENV === "development"
    ? stat.enabledDev
    : stat.enabledConfig
}

export function cardFactory() {
  const setSelectedStatsKey = useDashboardViewStore((s) => s.setSelectedStatsKey)
  return dashboardStatsConfig
    .filter((stat) => isEnabled(stat))
    .map((stat) => {
      const value = stat.selector
        ? useTelemetryStore(stat.selector)
        : stat.mock

      let component = CARD_MAP[stat.type]

      let props: any = {
        label: stat.label,
        onClick: () => setSelectedStatsKey(stat.key)
      }

      if (stat.type === "duration") {
        props.value = value
        props.duration = stat.duration
        props.metric = stat.metric
      }

      if (stat.type === "event") {
        props.values = value
      }

      if (stat.type === "simple") {
        props.value = value
      }

      return {
        key: stat.key,
        component: component,
        props
      }
    })
}
