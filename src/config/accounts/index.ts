import { skechers } from "./skechers";
import type { AccountConfig } from "./types";

// Add new prospects (YETI, VF Corporation, Columbia...) here and switch ACTIVE_ACCOUNT.
export const accounts: Record<string, AccountConfig> = { skechers };
export const ACTIVE_ACCOUNT = "skechers";
export const account = accounts[ACTIVE_ACCOUNT];
export * from "./types";

export function annualOpportunity(monthlyVisits: number, rpv: number, improvementPct: number) {
  return monthlyVisits * 12 * rpv * (improvementPct / 100);
}
