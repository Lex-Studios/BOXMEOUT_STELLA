"use client";
import { Market } from "@/lib/api";

export interface DisputeModalProps {
  market: Market;
  onDisputed: () => void;
}

/**
 * Modal for raising a dispute after market resolution.
 * Only visible within the protocol's dispute_window_sec after market.resolvedAt.
 * Submits raise_dispute() on-chain via wallet with the bettor's written reason.
 */
export function DisputeModal(_props: DisputeModalProps): JSX.Element {
  throw new Error("Not implemented");
}
