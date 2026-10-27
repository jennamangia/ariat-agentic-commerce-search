export type Product = { name: string; image: string; tags: string[]; price?: string; source?: string; why?: string };

export type QueryCase = {
  id: string;
  query: string;
  screenshot: string;
  resultCount: string;
  observation: string;
  intent: string[];
  annotation: string;
  products: Product[];
  traditionalProducts?: Product[];
};

export type AccountConfig = {
  id: string;
  name: string;
  heroImage: string;
  heroSearches: string[];
  queries: QueryCase[];
  calculator: { annualRevenue: number; searchSharePct: number; upliftPct: number };
  customerExamples: { name: string; query: string; screenshot: string; explanation: string; takeaway: string }[];
  outcomes: { value: string; label: string }[];
  visualProduct: { image: string; name: string; source?: string };
  challenges: { title: string; body: string; acs: string }[];
  agent: {
    shopper: string;
    followUp: string;
    reply: string;
    answer: string;
    products: Product[];
  };
};
