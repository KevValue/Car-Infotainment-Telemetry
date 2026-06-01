export function NavSpacer({ children, height = 100 }) {
  return (
    <div style={{ height }} className="flex flex-col justify-center">
      {children}
    </div>
  )
}
