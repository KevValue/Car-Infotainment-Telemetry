import { mockTelemetryProvider } from "./mockTelemetryProvider"
// import { apiTelemetryProvider } from "./apiTelemetryProvider" // later

export const getTelemetryProvider = () => {
  // For now always return mock
  return mockTelemetryProvider
}
