import { skechers } from "./skechers";
import type { AccountConfig } from "./types";

// Exact supplied screenshots belong in public/images/ariat; never substitute product imagery.
export const ariat: AccountConfig = {
  ...skechers,
  id: "ariat",
  name: "Ariat",
  heroSearches: ["animal print", "button down little girls riding shirt", "country western bride boots", "cozy womens boots"],
  queries: [
    { id: "animal", query: "Animal print", screenshot: "/images/ariat/animal.png", acsScreenshot: "/images/ariat/boot-barn-animal.png", merchandising: "Already merchandises · “Go Wild Animal Print” collection", observation: "Just 1 result. The curated animal-print assortment isn’t being discovered through the broader trend. Visual product understanding can identify leopard, cow print, and animal-inspired designs beyond written attributes.", intent: ["Visual trend: animal print", "Patterns: leopard, cow print", "Beyond written catalog attributes"], annotation: "Understands visual trends beyond exact catalog terminology.", resultSummary: "340 results, including leopard, cow-print, and animal-inspired styles. A retailer-specific commerce model and AI-extracted visual attributes connect the trend to products.", understood: ["Visual trend: animal print", "Patterns: leopard, cow print", "Beyond written catalog attributes"], products: [] },
    { id: "girls", query: "Button down little girls riding shirt", screenshot: "/images/ariat/girls.png", acsScreenshot: "/images/ariat/boot-barn-girls.png", merchandising: "Already merchandises · Girls’ button-down western shirts in kids’ navigation", observation: "1,212 results, with boys’ shirts prominently displayed. The complete request isn’t being prioritized.", intent: ["Age: little girls", "Garment: button-down shirt", "Context: riding"], annotation: "Understands the complete shopper request.", resultSummary: "215 results, prominently featuring girls’ western shirts. Age, gender, garment type, and riding context work together.", understood: ["Age: little girls", "Garment: button-down shirt", "Context: riding"], products: [] },
    { id: "bride", query: "Country western bride boots", screenshot: "/images/ariat/bride.png", acsScreenshot: "/images/ariat/boot-barn-bride.png", merchandising: "Already merchandises · A dedicated wedding boots collection", observation: "1,293 results, with general western boots dominating. The bridal mission isn’t connecting to white, blue, embellished, and sparkly styles.", intent: ["Occasion: wedding", "Style: western bridal", "White, blue, embellished, sparkly"], annotation: "Understands the occasion behind the search.", resultSummary: "505 results, prominently featuring white, embellished, and bridal-appropriate western boots. Bridal style, western context, and product suitability guide discovery.", understood: ["Occasion: wedding", "Style: western bridal", "White, blue, embellished, sparkly"], products: [] },
    { id: "cozy", query: "Cozy womens boots", screenshot: "/images/ariat/cozy.png", acsScreenshot: "/images/ariat/boot-barn-cozy.png", merchandising: "Already carries · Cozy, fluffy, sherpa-lined, comfort-oriented women’s footwear", observation: "40 results, with general western boots prominent and limited representation of the cozy assortment.", intent: ["Warmth and softness", "Sherpa-lined comfort", "Women’s footwear"], annotation: "Understands descriptive shopping intent.", resultSummary: "444 results, featuring soft, warm, shearling-lined, and comfort-oriented footwear. Descriptive language connects to suitable product characteristics.", understood: ["Warmth and softness", "Sherpa-lined comfort", "Women’s footwear"], products: [] },
  ],
  customerExamples: [
    { ...skechers.customerExamples[0]!, takeaway: "Understands industry-specific terminology." },
    { ...skechers.customerExamples[2]!, takeaway: "Understands nuanced fit preferences." },
    { name: "Ann Taylor", query: "Statement earrings for dinner party", screenshot: "/images/ariat/ann-taylor.png", explanation: "The occasion and personal style connect the shopper to expressive statement earrings.", takeaway: "Understands occasions and personal style." },
  ],
};
