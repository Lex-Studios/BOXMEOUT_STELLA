"use client";

export interface CountdownTimerProps {
  targetTimestamp: number; // Unix seconds
  label: string;           // e.g. "Betting closes in"
}

/**
 * Live countdown to a Unix timestamp, updated every second.
 * Displays HH:MM:SS format with the label prefix.
 * Switches to "LIVE" text once targetTimestamp is reached.
 */
export function CountdownTimer(_props: CountdownTimerProps): JSX.Element {
  throw new Error("Not implemented");
}
