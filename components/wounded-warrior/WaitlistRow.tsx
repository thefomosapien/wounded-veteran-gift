"use client";
import { useEffect, useRef, useState, memo } from "react";

const STATES = [
  "Texas","California","Florida","New York","Pennsylvania","Ohio","Georgia","North Carolina",
  "Michigan","New Jersey","Virginia","Washington","Arizona","Tennessee","Massachusetts",
  "Indiana","Missouri","Maryland","Wisconsin","Colorado","Minnesota","South Carolina",
  "Alabama","Louisiana","Kentucky","Oregon","Oklahoma","Connecticut","Nevada","Iowa",
  "Arkansas","Mississippi","Utah","Kansas","New Mexico","Nebraska","West Virginia","Idaho",
  "Hawaii","Maine","New Hampshire","Rhode Island","Montana","Delaware","Vermont","Wyoming",
];

const INITIAL_FEED = [
  { region: "Texas",          when: "just now"   },
  { region: "Ohio",           when: "2 min ago"  },
  { region: "California",     when: "7 min ago"  },
  { region: "Georgia",        when: "14 min ago" },
  { region: "North Carolina", when: "21 min ago" },
  { region: "Arizona",        when: "33 min ago" },
  { region: "Florida",        when: "48 min ago" },
  { region: "Virginia",       when: "1 hr ago"   },
  { region: "Michigan",       when: "1 hr ago"   },
  { region: "Washington",     when: "1 hr ago"   },
];

const TOTAL  = 10;
const FUNDED = 3;

/* ── Ticker is memoized so React never re-renders it after mount.
   All animation is pure DOM — no state, no re-render interference. ── */
const TickerFeed = memo(function TickerFeed() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ROW_H = 42;

    const id = setInterval(() => {
      /* 1 – animate: scroll list up one row */
      list.style.transition = "transform .55s cubic-bezier(.2,.7,.2,1)";
      list.style.transform  = `translateY(-${ROW_H}px)`;

      /* 2 – after the transition, recycle the top item to the bottom */
      setTimeout(() => {
        const first = list.children[0] as HTMLLIElement | null;
        if (!first) return;

        /* pick a state not already in the visible window */
        const visible = new Set(
          [...list.children].slice(1).map(el => el.getAttribute("data-region") ?? "")
        );
        let region: string;
        do { region = STATES[Math.floor(Math.random() * STATES.length)]; }
        while (visible.has(region));

        /* update the recycled item's content in-place */
        first.setAttribute("data-region", region);
        const rEl = first.querySelector(".t-region");
        const wEl = first.querySelector(".t-when");
        if (rEl) rEl.textContent = region;
        if (wEl) wEl.textContent = "just now";

        /* move to end (appears off-screen below) */
        list.appendChild(first);

        /* snap back to origin without animation */
        list.style.transition = "none";
        list.style.transform  = "translateY(0)";
        void list.offsetHeight; /* force reflow before re-enabling transition */
      }, 560);
    }, 3200);

    return () => clearInterval(id);
  }, []);

  return (
    <ul
      ref={listRef}
      style={{ listStyle: "none", margin: 0, padding: 0 }}
    >
      {INITIAL_FEED.map((item, i) => (
        <li
          key={i}
          data-region={item.region}
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
          <span style={{
            width: 21, height: 21, borderRadius: 5, background: "var(--color-gold)",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <svg viewBox="0 0 24 24" style={{ width: 12, height: 12, stroke: "var(--color-slate)", fill: "none", strokeWidth: 2 }}>
              <path d="M5 12l5 5L20 7" />
            </svg>
          </span>
          <span>
            A supporter in{" "}
            <b className="t-region" style={{ color: "var(--color-cream)", fontWeight: 600 }}>{item.region}</b>
            {" "}sponsored a warrior
          </span>
          <span className="t-when" style={{ marginLeft: "auto", fontFamily: "var(--font-space)", fontSize: "0.67rem", color: "var(--color-mint-deep)", whiteSpace: "nowrap" }}>
            {item.when}
          </span>
        </li>
      ))}
    </ul>
  );
});

/* ── Main WaitlistRow component ── */
export default function WaitlistRow() {
  const countRef = useRef<HTMLSpanElement>(null);
  const [funded, setFunded] = useState(FUNDED);

  /* count-up animation */
  useEffect(() => {
    const el = countRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = "418";
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const target = 418, dur = 1500;
      let start: number | null = null;
      function step(ts: number) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        el!.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
        else el!.textContent = target.toLocaleString();
      }
      requestAnimationFrame(step);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* card-glyph fill — runs independently of ticker */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setFunded(f => Math.min(f + 1, TOTAL)), 6400);
    const t  = setTimeout(() => setFunded(f => Math.min(f + 1, TOTAL)), 1600);
    return () => { clearInterval(id); clearTimeout(t); };
  }, []);

  return (
    <div style={{ marginTop: "clamp(20px,3vw,30px)", borderTop: "1px solid rgba(181,223,208,0.18)", paddingTop: 20 }}>
      {/* header */}
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
            <TickerFeed />
          </div>
        </div>
      </div>

      {/* card glyphs */}
      <div
        role="img"
        aria-label="Sponsorship progress: funded spots shown in gold, waiting spots shown as outlines"
        className="card-grid"
      >
        {Array.from({ length: TOTAL }, (_, i) => {
          const isFunded  = i < funded;
          const isPending = i === funded;
          return (
            <span
              key={i}
              className={isPending ? "card-glyph card-loading" : "card-glyph"}
              style={{
                borderColor: isFunded ? "var(--color-gold)" : undefined,
                background:  isFunded ? "var(--color-gold)" : undefined,
              }}
            >
              <span className="card-stripe" style={{
                background: isFunded ? "rgba(0,30,51,.45)" : "rgba(181,223,208,.3)",
              }} />
            </span>
          );
        })}
      </div>

      <p style={{ marginTop: 18, fontSize: "0.96rem", color: "#C7D4CF", maxWidth: "62ch" }}>
        Each mark is a Membership. An estimated{" "}
        <span style={{ color: "var(--color-gold)", fontWeight: 700, borderBottom: "1.5px dashed rgba(255,196,62,.5)", paddingBottom: 1 }}>5.1&nbsp;million+</span>{" "}
        wounded veterans with a 30%+ service-connected disability are eligible &mdash; and many are on the list right now. Watch a spot fill, and that&rsquo;s one name welcomed.
      </p>

      <style>{`
        .glance-top { display: grid; grid-template-columns: auto 1fr; gap: clamp(24px,4vw,52px); align-items: center; }
        @media (max-width: 760px) {
          .glance-top { grid-template-columns: 1fr; gap: 24px; }
          .live-feed-col { border-left: 0 !important; padding-left: 0 !important; border-top: 1px solid rgba(181,223,208,0.18); padding-top: 22px; }
        }

        /* card glyph grid — always 10 columns, fills full width */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: clamp(6px, 1vw, 10px);
          margin-top: 18px;
        }
        .card-glyph {
          display: block;
          position: relative;
          aspect-ratio: 1.586 / 1;
          border-radius: 4px;
          border: 1.5px solid rgba(181,223,208,.35);
          background: transparent;
          transition: background .6s ease, border-color .6s ease;
        }
        .card-stripe {
          position: absolute;
          left: 18%;
          top: 38%;
          width: 40%;
          height: 14%;
          border-radius: 2px;
          display: block;
        }

        /* spinning-arc loading border */
        @property --ba {
          syntax: '<angle>';
          inherits: false;
          initial-value: 0turn;
        }
        @keyframes borderSpin {
          to { --ba: 1turn; }
        }
        .card-loading {
          border: 1.5px solid transparent;
          background:
            conic-gradient(from var(--ba),
              rgba(255,196,62,0) 0%,
              rgba(255,196,62,0) 60%,
              rgba(255,196,62,.9) 80%,
              rgba(255,196,62,0) 100%
            ) border-box,
            rgba(255,196,62,.06) padding-box;
          animation: borderSpin 1.8s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .card-loading {
            border-color: rgba(255,196,62,.5);
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
