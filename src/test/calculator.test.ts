import { describe, it, expect } from "vitest";
import { searchRevenueModel, revenueLimits, modeledScenarios } from "@/lib/revenue-model";

describe("Skechers modeled revenue", () => {
  it("$500M × 12% produces a $60M search-attributed base", () => {
    expect(searchRevenueModel(500_000_000, 12, 12).searchRevenue).toBe(60_000_000);
  });
  it("12% RPV uplift on $60M produces $7.2M", () => {
    expect(searchRevenueModel(500_000_000, 12, 12).incrementalRevenue).toBeCloseTo(7_200_000);
  });
  it("0% uplift produces no incremental revenue", () => {
    expect(searchRevenueModel(500_000_000, 25, 0).incrementalRevenue).toBe(0);
  });
  it("recalculates when annual revenue and search share change", () => {
    expect(searchRevenueModel(1_000_000_000, 50, 12).incrementalRevenue).toBe(60_000_000);
  });
  it("preserves annual revenue range $50M to $2B", () => {
    expect(revenueLimits.annualRevenue).toEqual({ min: 50_000_000, max: 2_000_000_000 });
  });
  it("preserves search share range 5% to 50%", () => {
    expect(revenueLimits.searchSharePct).toEqual({ min: 5, max: 50 });
  });
  it("preserves uplift range 0% to 25%", () => {
    expect(revenueLimits.upliftPct).toEqual({ min: 0, max: 25 });
  });
  it("models the 5%, 12%, 18% scenarios on the same eligible base", () => {
    expect(modeledScenarios.map(s => Math.round(searchRevenueModel(500_000_000, 12, s.upliftPct).incrementalRevenue))).toEqual([3_000_000, 7_200_000, 10_800_000]);
  });
});
