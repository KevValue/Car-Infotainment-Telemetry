export enum TelemetryPhase {
  INIT = "INIT", // sensors come online, base line data
  WARMUP = "WARMUP", // sensors warming up, partial data
  FULL = "FULL" // sensors online, full data
}

// a state machine that defines when telemetry exists
