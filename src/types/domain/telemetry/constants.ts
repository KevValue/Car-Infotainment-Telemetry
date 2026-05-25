// runtime constant
export const GEARS = ["P", "R", "N", "D", "1", "2", "3"] as const
// typesafe union
export type Gear = typeof GEARS[number]

// no magic numbers, named gear constants
export const GEAR = {
  PARK: "P",
  REVERSE: "R",
  NEUTRAL: "N",
  DRIVE: "D",
  ONE: "1",
  TWO: "2",
  THREE: "3"
} as const
