export type Product = { name: string; image: string; tags: string[]; price?: string; source?: string; why?: string };

export type QueryCase = {
  id: string;
  query: string;
  screenshot: string;
  observation: string;
  intent: string[];
  annotation: string;
  understood: string[];
  products: Product[];
};

export type AccountConfig = {
  id: string;
  name: string;
  heroSearches: string[];
  queries: QueryCase[];
  calculator: { annualRevenue: number; searchSharePct: number; upliftPct: number };
  customerExamples: { name: string; query: string; screenshot: string; explanation: string; takeaway: string }[];
  outcomes: { value: string; label: string }[];
  challenges: { title: string; body: string; acs: string }[];
  agent: {
    shopper: string;
    followUp: string;
    reply: string;
    answer: string;
    products: Product[];
    comparison: { bestUse: string; comfort: string; style: string; difference: string }[];
    closing: string;
  };
};
