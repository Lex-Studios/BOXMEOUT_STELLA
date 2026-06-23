import { Bet, PortfolioSummary } from "@/lib/api";

export interface UsePortfolioResult {
  bets: Bet[];
  summary: PortfolioSummary | null;
  isLoading: boolean;
  refetch: () => void;
}

/**
 * Fetches all bets and portfolio summary for the given Stellar address.
 * Returns empty bets and null summary when address is null (wallet not connected).
 * Does not activate any network requests until address is non-null.
 */
export function usePortfolio(address: string | null): UsePortfolioResult {
  throw new Error("Not implemented");
}
