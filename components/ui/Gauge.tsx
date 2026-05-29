import { motion } from 'framer-motion'

interface GaugeProps {
  value: number
  max?: number
  label?: string
  unit?: string
  colorPhases?:
  | { type: "value"; greenEnd: number; blueEnd: number; redEnd: number }
  | { type: "ratio"; greenEnd: number; blueEnd: number; redEnd: number }
}

export function Gauge({
  value,
  max = 100, // fallback 100
  label = "Metric",
  unit = "",
  colorPhases,
}: GaugeProps) {
  const clamped = Math.min(Math.max(value, 0), max)

  // half a circle
  const size = 200
  const center = size / 2
  const radius = 70

  // all three pieces, base arc, active arc, and needle angle mapping (angleForValue) must follow the same angle range
  // align svg coordinates

  // arc topics
  // beginning and end arc angle, see use at svg path
  const startMeterAngle = -180
  const endMeterAngle = 0

  // mapping by normalzing the values to a 1 to 1 angle to value ratio
  const angleForValue = (val: number) => {
    const ratio = val / max
    return startMeterAngle + (endMeterAngle - startMeterAngle) * ratio
  }

  const currentNeedleAngle = angleForValue(clamped)

  // arc phases, see use at svg path stroke attribute
  const phaseColor = getPhaseColor(clamped, max, colorPhases)

  const viewBoxPadding = 20

  // control levers
  // stiffness - how fast the needle moves
  // mass - how heavy the needle feels
  // damping - ho much the needl resists bouncing
  const needleAnimationLevers = {
    stiffness: 120,
    damping: 30,
    mass: 1.2
  }

  const startNeedleAngle = startMeterAngle // no hard coded values - aligned values

  return (
    <div className="flex flex-col items-center">
      <svg
        width={size}
        height={size * 0.9}
        viewBox={`${-viewBoxPadding} ${-viewBoxPadding} ${size + viewBoxPadding * 2} ${size}`}
      >
        {/* Base arc */}
        <path
          d={describeArc(center, center, radius, startMeterAngle, endMeterAngle)}
          stroke="#1f2937"
          strokeWidth={10}
          fill="none"
          strokeLinecap="round"
        />

        {/* Active arc */}
        <path
          d={describeArc(center, center, radius, startMeterAngle, endMeterAngle)}
          stroke={phaseColor}
          strokeWidth={10}
          fill="none"
          strokeLinecap="round"
        />

        {/* Gradient */}
        <defs>
          <linearGradient id="gauge-arc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>

        {/* Tick marks */}
        {Array.from({ length: 11 }).map((_, i) => {
          const v = (max / 10) * i
          const angle = angleForValue(v)
          const rad = (Math.PI / 180) * angle

          const inner = radius + 4
          const outer = radius + (i % 2 === 0 ? 16 : 10)

          const x1 = center + inner * Math.cos(rad)
          const y1 = center + inner * Math.sin(rad)
          const x2 = center + outer * Math.cos(rad)
          const y2 = center + outer * Math.sin(rad)

          return (
            <g key={i}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#6b7280"
                strokeWidth={i % 2 === 0 ? 2 : 1}
              />
              {i % 2 === 0 && (
                <text
                  x={center + (outer + 12) * Math.cos(rad)}
                  y={center + (outer + 12) * Math.sin(rad)}
                  fill="#9ca3af"
                  fontSize="10"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {v}
                </text>
              )}
            </g>
          )
        })}

        {/* Needle */}
        <motion.line
          x1={center}
          y1={center}
          x2={center + radius * 0.9}
          y2={center} // the actual algorithm for aligning angles
          stroke="#f97316"
          strokeWidth={3}
          strokeLinecap="round"
          style={{ originX: 0, originY: 0.5 }} // actual algorithm for aligning values
          initial={{ rotate: startNeedleAngle }}
          animate={{ rotate: currentNeedleAngle }}
          transition={needleAnimationLevers}
        />

        {/* Needle center */}
        <circle cx={center} cy={center} r={5} fill="#f97316" />

        {/* Value */}
        <text
          x={center}
          y={center + 40}
          fill="#e5e7eb"
          fontSize="24"
          fontWeight="600"
          textAnchor="middle"
        >
          {Math.round(clamped)} {unit}
        </text>
      </svg>

      {/* Bottom label */}
      <div className="mt-2 text-sm text-gray-400">{label}</div>
    </div>
  )
}

// Arc helper
function describeArc(cx: number, cy: number, r: number, start: number, end: number) {
  const startRad = (Math.PI / 180) * start
  const endRad = (Math.PI / 180) * end

  const x1 = cx + r * Math.cos(startRad)
  const y1 = cy + r * Math.sin(startRad)
  const x2 = cx + r * Math.cos(endRad)
  const y2 = cy + r * Math.sin(endRad)

  const largeArc = end - start <= 180 ? 0 : 1
  const sweepFlag = 1 // flips the arc to the top, 1 

  return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} ${sweepFlag} ${x2} ${y2}`
}

function getPhaseColor(value: number, max: number, phases: any) {
  if (!phases) return "white" // fallback svg green

  if (phases.type === "value") {
    if (value <= phases.greenEnd) return "#22c55e"
    if (value <= phases.blueEnd) return "#3b82f6"
    return "#ff3b30"
  }

  if (phases.type === "ratio") {
    const ratio = value / max
    if (ratio <= phases.greenEnd) return "#22c55e"
    if (ratio <= phases.blueEnd) return "#facc15"
    return "#ff3b30"
  }

  return "#22c55e"
}
