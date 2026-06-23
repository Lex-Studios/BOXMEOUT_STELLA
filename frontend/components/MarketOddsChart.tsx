"use client";
import { OddsSnapshot } from "@/lib/api";

export interface MarketOddsChartProps {
  marketId: string;
  historicalOdds: OddsSnapshot[];
}

/**
 * Line chart of historical implied odds over time (Recharts).
 * Shows how the Fighter A / B split shifted as bets came in.
 * Handles single-data-point gracefully — no chart crash.
 */
export function MarketOddsChart(_props: MarketOddsChartProps): JSX.Element {
  throw new Error("Not implemented");
}
