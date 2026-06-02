'use client'

import { DurationCard } from "./cards/DurationCard";
import { cardFactory } from "./stats/cardFactory";

export function DashboardStats() {
  // to do: refactor each card as a prop for data ingestion, partial refactored

  // const speed = useTelemetryStore((s) => s.telemetry?.speed)
  const cards = cardFactory()

  return (
    <div className="flex flex-col gap-4">
      {cards.map(({ key, component: Component, props }) => (
        <Component key={key} {...props} />
      ))}
      <DurationCard value={128} metric={"mph"} label="Avg. Speed" />
    </div>
  )
}
