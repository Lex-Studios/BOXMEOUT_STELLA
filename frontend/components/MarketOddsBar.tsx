export interface MarketOddsBarProps {
  poolA: bigint;
  poolB: bigint;
  fighterAName: string;
  fighterBName: string;
}

/**
 * Visual proportional bar showing Fighter A vs Fighter B pool split.
 * Color-coded with percentage labels. Falls back to 50/50 when both pools are 0.
 */
export function MarketOddsBar(_props: MarketOddsBarProps): JSX.Element {
  throw new Error("Not implemented");
}
