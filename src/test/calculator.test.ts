import { describe, it, expect } from "vitest";
import { annualOpportunity } from "@/config/accounts";

describe("annualOpportunity", () => {
  it("defaults: 1M visits, $2 RPV, 10% → $2.4M", () => {
    expect(annualOpportunity(1_000_000, 2, 10)).toBe(2_400_000);
  });
});
