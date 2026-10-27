import walkingShot from "@/assets/shots/walking.png.asset.json";
import marathonShot from "@/assets/shots/marathon.png.asset.json";
import hikesShot from "@/assets/shots/hikes.png.asset.json";
import weddingShot from "@/assets/shots/wedding.png.asset.json";
import pacsun from "@/assets/customers/pacsun-v3.png.asset.json";
import westMarine from "@/assets/customers/west-marine-v2.png.asset.json";
import bootBarn from "@/assets/customers/boot-barn-v2.png.asset.json";
import { catalog } from "./skechers-products";
import type { AccountConfig } from "./types";

export const skechers: AccountConfig = {
  id: "skechers",
  name: "Skechers",
  heroSearches: [
    "best marathon shoes for flat feet",
    "low heel sandals for a casual wedding",
    "boots for slippery rainy hikes",
    "open toe comfortable walking shoes",
  ],
  queries: [
    {
      id: "marathon",
      query: "Best marathon shoes for flat feet",
      screenshot: marathonShot.url,
      observation: "Casual footwear appears prominently despite the shopper asking for specialized running shoes.",
      intent: ["Activity: long-distance running", "Need: arch / flat-feet support", "Category: performance running"],
      annotation: "Prioritizes running construction, cushioning and arch support.",
      understood: ["Long-distance running", "Supportive cushioning", "Arch Fit support", "Running-specific"],
      products: catalog.marathon,
    },
    {
      id: "wedding",
      query: "Low heel sandals for a casual wedding",
      screenshot: weddingShot.url,
      observation: "Athletic walking sandals dominate results despite the shopper expressing a dressier occasion.",
      intent: ["Occasion: wedding (dressy-casual)", "Style: low heel", "Category: sandals"],
      annotation: "Understands occasion and heel preference, not just keywords.",
      understood: ["Low heel", "Casual-wedding occasion", "Dressy appearance", "Comfort"],
      products: catalog.wedding,
    },
    {
      id: "hikes",
      query: "Boots for slippery rainy hikes",
      screenshot: hikesShot.url,
      observation: "Boots appear, but waterproofing and suitable hiking traction are not consistently evident.",
      intent: ["Condition: wet, slippery", "Need: waterproof + traction", "Activity: hiking"],
      annotation: "Connects weather and terrain to waterproof, traction-oriented hikers.",
      understood: ["Hiking activity", "Rainy conditions", "Waterproof construction", "Traction outsole"],
      products: catalog.hikes,
    },
    {
      id: "walking",
      query: "Open toe comfortable walking shoes",
      screenshot: walkingShot.url,
      observation: "Results appear to broaden toward general walking shoes, even though the shopper specifically requested open-toe footwear designed for comfort.",
      intent: ["Open-toe construction", "Comfortable for walking", "Walking-oriented footwear"],
      annotation: "Honors the open-toe requirement while keeping walking comfort first.",
      understood: ["Open-toe design", "Walking comfort", "Cushioning", "Supportive fit"],
      products: catalog.walking,
    },
  ],
  calculator: { annualRevenue: 500_000_000, searchSharePct: 12, upliftPct: 12 },
  outcomes: [
    { value: "+10%", label: "Site search conversion rate" },
    { value: "+13%", label: "Average order value" },
    { value: "−96%", label: "Null search results" },
    { value: "−85%", label: "Merchandising rule reduction" },
    { value: "+33%", label: "Clicks per user" },
    { value: "+12%", label: "Revenue per user" },
  ],
  customerExamples: [
    { name: "West Marine", query: "Cleaning supplies for the head", screenshot: westMarine.url, explanation: "In boating terminology, ‘head’ means the bathroom aboard a vessel. The results show marine head cleaners and holding-tank treatments rather than generic cleaning products.", takeaway: "Understands marine terminology." },
    { name: "Boot Barn", query: "Outfits for Coachella", screenshot: bootBarn.url, explanation: "Shoppers describe occasions, not just categories. Event-based language connects with relevant apparel and styles.", takeaway: "Understands occasions and style." },
    { name: "PacSun", query: "Women's comfortable but not too baggy jeans", screenshot: pacsun.url, explanation: "The shopper describes a balance of comfort and shape rather than a single keyword. The results show relaxed and straight-leg women's denim.", takeaway: "Understands descriptive fit preferences." },
  ],
  challenges: [
    { title: "Complex shopper intent", body: "Shoppers describe activities, occasions and people — not SKUs.", acs: "Interpret natural-language queries beyond literal keywords." },
    { title: "Product attribute understanding", body: "Open toe, waterproof, low heel — details decide the purchase.", acs: "Combine catalog text and imagery as relevance signals." },
    { title: "Prominent discovery", body: "The most relevant products deserve prominent placement, not low-visibility corners of the journey.", acs: "Bring intent-matched products into the moments shoppers actually see." },
    { title: "New product discovery", body: "New styles arrive constantly, before they have accumulated clicks.", acs: "Surface relevant new products promptly, not only proven sellers." },
    { title: "Merchandising balance", body: "Business priorities still matter alongside relevance.", acs: "Blend merchandising goals with shopper relevance." },
  ],
  agent: {
    shopper: "I'm going on vacation and need comfortable shoes for walking all day, but I also want something nice enough for dinner.",
    followUp: "Sounds like a great trip! Will you be mostly on city streets or trails during the day — and do you prefer sandals or closed shoes for evenings?",
    reply: "City streets, and sandals are fine.",
    answer: "Here are three options, depending on how you want to balance comfort and style:",
    products: [catalog.walking[1], catalog.wedding[1], catalog.walking[0]],
    comparison: [
      { bestUse: "All-day sightseeing", comfort: "Arch Fit supportive footbed", style: "Sporty-neutral", difference: "Most walking-focused of the three" },
      { bestUse: "Evenings and dinner", comfort: "Low-profile, soft sole", style: "Dressier black straps", difference: "Most polished for dinner" },
      { bestUse: "Day-to-evening", comfort: "Arch Fit footbed, adjustable straps", style: "Clean black sport sandal", difference: "Lowest price; most adjustable fit" },
    ],
    closing: "If you want one pair for both, the Exhilarate is the versatile pick. Want me to check sizes?",
  },
};
