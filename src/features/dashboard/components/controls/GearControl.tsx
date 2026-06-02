'use client'

import { useVehicleControlStore } from "@/src/features/telemetry/store/useVehicleControlStore"
import { ControlRow } from "./ControlRow"
import { Gear } from "@/src/types/domain/telemetry/constants"
import { useTelemetryStore } from "@/src/features/telemetry/store/useTelemetryStore"
import { ControlRowItem } from "./ControlRowItem"

export function GearControl() {
  const gear = useTelemetryStore((s) => s.telemetry?.gear)
  const setGear = useVehicleControlStore((s) => s.setGear)

  return (
    <ControlRow
      label="Gear"
    >
      <ControlRowItem
        type="selection"
        data={["P", "R", "N", "D"]}
        selected={gear}
        onSelect={(g) => setGear(g as Gear)}
      />
    </ControlRow>
  )
}
