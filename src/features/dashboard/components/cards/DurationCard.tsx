import { Card } from "@/components/ui/Card"

interface DurationCardProps {
  value: string | number
  label: string
  metric?: string
  duration?: string
}

export function DurationCard({
  value,
  metric,
  label,
  duration
}: DurationCardProps) {
  return (
    <Card>
      <div className="p-4 flex flex-col">
        <div className="text-3xl font-semibold">{value} <span className="text-sm text-slate-300">{metric}</span></div>
        <div className="text-sm text-slate-300">{label} </div>
        <div className="text-xs text-slate-500 mt-1">{duration}</div>
      </div>
    </Card>
  )
}
