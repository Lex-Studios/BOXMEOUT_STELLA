export interface LoadingSkeletonProps {
  variant: "card" | "table" | "chart";
  count?: number;
}

/**
 * Animated placeholder rendered while data loads.
 * Each variant matches the dimensions of its real counterpart
 * (MarketCard, PortfolioTable row, MarketOddsChart) to prevent layout shift.
 */
export function LoadingSkeleton(_props: LoadingSkeletonProps): JSX.Element {
  throw new Error("Not implemented");
}
