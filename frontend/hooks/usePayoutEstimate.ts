import { BetSide } from "@/lib/api";

export interface UsePayoutEstimateResult {
  estimate: bigint | null;
  isLoading: boolean;
}

/**
 * Debounced hook (300ms) that calls the payout estimate API whenever
 * side or amount changes. Returns null while inputs are invalid or loading.
 * Used to show live payout previews in BetAmountInput.
 */
export function usePayoutEstimate(
  market_id: string,
  side: BetSide | null,
  amount: bigint | null
): UsePayoutEstimateResult {
  throw new Error("Not implemented");
}
