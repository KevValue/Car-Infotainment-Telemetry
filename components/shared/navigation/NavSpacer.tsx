interface NavSpacerProps {
  children: React.ReactNode
  height?: number
}

export function NavSpacer({ children, height = 100 }: NavSpacerProps) {
  return (
    <div style={{ height }} className="flex flex-col justify-center">
      {children}
    </div>
  )
}
