import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    setupFiles: [
      "__tests__/setupTests.ts",
    ],
    typecheck: { checker: "tsc" },
    environment: "node",
    coverage: {
      enabled: true,
      all: true,
      provider: "c8",
    }
  }
})