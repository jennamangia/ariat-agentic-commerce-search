import m1 from "@/assets/skechers/marathon-shoe-1.png";
import m2 from "@/assets/skechers/marathon-shoe-2.png";
import m3 from "@/assets/skechers/marathon-shoe-3.png";
import m4 from "@/assets/skechers/marathon-shoe-4.png";
import wMisty from "@/assets/products-v2/w-misty.png";
import wBoho from "@/assets/products-v2/w-boho.png";
import wSun from "@/assets/products-v2/w-sun.png";
import wDesert from "@/assets/products-v2/w-desert.png";
import hTrego from "@/assets/products-v2/h-trego.png";
import hBranson from "@/assets/products-v2/h-branson.png";
import hPath from "@/assets/products-v2/h-path.png";
import hEmmett from "@/assets/products-v2/h-emmett.png";
import oExhil from "@/assets/products-v2/o-exhil.png";
import oSage from "@/assets/products-v2/o-sage.png";
import oTalia from "@/assets/products-v2/o-talia.png";
import oChandler from "@/assets/products-v2/o-chandler.png";
import type { Product } from "./types";

// Names and prices come from the owner-supplied Skechers product captures.
// Non-marathon photos are trimmed to the product so shop-page text is removed.
const p = (name: string, image: string, price: string, tags: string[], why: string): Product => ({
  name,
  image,
  price,
  tags,
  why,
});
type FourProducts = [Product, Product, Product, Product];

const marathon: FourProducts = [
  p(
    "Skechers Slip-ins: Aero Burst",
    m1,
    "$165.00",
    ["Performance running", "Max cushioning", "Hands-free fit"],
    "Distance-ready cushioning · Running-specific construction · Easy-on fit",
  ),
  p(
    "Skechers Aero Burst",
    m2,
    "$155.00",
    ["Performance running", "Max cushioning", "Long runs"],
    "Highly cushioned midsole · Built for mileage · Running-specific design",
  ),
  p(
    "Skechers Aero Spark",
    m3,
    "$135.00",
    ["Daily trainer", "Responsive cushioning", "Running"],
    "Responsive cushioning · Daily distance training · Lightweight build",
  ),
  p(
    "GO RUN Glide-Step Arch Fit - Casion",
    m4,
    "$95.00",
    ["Arch Fit support", "Cushioned ride", "Running"],
    "Arch Fit support · Cushioned stride · Running-oriented design",
  ),
];
const wedding: FourProducts = [
  p(
    "BOBS Misty Kiss - Stormy Steps",
    wMisty,
    "$52.99",
    ["Low platform", "Buckle straps", "Open toe"],
    "A low, even platform instead of a high heel · Buckled straps add polish for a casual celebration · Open-toe sandal",
  ),
  p(
    "BOBS Desert Kiss Low - Boho Glide",
    wBoho,
    "$60.00",
    ["Low profile", "Slingback", "Textured straps"],
    "Low-profile sole for all-evening comfort · Textured black straps read dressier than an athletic sandal · Secure slingback",
  ),
  p(
    "BOBS Desert Kiss - Sun Shining",
    wSun,
    "$42.99–$60.00",
    ["Low wedge", "Espadrille-style", "Ankle strap"],
    "Modest wedge keeps heel height low · Espadrille-style trim suits a relaxed outdoor wedding · Ankle strap for comfort",
  ),
  p(
    "BOBS Desert Kiss Low",
    wDesert,
    "$50.00",
    ["Low profile", "Crisscross straps", "Neutral tone"],
    "Low heel · Soft neutral crisscross straps pair easily with a dress · Comfortable for a long event",
  ),
];
const hikes: FourProducts = [
  p(
    "Waterproof Relaxed Fit: Trego - Trail Destination",
    hTrego,
    "$105.00",
    ["Waterproof", "Lugged outsole", "Hiking boot"],
    "Waterproof construction for rainy conditions · Lugged outsole oriented toward trail traction · Mid-height hiking design",
  ),
  p(
    "Waterproof Relaxed Fit: Rickter - Branson",
    hBranson,
    "$64.99",
    ["Waterproof", "Rugged outsole", "Mid-top hiker"],
    "Waterproof upper for wet trails · Rugged, deep-tread outsole · Ankle coverage for outdoor use",
  ),
  p(
    "Waterproof Relaxed Fit: Rickter - Path Seeker",
    hPath,
    "$100.00",
    ["Waterproof", "Traction-oriented outsole", "Hiking"],
    "Waterproof construction · Tread pattern designed for outdoor terrain · Supportive mid-top hiker",
  ),
  p(
    "Waterproof Relaxed Fit: Terraform - Emmett",
    hEmmett,
    "$120.00",
    ["Waterproof", "Rugged tread", "Hiking boot"],
    "Waterproof hiking boot for rainy hikes · Aggressive rugged tread · Built for outdoor trails",
  ),
];
const walking: FourProducts = [
  p(
    "GO WALK Arch Fit 2.0 Sandal - Exhilarate",
    oExhil,
    "$49.99",
    ["Open toe", "Adjustable straps", "Arch Fit"],
    "Open-toe sandal · Adjustable straps for a secure stride · Arch Fit footbed for walking support",
  ),
  p(
    "GO WALK Arch Fit 2.0 - Sage",
    oSage,
    "$75.00",
    ["Open toe", "Buckle strap", "Arch Fit"],
    "Open-toe design · Supportive Arch Fit footbed · Cushioned, walking-oriented sole",
  ),
  p(
    "GO WALK Arch Fit 2.0 Sandal - Talia",
    oTalia,
    "$54.99",
    ["Open-toe slide", "Crossband", "Arch Fit"],
    "Open-toe crossband slide · Arch Fit support for time on your feet · GO WALK walking line",
  ),
  p(
    "GO WALK Glide-Step 2.0 Sandal - Chandler",
    oChandler,
    "$54.99",
    ["Open toe", "Thong sandal", "Cushioned sole"],
    "Open-toe thong sandal · Cushioned Glide-Step sole · Part of the GO WALK walking line",
  ),
];

export const catalog = { marathon, wedding, hikes, walking };
