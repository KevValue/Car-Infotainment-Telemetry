// an integration test

import { POST } from "@/app/api/log/route"
import { describe, it, expect, vi } from "vitest"
import { winstonLogger } from '@/src/core/logging/winston'

// test goals
// 1. middleware is actually working
// 2. the logger is recieving enriched context
// 3. the route behaviour is behaves correctly end to end.
describe("POST /api/log", () => {
  it("injects middleware context into logs", async () => {
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
        "X-Correleation-Id": "upstream-id"
      }
    })

    const res = await POST(req)
    expect(res.status).toBe(200)

    // spy on server's implementation of Ilogger, no need to go through a provider
    // because this is an api integration test that tests a route handler that hosts the server logger
    expect(spy).toHaveBeenCalledWith("info", expect.objectContaining({
      message: "api test",
      x: 1,
      correlationId: expect.any(String),
      requestId: expect.any(String)
    }))
  })
})

// if the log route stays the same, log route integration stays the same.
// This is route behavior, not middleware behavior.
// possible tests would be error path, invalid or missing JSON fields, missing correlationId, different log levels
