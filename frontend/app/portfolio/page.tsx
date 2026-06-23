"use client";
import { PortfolioTable } from "@/components/PortfolioTable";
import { ClaimButton } from "@/components/ClaimButton";
import { usePortfolio } from "@/hooks/usePortfolio";
import { useWallet } from "@/hooks/useWallet";

/**
 * Portfolio page — client component (requires wallet).
 * Shows user's full bet history, pending claims, and portfolio stats.
 * Redirects to home if no wallet is connected.
 */
export default function PortfolioPage(): JSX.Element {
  throw new Error("Not implemented");
}
