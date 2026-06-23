import { CreateMarketFormData } from "@/components/CreateMarketForm";

export interface UseCreateMarketResult {
  createMarket: (data: CreateMarketFormData) => Promise<string>;
  isLoading: boolean;
  error: Error | null;
}

/**
 * Builds and submits a create_market() transaction to the MarketFactory contract.
 * Signs via the connected wallet and waits for ledger confirmation.
 * Returns the new market_id (hex string) on success.
 */
export function useCreateMarket(): UseCreateMarketResult {
  throw new Error("Not implemented");
}
