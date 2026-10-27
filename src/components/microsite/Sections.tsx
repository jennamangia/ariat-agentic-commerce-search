import { useEffect, useRef, useState, type ReactNode } from "react";
import { account, annualOpportunity, type Product } from "@/config/accounts";

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
    const full = phrases[i];
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
      {phrases[i].slice(0, n)}
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

/* 1 — Hero */
export function Hero() {
  return (
    <section className="bg-hero relative flex min-h-screen items-center overflow-hidden text-navy-foreground">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-24 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative z-10">
          <Eyebrow dark>{a.name} × Agentic Commerce Search</Eyebrow>
          <h1 className="text-5xl font-semibold leading-[1.02] md:text-7xl">
            What if {a.name} understood every shopper's{" "}
            <span className="font-serif font-normal italic text-sky">intent?</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy-muted md:text-xl">
            Reimagining product discovery with Salesforce Agentic Commerce Search.
          </p>
          <div className="mt-10 flex max-w-xl items-center gap-3 rounded-full bg-card px-6 py-4 text-lg text-card-foreground shadow-glow">
            <span className="text-primary"><SearchIcon /></span>
            <Typewriter phrases={a.heroSearches} />
          </div>
        </div>
        <img
          src={a.heroImage}
          alt="Premium athletic sneaker"
          width={1600}
          height={1008}
          className="animate-float relative w-full scale-125 mix-blend-screen lg:scale-150"
        />
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
        <button
          key={q.id}
          onClick={() => setActive(i)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
            i === active
              ? "border-primary bg-primary text-primary-foreground shadow-glow"
              : dark
                ? "border-navy-muted/30 text-navy-muted hover:border-sky hover:text-navy-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
          }`}
        >
          “{q.query}”
        </button>
      ))}
    </div>
  );
}

function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  if (!src) return null;
  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex cursor-zoom-out items-start justify-center overflow-auto bg-navy/90 p-6 backdrop-blur">
      <img src={src} alt="Full-size search screenshot" className="max-w-none rounded-lg shadow-soft" style={{ width: "min(1800px, 140vw)" }} />
      <button className="fixed right-6 top-6 rounded-full bg-card px-4 py-2 text-sm font-semibold text-card-foreground">Close ✕</button>
    </div>
  );
}

function Screenshot({ src, onZoom }: { src: string; onZoom: () => void }) {
  return (
    <button onClick={onZoom} className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border bg-card shadow-soft">
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
    </button>
  );
}

/* 2 — Today */
export function Today() {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState<string | null>(null);
  const q = a.queries[active];
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

function ProductCard({ p, delay = 0 }: { p: Product; delay?: number }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both rounded-2xl border bg-card p-3 shadow-soft duration-700" style={{ animationDelay: `${delay}ms` }}>
      <div className="aspect-square overflow-hidden rounded-xl bg-muted">
        <img src={p.image} alt={p.name} loading="lazy" width={816} height={816} className="h-full w-full object-cover" />
      </div>
      <p className="mt-3 text-sm font-semibold leading-tight">{p.name}</p>
      <div className="mt-2 flex flex-wrap gap-1">
        {p.tags.map((t) => (
          <span key={t} className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-accent-foreground">{t}</span>
        ))}
      </div>
    </div>
  );
}

/* 3 — Before / after */
export function Reimagined() {
  const [active, setActive] = useState(0);
  const [after, setAfter] = useState(true);
  const [zoom, setZoom] = useState<string | null>(null);
  const q = a.queries[active];
  return (
    <section className="bg-navy py-32 text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal max-w-3xl">
          <Eyebrow dark>02 · Reimagining search with ACS</Eyebrow>
          <h2 className="text-4xl font-semibold md:text-6xl">
            From matching words to <span className="font-serif font-normal italic text-sky">understanding intent.</span>
          </h2>
        </div>
        <div className="reveal mt-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <QueryTabs active={active} setActive={setActive} dark />
          <div className="inline-flex shrink-0 rounded-full bg-navy-foreground/10 p-1">
            {["Today's Experience", "Reimagined with ACS"].map((l, i) => (
              <button
                key={l}
                onClick={() => setAfter(i === 1)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${after === (i === 1) ? "bg-card text-card-foreground" : "text-navy-muted"}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="reveal mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="rounded-3xl bg-background p-6 text-foreground md:p-8">
            <div className="mb-6 flex items-center gap-3 rounded-full border bg-card px-5 py-3">
              <span className="text-primary"><SearchIcon /></span>
              <span className="font-medium">{q.query}</span>
              {after && <span className="ml-auto rounded-full bg-brand px-3 py-1 text-[11px] font-bold text-primary-foreground">Illustrative ACS Experience</span>}
            </div>
            {after ? (
              <div key={q.id + "a"}>
                <div className="mb-5 flex flex-wrap gap-2">
                  {q.intent.map((t) => (
                    <span key={t} className="rounded-full border border-primary/30 bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">✓ {t}</span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {q.products.map((p, i) => <ProductCard key={i} p={p} delay={i * 90} />)}
                </div>
                <p className="mt-5 text-xs text-muted-foreground">
                  Conceptual mockup. Illustrative product cards — not live ACS output, actual Skechers products, or suitability claims.
                </p>
              </div>
            ) : (
              <Screenshot key={q.id + "b"} src={q.screenshot} onZoom={() => setZoom(q.screenshot)} />
            )}
          </div>
          <aside className="flex flex-col gap-4">
            <div className="rounded-2xl bg-brand p-6 text-primary-foreground">
              <p className="eyebrow opacity-80">{after ? "What changes" : "Today"}</p>
              <p className="mt-3 text-2xl font-semibold leading-tight">{after ? q.annotation : q.observation}</p>
            </div>
            {["Understands occasion, not just keywords.", "Prioritizes relevant product attributes.", "Surfaces products aligned with shopper intent."].map((t) => (
              <div key={t} className={`rounded-2xl border border-navy-muted/20 p-5 text-sm transition-opacity ${after ? "opacity-100" : "opacity-40"}`}>
                <span className="mr-2 text-sky">◆</span>{t}
              </div>
            ))}
          </aside>
        </div>
      </div>
      <Lightbox src={zoom} onClose={() => setZoom(null)} />
    </section>
  );
}

function useCount(target: number) {
  const [v, setV] = useState(target);
  const from = useRef(target);
  useEffect(() => {
    const start = performance.now();
    const f0 = from.current;
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / 700);
      const e = 1 - Math.pow(1 - k, 3);
      setV(f0 + (target - f0) * e);
      if (k < 1) raf = requestAnimationFrame(tick);
      else from.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); from.current = target; };
  }, [target]);
  return v;
}

function Slider({ label, value, min, max, step, onChange, fmt }: { label: string; value: number; min: number; max: number; step: number; onChange: (n: number) => void; fmt: (n: number) => string }) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
        <input
          type="number"
          value={value}
          step={step}
          min={0}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
          className="w-36 rounded-lg border bg-background px-2 py-1 text-right font-display text-lg font-semibold"
        />
      </div>
      <input type="range" min={min} max={max} step={step} value={Math.min(value, max)} onChange={(e) => onChange(Number(e.target.value))} className="mt-3 w-full accent-primary" />
      <div className="mt-1 text-xs text-muted-foreground">{fmt(value)}</div>
    </label>
  );
}

/* 4 — Calculator */
export function Business() {
  const [visits, setVisits] = useState(a.calculator.monthlyVisits);
  const [rpv, setRpv] = useState(a.calculator.rpv);
  const [pct, setPct] = useState(a.calculator.improvementPct);
  const total = annualOpportunity(visits, rpv, pct);
  const shown = useCount(total);
  const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="reveal max-w-4xl">
        <Eyebrow>03 · Why this matters</Eyebrow>
        <h2 className="text-4xl font-semibold md:text-6xl">
          Search relevance isn't just a customer experience problem. <span className="text-gradient">It's a revenue opportunity.</span>
        </h2>
      </div>
      <div className="reveal mt-14 grid gap-8 lg:grid-cols-2">
        <div className="space-y-8 rounded-3xl border bg-card p-8 shadow-soft">
          <Slider label="Monthly site visits" value={visits} min={100000} max={20000000} step={100000} onChange={setVisits} fmt={(n) => `${n.toLocaleString()} visits / month`} />
          <Slider label="Current revenue per visit ($)" value={rpv} min={0.25} max={10} step={0.25} onChange={setRpv} fmt={(n) => `${usd(n * 100).replace(/\.\d+/, "")} per 100 visits`} />
          <Slider label="Modeled RPV improvement (%)" value={pct} min={1} max={30} step={1} onChange={setPct} fmt={(n) => `${n}% modeled uplift`} />
          <p className="rounded-xl bg-muted p-4 font-mono text-xs text-muted-foreground">
            Monthly visits × 12 × RPV × (Improvement % ÷ 100)
          </p>
        </div>
        <div className="flex flex-col justify-between rounded-3xl bg-hero p-8 text-navy-foreground">
          <div>
            <p className="eyebrow text-sky">Illustrative annual incremental revenue</p>
            <p className="mt-6 font-display text-5xl font-semibold tabular-nums md:text-7xl">{usd(shown)}</p>
          </div>
          <p className="mt-10 text-sm text-navy-muted">
            Illustrative scenario only. Inputs are placeholders, not {a.name}'s actual performance, and not a guaranteed ACS result.
          </p>
        </div>
      </div>
      <div className="reveal mt-8 grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-2xl border-2 border-dashed p-6">
            <p className="eyebrow text-muted-foreground">Verified ACS statistic</p>
            <p className="mt-3 font-display text-3xl font-semibold text-muted-foreground/60">[ — % ]</p>
            <p className="mt-2 text-sm text-muted-foreground">Placeholder — awaiting approved, sourced figure.</p>
            <p className="mt-3 text-xs text-muted-foreground">Source: <span className="underline">[link pending]</span></p>
          </div>
        ))}
      </div>
    </section>
  );
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
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setStarted(true), { threshold: 0.4 });
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
          <button onClick={() => { setStep(0); setStarted(true); }} className="mt-6 rounded-full border px-5 py-2 text-sm font-semibold hover:border-primary">↻ Replay conversation</button>
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
  const cards = ["Verified ACS customer", "Documented performance uplift", "Live customer example", "Approved testimonial / case study"];
  return (
    <section className="bg-navy py-32 text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal max-w-3xl">
          <Eyebrow dark>06 · Proof over promises</Eyebrow>
          <h2 className="text-4xl font-semibold md:text-6xl">
            The opportunity is real. <span className="font-serif font-normal italic text-sky">The proof matters.</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c} className="reveal flex min-h-72 flex-col rounded-3xl border border-dashed border-navy-muted/40 p-6">
              <span className="w-fit rounded-full bg-navy-foreground/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-sky">Placeholder</span>
              <h3 className="mt-6 text-xl font-semibold">{c}</h3>
              <p className="mt-3 font-display text-4xl font-semibold text-navy-muted/50">[ TBD ]</p>
              <p className="mt-2 text-sm text-navy-muted">To be added once verified and approved for external use.</p>
              <p className="mt-auto pt-6 text-xs text-navy-muted">Source: <span className="underline">[link pending]</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 8 — Close */
export function Closing() {
  return (
    <section className="bg-close relative flex min-h-screen items-center overflow-hidden text-navy-foreground">
      <img src={a.heroImage} alt="" aria-hidden width={1600} height={1008} loading="lazy" className="pointer-events-none absolute -bottom-20 left-1/2 w-[900px] max-w-none -translate-x-1/2 opacity-40 mix-blend-screen" />
      <div className="reveal relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-5xl font-semibold leading-[1.02] md:text-7xl">
          Let's make every search a <span className="font-serif font-normal italic text-sky">better shopping experience.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-navy-muted md:text-xl">
          Reimagine what's possible for {a.name} with Salesforce Agentic Commerce Search.
        </p>
      </div>
      <p className="absolute bottom-6 left-0 right-0 text-center text-[11px] text-navy-muted">
        Account-specific concept prepared for discussion. Not an official Salesforce or {a.name} publication. Screenshots are unaltered captures; all ACS results are illustrative.
      </p>
    </section>
  );
}
