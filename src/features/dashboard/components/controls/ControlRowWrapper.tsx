interface ControlRowProps {
  label: string
  data: string[]
  selected?: string
  onSelect?: (value: string) => void
  rightElement?: React.ReactNode
}

export function ControlRow({
  label,
  data,
  selected,
  onSelect,
  rightElement,
}: ControlRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 p-3 border rounded-lg bg-white shadow-sm">

      {/* Left side: label + buttons */}
      <div className="flex items-center gap-4">
        <div className="text-sm font-medium text-gray-800">{label}</div>

        <div className="flex gap-2">
          {data.map((item) => (
            <button
              key={item}
              onClick={() => onSelect?.(item)}
              className={[
                "px-3 py-2 rounded-md border text-sm font-medium transition",
                selected === item
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
              ].join(" ")}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {rightElement && <div className="flex-shrink-0">{rightElement}</div>}
    </div>
  )
}
