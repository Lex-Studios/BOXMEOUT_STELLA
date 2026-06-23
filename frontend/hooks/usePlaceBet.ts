import { Bet, BetSide } from "@/lib/api";

export interface UsePlaceBetResult {
  placeBet: (side: BetSide, amount: bigint) => Promise<Bet>;
  isLoading: boolean;
  error: Error | null;
}

/**
 * Builds and submits the place_bet Soroban transaction for a given market.
 * Handles transaction building, fee bump, wallet signing, and submission to Stellar.
 * Returns the confirmed Bet object on success.
 */
export function usePlaceBet(market_id: string): UsePlaceBetResult {
  throw new Error("Not implemented");
}
