import { DashboardLayout } from "@/src/features/dashboard/components/DashboardLayout";
import { DashboardGauges } from "@/src/features/dashboard/components/DashboardGuages";
import { DashboardHeader } from "@/src/features/dashboard/components/DashboardHeader";
import { DashboardStats } from "@/src/features/dashboard/components/DashboardStats";
import { DashboardTrends } from "@/src/features/dashboard/components/DashboardTrends";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <DashboardLayout core={{
        header: <DashboardHeader />,
        gauges: <DashboardGauges />,
        stats: <DashboardStats />,
        trends: <DashboardTrends />
      }} />
    </div>
  )
}
