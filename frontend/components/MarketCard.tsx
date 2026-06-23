import { Market } from "@/lib/api";

export interface MarketCardProps {
  market: Market;
  showOdds: boolean;
}

/**
 * Displays a compact preview of one boxing market.
 * Shows fighter names, scheduled date, pool sizes, and implied odds bar.
 * Clicking the card navigates to /markets/[id].
 */
export default function MarketCard({ market, showOdds }: MarketCardProps): JSX.Element {
  throw new Error("Not implemented");
}
