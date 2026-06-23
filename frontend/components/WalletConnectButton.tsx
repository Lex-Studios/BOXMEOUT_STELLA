"use client";

export interface WalletConnectButtonProps {
  onConnected: (address: string) => void;
}

/**
 * Connect / disconnect wallet button supporting Freighter, Albedo, and xBull.
 * Shows truncated Stellar address (GABCD…XYZ) when connected.
 * Renders a Freighter install link when the extension is not detected.
 */
export function WalletConnectButton(_props: WalletConnectButtonProps): JSX.Element {
  throw new Error("Not implemented");
}
