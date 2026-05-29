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

      <main className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2">{core.gauges}</section>

        <aside>{core.stats}</aside>

        {children}
      </main>
    </div>
  )
}
