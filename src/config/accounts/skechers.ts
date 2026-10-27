import mom from "@/assets/shots/mom.png.asset.json";
import walking from "@/assets/shots/walking.png.asset.json";
import marathon from "@/assets/shots/marathon.png.asset.json";
import hikes from "@/assets/shots/hikes.png.asset.json";
import wedding from "@/assets/shots/wedding.png.asset.json";
import hero from "@/assets/hero-shoe.jpg";
import running from "@/assets/p-running.jpg";
import dressSandal from "@/assets/p-dress-sandal.jpg";
import walkSandal from "@/assets/p-walk-sandal.jpg";
import hikeBoot from "@/assets/p-hike-boot.jpg";
import loafer from "@/assets/p-loafer.jpg";
import pacsun from "@/assets/customers/pacsun.png.asset.json";
import westMarine from "@/assets/customers/west-marine.png.asset.json";
import bootBarn from "@/assets/customers/boot-barn.png.asset.json";
import type { AccountConfig } from "./types";

/**
 * Skechers account configuration. All conceptual ACS cards are illustrative:
 * names are generic category descriptions, not real Skechers SKUs.
 */
export const skechers: AccountConfig = {
  id: "skechers",
  name: "Skechers",
  heroImage: hero,
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
      products: Array.from({ length: 4 }, (_, i) => ({
        name: `Illustrative running shoe ${i + 1}`,
        image: running,
        tags: ["Running", "Supportive", "Cushioned"],
      })),
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
      products: Array.from({ length: 4 }, (_, i) => ({
        name: `Illustrative dress sandal ${i + 1}`,
        image: dressSandal,
        tags: ["Low heel", "Dressy", "Sandal"],
      })),
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
      products: Array.from({ length: 4 }, (_, i) => ({
        name: `Illustrative women's open-toe ${i % 2 ? "sandal" : "comfort sandal"} ${i + 1}`,
        image: i % 2 ? dressSandal : walkSandal,
        tags: ["Open toe", "Women's", "Comfort"],
      })),
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
      products: Array.from({ length: 4 }, (_, i) => ({
        name: `Illustrative waterproof hiking boot ${i + 1}`,
        image: hikeBoot,
        tags: ["Waterproof", "Traction", "Hiking"],
      })),
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
      products: Array.from({ length: 4 }, (_, i) => ({
        name: `Illustrative open-toe walking sandal ${i + 1}`,
        image: walkSandal,
        tags: ["Open toe", "Walking", "Cushioned"],
      })),
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
  visualProduct: { image: "", name: "Western boot photo — authentic asset pending" },
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
      { name: "Illustrative walking sandal", image: walkSandal, tags: ["Day", "Comfort"] },
      { name: "Illustrative dress sandal", image: dressSandal, tags: ["Evening", "Low heel"] },
      { name: "Illustrative knit loafer", image: loafer, tags: ["Day → Night"] },
    ],
  },
};
