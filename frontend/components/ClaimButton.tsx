"use client";
import { Bet, Market } from "@/lib/api";

export interface ClaimReceipt {
  betId: string;
  bettor: string;
  payout: bigint;
  claimedAt: string;
}

export interface ClaimButtonProps {
  bet: Bet;
  market: Market;
  onClaimed: (receipt: ClaimReceipt) => void;
}

/**
 * Renders "Claim Winnings" or "Claim Refund" based on market outcome and bet side.
 * Submits claim_winnings() or claim_refund() on-chain via wallet.
 * Disabled when bet.claimed=true or market is not Resolved/Cancelled.
 * Shows loading spinner while the transaction is in-flight.
 */
export function ClaimButton(_props: ClaimButtonProps): JSX.Element {
  throw new Error("Not implemented");
}
