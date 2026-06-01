interface GlobalGridProps {
  children: React.ReactNode
}
export function GlobalGrid({ children }: GlobalGridProps) {
  return (
    <div className="grid grid-cols-12 gap-6">
      {children}
    </div>
  )
}
