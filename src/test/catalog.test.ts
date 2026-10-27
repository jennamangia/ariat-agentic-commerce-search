import { describe, it, expect } from "vitest";
import { catalog } from "@/config/accounts/skechers-products";
import { skechers } from "@/config/accounts/skechers";

describe("verified sales demo selections", () => {
  for (const id of ["marathon", "wedding", "mom", "hikes", "walking"] as const) {
    it(`${id} has exactly four distinct ACS products`, () => {
      expect(catalog[id]).toHaveLength(4);
      expect(new Set(catalog[id].map(p => p.name)).size).toBe(4);
    });
    it(`${id} has exactly four traditional products`, () => {
      expect(catalog.traditional[id]).toHaveLength(4);
    });
  }
  it("defaults to $500M annual revenue, 25% search share and 12% modeled RPV uplift", () => {
    expect(skechers.calculator).toEqual({annualRevenue:500_000_000,searchSharePct:25,upliftPct:12});
  });
  it("uses documented waterproof hiking products for all four wet hiking matches", () => {
    expect(catalog.hikes.every(p => p.tags.some(t => /waterproof/i.test(t)))).toBe(true);
  });
});