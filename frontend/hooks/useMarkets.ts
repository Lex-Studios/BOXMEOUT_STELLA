import { Market, MarketFilters } from "@/lib/api";

// Re-export MarketFilters so callers import from one place
export type { MarketFilters };

export interface UseMarketsResult {
  markets: Market[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

/**
 * Fetches and manages the list of boxing markets from the backend API.
 * Polls automatically every 30 seconds for live updates.
 * Returns loading and error states for the caller to handle.
 */
export function useMarkets(filters?: MarketFilters): UseMarketsResult {
  throw new Error("Not implemented");
}
