import { TelemetryPhase } from "@/src/types/domain/telemetry/TelemetryPhase";
import { mockGenerator } from "./mockGenerator";
import { TelemetryResponse } from "@/src/types/domain/telemetry/TelemetryResponse";
import { coreExtTelemetry } from "./mockVehicleTelemetry";
import { samplePartialTelemetryResponse } from "./mockPartialTelemetry";

// phase aware factory, phase dependency
export const generateTelemetryForPhase = (
  phase: TelemetryPhase
): TelemetryResponse => {
  switch (phase) {
    case TelemetryPhase.INIT:
      return {
        ok: true,
        data: coreExtTelemetry()
      }
    case TelemetryPhase.WARMUP:
      return samplePartialTelemetryResponse
    case TelemetryPhase.FULL:
      return mockGenerator("full")
    default: return {
      ok: false,
      error: "Unknown telemetry phase",
      timestamp: Date.now()
    }
  }
}

// HTTP is stateless, has no memory, not a great location for the FSM.
// Init FSM and a FSM journal in memory (push state into a buffer), a singleton.
// define a function that retrieves journal, a polling function
// pagination? (polling)
// Fixed short polling at /job/{id} or adaptive long polling {
// "nextPollMs": 200
// }
//or websocket, push updates to clients by websocket
