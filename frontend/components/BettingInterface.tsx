"use client";
import { Bet, Market } from "@/lib/api";

export interface BettingInterfaceProps {
  market: Market;
  onBetPlaced: (bet: Bet) => void;
}

/**
 * Main betting UI on the market detail page.
 * Renders two side-select buttons (Fighter A / Fighter B) and a BetAmountInput.
 * Builds and submits the place_bet Soroban transaction via connected wallet.
 * Entire component is disabled when market.status !== "Open".
 */
export function BettingInterface(_props: BettingInterfaceProps): JSX.Element {
  throw new Error("Not implemented");
}
