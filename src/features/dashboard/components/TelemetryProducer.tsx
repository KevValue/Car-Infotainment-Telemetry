import { useTelemetryStore } from "../../telemetry/store/useTelemetryStore"

interface TelemetryProducerProps {
  n?: number
  intervalMs?: number
  ramp?: {
    apex: number
    steps: number
  }
}

export function TelemetryProducer({ n, intervalMs, ramp }: TelemetryProducerProps) {
  // smooth interval
  const updateSpeed = useTelemetryStore((s) => s.setSpeed)

  // math computation primitives
  const sendRandom = () => {
    const limit = 120
    const nextValue = Math.floor(Math.random() * limit)
    updateSpeed(nextValue)
  }

  const sendRandomMultiple = (count: number) => {
    const updateSpeed = useTelemetryStore.getState().setSpeed
    const limit = 120

    let i = 0
    const interval = setInterval(() => {
      const next = Math.floor(Math.random() * limit)
      updateSpeed(next)

      i++
      if (i >= count) clearInterval(interval)
    }, intervalMs)
  }

  function generateRamp(apex: number, steps: number): number[] {
    const up = Array.from({ length: steps }, (_, i) =>
      Math.round((i / (steps - 1)) * apex)
    )

    const down = Array.from({ length: steps }, (_, i) =>
      Math.round(apex - (i / (steps - 1)) * apex)
    )

    return [...up, ...down]
  }
  // generateRamp(120, 45), total 90 steps with an apex at value 120

  function playSequence(values: number[], onValue: (v: number) => void) {
    let i = 0

    function nextFrame() {
      // consume the value 1 by 1
      onValue(values[i])
      i++
      if (i < values.length) requestAnimationFrame(nextFrame)
    }

    requestAnimationFrame(nextFrame) // recursively run until i = values.length
  }

  if (ramp) {
    const { apex, steps } = ramp

    const runRamp = () => {
      const sequence = generateRamp(apex, steps)
      playSequence(sequence, (v) => updateSpeed(v))
    }

    return (
      <button onClick={runRamp}>
        Run Ramp to {apex}
      </button>
    )
  }

  if (n) {
    return (
      <button onClick={() => sendRandomMultiple(n)}>
        Send Random Speed
      </button>
    )
  }

  return (
    <button onClick={sendRandom}>
      Send Random Speed
    </button>
  )
}
