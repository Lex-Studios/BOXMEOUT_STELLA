import { ClaimReceipt } from "@/components/ClaimButton";

export interface UseClaimWinningsResult {
  claim: (bet_id: string, market_id: string) => Promise<ClaimReceipt>;
  isLoading: boolean;
  error: Error | null;
}

/**
 * Detects whether to call claim_winnings() or claim_refund() based on market outcome.
 * Builds and submits the correct Soroban transaction via the connected wallet.
 * Returns a ClaimReceipt with the final payout amount on success.
 */
export function useClaimWinnings(): UseClaimWinningsResult {
  throw new Error("Not implemented");
}
