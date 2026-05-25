import { VehicleTelemetry } from "./types"

type Success = { ok: true; data: VehicleTelemetry }

type Error = { ok: false; error: string; timestamp: number }

export type TelemetryResponse = Success | Error
