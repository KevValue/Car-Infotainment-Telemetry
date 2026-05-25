import { TelemetryPhase } from './TelemetryPhase'

export class TelemetryStateMachine {
  private phase: TelemetryPhase = TelemetryPhase.INIT

  get currentPhase(): TelemetryPhase {
    return this.phase
  }

  next(): void {
    if (this.phase === TelemetryPhase.INIT) {
      this.phase = TelemetryPhase.FULL
    }
  }

  reset(): void {
    this.phase = TelemetryPhase.INIT
  }
}

// defines telemetry transitions
