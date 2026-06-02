import { ClimateControl } from "./controls/ClimateControl";
import { GearControl } from "./controls/GearControl";

export function DashboardControls() {
  return (
    <div className="rounded-md p-4 space-y-4 bg-gray-900">
      <GearControl />
      <div className="w-px bg-gray-300 mx-4" />
      <ClimateControl />
    </div >
  )
}
