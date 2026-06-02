interface ControlRowItemSelectionProps {
  data: string[]
  selected?: string
  onSelect?: (value: string) => void
}

export function ControlRowItemSelection({
  data,
  selected,
  onSelect,
}: ControlRowItemSelectionProps) {
  return (
    <div className="flex gap-2">
      {data.map((item) => (
        <button
          key={item}
          onClick={() => onSelect?.(item)}
          className={[
            "px-3 py-2 rounded-md border text-sm font-medium transition",
            selected?.toLowerCase() === item.toLowerCase()
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
          ].join(" ")}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
