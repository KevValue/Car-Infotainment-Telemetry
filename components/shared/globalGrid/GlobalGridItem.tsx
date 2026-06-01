interface GlobalGridItemProps {
  span?: SpanConfig,
  children: React.ReactNode
}

type SpanConfig =
  | SpanNumbers
  | {
    base?: SpanNumbers
    sm?: SpanNumbers
    md?: SpanNumbers
    lg?: SpanNumbers
    xl?: SpanNumbers
  }

type SpanNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type Breakpoint = "base" | "sm" | "md" | "lg" | "xl"

const SPAN_MAP: Record<SpanNumbers, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
}

const BREAKPOINTS: Record<Breakpoint, string> = {
  base: "",
  sm: "sm:",
  md: "md:",
  lg: "lg:",
  xl: "xl:",
}

const ORDER: Breakpoint[] = ["base", "sm", "md", "lg", "xl"]

type CSSVars = React.CSSProperties & Record<string, string | number>

export function GlobalGridItem({ span = 12, children }: GlobalGridItemProps) {
  const style: CSSVars = {}
  const classes = ["col-span-[var(--span)]"]

  // extend CSSproperties for TS to accept CSS variables

  if (typeof span === "number") {
    style["--span"] = span
  } else {
    // self invention variables
    if (span.base) style["--span"] = span.base
    if (span.sm) style["--span-sm"] = span.sm
    if (span.md) style["--span-md"] = span.md
    if (span.lg) style["--span-lg"] = span.lg
    if (span.xl) style["--span-xl"] = span.xl

    if (span.sm !== undefined) classes.push("sm:col-span-[var(--span-sm)]")
    if (span.md !== undefined) classes.push("md:col-span-[var(--span-md)]")
    if (span.lg !== undefined) classes.push("lg:col-span-[var(--span-lg)]")
    if (span.xl !== undefined) classes.push("xl:col-span-[var(--span-xl)]")
  }

  const className = classes.join(" ")

  // insert arbitrary value to TAILWIND responsive prefix and grid colum span utility
  // arbitrary values added to grid span in Tailwind 3.2
  return (
    <div style={style} className={className}>{children}</div>
  )

  // let classes = ""
  //
  // if (typeof span === "number") {
  //   classes = SPAN_MAP[span]
  // } else {
  //   classes = ORDER.filter(bp => span[bp] !== undefined)
  //     .map(bp => {
  //       const prefix = BREAKPOINTS[bp]
  //       const value = span[bp] as SpanNumbers
  //       return `${prefix}${SPAN_MAP[value]}`
  //     })
  //     .join(" ")
  // }
  //
  // return (
  //   <div className={classes}>
  //     {children}
  //   </div>
  // )

  // const classes = (() => {
  //   if (typeof span === "number") {
  //     return `col - span - ${ span }`
  //   }
  //
  //   // very clever way to design opts with ifs by using an array as a seen, into view object
  //   const breakpoints: string[] = []
  //
  //   if (span.base) breakpoints.push(`col - span - ${ span.base }`)
  //   if (span.sm) breakpoints.push(`sm: col - span - ${ span.sm }`)
  //   if (span.md) breakpoints.push(`md: col - span - ${ span.md }`)
  //   if (span.lg) breakpoints.push(`lg: col - span - ${ span.lg }`)
  //   if (span.xl) breakpoints.push(`xl: col - span - ${ span.xl }`)
  //
  //   return breakpoints.join(" ")
  // })() // IIFE
  //
}
