import { ToastType } from "@/components/Toast";

export interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

export interface UseToastResult {
  toasts: ToastItem[];
  showToast: (message: string, type: ToastType) => void;
  dismissToast: (id: string) => void;
}

/**
 * Global toast notification manager.
 * showToast() adds a new notification; dismissToast() removes it by ID.
 * Each toast auto-schedules its own dismissal after 5 seconds.
 * Intended to be used with a React context provider at the app root.
 */
export function useToast(): UseToastResult {
  throw new Error("Not implemented");
}
