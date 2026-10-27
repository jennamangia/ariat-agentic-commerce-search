import { describe, it, expect } from "vitest";
import { searchRevenueModel, revenueLimits, modeledScenarios } from "@/lib/revenue-model";

describe("Skechers modeled revenue", () => {
  it("$500M × 25% produces a $125M eligible revenue base", () => {
    expect(searchRevenueModel(500_000_000, 25, 12).searchRevenue).toBe(125_000_000);
  });
  it("12% uplift on the eligible base produces $15M, without double counting", () => {
    expect(searchRevenueModel(500_000_000, 25, 12).incrementalRevenue).toBe(15_000_000);
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
    expect(modeledScenarios.map(s => searchRevenueModel(500_000_000, 25, s.upliftPct).incrementalRevenue)).toEqual([6_250_000, 15_000_000, 22_500_000]);
  });
});
