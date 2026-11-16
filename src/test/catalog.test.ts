import { describe, it, expect } from "vitest";
import { catalog } from "@/config/accounts/skechers-products";
import { skechers } from "@/config/accounts/skechers";

describe("Skechers ACS demo scenarios", () => {
  it("has exactly four search scenarios", () => {
    expect(skechers.queries.map((q) => q.id)).toEqual(["marathon", "wedding", "hikes", "walking"]);
  });
  it("never references the removed 'open toe shoes for my mom' query", () => {
    expect(JSON.stringify(skechers).toLowerCase()).not.toContain("for my mom");
  });
  it("shows exactly four products per scenario", () => {
    for (const q of skechers.queries) expect(q.products).toHaveLength(4);
  });
  it("uses all 16 uploaded images once each", () => {
    const images = Object.values(catalog)
      .flat()
      .map((p) => p.image);
    expect(images).toHaveLength(16);
    expect(new Set(images).size).toBe(16);
  });
  it("does not feature Arch Fit Granola - Mellow Skies anywhere", () => {
    expect(JSON.stringify(skechers)).not.toMatch(/Mellow Skies/);
  });
  it("defaults to $500M revenue, 12% search share and 12% RPV uplift", () => {
    expect(skechers.calculator).toEqual({
      annualRevenue: 500_000_000,
      searchSharePct: 12,
      upliftPct: 12,
    });
  });
  it("uses the owner-specified wedding, hiking and walking products", () => {
    expect(catalog.wedding.map((p) => p.name)).toEqual([
      "BOBS Misty Kiss - Stormy Steps",
      "BOBS Desert Kiss Low - Boho Glide",
      "BOBS Desert Kiss - Sun Shining",
      "BOBS Desert Kiss Low",
    ]);
    expect(catalog.hikes.map((p) => p.price)).toEqual(["$105.00", "$64.99", "$100.00", "$120.00"]);
    expect(catalog.walking[2]?.name).toBe("GO WALK Arch Fit 2.0 Sandal - Talia");
  });
});
