// an integration test

import { POST } from "@/app/api/log/route"
import { describe, it, expect, vi } from "vitest"
import { winstonLogger } from '@/src/core/logging/winston'

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

    expect(spy).toHaveBeenCalledWith("info", expect.objectContaining({
      message: "api test",
      x: 1,
      correlationId: expect.any(String),
      requestId: expect.any(String)
    }))
  })
})
