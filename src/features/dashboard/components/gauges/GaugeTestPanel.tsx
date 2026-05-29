'use client'

import { useState } from "react"
import { SpeedGauge } from "./SpeedGauge"

// extend test to choose values and types of gauges
//
export function GaugeTester() {
  const [value, setValue] = useState(0)

  return (
    <div className="flex flex-col items-center gap-4">
      <SpeedGauge value={value} />

      <div className="flex gap-2">
        <button
          onClick={() => setValue(10)}
          className="px-3 py-1 bg-green-700 text-white rounded"
        >
          Green (10)
        </button>

        <button
          onClick={() => setValue(90)}
          className="px-3 py-1 bg-blue-700 text-white rounded"
        >
          Blue (90)
        </button>

        <button
          onClick={() => setValue(170)}
          className="px-3 py-1 bg-red-700 text-white rounded"
        >
          Red (170)
        </button>
      </div>
    </div>
  )
}
