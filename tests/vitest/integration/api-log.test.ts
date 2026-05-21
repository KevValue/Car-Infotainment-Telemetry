// an integration test

import { POST } from "@/app/api/log/route"
import { describe, it, expect, vi } from "vitest"
import { winstonLoggerInstance } from '@/src/core/adapters/WinstonLogger'


// test goals
// 1. middleware is actually working
// 2. the logger is recieving enriched context
// 3. the route behaviour is behaves correctly end to end.
describe("POST /api/log", () => {
  // baseline behavior
  it("injects middleware context into logs", async () => {
    const spy = vi.spyOn(winstonLoggerInstance, "info")

    const req = new Request("http://localhost/api/log", {
      method: "POST",
      body: JSON.stringify({
        level: "info",
        message: "request completed",
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
    expect(spy).toHaveBeenCalledWith(
      "request completed",
      expect.objectContaining({
        correlationId: expect.any(String),
        requestId: expect.any(String),
        method: "POST",
        url: "http://localhost/api/log",
        status: 200,
        source: "middleware"
      })
    )
  })
})

describe("POST /api/log – duration enabled", () => {
  it("includes durationMs when LOG_DURATION is true", async () => {
    // process.env.LOG_DURATION = "true" // doesn't work, this is running at test time


    process.env.LOG_DURATION = "true" // only works before POST is imported

    const { winstonLoggerInstance } = await import("@/src/core/adapters/WinstonLogger")
    const spy = vi.spyOn(winstonLoggerInstance, "info")

    const { POST } = await import("@/app/api/log/route")

    const req = new Request("http://localhost/api/log", {
      method: "POST",
      body: JSON.stringify({
        level: "info",
        message: "request completed",
        context: { x: 1 }
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const res = await POST(req)
    expect(res.status).toBe(200)

    expect(spy).toHaveBeenCalledWith(
      "request completed", // info pipeline
      expect.objectContaining({
        durationMs: expect.any(Number),
        correlationId: expect.any(String),
        requestId: expect.any(String),
        method: "POST",
        url: "http://localhost/api/log",
        status: 200,
        source: "middleware"
      })
    )
  })
})

// if the log route stays the same, log route integration stays the same.
// This is route behavior, not middleware behavior.
// possible tests would be error path, invalid or missing JSON fields, missing correlationId, different log levels
