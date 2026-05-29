import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={
        "rounded-xl bg-gray-900 border border-gray-800 p-4 shadow-md " +
        className
      }
    >
      {children}
    </div>
  )
}
