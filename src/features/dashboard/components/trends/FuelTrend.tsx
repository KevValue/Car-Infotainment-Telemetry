import { Card } from "@/components/ui/Card"
import { FuelTrendChart } from "./FuelTrendChart"

interface FuelTrendProps {
  mock: number[]
}

export function FuelTrend({ mock }: FuelTrendProps) {
  return (
    <Card className="p-4">
      <div className="text-lg font-semibold mb-4">
        Fuel Trend
      </div>

      <FuelTrendChart data={mock} />
    </Card>
  )
}
