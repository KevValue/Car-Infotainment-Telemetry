interface TemperatureControlProps {
  label: string
  value: number
  onChange: (value: number) => void
}

export function TemperatureControl({ label, value, onChange }: TemperatureControlProps) {
  return (
    <div>
      <div className="">{label}</div>
      <div className="flex items-center gap-3">
        {/* Decrease */}
        <button
          onClick={() => onChange(value - 1)}
          className="px-3 py-2 rounded-md border bg-gray-800 hover:bg-gray-700"
        >
          -
        </button>

        {/* Temperature Display */}
        <div className="text-lg font-semibold w-12 text-center">
          {value}°
        </div>

        {/* Increase */}
        <button
          onClick={() => onChange(value + 1)}
          className="px-3 py-2 rounded-md border bg-gray-800 hover:bg-gray-700"
        >
          +
        </button>
      </div>
    </div>
  )
}
