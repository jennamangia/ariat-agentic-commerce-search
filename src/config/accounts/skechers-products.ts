import m1 from "@/assets/skechers/marathon-1.png.asset.json";
import m2 from "@/assets/skechers/marathon-2.png.asset.json";
import m3 from "@/assets/skechers/marathon-3.png.asset.json";
import m4 from "@/assets/skechers/marathon-4.png.asset.json";
import w1 from "@/assets/skechers/wedding-1.png.asset.json";
import w2 from "@/assets/skechers/wedding-2.png.asset.json";
import w3 from "@/assets/skechers/wedding-3.png.asset.json";
import w4 from "@/assets/skechers/wedding-4.png.asset.json";
import h1 from "@/assets/skechers/hiking-1.png.asset.json";
import h2 from "@/assets/skechers/hiking-2.png.asset.json";
import h3 from "@/assets/skechers/hiking-3.png.asset.json";
import h4 from "@/assets/skechers/hiking-4.png.asset.json";
import o1 from "@/assets/skechers/open-toe-1.png.asset.json";
import o2 from "@/assets/skechers/open-toe-2.png.asset.json";
import o3 from "@/assets/skechers/open-toe-3.png.asset.json";
import o4 from "@/assets/skechers/open-toe-4.png.asset.json";
import type { Product } from "./types";

// Names and prices come from the owner-supplied Skechers product captures.
const p = (name: string, image: string, price: string, tags: string[], why: string): Product => ({ name, image, price, tags, why });
type FourProducts = [Product, Product, Product, Product];

const marathon: FourProducts = [
  p("Skechers Slip-ins: Aero Burst", m1.url, "$165.00", ["Performance running", "Max cushioning", "Hands-free fit"], "Distance-ready cushioning · Running-specific construction · Easy-on fit"),
  p("Skechers Aero Burst", m2.url, "$155.00", ["Performance running", "Max cushioning", "Long runs"], "Highly cushioned midsole · Built for mileage · Running-specific design"),
  p("Skechers Aero Spark", m3.url, "$135.00", ["Daily trainer", "Responsive cushioning", "Running"], "Responsive cushioning · Daily distance training · Lightweight build"),
  p("GO RUN Glide-Step Arch Fit - Casion", m4.url, "$95.00", ["Arch Fit support", "Cushioned ride", "Running"], "Arch Fit support · Cushioned stride · Running-oriented design"),
];
const wedding: FourProducts = [
  p("BOBS Desert Kiss Low", w1.url, "$50.00", ["Low profile", "Crisscross straps", "Neutral tone"], "Low heel · Soft neutral finish · Easy all-evening comfort"),
  p("BOBS Desert Kiss Low - Boho Glide", w2.url, "$60.00", ["Low profile", "Perforated detail", "Slingback"], "Low heel · Dressier boho detail · Comfortable slingback"),
  p("Arch Fit Beverlee 2.0 - Tigger Posse 2.0", w3.url, "$42.99", ["Embellished straps", "Arch Fit", "Cork-look wedge"], "Decorative straps · Arch Fit comfort · Polished warm-weather look"),
  p("BOBS Misty Kiss - Stormy Steps", w4.url, "$52.99", ["Flatform", "Buckle straps", "Slingback"], "Low flatform · Buckled styling · Casual-dressy versatility"),
];
const hikes: FourProducts = [
  p("Waterproof Relaxed Fit: Trego - Trail Destination", h1.url, "$105.00", ["Waterproof", "Lugged outsole", "Hiking"], "Waterproof construction · Trail-ready traction · Hiking boot"),
  p("Waterproof Relaxed Fit: Rickter - Branson", h2.url, "$64.99", ["Waterproof", "Rugged outsole", "Mid-top hiker"], "Waterproof construction · Grippy lugged outsole · Ankle coverage"),
  p("Waterproof Relaxed Fit: Rickter - Path Seeker", h3.url, "$100.00", ["Waterproof", "Traction outsole", "Hiking"], "Waterproof construction · Traction-oriented outsole · Trail design"),
  p("Waterproof Relaxed Fit: Terraform - Emmett", h4.url, "$120.00", ["Waterproof", "Rugged outsole", "Hiking"], "Waterproof construction · Rugged tread · Outdoor hiking boot"),
];
const walking: FourProducts = [
  p("GO WALK Arch Fit 2.0 Sandal - Exhilarate", o1.url, "$49.99", ["Open toe", "Adjustable straps", "Arch Fit"], "Open-toe design · Adjustable fit · Cushioned walking footbed"),
  p("GO WALK Arch Fit 2.0 - Sage", o2.url, "$75.00", ["Open toe", "Buckle strap", "Arch Fit"], "Open-toe design · Supportive Arch Fit footbed · Walking-oriented sole"),
  p("GO WALK Arch Fit 2.0 Sandal - Talia", o3.url, "$54.99", ["Open-toe slide", "Crossband", "Arch Fit"], "Open-toe slide · Cushioned footbed · Walking-oriented construction"),
  p("GO WALK Glide-Step 2.0 Sandal - Chandler", o4.url, "$54.99", ["Open toe", "Thong sandal", "Cushioned sole"], "Open-toe design · Cushioned Glide-Step sole · Built for walking"),
];

export const catalog = { marathon, wedding, hikes, walking };
