'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

interface NavBarProps {
  links: Link[]
  children?: React.ReactNode
}

type Link = {
  label: string
  href: string
  order?: number
  position: string
}

export function NavBar({ links, children }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const sortedLinks = [...links].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return (
    <>
      {scrolled && <div className="h-[100px]">scrolled</div>}
      <nav
        className={`
    transition-all duration-300 z-50
    ${scrolled
            ? "sticky left-1/2 -translate-x-1/2 top-4 w-fit px-6 py-2 rounded-full shadow-lg bg-slate-800/80"
            : "relative w-full"
          }
  `}>
        <div className="flex items-center gap-2 px-6 h-16 justify-center">
          {sortedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
    relative flex items-center justify-center
    transition-all cursor-default

    ${isActive(link.href)
                  ? "bg-gray-200 text-black rounded-full px-4 py-2"
                  : `hover:bg-gray-100 hover:text-black rounded-full px-4 py-2
      `}
  `}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {children}
        </div>
      </nav>
    </>
  )
}
