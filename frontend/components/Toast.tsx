"use client";

export type ToastType = "success" | "error" | "info";

export interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  onDismiss: (id: string) => void;
}

/**
 * Non-blocking notification shown after wallet transactions.
 * success=green, error=red, info=blue styling.
 * Auto-dismisses after 5 seconds. Manual close button available.
 */
export function Toast(_props: ToastProps): JSX.Element {
  throw new Error("Not implemented");
}
