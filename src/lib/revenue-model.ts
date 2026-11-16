export const revenueLimits = {
  annualRevenue: { min: 50_000_000, max: 2_000_000_000 },
  searchSharePct: { min: 5, max: 50 },
  upliftPct: { min: 0, max: 25 },
};

export function searchRevenueModel(
  annualRevenue: number,
  searchSharePct: number,
  upliftPct: number,
) {
  const searchRevenue = (annualRevenue * searchSharePct) / 100;
  return { searchRevenue, incrementalRevenue: (searchRevenue * upliftPct) / 100 };
}

export const modeledScenarios = [
  { name: "Conservative", upliftPct: 5 },
  { name: "Base Case", upliftPct: 12 },
  { name: "Upside", upliftPct: 18 },
];
