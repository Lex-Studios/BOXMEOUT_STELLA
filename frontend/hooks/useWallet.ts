export interface UseWalletResult {
  address: string | null;
  isConnected: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  signTransaction: (xdr: string) => Promise<string>;
}

/**
 * Manages Stellar wallet state using Freighter or compatible wallet APIs.
 * Abstracts Freighter/Albedo/xBull behind a common interface.
 * connect() throws a descriptive error if no wallet extension is installed.
 */
export function useWallet(): UseWalletResult {
  throw new Error("Not implemented");
}
