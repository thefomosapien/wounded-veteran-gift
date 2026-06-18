"use client";
import { useEffect, useRef, useState } from "react";

const STATES = [
  "Texas","California","Florida","New York","Pennsylvania","Ohio","Georgia","North Carolina",
  "Michigan","New Jersey","Virginia","Washington","Arizona","Tennessee","Massachusetts",
  "Indiana","Missouri","Maryland","Wisconsin","Colorado","Minnesota","South Carolina",
  "Alabama","Louisiana","Kentucky","Oregon","Oklahoma","Connecticut","Nevada","Iowa",
  "Arkansas","Mississippi","Utah","Kansas","New Mexico","Nebraska","West Virginia","Idaho",
  "Hawaii","Maine","New Hampshire","Rhode Island","Montana","Delaware","Vermont","Wyoming",
];

const TIMES = [
  "just now","just now","1 min ago","2 min ago","3 min ago","5 min ago","7 min ago",
  "10 min ago","14 min ago","18 min ago","23 min ago","28 min ago","35 min ago","42 min ago","51 min ago",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buildFeed(count = 10) {
  const used = new Set<string>();
  return Array.from({ length: count }, (_, i) => {
    let region: string;
    do { region = pickRandom(STATES); } while (used.has(region));
    used.add(region);
    return { region, when: TIMES[Math.min(i, TIMES.length - 1)] };
  });
}

const TOTAL  = 30;
const FUNDED = 9;

export default function WaitlistRow() {
  const countRef  = useRef<HTMLSpanElement>(null);
  const tickerRef = useRef<HTMLUListElement>(null);
  const [funded, setFunded] = useState(FUNDED);
  const [feed, setFeed] = useState(() => buildFeed(10));

  /* count-up */
  useEffect(() => {
    const el = countRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { el.textContent = "418"; return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const target = 418, dur = 1500;
      let start: number | null = null;
      function step(ts: number) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el!.textContent = Math.floor(eased * target).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
        else el!.textContent = target.toLocaleString();
      }
      requestAnimationFrame(step);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ticker scroll + new random entries injected periodically */
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const ROW_H = 42;
    let idx = 0;

    const id = setInterval(() => {
      idx++;
      const list = tickerRef.current;
      if (!list) return;
      list.style.transition = "";
      list.style.transform  = `translateY(-${idx * ROW_H}px)`;

      setTimeout(() => {
        const first = list.children[0] as HTMLElement | undefined;
        if (!first) return;
        /* recycle the scrolled-off item with a fresh random entry */
        setFeed(prev => {
          const next = [...prev];
          next.shift();
          // pick a state not already in view
          const inView = new Set(next.map(e => e.region));
          let region: string;
          do { region = pickRandom(STATES); } while (inView.has(region));
          next.push({ region, when: "just now" });
          return next;
        });
        list.style.transition = "none";
        idx--;
        list.style.transform = `translateY(-${idx * ROW_H}px)`;
        void list.offsetHeight;
        list.style.transition = "";
      }, 560);

      if (idx % 2 === 0) setFunded(f => Math.min(f + 1, TOTAL));
    }, 3200);

    setTimeout(() => setFunded(f => Math.min(f + 1, TOTAL)), 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        marginTop: "clamp(20px,3vw,30px)",
        borderTop: "1px solid rgba(181,223,208,0.18)",
        paddingTop: 20,
      }}
    >
      {/* head */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
        <span className="eyebrow" style={{ color: "var(--color-mint)" }}>This year, at a glance</span>
        <span style={{ fontFamily: "var(--font-space)", fontSize: "0.7rem", color: "#8FC9B6", letterSpacing: "0.04em", display: "flex", gap: 18 }}>
          <i style={{ fontStyle: "normal", display: "inline-flex", alignItems: "center", gap: 7 }}>
            <span style={{ width: 13, height: 9, borderRadius: 2, background: "var(--color-gold)", display: "inline-block" }} aria-hidden="true" />
            <span>Sponsored <span className="sr-only">(shown in gold)</span></span>
          </i>
          <i style={{ fontStyle: "normal", display: "inline-flex", alignItems: "center", gap: 7 }}>
            <span style={{ width: 13, height: 9, borderRadius: 2, border: "1px solid rgba(181,223,208,.4)", display: "inline-block" }} aria-hidden="true" />
            <span>Still waiting <span className="sr-only">(shown as outline)</span></span>
          </i>
        </span>
      </div>

      {/* counter + ticker */}
      <div className="glance-top" style={{ margin: "24px 0 28px" }}>
        <div>
          <div style={{ fontFamily: "var(--font-akkurat)", fontWeight: 800, fontSize: "clamp(3.4rem,2.6rem + 4vw,5.4rem)", lineHeight: 0.9, letterSpacing: "-0.03em", color: "var(--color-gold)" }}>
            <span ref={countRef}>418</span>
            <span style={{ fontSize: "0.55em", verticalAlign: "0.18em" }}>+</span>
          </div>
          <div style={{ marginTop: 10, fontFamily: "var(--font-space)", fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-mint)" }}>
            Warriors sponsored this year
          </div>
        </div>

        <div style={{ borderLeft: "1px solid rgba(181,223,208,0.18)", paddingLeft: "clamp(20px,3vw,32px)" }} className="live-feed-col">
          <div style={{ display: "flex", alignItems: "center", gap: 9, fontFamily: "var(--font-space)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-mint)", marginBottom: 12 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#46d39a", animation: "pulse 2s infinite", display: "inline-block" }} aria-hidden="true" />
            Recent sponsorships
          </div>
          <div style={{ height: 126, overflow: "hidden", position: "relative" }} aria-live="polite" aria-atomic="false">
            <ul
              ref={tickerRef}
              style={{ listStyle: "none", margin: 0, padding: 0, transition: "transform .55s cubic-bezier(.2,.7,.2,1)" }}
            >
              {feed.map((item, i) => (
                <li
                  key={i}
                  style={{
                    height: 42,
                    display: "flex",
                    alignItems: "center",
                    gap: 11,
                    fontSize: "0.93rem",
                    color: "#CBD8D3",
                    borderBottom: "1px solid rgba(181,223,208,.08)",
                  }}
                >
                  <span style={{ width: 21, height: 21, borderRadius: 5, background: "var(--color-gold)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" style={{ width: 12, height: 12, stroke: "var(--color-slate)", fill: "none", strokeWidth: 2 }}>
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <span>A supporter in <b style={{ color: "var(--color-cream)", fontWeight: 600 }}>{item.region}</b> sponsored a warrior</span>
                  <span style={{ marginLeft: "auto", fontFamily: "var(--font-space)", fontSize: "0.67rem", color: "var(--color-mint-deep)", whiteSpace: "nowrap" }}>{item.when}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* card glyphs */}
      <div
        role="img"
        aria-label="Sponsorship progress: funded spots shown in gold, waiting spots shown as outlines"
        style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 18 }}
      >
        {Array.from({ length: TOTAL }, (_, i) => (
          <span
            key={i}
            style={{
              width: 26,
              height: 17,
              borderRadius: 3,
              border: i < funded ? "1px solid var(--color-gold)" : "1px solid rgba(181,223,208,.35)",
              background: i < funded ? "var(--color-gold)" : "transparent",
              position: "relative",
              transition: "background .6s ease, border-color .6s ease, transform .3s ease",
              display: "inline-block",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 3,
                top: 5,
                width: 9,
                height: 2,
                borderRadius: 2,
                background: i < funded ? "rgba(0,30,51,.45)" : "rgba(181,223,208,.3)",
                display: "block",
              }}
            />
          </span>
        ))}
      </div>

      <p style={{ marginTop: 18, fontSize: "0.96rem", color: "#C7D4CF", maxWidth: "62ch" }}>
        Each mark is a Membership. An estimated{" "}
        <span style={{ color: "var(--color-gold)", fontWeight: 700, borderBottom: "1.5px dashed rgba(255,196,62,.5)", paddingBottom: 1 }}>5.1&nbsp;million+</span>{" "}
        wounded veterans with a 30%+ service-connected disability are eligible &mdash; and many are on the list right now. Watch a spot fill, and that&rsquo;s one name welcomed.
      </p>

      <style>{`
        .glance-top { display: grid; grid-template-columns: auto 1fr; gap: clamp(24px,4vw,52px); align-items: center; }
        @media (max-width: 760px) { .glance-top { grid-template-columns: 1fr; gap: 24px; } .live-feed-col { border-left: 0 !important; padding-left: 0 !important; border-top: 1px solid rgba(181,223,208,0.18); padding-top: 22px; } }
      `}</style>
    </div>
  );
}
