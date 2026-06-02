import { Card } from "@/components/ui/Card";

interface EventCardProps {
  label: string
  // values: Record<string, number>
  values: {
    "5m": number
    "1h": number
    "3h": number
  }
}

export function EventCard({
  label,
  values
}: EventCardProps) {
  return (
    <Card>
      <div className="p-4 flex flex-col gap-4">
        <div className="text-xl font-semibold">{label}</div>

        <div className="grid grid-cols-3 gap-4 text-center">

          {/* 5m */}
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-red-400">{values["5m"]}</span>
            <span className="text-xs text-slate-400">5m</span>
          </div>

          {/* 1h */}
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-yellow-400">{values["1h"]}</span>
            <span className="text-xs text-slate-400">1h</span>
          </div>

          {/* 3h */}
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-green-400">{values["3h"]}</span>
            <span className="text-xs text-slate-400">3h</span>
          </div>

        </div>
      </div>
    </Card>
  )
}
