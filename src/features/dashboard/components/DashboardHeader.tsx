'use client'

import { useTelemetryStore } from "../../telemetry/store/useTelemetryStore"
import { useVehicleControlStore } from "../../telemetry/store/useVehicleControlStore"

export function DashboardHeader() {
  const gear = useTelemetryStore((s) => s.telemetry?.gear)
  const climateMode = useVehicleControlStore((s) => s.climate.mode)
  const temperature = useVehicleControlStore((s) => s.climate.temperature)

  function getTempColor(temp: number) {
    if (temp <= 60) return "text-blue-400"   // MAX COOL
    if (temp >= 80) return "text-red-500"    // MAX HEAT
    if (temp < 70) return "text-blue-300"    // cool-ish
    if (temp > 70) return "text-red-300"     // warm-ish
    return "text-gray-100"                   // neutral
  }

  return (
    <div>
      <div className="mt-4 rounded-t-4xl border-slate-600 border-t border-l border-r border-b-0 h-3"></div>
      <div className="my-4 px-4 flex items-center gap-6">
        <div>
          <span className="text-sm text-gray-400">Gear</span>
          <span className="ml-1 text-xl font-semibold">{gear ?? "P"}</span>
        </div>

        <div>
          <span className="text-sm text-gray-400">Climate</span>
          <span className="ml-1 text-xl font-semibold">{climateMode}</span>
        </div>

        <div>
          <span className="text-sm text-gray-400">Temp</span>
          <span className={`ml-1 text-2xl font-mono font-bold ${getTempColor(temperature)}`}>
            {temperature}°
          </span>
        </div>
      </div>
    </div>
  )
}
