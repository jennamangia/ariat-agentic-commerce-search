export type Product = { name: string; image: string; tags: string[] };

export type QueryCase = {
  id: string;
  query: string;
  screenshot: string;
  resultCount: string;
  observation: string;
  intent: string[];
  annotation: string;
  products: Product[];
};

export type AccountConfig = {
  id: string;
  name: string;
  heroImage: string;
  heroSearches: string[];
  queries: QueryCase[];
  calculator: { monthlyVisits: number; rpv: number; improvementPct: number };
  challenges: { title: string; body: string; acs: string }[];
  agent: {
    shopper: string;
    followUp: string;
    reply: string;
    answer: string;
    products: Product[];
  };
};
