import { Card } from "@/components/ui/Card";

interface SimpleCardProps {
  value: string
  label: string
  onClick: any
}

export function SimpleCard({ value, label, onClick }: SimpleCardProps) {
  return (
    <Card>
      <div className="p-4 flex flex-col" onClick={onClick}>
        <div className="text-3xl font-semibold">{value}</div>
        <div className="text-sm text-slate-300">{label}</div>
      </div>
    </Card>
  )
}
