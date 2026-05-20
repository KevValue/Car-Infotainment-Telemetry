import { describe, expect, it, beforeEach, vi } from 'vitest'
import { winstonLoggerInstance } from '@/src/core/adapters/WinstonLogger'
import { POST } from '@/app/api/log/route'

beforeEach(() => {
  vi.clearAllMocks()
})

describe("Distributed tracing propagation", () => {
  it("uses incoming correlationId from headers", async () => {
    const spy = vi.spyOn(winstonLoggerInstance, "info")

    const req = new Request("http://localhost/api/log", {
      method: "POST",
      body: JSON.stringify({
        level: "info",
        message: "request completed",
        context: { x: 1 }
      }),
      headers: {
        "Content-Type": "application/json",
        "X-Correlation-Id": "upstream-id"
      }
    })

    const res = await POST(req)
    expect(res.status).toBe(200)

    expect(spy).toHaveBeenCalledWith(
      "request completed",
      expect.objectContaining({
        correlationId: "upstream-id",
        requestId: expect.any(String),
        method: "POST",
        url: "http://localhost/api/log",
        status: 200,
      })
    )
  }),
    it("keeps ALS context isolated across concurrent requests", async () => {
      const spy = vi.spyOn(winstonLoggerInstance, "info")

      const makeReq = (id: string) =>
        new Request("http://localhost/api/log", {
          method: "POST",
          body: JSON.stringify({ level: "info", message: "request completed" }),
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

      // Filter only the user logs (ignore middleware logs)
      const serviceLogs = spy.mock.calls.filter(
        ([message]) => message === "request completed"
      )
      expect(serviceLogs).toHaveLength(3)

      expect(spy).toHaveBeenCalledWith(

        "request completed",
        expect.objectContaining({ correlationId: "A" })
      )
      expect(spy).toHaveBeenCalledWith(

        "request completed",
        expect.objectContaining({ correlationId: "B" })
      )
      expect(spy).toHaveBeenCalledWith(

        "request completed",
        expect.objectContaining({ correlationId: "C" })
      )
    })
})
