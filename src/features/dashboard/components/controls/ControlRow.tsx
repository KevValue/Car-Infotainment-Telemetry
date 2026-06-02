interface ControlRowProps {
  label: string
  children: React.ReactNode
}

export function ControlRow({ label, children }: ControlRowProps) {
  return (
    <div className="flex flex-col gap-2 p-3 bg-gray-900 shadow-sm">
      <div className="text-sm font-bold text-white">{label}</div>

      <div className="flex items-center gap-4">
        {children}
      </div>
    </div >
  )
}
