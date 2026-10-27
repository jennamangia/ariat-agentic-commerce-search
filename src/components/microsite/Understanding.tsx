import { Image, FileText, MousePointer2, Route, ArrowDown, Brain, Users, Eye, Settings2, Rocket, ArrowRight } from "lucide-react";
import { MascotSlot } from "./Sections";

const differentiators = [
  { icon: Brain, n: "01", title: "A Model Built Around Your Business.", body: "ACS uses a customer-specific small language model designed around the merchant's own catalog and shopper context — so relevance is informed by your product information and your shoppers' behavior, not a generic web model." },
  { icon: Users, n: "02", title: "Learn From More Than Historical Clicks.", body: "Millions of simulated shopping journeys supplement real behavioral signals — more than 10× the signals available from real shopper interactions alone — strengthening shopper-product understanding even where historical data is thin." },
  { icon: Eye, n: "03", title: "Understand More Than the Product Description.", body: "Product images are used alongside catalog text to recognize visible characteristics — like the embroidery on a western boot — that may never be written in the feed. That visual understanding lives inside the model rather than being written back into your source catalog." },
  { icon: Settings2, n: "04", title: "Less Rule Maintenance. More Strategic Merchandising.", body: "Contextual understanding reduces the need to manually encode common shopper language into sprawling rule sets, so teams spend less time correcting basic relevance and more time shaping the experience." },
  { icon: Rocket, n: "05", title: "Give New Products an Opportunity to Be Discovered.", body: "Product understanding and simulated shopper signals help the model reason about newly introduced styles without relying only on accumulated clicks — so relevant new products can surface promptly." },
];

export function Differentiators() {
  return <section id="differentiators" className="py-28"><div className="mx-auto max-w-7xl px-6">
    <div className="reveal grid items-end gap-10 lg:grid-cols-[1fr_200px]"><div className="max-w-4xl"><p className="eyebrow mb-5 text-primary">03 · Why ACS is different</p><h2 className="text-4xl font-semibold md:text-6xl">Not just smarter search. <span className="text-gradient">A different approach.</span></h2></div><div className="hidden w-44 lg:block"><MascotSlot name="Einstein" /></div></div>
    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{differentiators.map(({ icon: Icon, n, title, body }, i) => <article key={n} className={`reveal rounded-3xl border bg-card p-7 shadow-soft ${i === 0 ? "lg:col-span-2 bg-navy text-navy-foreground" : ""}`} style={{ transitionDelay: `${i * 70}ms` }}>
      <div className="flex items-center justify-between"><Icon className={`size-8 ${i === 0 ? "text-sky" : "text-primary"}`} /><span className="font-display text-sm font-semibold text-muted-foreground">{n}</span></div>
      <h3 className="mt-6 text-xl font-semibold">{title}</h3><p className={`mt-3 text-sm leading-relaxed ${i === 0 ? "text-navy-muted" : "text-muted-foreground"}`}>{body}</p>
    </article>)}</div>
  </div></section>;
}

export function Technology() {
  return <section className="bg-navy py-24 text-navy-foreground"><div className="mx-auto max-w-7xl px-6"><div className="reveal max-w-4xl"><p className="eyebrow mb-5 text-sky">The ACS Approach</p><h2 className="text-4xl font-semibold md:text-5xl">Built to Understand How People Actually Shop.</h2></div><div className="reveal mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">{[{ icon: FileText, name: "Product information" },{ icon: Image, name: "Product imagery" },{ icon: MousePointer2, name: "Shopper signals" },{ icon: Route, name: "Simulated shopping journeys" }].map(({icon: Icon,name}) => <div key={name} className="rounded-2xl border border-navy-muted/20 bg-primary/10 p-6"><Icon className="mb-4 size-8 text-sky" /><p className="font-semibold">{name}</p></div>)}</div><div className="reveal mt-8 text-center"><ArrowDown className="mx-auto size-6 text-sky" /><p className="mx-auto mt-5 max-w-2xl rounded-2xl bg-primary py-7 text-2xl font-semibold text-primary-foreground">Customer-specific small language model</p><ArrowDown className="mx-auto mt-5 size-6 text-sky" /><p className="mt-5 text-2xl font-semibold text-sky">Context-aware search and product discovery</p></div></div></section>;
}

const rules = [
  { label: "Gender intent", from: "“men / men's / mens”", to: "Men's assortment" },
  { label: "Product-type intent", from: "“joggers / leggings / pants”", to: "Relevant bottoms" },
  { label: "Category exclusions", from: "“sandals”", to: "Avoid irrelevant sneakers" },
  { label: "Apparel intent", from: "“clothing / apparel”", to: "Relevant clothing categories" },
];

export function Merchandising() {
  return <section className="py-28"><div className="mx-auto max-w-7xl px-6">
    <div className="reveal max-w-5xl"><p className="eyebrow mb-5 text-primary">Merchandising Efficiency</p><h2 className="text-4xl font-semibold md:text-6xl">Merchandisers Should Be Storytellers. <span className="text-gradient">Not Search Relevance QA.</span></h2></div>
    <div className="reveal mt-10 grid gap-12 lg:grid-cols-2"><div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
      <p>Traditional search management can require teams to continually anticipate how shoppers phrase their needs, then build rules to make sure the right products appear.</p>
      <p>That can mean manually connecting variations of men's and women's terminology to the right assortment, restricting apparel-related searches to clothing, boosting bottoms for jogger or leggings queries, or excluding sneakers when someone is clearly looking for sandals.</p>
      <p>These adjustments may solve individual relevance problems, but maintaining them across a growing catalog creates ongoing operational work.</p>
      <p className="text-foreground">ACS is designed to understand more of that context within the model itself — helping reduce repetitive search tuning while allowing merchandising teams to focus on the experiences they want to create.</p>
    </div><div className="rounded-3xl border bg-secondary p-6"><p className="eyebrow text-muted-foreground">Typical manual search logic</p><div className="mt-5 space-y-3">{rules.map(r => <div key={r.label} className="rounded-2xl bg-card p-4 shadow-soft"><p className="text-xs font-bold uppercase text-primary">{r.label}</p><p className="mt-2 flex flex-wrap items-center gap-2 font-mono text-sm"><span>{r.from}</span><ArrowRight className="size-4 text-primary" /><span className="font-sans font-semibold">{r.to}</span></p></div>)}</div><p className="mt-4 text-xs text-muted-foreground">Generalized examples of traditional search-management tasks.</p></div></div>
    <div className="reveal mt-14 grid items-center gap-8 rounded-3xl bg-navy p-8 text-navy-foreground md:grid-cols-[auto_1fr] md:p-10"><div><p className="font-display text-6xl font-semibold text-sky">−85%</p><p className="mt-2 text-sm font-semibold">Reported merchandising rule reduction</p></div><p className="text-2xl font-semibold md:text-3xl">Less time troubleshooting relevance. More time creating compelling shopping experiences.</p></div>
  </div></section>;
}
