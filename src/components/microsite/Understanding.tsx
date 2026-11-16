import {
  ArrowRight,
  Brain,
  Eye,
  MessageSquareText,
  Route,
  Rocket,
  Settings2,
  Check,
  X,
} from "lucide-react";
import { Mascot } from "./Sections";

const differentiators = [
  {
    icon: Eye,
    n: "01",
    title: "Understand Products Beyond Their Written Descriptions.",
    body: "Product images and catalog information work together to help the model recognize characteristics that may not be explicitly described in the product feed. A Skechers sandal, for example, might visibly have an open-toe design, adjustable straps, or a low-profile sole even when those details are missing from its written description. That understanding is incorporated into the model — rather than requiring every characteristic to be manually written back into the source catalog.",
  },
  {
    icon: MessageSquareText,
    n: "02",
    title: "Understand What Shoppers Mean, Not Just What They Type.",
    body: "ACS can interpret longer, descriptive queries that combine intent, activity, occasion and product characteristics. “Boots for slippery rainy hikes” conveys a need for weather protection and outdoor traction — without the shopper naming specific attributes — so the experience doesn't depend only on exact keyword matches.",
  },
  {
    icon: Route,
    n: "03",
    title: "Simulate Shopper Journeys to Build Richer Relevance Signals.",
    body: "ACS uses simulated shopping journeys alongside real customer and product data to create additional signals that inform discovery and relevance — addressing the limits of relying solely on historical clickstream and engagement data.",
  },
  {
    icon: Rocket,
    n: "04",
    title: "Understand New Products and New Queries Without Waiting for History.",
    body: "Product understanding and simulated shopper signals help ACS evaluate newly introduced products and less-trafficked searches without depending entirely on accumulated clicks. Even when a shopper submits a query the site has rarely — or never — seen before, the model can use contextual understanding to identify relevant products.",
    chips: [
      "New products",
      "Low-traffic products",
      "Long-tail queries",
      "Previously unseen queries",
      "Less dependence on engagement volume",
    ],
  },
  {
    icon: Settings2,
    n: "05",
    title: "Let Merchandisers Become Strategic Storytellers.",
    body: "Contextual relevance reduces the need to manually encode everyday shopper language into extensive rule sets. Instead of spending their time troubleshooting basic search relevance, merchandisers can focus on strategic storytelling, product launches, campaigns, and shaping the shopping experience.",
  },
];

export function Differentiators() {
  return (
    <section id="differentiators" className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal grid items-end gap-10 lg:grid-cols-[1fr_220px]">
          <div className="max-w-4xl">
            <p className="eyebrow mb-5 text-primary">04 · Why ACS is different</p>
            <h2 className="text-4xl font-semibold md:text-6xl">
              Not just smarter search. <span className="text-gradient">A different approach.</span>
            </h2>
            <p className="mt-6 flex max-w-2xl items-center gap-2 text-lg text-muted-foreground">
              <Brain className="size-5 shrink-0 text-primary" />
              Built on a customer-specific model designed around your catalog and your shoppers.
            </p>
          </div>
          <div className="mx-auto w-40 lg:w-full">
            <Mascot name="Einstein" />
          </div>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map(({ icon: Icon, n, title, body, chips }, i) => (
            <article
              key={n}
              className={`reveal rounded-3xl border p-7 shadow-soft ${i === 0 ? "bg-navy text-navy-foreground lg:col-span-2" : "bg-card"}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-center justify-between">
                <Icon className={`size-8 ${i === 0 ? "text-sky" : "text-primary"}`} />
                <span
                  className={`font-display text-sm font-semibold ${i === 0 ? "text-navy-muted" : "text-muted-foreground"}`}
                >
                  {n}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p
                className={`mt-3 text-sm leading-relaxed ${i === 0 ? "text-navy-muted" : "text-muted-foreground"}`}
              >
                {body}
              </p>
              {chips && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const rules = [
  { when: "Men's queries", then: "Include only men's products" },
  { when: "Women's queries", then: "Include only women's products" },
  { when: "Joggers / leggings / pants", then: "Include only relevant bottoms" },
  { when: "Sandals", then: "Exclude sneakers" },
];

export function Merchandising() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal max-w-5xl">
          <p className="eyebrow mb-5 text-primary">07 · Merchandising Efficiency</p>
          <h2 className="text-4xl font-semibold md:text-6xl">
            Merchandisers Should Be Storytellers.{" "}
            <span className="text-gradient">Not Search Relevance QA.</span>
          </h2>
        </div>
        <div className="reveal mt-12 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-3xl border bg-secondary p-6 md:p-8">
            <p className="eyebrow text-muted-foreground">Traditional approach · manual rules</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Every phrasing needs a rule — and every rule needs upkeep.
            </p>
            <div className="mt-5 space-y-3">
              {rules.map((r) => (
                <div
                  key={r.when}
                  className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-2xl bg-card p-4 shadow-soft"
                >
                  <span className="rounded-md bg-muted px-2 py-1 font-mono text-[11px] font-bold uppercase text-muted-foreground">
                    If
                  </span>
                  <p className="text-sm">
                    <span className="font-semibold">{r.when}</span>
                    <span className="text-muted-foreground"> → {r.then}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden items-center lg:flex">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow">
              <ArrowRight />
            </span>
          </div>
          <div className="flex flex-col rounded-3xl bg-navy p-6 text-navy-foreground md:p-8">
            <p className="eyebrow text-sky">The ACS approach</p>
            <p className="mt-4 text-2xl font-semibold leading-snug md:text-3xl">
              Let the model understand shopper intent and product context, so merchandisers spend
              less time maintaining basic relevance rules and more time becoming strategic
              storytellers.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                "Gender, category and product-type intent understood in context",
                "Fewer rules to write, test and maintain",
                "Business controls — boosts, campaigns, launches — still in your hands",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <Check className="size-4 shrink-0 text-sky" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-auto grid grid-cols-2 gap-3 pt-8 text-sm">
              <div className="rounded-xl bg-primary/20 p-3">
                <p className="flex items-center gap-1 font-semibold">
                  <X className="size-4 text-sky" />
                  Less
                </p>
                <p className="text-navy-muted">Rule upkeep and relevance QA</p>
              </div>
              <div className="rounded-xl bg-primary/20 p-3">
                <p className="flex items-center gap-1 font-semibold">
                  <Check className="size-4 text-sky" />
                  More
                </p>
                <p className="text-navy-muted">Storytelling, launches, campaigns</p>
              </div>
            </div>
          </div>
        </div>
        <div className="reveal mt-10 grid items-center gap-8 rounded-3xl border bg-card p-8 shadow-soft md:grid-cols-[auto_1fr] md:p-10">
          <div>
            <p className="font-display text-6xl font-semibold text-primary">−85%</p>
            <p className="mt-2 text-sm font-semibold">Reported merchandising rule reduction</p>
          </div>
          <p className="text-2xl font-semibold md:text-3xl">
            Less time troubleshooting relevance. More time creating compelling shopping experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

const comparisonPoints = [
  {
    title: "Product Understanding",
    bloomreach:
      "Semantic search and vector similarity, heavily influenced by product descriptions and catalog attributes.",
    acs: "A retailer-specific commerce language model understands product purpose, shopper intent, and context — enriched by AI-extracted visual attributes.",
  },
  {
    title: "Relevance & Ranking",
    bloomreach:
      "Ranking signals, behavioral data, configuration, and merchandising strategies influence product ordering.",
    acs: "Unlike traditional signal-weighted ranking algorithms, ACS uses a commerce-specific language model trained on simulated shopping journeys, continuously informed by real shopper behavior, to understand intent and surface products most likely to convert.",
  },
  {
    title: "Cold Start",
    bloomreach: "New products may have limited historical engagement signals.",
    acs: "Simulated shopping journeys help address limited historical interaction data.",
  },
  {
    title: "Merchandising Effort",
    bloomreach:
      "Rules, synonyms, and manual relevance adjustments can require ongoing optimization.",
    acs: "Model-driven relevance dramatically reduces the need for manual boosting, burying, synonym management, and ongoing rule maintenance — freeing merchandisers to focus on strategy instead of correcting search results.",
  },
];

export function Comparison() {
  return (
    <section id="comparison" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal max-w-5xl">
          <p className="eyebrow mb-5 text-primary">04 · Bloomreach vs. Salesforce ACS</p>
          <h2 className="text-4xl font-semibold md:text-6xl">
            From Product Matching to <span className="text-gradient">Shopper Understanding.</span>
          </h2>
        </div>
        <div className="reveal mt-12 grid gap-6 md:grid-cols-2">
          {[false, true].map((acs) => (
            <article
              key={String(acs)}
              className={`md:grid md:grid-rows-subgrid gap-0 rounded-3xl border p-6 shadow-soft md:row-span-5 md:p-8 ${acs ? "border-primary bg-navy text-navy-foreground shadow-glow" : "bg-secondary"}`}
            >
              <div className="pb-8">
                <p className={`eyebrow ${acs ? "text-sky" : "text-muted-foreground"}`}>
                  {acs ? "Salesforce ACS" : "Bloomreach"}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  {acs ? "Model-Driven Commerce Intelligence" : "Catalog-Centric Relevance"}
                </h3>
              </div>
              {comparisonPoints.map((p) => (
                <div
                  key={p.title}
                  className={`border-t py-6 ${acs ? "border-navy-muted/30" : "border-border"}`}
                >
                  <h4 className={`text-sm font-semibold ${acs ? "text-sky" : "text-foreground"}`}>
                    {p.title}
                  </h4>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${acs ? "text-navy-muted" : "text-muted-foreground"}`}
                  >
                    {acs ? p.acs : p.bloomreach}
                  </p>
                </div>
              ))}
            </article>
          ))}
        </div>
        <p className="reveal mt-10 text-xl font-semibold">
          Your merchandisers already know what shoppers want. Your search should, too.
        </p>
      </div>
    </section>
  );
}
