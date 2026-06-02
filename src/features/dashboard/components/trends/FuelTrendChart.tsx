export function FuelTrendChart({ data }: { data: number[] }) {
  return (
    <div className="h-40 flex items-end gap-2">
      {data.map((v, i) => (
        <div
          key={i}
          className="bg-green-500 w-4 rounded"
          style={{ height: `${v}%` }}
        />
      ))}
    </div>
  )
}
