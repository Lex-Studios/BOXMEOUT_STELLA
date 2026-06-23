import { Market } from "@/lib/api";

export interface UseMarketResult {
  market: Market | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

/**
 * Fetches a single market by ID and polls every 10 seconds for live odds updates.
 * Returns null in market field while loading or if the market does not exist.
 */
export function useMarket(market_id: string): UseMarketResult {
  throw new Error("Not implemented");
}
