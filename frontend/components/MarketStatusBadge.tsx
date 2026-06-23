import { MarketStatus } from "@/lib/api";

export interface MarketStatusBadgeProps {
  status: MarketStatus;
}

/**
 * Color-coded pill badge for a market's status.
 * Open=green, Locked=yellow, Resolved=blue, Disputed=red, Cancelled=gray.
 */
export function MarketStatusBadge(_props: MarketStatusBadgeProps): JSX.Element {
  throw new Error("Not implemented");
}
