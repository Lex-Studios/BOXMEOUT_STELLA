"use client";

export interface BetAmountInputProps {
  value: string;
  onChange: (val: string) => void;
  min: number;
  max: number;
  estimatedPayout: bigint | null;
}

/**
 * Controlled XLM amount input with min/max validation.
 * Shows estimated payout below the input updated in real time.
 * Displays inline validation error when value is out of [min, max] range.
 */
export function BetAmountInput(_props: BetAmountInputProps): JSX.Element {
  throw new Error("Not implemented");
}
