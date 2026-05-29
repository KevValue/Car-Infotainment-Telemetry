'use client'

import { Gauge } from "@/components/ui/Gauge"

export function SpeedGauge({ value }: { value: number }) {
  return (
    <Gauge
      value={value}
      max={180} // override max
      unit="mph"
      label="Speed"
      colorPhases={{
        type: "ratio",
        greenEnd: 0.4,
        blueEnd: 0.75,
        redEnd: 1.0
      }}
    />
  )
}
