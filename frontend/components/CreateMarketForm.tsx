"use client";

export interface CreateMarketFormData {
  fighterAName: string;
  fighterARecord: string;
  fighterANationality: string;
  fighterAWeightClass: string;
  fighterBName: string;
  fighterBRecord: string;
  fighterBNationality: string;
  fighterBWeightClass: string;
  scheduledAt: string;    // ISO date string
  bettingEndsAt: string;
  oracleAddress: string;
}

export interface CreateMarketFormProps {
  onSubmit: (formData: CreateMarketFormData) => Promise<void>;
}

/**
 * Multi-field form for creating a new boxing market.
 * Validates all fields before calling create_market() on MarketFactory.
 * Shows per-field validation errors inline. Disabled while submission is in-flight.
 */
export function CreateMarketForm(_props: CreateMarketFormProps): JSX.Element {
  throw new Error("Not implemented");
}
