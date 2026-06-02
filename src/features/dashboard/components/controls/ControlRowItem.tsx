import { ControlRowItemSelection } from "./ControlRowItemSelection"

interface ControlRowItemProps {
  type: "selection" | "temperature"
  data?: string[]
  selected?: string
  onSelect?: (value: string) => void

  value?: number
  onChange?: (value: number) => void
}

export function ControlRowItem({
  type,
  data,
  selected,
  onSelect,
  value,
  onChange,
}: ControlRowItemProps) {
  if (type === "selection" && data) {
    return (
      <ControlRowItemSelection data={data} selected={selected} onSelect={onSelect} />
    )
  }

  if (type === "temperature" && value !== undefined) {

    const stepUpOne = value + 1
    const stepDownOne = value - 1
    // further refactor into Temperature Control 
    const MIN = 60
    const MAX = 80

    const range = (value: number, min: number, max: number) =>
      Math.min(Math.max(value, min), max)

    const upperBoundary = range(stepUpOne, MIN, MAX)
    const lowerBoundary = range(stepDownOne, MIN, MAX)

    const display =
      value <= MIN ? "MAX COOL" :
        value >= MAX ? "MAX HEAT" :
          `${value}°`


    return (
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange?.(lowerBoundary)}
          className="px-3 py-2 rounded-md border bg-gray-800 hover:bg-gray-700"
        >
          -
        </button>

        <div className="relative font-mono text-lg font-semibold text-center">
          <span className="invisible">MAX HEAT</span>
          <span className="absolute inset-0">{display}</span>
        </div>


        <button
          onClick={() => onChange?.(upperBoundary)}
          className="px-3 py-2 rounded-md border bg-gray-800 hover:bg-gray-700"
        >
          +
        </button>
      </div>
    )
  }

  return null
}
