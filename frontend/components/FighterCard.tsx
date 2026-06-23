import { Fighter } from "@/lib/api";

export interface FighterCardProps {
  fighter: Fighter;
  side: "A" | "B";
  poolAmount: bigint;
  impliedOdds: number; // 0–100 percentage
}

/**
 * Displays one fighter's info: name, record, weight class, nationality.
 * Shows current pool size in XLM and implied win probability as a percentage.
 */
export function FighterCard(_props: FighterCardProps): JSX.Element {
  throw new Error("Not implemented");
}
