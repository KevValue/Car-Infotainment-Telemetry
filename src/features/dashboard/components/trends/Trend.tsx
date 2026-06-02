'use client'

import { Card } from "@/components/ui/Card";
import { useDashboardViewStore } from "../../stores/useDashboardViewStore";
import { TREND_MAP } from "./trendMap";

export function Trend() {
  const selectedStatsKey = useDashboardViewStore((s) => s.selectedStatsKey)

  const TrendComponent = selectedStatsKey ? TREND_MAP[selectedStatsKey] : null

  return (
    <Card>
      <div className="p-4">
        {TrendComponent ? (
          <TrendComponent />
        ) : (
          <div className="text-slate-500">Select a stat to view trends</div>
        )}
      </div>
    </Card>
  )
}
