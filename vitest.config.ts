import { defineConfig } from "vitest/config"
import path from "path"

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/vitest/**/*.test.ts"]
  },
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "src")
      "@": path.resolve(__dirname)
    }
  }
})
