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
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const sortedLinks = [...links].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  const visibleLinks = sortedLinks.slice(0, 3)
  const hiddenLinks = sortedLinks.slice(3)

  return (
    <>
      {scrolled && <div className="h-[100px]"></div>}
      <div className="flex md:hidden items-center justify-between px-4 py-4 z- relative">
        <div className="flex items-center gap-2">
          {visibleLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-full bg-slate-800 hover:bg-slate-700
 active:bg-slate-600 text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {hiddenLinks.length > 0 && (
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md bg-slate-800 hover:opacity-70 text-white"
          >
            ☰
          </button>
        )}

        {open && (
          <div className="md:hidden bg-slate-900 text-white p-4 space-y-4">
            {hiddenLinks.map(link => (
              <Link key={link.href} href={link.href} className="block py-2 text-lg">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
      <nav
        className={`
    transition-all duration-300 z-50 hidden md:flex md:justify-center pointer-events-none md:pointer-events-auto
    ${scrolled
            ? "sticky left-1/2 -translate-x-1/2 top-4 w-fit px-6 py-2 rounded-full shadow-lg bg-slate-800/80"
            : "relative w-full"
          }
  `}>
        <div className="flex items-center gap-2 px-6 justify-center">
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
