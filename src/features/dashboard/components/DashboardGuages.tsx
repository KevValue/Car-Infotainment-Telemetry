'use client'

import { useEffect } from "react"
import { useTelemetryStore } from "../../telemetry/store/useTelemetryStore"
import { SpeedGauge } from "./gauges/SpeedGauge"
import { TelemetryProducer } from "./TelemetryProducer"

export function DashboardGauges() {
  const speed = useTelemetryStore((s) => s.telemetry?.speed)

  useEffect(() => {
    // run on remount,
    // To do note: TelemetryProducer returning capabilities as definitions, rather than ui
  }, [])

  return (
    <div>
      <SpeedGauge value={speed ?? 120} />
      <SpeedGauge value={70} />
      <div><TelemetryProducer /></div>
      <div><TelemetryProducer n={100} intervalMs={50} /></div>
      <div><TelemetryProducer ramp={{ apex: 120, steps: 100 }} /></div>
    </div>
  )
}
