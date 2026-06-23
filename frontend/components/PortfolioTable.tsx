"use client";
import { Bet, Market } from "@/lib/api";

export interface PortfolioTableProps {
  bets: Bet[];
  markets: Record<string, Market>;
}

/**
 * Table of user bets: Fight, Side, Amount (XLM), Status, Payout columns.
 * Sortable by any column. Filterable by bet status.
 * Shows empty-state illustration when bets array is empty.
 */
export function PortfolioTable(_props: PortfolioTableProps): JSX.Element {
  throw new Error("Not implemented");
}
