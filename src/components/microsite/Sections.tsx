import { useEffect, useRef, useState, type ReactNode } from "react";
import { account, type Product } from "@/config/accounts";

import { Button } from "@/components/ui/button";
import { RotateCcw, Search, Image as ImageIcon, ArrowDown, Sparkles, SlidersHorizontal, Target, X, ZoomIn } from "lucide-react";
import { searchRevenueModel, revenueLimits, modeledScenarios } from "@/lib/revenue-model";

const a = account;

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return <p className={`eyebrow mb-5 ${dark ? "text-sky" : "text-primary"}`}>{children}</p>;
}

function Typewriter({ phrases }: { phrases: string[] }) {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const full = phrases[i] ?? "";
    const t = setTimeout(
      () => {
        if (!del && n < full.length) setN(n + 1);
        else if (!del) setDel(true);
        else if (n > 0) setN(n - 1);
        else {
          setDel(false);
          setI((i + 1) % phrases.length);
        }
      },
      !del && n === full.length ? 1800 : del ? 22 : 55,
    );
    return () => clearTimeout(t);
  }, [n, del, i, phrases]);
  return (
    <span>
      {(phrases[i] ?? "").slice(0, n)}
      <span className="animate-blink ml-0.5 inline-block h-6 w-0.5 translate-y-1 bg-primary" />
    </span>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function Cloud({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 70" aria-hidden className={className} fill="currentColor">
      <path d="M30 68a28 28 0 0 1-3-55.8A30 30 0 0 1 82 12a24 24 0 0 1 35 27A15 15 0 0 1 104 68Z" />
    </svg>
  );
}

/** Reserved slot for an approved Salesforce character asset (Astro, Einstein). */
export function MascotSlot({ name, dark }: { name: string; dark?: boolean }) {
  return (
    <div data-mascot-slot={name} className={`flex aspect-square w-full flex-col items-center justify-center rounded-full border-2 border-dashed text-center ${dark ? "border-sky/50 text-navy-muted" : "border-primary/40 text-muted-foreground"}`}>
      <Cloud className={`w-1/3 ${dark ? "text-sky/70" : "text-primary/60"}`} />
      <p className="mt-3 text-xs font-semibold uppercase">{name}</p>
      <p className="text-[11px]">Approved character artwork</p>
    </div>
  );
}

/* 1 — Hero */
export function Hero() {
  return (
    <section className="bg-hero relative flex min-h-[88svh] items-center overflow-hidden text-navy-foreground">
      <Cloud className="pointer-events-none absolute -left-16 top-16 w-72 text-sky/10" />
      <Cloud className="pointer-events-none absolute right-10 top-10 w-40 text-sky/15" />
      <Cloud className="pointer-events-none absolute -bottom-10 right-1/3 w-96 text-primary/20" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.25fr_1fr]">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-navy/40 px-4 py-1.5 text-xs font-bold uppercase text-sky">
            <Cloud className="w-5" /> Salesforce · {a.name} × Agentic Commerce Search
          </span>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.04] md:text-7xl">
            What if {a.name} understood every shopper's <span className="text-sky">intent?</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy-muted md:text-xl">
            Reimagining product discovery with Salesforce Agentic Commerce Search.
          </p>
          <div className="mt-10 flex max-w-xl items-center gap-3 rounded-2xl bg-card px-6 py-4 text-lg text-card-foreground shadow-glow">
            <span className="text-primary"><SearchIcon /></span>
            <Typewriter phrases={a.heroSearches} />
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-sm">
          <div className="rounded-[2rem] border border-sky/20 bg-navy/40 p-6 shadow-glow backdrop-blur">
            <MascotSlot name="Astro" dark />
            <div className="mt-5 space-y-2">
              {["Understands intent", "Reads product imagery", "Learns from simulated journeys"].map((t) => (
                <p key={t} className="flex items-center gap-2 rounded-xl bg-primary/25 px-3 py-2 text-sm font-semibold"><Sparkles className="size-4 text-sky" />{t}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <a href="#today" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-navy-muted">
        <span className="flex h-9 w-5 justify-center rounded-full border border-navy-muted pt-1.5">
          <span className="animate-scrolldot h-1.5 w-1 rounded-full bg-navy-muted" />
        </span>
        Scroll
      </a>
    </section>
  );
}

function QueryTabs({ active, setActive, dark }: { active: number; setActive: (i: number) => void; dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {a.queries.map((q, i) => (
        <Button
          key={q.id}
          onClick={() => setActive(i)}
          aria-pressed={i === active}
          className={`h-auto whitespace-normal rounded-full border px-4 py-2 text-sm font-medium transition-all ${
            i === active
              ? "border-primary bg-primary text-primary-foreground shadow-glow"
              : dark
                ? "border-navy-muted/30 text-navy-muted hover:border-sky hover:text-navy-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
          }`}
        >
          “{q.query}”
        </Button>
      ))}
    </div>
  );
}

export function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!src) return;
    const previous = document.activeElement;
    closeRef.current?.focus();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); if (e.key === "Tab") { e.preventDefault(); closeRef.current?.focus(); } };
    window.addEventListener("keydown", key);
    return () => { document.body.style.overflow = old; window.removeEventListener("keydown", key); if (previous instanceof HTMLElement) previous.focus(); };
  }, [src, onClose]);
  if (!src) return null;
  return <div role="dialog" aria-modal="true" aria-label="Enlarged search screenshot" onClick={onClose} className="fixed inset-0 z-50 overflow-auto bg-navy/95 p-4 md:p-10">
    <img src={src} alt="Original full-size search screenshot" className="mx-auto w-full max-w-[1800px] rounded-lg" onClick={e => e.stopPropagation()} />
    <Button ref={closeRef} aria-label="Close enlarged screenshot" onClick={onClose} size="icon" className="fixed right-6 top-6"><X /></Button>
  </div>;
}

function Screenshot({ src, onZoom }: { src: string; onZoom: () => void }) {
  return (
    <Button onClick={onZoom} variant="ghost" className="group relative block h-auto w-full whitespace-normal p-0 cursor-zoom-in overflow-hidden rounded-2xl border bg-card shadow-soft">
      <div className="flex items-center gap-1.5 border-b bg-muted px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-3 text-xs text-muted-foreground">skechers.com · captured search results</span>
      </div>
      <img src={src} alt="Actual Skechers search results screenshot" className="w-full transition-transform duration-700 group-hover:scale-[1.02]" />
      <span className="absolute bottom-4 right-4 rounded-full bg-navy px-3 py-1.5 text-xs font-semibold text-navy-foreground opacity-90">
        Click to zoom
      </span>
    </Button>
  );
}

/* 2 — Today */
export function Today() {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState<string | null>(null);
  const q = a.queries[active];
  if (!q) return null;
  return (
    <section id="today" className="mx-auto max-w-7xl px-6 py-32">
      <div className="reveal max-w-3xl">
        <Eyebrow>01 · The search experience today</Eyebrow>
        <h2 className="text-4xl font-semibold md:text-6xl">
          Your shoppers are telling you what they want. <span className="text-gradient">Is search listening?</span>
        </h2>
      </div>
      <div className="reveal mt-12"><QueryTabs active={active} setActive={setActive} /></div>
      <div className="reveal mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
        <Screenshot key={q.id} src={q.screenshot} onZoom={() => setZoom(q.screenshot)} />
        <aside className="flex flex-col gap-4">
          <div className="rounded-2xl border bg-card p-6 shadow-soft">
            <p className="eyebrow text-warn">Observed opportunity</p>
            <p className="mt-3 text-lg font-medium leading-snug">{q.observation}</p>
          </div>
          <div className="rounded-2xl bg-muted p-6">
            <p className="eyebrow text-muted-foreground">Shopper said</p>
            <ul className="mt-3 space-y-2 text-sm">
              {q.intent.map((t) => (
                <li key={t} className="flex gap-2"><span className="text-primary">●</span>{t}</li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-muted-foreground">Unaltered screenshot of live search, {q.resultCount}. Captured for illustration.</p>
        </aside>
      </div>
      <Lightbox src={zoom} onClose={() => setZoom(null)} />
    </section>
  );
}

function ProductCard({ p }: { p: Product; delay?: number }) {
  return <article data-product-card className="flex min-w-0 flex-col rounded-lg border bg-card p-3 text-card-foreground shadow-soft">
    <div className="flex aspect-square items-center justify-center overflow-hidden rounded-md bg-muted">
      {p.image ? <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-contain" /> : <div className="p-3 text-center text-xs text-muted-foreground"><ImageIcon className="mx-auto mb-2 size-8" />Authentic product photo pending</div>}
    </div>
    <h3 className="mt-3 text-sm font-semibold leading-snug">{p.name}</h3>
    {p.price && <p className="mt-1 text-sm font-semibold">{p.price}</p>}
    <div className="mt-2 flex flex-wrap gap-1">{p.tags.map(t => <span key={t} className="rounded-sm bg-accent px-2 py-1 text-[11px] text-accent-foreground">{t}</span>)}</div>
    {p.why && <p className="mt-3 text-xs leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">Why this matches</span><br />{p.why}</p>}
    {p.source && <a href={p.source} target="_blank" rel="noreferrer" className="mt-auto pt-3 text-xs font-semibold text-primary underline">Product details ↗</a>}
  </article>;
}

/* 3 — Before / after */
export function Reimagined() {
  const [active, setActive] = useState(0);
  const [after, setAfter] = useState(true);
  const q = a.queries[active];
  if (!q) return null;
  return <section id="comparison" className="bg-secondary py-24">
    <div className="mx-auto max-w-7xl px-6">
      <div className="reveal max-w-4xl"><Eyebrow>02 · Intent makes the difference</Eyebrow><h2 className="text-4xl font-semibold md:text-6xl">From matching words to <span className="text-primary">understanding intent.</span></h2></div>
      <div className="reveal mt-10"><QueryTabs active={active} setActive={setActive} /></div>
      <div className="reveal mt-8 flex flex-wrap items-center justify-between gap-4"><p className="flex min-w-0 items-center gap-3 font-semibold"><Search className="size-5 shrink-0 text-primary" />{q.query}</p><div className="flex rounded-md border bg-card p-1">{["Today's Experience", "Reimagined with ACS"].map((l,i) => <Button key={l} variant={after === (i === 1) ? "default" : "ghost"} onClick={() => setAfter(i === 1)} aria-pressed={after === (i === 1)} className="h-auto whitespace-normal text-xs">{l}</Button>)}</div></div>
      <div className="reveal mt-8 grid gap-10 xl:grid-cols-2">
        <div data-comparison-side="traditional" className={after ? "opacity-80" : ""}><div className="mb-5 border-b pb-4"><p className="eyebrow text-muted-foreground">Traditional Keyword Search</p><p className="mt-2 text-sm text-muted-foreground">Illustrative keyword-led selection; not a reproduction of the captured ranking.</p></div><div className="grid grid-cols-2 gap-3">{(q.traditionalProducts ?? q.products).map((p,i) => <ProductCard key={q.id+i} p={p} />)}</div></div>
        <div data-comparison-side="acs"><div className="mb-5 border-b border-primary pb-4"><p className="eyebrow text-primary">Intent-Aware ACS Model</p><p className="mt-2 text-sm text-muted-foreground">{q.annotation}</p></div><div className="grid grid-cols-2 gap-3">{q.products.map((p,i) => <ProductCard key={q.id+i} p={p} />)}</div></div>
      </div><p className="mt-6 text-xs text-muted-foreground">Illustrative comparison, not live ACS output. Product features are cited where verified; availability may vary.</p>
    </div>
  </section>;
}

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const millions = (n: number) => `+$${(n / 1_000_000).toFixed(1)}M`;

function ModelSlider({ label, note, value, limits, step, onChange, money }: { label: string; note: string; value: number; limits: { min: number; max: number }; step: number; onChange: (n: number) => void; money?: boolean }) {
  return <div><div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3"><label htmlFor={label} className="min-w-0 text-sm font-semibold">{label}</label><span className="shrink-0 font-display text-lg font-semibold text-primary">{money ? usd(value) : `${value}%`}</span></div>
    {money && <input aria-label="Annual ecommerce revenue" type="text" inputMode="numeric" value={usd(value)} onChange={e => { const n = Number(e.target.value.replace(/[^0-9]/g, "")); if (Number.isFinite(n)) onChange(Math.min(limits.max, n)); }} onBlur={() => onChange(Math.max(limits.min, value))} className="mt-3 w-full rounded-md border bg-background px-3 py-2 font-semibold" />}
    <input id={label} aria-label={`${label} slider`} type="range" min={limits.min} max={limits.max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} className="mt-4 h-2 w-full cursor-pointer accent-primary" /><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{note}</p>
  </div>;
}

export function Business() {
  const [revenue, setRevenue] = useState(a.calculator.annualRevenue);
  const [share, setShare] = useState(a.calculator.searchSharePct);
  const [uplift, setUplift] = useState(a.calculator.upliftPct);
  const model = searchRevenueModel(revenue, share, uplift);
  return <section id="outcomes" className="py-24"><div className="mx-auto max-w-7xl px-6">
    <div className="reveal"><Eyebrow>Proven Customer Outcomes</Eyebrow><h2 className="text-4xl font-semibold md:text-5xl">Better discovery. Measurable business impact.</h2></div>
    <div className="reveal mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">{a.outcomes.map(m => <article key={m.label} className="rounded-lg border bg-card p-6 shadow-soft"><p className="font-display text-4xl font-semibold text-primary md:text-5xl">{m.value}</p><p className="mt-3 text-sm font-semibold">{m.label}</p></article>)}</div>
    <p className="mt-5 max-w-4xl text-xs leading-relaxed text-muted-foreground">Reported customer outcomes presented during Salesforce's October 2026 Agentic Commerce Search webinar. Results vary by implementation. These figures reflect different customer examples, not a single customer's results or guaranteed improvements.</p>
    <div className="reveal mt-20 border-t pt-14"><Eyebrow>Modeled Skechers Opportunity</Eyebrow><h2 className="text-4xl font-semibold md:text-5xl">What Could This Mean for {a.name}?</h2><p className="mt-4 text-lg text-muted-foreground">Explore how improvements in search performance could translate into incremental ecommerce revenue.</p></div>
    <div className="reveal mt-10 grid gap-10 lg:grid-cols-2"><div className="space-y-7">
      <ModelSlider label="Annual ecommerce revenue" note="Illustrative starting assumption — replace with Skechers actuals." value={revenue} limits={revenueLimits.annualRevenue} step={10_000_000} onChange={setRevenue} money />
      <ModelSlider label="Share of ecommerce revenue attributable to site search" note="Guesstimate — adjustable. Revenue from sessions involving site search." value={share} limits={revenueLimits.searchSharePct} step={1} onChange={setShare} />
      <ModelSlider label="Expected search revenue per visitor (RPV) uplift" note="Illustrative uplift assumption — adjustable. RPV measures revenue generated per visitor. Improvements can reflect conversion, average order value, or both." value={uplift} limits={revenueLimits.upliftPct} step={1} onChange={setUplift} />
      <Button variant="outline" onClick={() => {setRevenue(a.calculator.annualRevenue);setShare(a.calculator.searchSharePct);setUplift(a.calculator.upliftPct);}}><RotateCcw />Reset to defaults</Button>
    </div><div className="flex flex-col justify-center rounded-lg bg-close p-6 text-navy-foreground md:p-10"><p className="eyebrow text-sky">Modeled incremental annual revenue</p><p data-revenue-result aria-live="polite" className="mt-5 font-display text-5xl font-semibold tabular-nums md:text-6xl">{millions(model.incrementalRevenue)}</p><p className="mt-2 text-xl">Potential Annual Revenue</p><dl className="mt-8 space-y-4 border-t border-navy-muted/30 pt-6 text-sm"><div className="flex flex-wrap justify-between gap-2"><dt>Annual ecommerce revenue</dt><dd>{usd(revenue)}</dd></div><div className="flex flex-wrap justify-between gap-2"><dt>Search revenue share</dt><dd>{share}%</dd></div><div className="flex flex-wrap justify-between gap-2"><dt>Search-attributed revenue</dt><dd>{usd(model.searchRevenue)}</dd></div><div className="flex flex-wrap justify-between gap-2"><dt>Expected RPV uplift</dt><dd>{uplift}%</dd></div><div className="flex flex-wrap justify-between gap-2 border-t border-navy-muted/30 pt-4 font-semibold"><dt>Incremental annual revenue</dt><dd>{usd(model.incrementalRevenue)}</dd></div></dl></div></div>
    <div className="reveal mt-8 grid gap-4 md:grid-cols-3">{modeledScenarios.map(s => <article key={s.name} className="rounded-lg border bg-secondary p-5"><p className="text-sm font-semibold">{s.name} · {s.upliftPct}% modeled uplift</p><p className="mt-2 text-2xl font-semibold text-primary">{usd(searchRevenueModel(revenue,share,s.upliftPct).incrementalRevenue)}<span className="ml-1 text-xs text-muted-foreground">/ year</span></p></article>)}</div><p className="mt-5 text-xs leading-relaxed text-muted-foreground">Model: annual ecommerce revenue × search revenue share × expected RPV uplift. Assumes constant traffic and no material change in search visitor mix. Search share is a proxy for the eligible revenue base. Scenarios are illustrative, not customer benchmarks; conversion and AOV lifts are not counted again.</p>
  </div></section>;
}

/* 5 — Footwear */
export function Footwear() {
  return (
    <section className="bg-muted py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal max-w-3xl">
          <Eyebrow>04 · Built for footwear commerce</Eyebrow>
          <h2 className="text-4xl font-semibold md:text-6xl">The next generation of footwear discovery.</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {a.challenges.map((c, i) => (
            <div key={c.title} className="reveal group flex flex-col rounded-3xl border bg-card p-6 shadow-soft transition-transform duration-500 hover:-translate-y-2" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="font-display text-5xl font-semibold text-gradient">0{i + 1}</span>
              <h3 className="mt-6 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              <div className="mt-auto pt-6">
                <div className="rounded-xl bg-accent p-3 text-xs font-semibold text-accent-foreground">ACS opportunity → {c.acs}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6 — Agent */
export function Agent() {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es[0]?.isIntersecting && setStarted(true), { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!started || step >= 6) return;
    const t = setTimeout(() => setStep(step + 1), [600, 1400, 1600, 1200, 1400, 900][step]);
    return () => clearTimeout(t);
  }, [started, step]);
  const g = a.agent;
  const Typing = () => (
    <div className="flex w-fit gap-1 rounded-2xl bg-muted px-4 py-3">
      {[0, 1, 2].map((i) => <span key={i} className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: `${i * 120}ms` }} />)}
    </div>
  );
  const Bubble = ({ me, children }: { me?: boolean; children: ReactNode }) => (
    <div className={`animate-in fade-in slide-in-from-bottom-2 max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed duration-500 ${me ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"}`}>{children}</div>
  );
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="reveal">
          <Eyebrow>05 · Meet the conversational shopper</Eyebrow>
          <h2 className="text-4xl font-semibold md:text-6xl">What if shoppers didn't have to know what to search for?</h2>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            A conceptual look at a guided, conversational experience powered by Salesforce Shopper Agent.
          </p>
          <p className="mt-6 max-w-md rounded-xl border p-4 text-xs text-muted-foreground">
            Conceptual demonstration. Salesforce Shopper Agent and Agentic Commerce Search are distinct offerings; no integration or specific functionality is implied.
          </p>
          <Button onClick={() => { setStep(0); setStarted(true); }} variant="outline" className="mt-6 h-auto rounded-full border px-5 py-2 text-sm font-semibold hover:border-primary">↻ Replay conversation</Button>
        </div>
        <div ref={ref} className="reveal rounded-[2rem] border bg-card p-3 shadow-soft">
          <div className="flex items-center gap-3 rounded-t-[1.6rem] bg-navy px-5 py-4 text-navy-foreground">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold">✦</span>
            <div>
              <p className="text-sm font-semibold">Shopping Assistant</p>
              <p className="text-xs text-navy-muted">Illustrative concept</p>
            </div>
          </div>
          <div className="flex min-h-[520px] flex-col gap-3 p-5">
            {step >= 1 && <Bubble me>{g.shopper}</Bubble>}
            {step === 2 && <Typing />}
            {step >= 3 && <Bubble>{g.followUp}</Bubble>}
            {step >= 4 && <Bubble me>{g.reply}</Bubble>}
            {step === 5 && <Typing />}
            {step >= 6 && (
              <>
                <Bubble>{g.answer}</Bubble>
                <div className="grid grid-cols-3 gap-3">
                  {g.products.map((p, i) => <ProductCard key={p.name} p={p} delay={i * 120} />)}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 7 — Proof */
export function Proof() {
  const [zoom, setZoom] = useState<string | null>(null);
  return <section id="customers" className="bg-secondary py-24"><div className="mx-auto max-w-7xl px-6"><div className="reveal max-w-4xl"><Eyebrow>Real Customer Search Examples</Eyebrow><h2 className="text-4xl font-semibold md:text-5xl">Real Shoppers. Real Questions. More Relevant Results.</h2></div><div className="mt-12 grid gap-8 lg:grid-cols-3">{a.customerExamples.map(c => <article key={c.name} className="reveal min-w-0"><p className="text-xl font-bold">{c.name}</p><h3 className="mt-3 min-h-16 text-lg font-semibold">“{c.query}”</h3><Button variant="ghost" onClick={() => setZoom(c.screenshot)} aria-label={`Enlarge ${c.name} search screenshot`} className="relative mt-4 block h-auto w-full overflow-hidden rounded-lg border bg-card p-0"><img src={c.screenshot} alt={`${c.name} original search results for ${c.query}`} className="aspect-[4/5] w-full object-cover object-top" /><span className="absolute bottom-3 right-3 rounded-md bg-primary p-2 text-primary-foreground"><ZoomIn /></span></Button><p className="mt-5 text-sm leading-relaxed text-muted-foreground">{c.explanation}</p><p className="mt-4 text-sm font-semibold text-primary">{c.takeaway}</p></article>)}</div><p className="mt-8 text-xs text-muted-foreground">Authentic, unaltered customer screenshots supplied for illustration. Screenshots alone do not establish which backend search technology generated these results.</p></div><Lightbox src={zoom} onClose={() => setZoom(null)} /></section>;
}

/* 8 — Close */
export function Closing() {
  return (
    <section className="bg-close relative flex min-h-[85svh] items-center overflow-hidden text-navy-foreground">
      <img src={a.heroImage} alt="" aria-hidden width={1600} height={1008} loading="lazy" className="pointer-events-none absolute -bottom-20 left-1/2 w-[900px] max-w-none -translate-x-1/2 mask-fade opacity-40 mix-blend-screen" />
      <div className="reveal relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-5xl font-semibold leading-[1.02] md:text-7xl">
          Your Shoppers Shouldn't Have to Think Like Your Search Engine.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-navy-muted md:text-xl">
          From natural-language discovery to richer product understanding, ACS helps bridge the gap between what shoppers mean and what your catalog contains — creating more relevant experiences while reducing the manual effort behind them.
        </p><p className="mx-auto mt-8 max-w-3xl text-lg font-semibold text-sky">Let your search understand your shoppers. Let your teams focus on growing the business.</p>
      </div>
      <p className="absolute bottom-6 left-0 right-0 text-center text-[11px] text-navy-muted">
        Account-specific concept prepared for discussion. Not an official Salesforce or {a.name} publication. Screenshots are unaltered captures; all ACS results are illustrative.
      </p>
    </section>
  );
}
