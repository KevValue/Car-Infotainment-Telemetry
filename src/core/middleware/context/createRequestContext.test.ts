import { describe, it, expect } from "vitest"
import { createRequestContext } from "./createRequestContext"

function mockRequest(headers: Record<string, string> = {}) {
  return {
    headers: {
      get: (key: string) => headers[key] ?? null,
    },
  } as unknown as Request
}

// no dependencies except uuid - also pure, I would focus on mocking requests rather than a spyOn
describe("createRequestContext", () => {
  it("uses incoming correlation ID when provided", () => {
    const req = mockRequest({
      "X-Correlation-Id": "incoming-id",
    })

    const ctx = createRequestContext(req)

    expect(ctx.correlationId).toBe("incoming-id")
    expect(ctx.requestId).toBe("mock-uuid")
  })

  it("generates correlation ID when none is provided", () => {
    const req = mockRequest()

    const ctx = createRequestContext(req)

    expect(ctx.correlationId).toBe("mock-uuid")
    expect(ctx.requestId).toBe("mock-uuid")
  })

  it("accepts lowercase header name", () => {
    const req = mockRequest({
      "x-correlation-id": "lowercase-id",
    })

    const ctx = createRequestContext(req)

    expect(ctx.correlationId).toBe("lowercase-id")
  })
})
