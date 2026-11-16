import { useEffect, useRef, useState, type ReactNode } from "react";
import { account } from "@/config/accounts";

import { Button } from "@/components/ui/button";
import { RotateCcw, Search, Sparkles, X, ZoomIn } from "lucide-react";
import astro from "@/assets/characters/astro-trim.png";
import einstein from "@/assets/characters/einstein.png";
import { searchRevenueModel, revenueLimits, modeledScenarios } from "@/lib/revenue-model";

const a = account;

export function useReveal() {
  useEffect(() => {
    const show = (el: Element) => el.classList.add("in");
    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll(".reveal").forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } }),
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    const watch = () => document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    // Backstop when the browser throttles observers (embedded or background previews):
    // reveal anything already above the bottom of the viewport.
    const check = () => document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) show(el);
    });
    watch();
    check();
    // Sections re-rendered or remounted after mount (hot updates, keyed tab changes) get new nodes.
    const mo = new MutationObserver(() => { watch(); check(); });
    mo.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => { io.disconnect(); mo.disconnect(); window.removeEventListener("scroll", check); window.removeEventListener("resize", check); };
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
    <svg viewBox="-4 -4 136 80" aria-hidden className={`overflow-visible ${className}`} fill="currentColor">
      <path d="M28 70a24 24 0 0 1-2-47.9A30 30 0 0 1 82 16a22 22 0 0 1 30 22A16 16 0 0 1 110 70Z" />
    </svg>
  );
}

const characters = { Astro: astro, Einstein: einstein };

/** Approved Salesforce character artwork, shown at its natural proportions on a transparent background. */
export function Mascot({ name, className = "" }: { name: keyof typeof characters; className?: string }) {
  return <img data-mascot={name} src={characters[name]} alt={`Salesforce ${name}`} className={`h-auto w-full object-contain drop-shadow-[0_24px_40px_rgba(3,45,96,0.35)] ${className}`} />;
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
          <p className="mt-5 max-w-xl text-base text-navy-muted">Ariat already knows western shoppers. Imagine a search experience that understands them just as well.</p>
          <div className="mt-10 flex max-w-xl items-center gap-3 rounded-2xl bg-card px-6 py-4 text-lg text-card-foreground shadow-glow">
            <span className="text-primary"><SearchIcon /></span>
            <Typewriter phrases={a.heroSearches} />
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-sm">
          <div className="rounded-[2rem] border border-sky/20 bg-navy/40 p-6 shadow-glow backdrop-blur">
            <div className="relative">
              <Cloud className="pointer-events-none absolute inset-x-6 bottom-2 text-sky/15" />
              <Mascot name="Astro" className="animate-float relative" />
            </div>
            <div className="relative mt-6 overflow-hidden rounded-2xl border border-sky/25 bg-primary/10 px-5 py-6 text-center shadow-glow">
              <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-brand" />
              <p className="text-xl font-bold leading-[1.18] tracking-tight md:text-2xl">
                <span className="block text-navy-foreground">Beyond Keywords.</span>
                <span className="mt-1 block text-sky">Built for Conversion.</span>
              </p>
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

function EvidenceImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  if (failedSrc === src) return <span role="status" className="flex min-h-64 items-center justify-center bg-muted p-10 text-center text-sm text-muted-foreground">Original screenshot awaiting file upload.</span>;
  return <img src={src} alt={alt} className={className} onError={() => setFailedSrc(src)} />;
}

function Screenshot({ src, onZoom, retailer = "Ariat" }: { src: string; onZoom: () => void; retailer?: string }) {
  return (
    <Button onClick={onZoom} variant="ghost" className="group relative block h-auto w-full whitespace-normal p-0 cursor-zoom-in overflow-hidden rounded-2xl border bg-card shadow-soft">
      <div className="flex items-center gap-1.5 border-b bg-muted px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-3 text-xs text-muted-foreground">{retailer} · captured search results</span>
      </div>
      <EvidenceImage src={src} alt={`Actual ${retailer} search results screenshot`} className="w-full transition-transform duration-700 group-hover:scale-[1.02]" />
      <span className="absolute bottom-4 right-4 rounded-full bg-navy px-3 py-1.5 text-xs font-semibold text-navy-foreground opacity-90">
        Click to zoom
      </span>
    </Button>
  );
}

/* 2 — Today */
export function Today({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  const [zoom, setZoom] = useState<string | null>(null);
  const q = a.queries[active];
  if (!q) return null;
  return (
    <section id="today" className="mx-auto max-w-7xl px-6 py-32">
      <div className="reveal max-w-3xl">
        <Eyebrow>01 · The search experience today</Eyebrow>
        <h2 className="text-4xl font-semibold md:text-6xl">
          Your Navigation Knows Your Products. <span className="text-gradient">Does Your Search?</span>
        </h2>
      </div>
      <p className="reveal mt-6 max-w-3xl text-lg text-muted-foreground">Ariat already organizes products around the styles, occasions, and shoppers its customers care about. But when those same intentions appear in the search bar, the experience tells a different story.</p>
      <div className="reveal mt-12"><QueryTabs active={active} setActive={setActive} /></div>
      <p className="reveal mt-8 w-fit rounded-full bg-accent px-4 py-2 text-sm font-semibold text-primary">{q.merchandising}</p>
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
        </aside>
      </div>
      <p className="reveal mt-10 text-xl font-semibold">The products are there. The merchandising is there. The shopper intent is there. The connection is missing.</p>
      <Lightbox src={zoom} onClose={() => setZoom(null)} />
    </section>
  );
}

/* 3 — Real Boot Barn ACS results, synchronized with Ariat evidence. */
export function Reimagined({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  const [zoom, setZoom] = useState<string | null>(null);
  const q = a.queries[active];
  if (!q) return null;
  return <section id="with-acs" className="relative overflow-hidden bg-secondary py-28">
    <Cloud className="pointer-events-none absolute -right-16 top-10 w-80 text-primary/10" />
    <div className="relative mx-auto max-w-7xl px-6">
      <div className="reveal max-w-4xl"><Eyebrow>02 · Boot Barn · The ACS difference</Eyebrow><h2 className="text-4xl font-semibold md:text-6xl">Same Searches. Smarter Results. <span className="text-gradient">Powered by ACS.</span></h2><p className="mt-6 text-lg text-muted-foreground">See how Boot Barn connects the very same shopper searches to relevant products with Salesforce Agentic Commerce Search.</p></div>
      <div className="reveal mt-12"><QueryTabs active={active} setActive={setActive} /></div>
      <div key={q.id} className="animate-in fade-in slide-in-from-bottom-3 mt-10 duration-500">
        <div className="flex flex-col gap-5 rounded-2xl bg-navy p-6 text-navy-foreground shadow-soft md:flex-row md:items-center md:justify-between"><p className="flex min-w-0 items-center gap-3 text-lg font-semibold"><Search className="size-5 shrink-0 text-sky" />“{q.query}”</p><div className="flex flex-wrap gap-2">{q.understood.map(t => <span key={t} className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">{t}</span>)}</div></div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
          <Screenshot src={q.acsScreenshot!} retailer="Boot Barn" onZoom={() => setZoom(q.acsScreenshot!)} />
          <aside className="self-start rounded-2xl border bg-card p-6 shadow-soft"><p className="flex items-center gap-2 text-sm font-semibold text-primary"><Sparkles className="size-4" />{q.annotation}</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{q.resultSummary}</p></aside>
        </div>
      </div>
      <p className="reveal mt-10 text-xl font-semibold">Ariat has the products. ACS has the intelligence to connect them to shoppers.</p>
    </div><Lightbox src={zoom} onClose={() => setZoom(null)} />
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
    <div className="reveal"><Eyebrow>06 · Customer Success Metrics</Eyebrow><h2 className="text-4xl font-semibold md:text-5xl">Better discovery. Measurable business impact.</h2></div>
    <div className="reveal mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">{a.outcomes.map(m => <article key={m.label} className="rounded-lg border bg-card p-6 shadow-soft"><p className="font-display text-4xl font-semibold text-primary md:text-5xl">{m.value}</p><p className="mt-3 text-sm font-semibold">{m.label}</p></article>)}</div>
    <p className="mt-5 max-w-4xl text-xs leading-relaxed text-muted-foreground">Source: Customer Success Metrics — outcomes reported by Agentic Commerce Search customers. Individual results vary and are not a guarantee of performance.</p>
    <div className="reveal mt-20 border-t pt-14"><Eyebrow>Modeled Ariat Opportunity</Eyebrow><h2 className="text-4xl font-semibold md:text-5xl">What Could This Mean for {a.name}?</h2><p className="mt-4 text-lg text-muted-foreground">Explore how improvements in search performance could translate into incremental ecommerce revenue.</p><p className="mt-3 text-xs text-muted-foreground">Illustrative financial assumptions — pending Ariat-specific validation.</p></div>
    <div className="reveal mt-10 grid gap-10 lg:grid-cols-2"><div className="space-y-7">
      <ModelSlider label="Annual ecommerce revenue" note="Estimate — illustrative starting point. Replace with Ariat actuals." value={revenue} limits={revenueLimits.annualRevenue} step={10_000_000} onChange={setRevenue} money />
      <ModelSlider label="Share of ecommerce revenue attributable to site search" note="Estimate — adjustable, 12% by default. Revenue from sessions involving site search." value={share} limits={revenueLimits.searchSharePct} step={1} onChange={setShare} />
      <ModelSlider label="Expected search revenue per visitor (RPV) uplift" note="Estimate — adjustable uplift assumption. RPV measures revenue generated per visitor. Improvements can reflect conversion, average order value, or both." value={uplift} limits={revenueLimits.upliftPct} step={1} onChange={setUplift} />
      <Button variant="outline" onClick={() => {setRevenue(a.calculator.annualRevenue);setShare(a.calculator.searchSharePct);setUplift(a.calculator.upliftPct);}}><RotateCcw />Reset to defaults</Button>
    </div><div className="flex flex-col justify-center rounded-lg bg-close p-6 text-navy-foreground md:p-10"><p className="eyebrow text-sky">Modeled incremental annual revenue</p><p data-revenue-result aria-live="polite" className="mt-5 font-display text-5xl font-semibold tabular-nums md:text-6xl">{millions(model.incrementalRevenue)}</p><p className="mt-2 text-xl">Potential Annual Incremental Revenue</p><dl className="mt-8 space-y-4 border-t border-navy-muted/30 pt-6 text-sm"><div className="flex flex-wrap justify-between gap-2"><dt>Annual ecommerce revenue</dt><dd>{usd(revenue)}</dd></div><div className="flex flex-wrap justify-between gap-2"><dt>Search revenue share</dt><dd>{share}%</dd></div><div className="flex flex-wrap justify-between gap-2"><dt>Search-attributed revenue</dt><dd>{usd(model.searchRevenue)}</dd></div><div className="flex flex-wrap justify-between gap-2"><dt>Expected RPV uplift</dt><dd>{uplift}%</dd></div><div className="flex flex-wrap justify-between gap-2 border-t border-navy-muted/30 pt-4 font-semibold"><dt>Incremental annual revenue</dt><dd>{usd(model.incrementalRevenue)}</dd></div></dl></div></div>
    <div className="reveal mt-8 grid gap-4 md:grid-cols-3">{modeledScenarios.map(s => <article key={s.name} className="rounded-lg border bg-secondary p-5"><p className="text-sm font-semibold">{s.name} · {s.upliftPct}% modeled uplift</p><p className="mt-2 text-2xl font-semibold text-primary">{usd(searchRevenueModel(revenue,share,s.upliftPct).incrementalRevenue)}<span className="ml-1 text-xs text-muted-foreground">/ year</span></p></article>)}</div><p className="mt-5 text-xs leading-relaxed text-muted-foreground">Model: annual ecommerce revenue × search revenue share × expected RPV uplift. Assumes constant traffic and no material change in search visitor mix. Search share is a proxy for the eligible revenue base. RPV is the single modeled uplift, so conversion and AOV lifts are not added again.</p>
  </div></section>;
}

/* 5 — Agent */
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
          <Button onClick={() => { setStep(0); setStarted(true); }} variant="outline" className="mt-6 h-auto rounded-full border px-5 py-2 text-sm font-semibold hover:border-primary">↻ Replay conversation</Button>
        </div>
        <div ref={ref} className="reveal rounded-[2rem] border bg-card p-3 shadow-soft">
          <div className="flex items-center gap-3 rounded-t-[1.6rem] bg-navy px-5 py-4 text-navy-foreground">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold">✦</span>
            <div>
              <p className="text-sm font-semibold">Shopping Assistant</p>
              <p className="text-xs text-navy-muted">Guided shopping</p>
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
                <div className="animate-in fade-in grid grid-cols-3 gap-3 duration-500">
                  {g.products.map((p, i) => {
                    const c = g.comparison[i];
                    return <div key={p.name} className="flex min-w-0 flex-col rounded-2xl border bg-card p-3 shadow-soft">
                      <div className="flex aspect-[3/2] items-center justify-center rounded-lg p-1"><img src={p.image} alt={p.name} className="h-full w-full object-contain" /></div>
                      <p className="mt-2 text-xs font-semibold leading-snug">{p.name}</p>
                      <p className="text-xs font-semibold text-primary">{p.price}</p>
                      {c && <dl className="mt-2 space-y-1 border-t pt-2 text-[11px] leading-snug text-muted-foreground">
                        <div><dt className="inline font-semibold text-foreground">Best for: </dt><dd className="inline">{c.bestUse}</dd></div>
                        <div><dt className="inline font-semibold text-foreground">Comfort: </dt><dd className="inline">{c.comfort}</dd></div>
                        <div><dt className="inline font-semibold text-foreground">Style: </dt><dd className="inline">{c.style}</dd></div>
                        <div className="text-primary">{c.difference}</div>
                      </dl>}
                    </div>;
                  })}
                </div>
                <Bubble>{g.closing}</Bubble>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 6 — Proof */
export function Proof() {
  const [zoom, setZoom] = useState<string | null>(null);
  return <section id="customers" className="bg-secondary py-24"><div className="mx-auto max-w-7xl px-6"><div className="reveal max-w-4xl"><Eyebrow>03 · Real Customer Search Examples</Eyebrow><h2 className="text-4xl font-semibold md:text-5xl">Different Shoppers. Different Intentions. One Smarter Search.</h2><p className="mt-6 text-lg text-muted-foreground">From specialized terminology to personal style and shopping occasions, ACS understands what shoppers actually mean.</p></div><div className="mt-12 grid gap-x-8 gap-y-12 lg:grid-cols-3 lg:gap-y-0">{a.customerExamples.map(c => <article key={c.name} className="reveal min-w-0 lg:grid lg:grid-rows-subgrid lg:row-span-5"><p className="text-xl font-bold">{c.name}</p><h3 className="min-h-16 pt-3 text-lg font-semibold">“{c.query}”</h3><div className="flex pt-4"><Button variant="ghost" onClick={() => setZoom(c.screenshot)} aria-label={`Enlarge ${c.name} search screenshot`} className="relative flex h-auto w-full items-center justify-center rounded-lg border bg-card p-0"><span className="relative block w-full"><EvidenceImage src={c.screenshot} alt={`${c.name} original search results for ${c.query}`} className="block h-auto w-full object-contain" /><span className="absolute bottom-3 right-3 rounded-md bg-primary p-2 text-primary-foreground"><ZoomIn /></span></span></Button></div><p className="pt-5 text-sm leading-relaxed text-muted-foreground">{c.explanation}</p><p className="pt-4 text-sm font-semibold text-primary">{c.takeaway}</p></article>)}</div></div><Lightbox src={zoom} onClose={() => setZoom(null)} /></section>;
}

/* 7 — Close */
export function Closing() {
  return (
    <section className="relative overflow-hidden bg-navy py-28 text-navy-foreground md:py-36">
      <Cloud className="pointer-events-none absolute -left-20 bottom-0 w-96 text-primary/25" />
      <Cloud className="pointer-events-none absolute right-0 top-10 w-64 text-sky/10" />
      <div className="reveal relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_260px]">
        <div>
          <h2 className="text-4xl font-semibold leading-[1.08] md:text-6xl">Your Shoppers Shouldn't Have to Think Like Your Search Engine.</h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed md:text-xl">
            From natural-language discovery to richer product understanding, ACS helps you move from reactive search maintenance to intelligent product discovery — and frees your merchandisers to focus on strategic storytelling.
          </p>
          <p className="mt-8 inline-block rounded-2xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground">Let your search understand your shoppers. Let your teams focus on growing the business.</p>
        </div>
        <div className="relative mx-auto w-56 md:w-64"><Cloud className="pointer-events-none absolute inset-x-0 bottom-0 text-sky/15" /><Mascot name="Astro" className="animate-float relative" /></div>
      </div>
    </section>
  );
}
