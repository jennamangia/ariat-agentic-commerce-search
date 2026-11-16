import { skechers } from "./skechers";
import type { AccountConfig } from "./types";

// Exact supplied screenshots belong in public/images/ariat; never substitute product imagery.
export const ariat: AccountConfig = {
  ...skechers,
  id: "ariat",
  name: "Ariat",
  heroSearches: [
    "animal print",
    "button down little girls riding shirt",
    "country western bride boots",
    "cozy womens boots",
  ],
  queries: [
    {
      id: "animal",
      query: "Animal print",
      screenshot: "/images/ariat/animal.png",
      acsScreenshot: "/images/ariat/boot-barn-animal.png",
      merchandising: "Existing Ariat Collection: Go Wild Animal Print",
      observation:
        "Just 1 result. The curated animal-print assortment isn’t being discovered through the broader trend. Visual product understanding can identify leopard, cow print, and animal-inspired designs beyond written attributes.",
      intent: [
        "Visual trend: animal print",
        "Patterns: leopard, cow print",
        "Beyond written catalog attributes",
      ],
      annotation: "Understands visual trends beyond exact catalog terminology.",
      resultSummary:
        "Leopard, cow-print, and animal-inspired styles rise to the top. ACS combines its commerce-specific model with AI-extracted visual attributes to recognize the trend beyond exact product terminology.",
      understood: [
        "Visual trend: animal print",
        "Patterns: leopard, cow print",
        "Beyond written catalog attributes",
      ],
      products: [],
    },
    {
      id: "girls",
      query: "Button down little girls riding shirt",
      screenshot: "/images/ariat/girls.png",
      acsScreenshot: "/images/ariat/boot-barn-girls.png",
      merchandising: "Existing Navigation: Girls' Clothing → Button Down Shirts",
      observation:
        "1,212 results, with boys’ shirts prominently displayed. The complete request isn’t being prioritized.",
      intent: ["Age: little girls", "Garment: button-down shirt", "Context: riding"],
      annotation: "Understands the complete shopper request.",
      resultSummary:
        "Girls' western button-down shirts take priority. ACS understands age, gender, garment type, and riding context together.",
      understood: ["Age: little girls", "Garment: button-down shirt", "Context: riding"],
      products: [],
    },
    {
      id: "bride",
      query: "Country western bride boots",
      screenshot: "/images/ariat/bride.png",
      acsScreenshot: "/images/ariat/boot-barn-bride.png",
      merchandising: "Existing Ariat Collection: Wedding Boots",
      observation:
        "1,293 results, with general western boots dominating. The bridal mission isn’t connecting to white, blue, embellished, and sparkly styles.",
      intent: ["Occasion: wedding", "Style: western bridal", "White, blue, embellished, sparkly"],
      annotation: "Understands the occasion behind the search.",
      resultSummary:
        "From white and embellished wedding boots to blue styles for a bride's 'something blue,' ACS connects western style with the occasion and traditions behind the search.",
      understood: [
        "Occasion: wedding",
        "Style: western bridal",
        "White, blue, embellished, sparkly",
      ],
      products: [],
    },
    {
      id: "cozy",
      query: "Cozy womens boots",
      screenshot: "/images/ariat/cozy.png",
      acsScreenshot: "/images/ariat/boot-barn-cozy.png",
      merchandising:
        "Already carries · Cozy, fluffy, sherpa-lined, comfort-oriented women’s footwear",
      observation:
        "40 results, with general western boots prominent and limited representation of the cozy assortment.",
      intent: ["Warmth and softness", "Sherpa-lined comfort", "Women’s footwear"],
      annotation: "Understands descriptive shopping intent.",
      resultSummary:
        "Soft, warm, shearling-lined, and comfort-oriented footwear takes priority. ACS connects descriptive language to relevant product characteristics.",
      understood: ["Warmth and softness", "Sherpa-lined comfort", "Women’s footwear"],
      products: [],
    },
  ],
  customerExamples: [
    { ...skechers.customerExamples[0]!, takeaway: "Understands industry-specific terminology." },
    { ...skechers.customerExamples[2]!, takeaway: "Understands nuanced fit preferences." },
    {
      name: "Ann Taylor",
      query: "Statement earrings for dinner party",
      screenshot: "/images/ariat/ann-taylor.png",
      explanation:
        "The occasion and personal style connect the shopper to expressive statement earrings.",
      takeaway: "Understands occasions and personal style.",
    },
  ],
};
