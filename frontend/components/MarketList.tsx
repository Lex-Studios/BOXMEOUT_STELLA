import { Market, MarketStatus } from "@/lib/api";

export interface MarketListProps {
  markets: Market[];
  isLoading: boolean;
  filter?: MarketStatus;
}

/**
 * Renders a responsive grid of MarketCard components.
 * Shows LoadingSkeleton variants when isLoading=true.
 * Shows an empty state message when markets array is empty.
 */
export function MarketList(_props: MarketListProps): JSX.Element {
  throw new Error("Not implemented");
}
