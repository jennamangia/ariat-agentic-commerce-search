import burst from '@/assets/products/burst.jpg.asset.json';
import spark from '@/assets/products/spark.jpg.asset.json';
import tempo from '@/assets/products/tempo.jpg.asset.json';
import razor from '@/assets/products/razor.jpg.asset.json';
import desert from '@/assets/products/desert.jpg.asset.json';
import beverlee from '@/assets/products/beverlee.jpg.asset.json';
import misty from '@/assets/products/misty.jpg.asset.json';
import belle from '@/assets/products/belle.jpg.asset.json';
import exhilarate from '@/assets/products/exhilarate.jpg.asset.json';
import talia from '@/assets/products/talia.jpg.asset.json';
import granola from '@/assets/products/granola.jpg.asset.json';
import sublime from '@/assets/products/sublime.jpg.asset.json';
import emmett from '@/assets/products/emmett.jpg.asset.json';
import rickter from '@/assets/products/rickter.jpg.asset.json';
import trego from '@/assets/products/trego.jpg.asset.json';
import type { Product } from './types';
const observedPrices: Record<string, string> = {
  'Skechers Aero Spark': '$135',
  'BOBS Desert Kiss - Sun Shining': '$44.99',
  'Arch Fit Beverlee 2.0 - Beach Bliss 2': '$39.99',
  'BOBS Misty Kiss - Stormy Steps': '$52.99',
  'Skechers Slip-ins: GO WALK Flex Sandal - Belle': '$49.99',
  'GO WALK Arch Fit 2.0 Sandal - Exhilarate': '$49.99',
  'GO WALK Arch Fit 2.0 Sandal - Talia': '$54.99',
  'Arch Fit Granola - Mellow Skies': '$44.99',
  'GO WALK Flex Sandal - Sublime': '$65',
  'Waterproof Relaxed Fit: Rickter - Path Seeker': '$100',
  'Waterproof Relaxed Fit: Trego - Trail Destination': '$105',
};
const product = (name:string, image:string, path:string, tags:string[], why:string):Product => {
  const price = observedPrices[name];
  return {name,image,source:`https://www.skechers.com/${path}`,tags,why,...(price ? {price: `${price} · observed price`} : {})};
};
type FourProducts = [Product, Product, Product, Product];
const marathon:FourProducts = [
 product('Skechers Aero Burst',burst.url,'skechers-aero-burst/172210_WLM.html',['HYPER BURST ICE','Arch Fit','Running'],'Highly cushioned running trainer, with documented long-distance positioning and Arch Fit insole.'),
 product('Skechers Aero Spark',spark.url,'skechers-aero-spark/172200_BKPR.html',['Daily running','Arch Fit','HYPER BURST ICE'],'Responsive daily running construction and Arch Fit insole; not a medical recommendation.'),
 product('Skechers Aero Tempo',tempo.url,'skechers-aero-tempo/172091_WMLT.html',['Race-day trainer','HYPER BURST','Carbon-infused plate'],'Performance speed-to-race trainer. Arch Fit is not documented for this model.'),
 {name:'GO RUN RAZOR 4',image:razor.url,source:'https://www.skechers.in/go-run-razor-4/246075-GRY.html',tags:['HYPER BURST PRO','Arch Fit','Road running'],why:'Distance-oriented running design and Arch Fit. Regional catalog listing; not a flat-feet treatment claim.'},
];
const wedding:FourProducts = [
 product('BOBS Desert Kiss - Sun Shining',desert.url,'bobs-desert-kiss---sun-shining/114132_BLU.html',['Crochet trim','Memory Foam','Low-profile midsole'],'Low-profile espadrille styling with crochet trim. Closed-toe sandal; numerical heel height not documented.'),
 product('Arch Fit Beverlee 2.0 - Beach Bliss 2',beverlee.url,'arch-fit-beverlee-2.0---beach-bliss-2/163437_NVY.html',['Floral cut-outs','Luxe Foam','2¼-inch wedge'],'Floral detailing and cushioned footbed suit a dressier look. A 2¼-inch wedge may exceed a shopper’s low-heel preference.'),
 product('BOBS Misty Kiss - Stormy Steps',misty.url,'bobs-misty-kiss---stormy-steps/114077_LPD.html',['Suede','Memory Foam','1½-inch flatform'],'Buckled suede slingback with cushioning. Casual flatform, rather than a conventional dress heel.'),
 product('Skechers Slip-ins: GO WALK Flex Sandal - Belle',belle.url,'skechers-slip-ins-go-walk-flex-sandal---belle/141483_TPE.html',['Rhinestone detail','Goga Mat','1-inch heel'],'Low heel and rhinestone embellishment balance comfort and a dressier detail; walking-oriented construction.'),
];
const mom:FourProducts = [
 product('GO WALK Arch Fit 2.0 Sandal - Exhilarate',exhilarate.url,'go-walk-arch-fit-2.0-sandal---exhilarate/140876_NAT.html',['Open toe','Adjustable ankle','Arch Fit'],'Open-toe sandal with adjustable ankle strap, Goga Mat and lightweight ULTRA GO cushioning.'),
 product('GO WALK Arch Fit 2.0 Sandal - Talia',talia.url,'go-walk-arch-fit-2.0-sandal---talia/140910_NAT.html',['Open-toe slide','Arch Fit','Goga Mat'],'Easy-on knit crossband slide with cushioned footbed; no adjustable-strap claim.'),
 product('Arch Fit Granola - Mellow Skies',granola.url,'arch-fit-granola---mellow-skies/120155_MOC.html',['Open toe','Arch Fit','Luxe Foam'],'Buckled dual-band comfort slide with a flexible traction outsole.'),
 product('GO WALK Flex Sandal - Sublime',sublime.url,'go-walk-flex-sandal---sublime/141451_TPE.html',['Open toe','Adjustable ankle','ULTRA GO'],'Walking-friendly river sandal with an adjustable ankle strap and Goga Mat footbed.'),
];
const hikes:FourProducts = [
 product('Waterproof Relaxed Fit: Terraform - Emmett',emmett.url,'waterproof-relaxed-fit-terraform---emmett/205630_DKTP.html',['Seam-sealed waterproof','Goodyear outsole','Hiking'],'Outdoor trail boot with waterproof construction, traction-oriented outsole and Air-Cooled Memory Foam.'),
 product('Waterproof Relaxed Fit: Rickter - Path Seeker',rickter.url,'waterproof-relaxed-fit-rickter---path-seeker/206004_CHAR.html',['Seam-sealed waterproof','Traction outsole','Hiking'],'Trail hiking boot with waterproof construction and Air-Cooled Memory Foam cushioning.'),
 product('Waterproof Relaxed Fit: Trego - Trail Destination',trego.url,'waterproof-relaxed-fit-trego---trail-destination/180005.html',['Waterproof','Traction outsole','Mid-top hiking'],'Waterproof hiking design with mesh/synthetic upper and cushioned footbed.'),
 {name:'Relaxed Fit: Trego - Alpine Trail',image:'',source:'https://www.skechers.co.nz/trego-alpine-trail-167004-brn.html',tags:['Waterproof','All-terrain outsole','Hiking'],why:'Documented waterproof hiking ankle boot with Air-Cooled Memory Foam. Regional listing; authentic image pending.'},
];
// Keyword-led selections are conceptual category matches, never claimed as actual site ranking.
const plain = (p:Product):Product => { const { why, ...result } = p; return result; };
export const catalog = {marathon,wedding,mom,hikes,walking:mom,
 traditional:{
  marathon:[marathon[1],marathon[0],marathon[2],marathon[3]].map(plain),
  wedding:[mom[3],mom[0],wedding[2],wedding[0]].map(plain),
  mom:[mom[1],wedding[0],mom[0],mom[2]].map(plain),
  hikes:[hikes[2],hikes[0],hikes[1],hikes[3]].map(plain),
  walking:[mom[3],mom[1],wedding[0],mom[0]].map(plain),
 }
};
