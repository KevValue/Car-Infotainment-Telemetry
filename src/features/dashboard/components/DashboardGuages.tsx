'use client'

import { useEffect } from "react"
import { useTelemetryStore } from "../../telemetry/store/useTelemetryStore"
import { SpeedGauge } from "./gauges/SpeedGauge"
import { TelemetryProducer } from "./TelemetryProducer"
import { Button } from "@/components/ui/Button"

export function DashboardGauges() {
  const speed = useTelemetryStore((s) => s.telemetry?.speed)

  useEffect(() => {
    // run on remount,
    // To do note: TelemetryProducer returning capabilities as definitions, rather than ui
  }, [])

  return (
    <div>
      <SpeedGauge value={speed ?? 120} />
      <div className="h-16"></div>
      <div className="flex gap-2">
        <TelemetryProducer />
        <TelemetryProducer n={100} intervalMs={50} />
        <TelemetryProducer ramp={{ apex: 120, steps: 100 }} />
      </div>
    </div>
  )
}
