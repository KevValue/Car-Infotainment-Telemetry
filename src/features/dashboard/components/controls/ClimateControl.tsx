'use client'

import { useVehicleControlStore } from "@/src/features/telemetry/store/useVehicleControlStore"
import { ControlRow } from "./ControlRow"
import { ControlRowItem } from "./ControlRowItem"

export function ClimateControl() {
  const climate = useVehicleControlStore((s) => s.climate)
  const setClimate = useVehicleControlStore((s) => s.setClimate)

  return (
    <div className="flex items-center">
      <ControlRow label="Climate">
        <ControlRowItem
          type="selection"
          data={["Auto", "Cool", "Heat"]}
          selected={climate.mode}
          onSelect={(label) => {
            const mode = label.toLowerCase() as "auto" | "cool" | "heat"
            setClimate({ mode })
          }}
        />

        <ControlRowItem
          type="temperature"
          value={climate.temperature}
          onChange={(temp) => setClimate({ temperature: temp })}
        />
      </ControlRow>
    </div>)
}

