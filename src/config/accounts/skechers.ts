import mom from "@/assets/shots/mom.png.asset.json";
import walking from "@/assets/shots/walking.png.asset.json";
import marathon from "@/assets/shots/marathon.png.asset.json";
import hikes from "@/assets/shots/hikes.png.asset.json";
import wedding from "@/assets/shots/wedding.png.asset.json";
import hero from "@/assets/products/burst.jpg.asset.json";
import pacsun from "@/assets/customers/pacsun.png.asset.json";
import westMarine from "@/assets/customers/west-marine.png.asset.json";
import bootBarn from "@/assets/customers/boot-barn.png.asset.json";
import { catalog } from "./skechers-products";
import western from "@/assets/products/western.jpg.asset.json";
import type { AccountConfig } from "./types";

/**
 * Verified catalog selections support illustrative ACS comparisons, not live output.
 */
export const skechers: AccountConfig = {
  id: "skechers",
  name: "Skechers",
  heroImage: hero.url,
  heroSearches: [
    "best marathon shoes for flat feet",
    "low heel sandals for casual wedding",
    "boots for slippery rainy hikes",
    "open toe shoes for my mom",
  ],
  queries: [
    {
      id: "marathon",
      query: "best marathon shoes for flat feet",
      screenshot: marathon.url,
      resultCount: "1,896 results",
      observation:
        "Casual footwear appears prominently despite the shopper asking for specialized running shoes.",
      intent: ["Activity: long-distance running", "Need: arch / flat-feet support", "Category: performance running"],
      annotation: "Prioritizes relevant product attributes.",
      products: catalog.marathon,
      traditionalProducts: catalog.traditional.marathon,
    },
    {
      id: "wedding",
      query: "low heel sandals for casual wedding",
      screenshot: wedding.url,
      resultCount: "162 results",
      observation:
        "Athletic walking sandals dominate results despite the shopper expressing a dressier occasion.",
      intent: ["Occasion: wedding (dressy-casual)", "Style: low heel", "Category: sandals"],
      annotation: "Understands occasion, not just keywords.",
      products: catalog.wedding,
      traditionalProducts: catalog.traditional.wedding,
    },
    {
      id: "mom",
      query: "open toe shoes for my mom",
      screenshot: mom.url,
      resultCount: "1,896 results",
      observation:
        "Closed-toe sneakers appear prominently despite an explicit open-toe requirement.",
      intent: ["Constraint: open toe", "Recipient: women's", "Context: gift / comfort"],
      annotation: "Surfaces products aligned with shopper intent.",
      products: catalog.mom,
      traditionalProducts: catalog.traditional.mom,
    },
    {
      id: "hikes",
      query: "boots for slippery rainy hikes",
      screenshot: hikes.url,
      resultCount: "246 results",
      observation:
        "Boots appear, but waterproofing and suitable hiking traction are not consistently evident.",
      intent: ["Condition: wet, slippery", "Need: waterproof + traction", "Activity: hiking"],
      annotation: "Prioritizes relevant product attributes.",
      products: catalog.hikes,
      traditionalProducts: catalog.traditional.hikes,
    },
    {
      id: "walking",
      query: "open toe comfortable walking shoes",
      screenshot: walking.url,
      resultCount: "659 results",
      observation:
        "Closed-toe walking shoes dominate despite the requested open-toe design.",
      intent: ["Constraint: open toe", "Need: all-day comfort", "Activity: walking"],
      annotation: "Surfaces products aligned with shopper intent.",
      products: catalog.walking,
      traditionalProducts: catalog.traditional.walking,
    },
  ],
  calculator: { annualRevenue: 500_000_000, searchSharePct: 25, upliftPct: 12 },
  outcomes: [
    { value: "+10%", label: "Site search conversion rate uplift" },
    { value: "+13%", label: "Average order value uplift" },
    { value: "−96%", label: "Null search results" },
    { value: "−85%", label: "Merchandising rule reduction" },
    { value: "+33%", label: "Clicks per user" },
    { value: "+12%", label: "Revenue per user" },
  ],
  visualProduct: { image: western.url, name: "Ariat Heritage X Toe StretchFit embroidered brown western boot — illustrative example, not a Skechers product", source: "https://www.shoebacca.com/products/heritage-x-toe-stretchfit-embroidered-pointed-toe-pull-on-cowboy-boots-10061307" },
  customerExamples: [
    { name: "West Marine", query: "Cleaning supplies for the head", screenshot: westMarine.url, explanation: "In boating terminology, ‘head’ means the bathroom aboard a vessel. The results show marine sanitation and cleaning products.", takeaway: "Understands industry-specific language." },
    { name: "Boot Barn", query: "Outfits for Coachella", screenshot: bootBarn.url, explanation: "Shoppers describe occasions, not just categories. Event-based language connects with relevant apparel and styles.", takeaway: "Understands occasions and style." },
    { name: "PacSun", query: "Women's comfortable but not too baggy jeans", screenshot: pacsun.url, explanation: "Conversational fit preferences express a balance of comfort and shape rather than a single exact keyword.", takeaway: "Understands nuanced shopper preferences." },
  ],
  challenges: [
    { title: "Complex shopper intent", body: "Shoppers describe activities, occasions and people — not SKUs.", acs: "Interpret natural-language queries beyond literal keywords." },
    { title: "Product attribute understanding", body: "Open toe, waterproof, low heel — details decide the purchase.", acs: "Use catalog attributes as relevance signals." },
    { title: "Relevant recall & ranking", body: "The right product exists but sits on page three.", acs: "Bring intent-matched products into the first rows." },
    { title: "Large assortments", body: "Thousands of styles across men's, women's, kids and work.", acs: "Help shoppers narrow huge catalogs quickly." },
    { title: "Merchandising balance", body: "Business priorities still matter alongside relevance.", acs: "Blend merchandising goals with shopper relevance." },
  ],
  agent: {
    shopper:
      "I'm going on vacation and need comfortable shoes for walking all day, but I also want something nice enough for dinner.",
    followUp:
      "Sounds like a great trip! Will you be mostly on city streets or trails during the day — and do you prefer sandals or closed shoes for evenings?",
    reply: "City streets, and sandals are fine.",
    answer: "Here are a few versatile styles that could go from sightseeing to dinner:",
    products: [
      catalog.walking[0], catalog.wedding[3], catalog.mom[2],
    ],
  },
};
