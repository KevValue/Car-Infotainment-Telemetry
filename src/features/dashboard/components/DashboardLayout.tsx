import { GlobalGrid } from '@/components/shared/globalGrid/GlobalGrid'
import { GlobalGridItem } from '@/components/shared/globalGrid/GlobalGridItem'
import { ReactNode } from 'react'

interface DashboardCore {
  header: ReactNode
  gauges: ReactNode
  stats: ReactNode
}

interface DashLayoutProps {
  children?: ReactNode
  core: DashboardCore
}

export function DashboardLayout({ core, children }: DashLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white flex flex-col">
      <header className="border-b border-gray-800 p-4">
        {core.header}
      </header>

      <main className="flex-1 p-6">
        <GlobalGrid>
          <GlobalGridItem span={{ base: 12, sm: 6, md: 6 }}>
            {core.gauges}
          </GlobalGridItem>

          <GlobalGridItem span={3}>
            <aside>{core.stats}</aside>
          </GlobalGridItem>

          <GlobalGridItem span={6}>
            <aside>{core.stats}</aside>
          </GlobalGridItem>

          <GlobalGridItem span={12}>
            {children}
          </GlobalGridItem>
        </GlobalGrid>
      </main>
    </div>
  )
}
