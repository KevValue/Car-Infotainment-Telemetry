import { als } from "@/src/core/logging/als"
import { WinstonLogger } from "@/src/core/adapters/WinstonLogger"

// test goals
// Verify that ALS context is injected
// Verify that Winston Logger enriches logs
// Verify structured JSON is emitted
// Verify that the Winston Logger adapter works

describe("Structured Logger", () => {
  it("injects ALS context into logs", () => {
    const logger = new WinstonLogger()

    // Spy on winstonLogger.log
    const spy = jest.spyOn(require("@/src/core/logging/winston").winstonLogger, "log")

    // all business scoped meta data
    const customContext = {
      duration: 100,
      userId: "1", // may be part of the request context
      orderId: 200,
    }

    als.run(
      // set ALS context set by middleware (global tracing identifiers)
      { correlationId: "corr-123", requestId: "req-999" },
      // access to ALS context, a backpack of objects
      // pocket pattern
      () => {
        // the info method has a als.getStore() that returns the context object above
        logger.info("hello", customContext)
      }
    )

    // instruct the test results
    expect(spy).toHaveBeenCalledWith("info", expect.objectContaining({
      message: "hello",
      duration: 100,
      userId: "1",
      orderId: 200,
      correlationId: "corr-123",
      requestId: "req-999",
      timestamp: expect.any(String)
    }))
  })
})
