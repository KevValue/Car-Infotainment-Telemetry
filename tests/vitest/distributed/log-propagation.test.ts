import { describe, expect, it, beforeEach, vi } from 'vitest'
import { winstonLogger } from '@/src/core/logging/winston'
import { POST } from '@/app/api/log/route'

beforeEach(() => {
  vi.clearAllMocks()
})

describe("Distributed tracing propagation", () => {
  it("uses incoming correlationId from headers", async () => {
    const spy = vi.spyOn(winstonLogger, "log")

    const req = new Request("http://localhost/api/log", {
      method: "POST",
      body: JSON.stringify({
        level: "info",
        message: "api test",
        context: { x: 1 }
      }),
      headers: {
        "Content-Type": "application/json",
        "X-Correlation-Id": "upstream-id"
      }
    })

    const res = await POST(req)
    expect(res.status).toBe(200)

    expect(spy).toHaveBeenCalledWith("info", expect.objectContaining({
      message: "api test",
      x: 1,
      correlationId: "upstream-id",
      requestId: expect.any(String)
    }))
  }),
    it("keeps ALS context isolated across concurrent requests", async () => {
      const spy = vi.spyOn(winstonLogger, "log")

      const makeReq = (id: string) =>
        new Request("http://localhost/api/log", {
          method: "POST",
          body: JSON.stringify({ level: "info", message: id }),
          headers: {
            "Content-Type": "application/json",
            "X-Correlation-Id": id
          }
        })

      await Promise.all([
        POST(makeReq("A")),
        POST(makeReq("B")),
        POST(makeReq("C"))
      ])

      console.log(spy.mock.calls)

      expect(spy).toHaveBeenCalledTimes(3)

      expect(spy).toHaveBeenCalledWith(
        "info",
        expect.objectContaining({ correlationId: "A" })
      )
      expect(spy).toHaveBeenCalledWith(
        "info",
        expect.objectContaining({ correlationId: "B" })
      )
      expect(spy).toHaveBeenCalledWith(
        "info",
        expect.objectContaining({ correlationId: "C" })
      )
    })
})
