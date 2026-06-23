import { FighterCard } from "@/components/FighterCard";
import { BettingInterface } from "@/components/BettingInterface";
import { MarketOddsBar } from "@/components/MarketOddsBar";
import { MarketOddsChart } from "@/components/MarketOddsChart";
import { MarketStatusBadge } from "@/components/MarketStatusBadge";
import { CountdownTimer } from "@/components/CountdownTimer";

interface Props {
  params: { id: string };
}

/**
 * Market detail page — server component.
 * Renders fighter cards, live odds bar, betting interface, and bet history.
 * Passes market_id down to client components for real-time polling.
 */
export default async function MarketDetailPage({ params }: Props): Promise<JSX.Element> {
  throw new Error("Not implemented");
}
