import { FuelTrend } from "./FuelTrend";
import { mockFuelTrend } from "./mockFuelTrend";

export const TREND_MAP: Record<string, React.ComponentType<any>> = {
  // fuel: FuelTrend,
  // inject props at the map rather than the consumer component
  fuel: () => <FuelTrend mock={mockFuelTrend} />
}
