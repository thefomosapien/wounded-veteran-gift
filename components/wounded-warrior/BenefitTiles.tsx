import ScrollReveal from "./ScrollReveal";

const TILES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, stroke: "var(--color-gold)", fill: "none", strokeWidth: 1.7 }}>
        <rect x="3" y="8" width="18" height="8" rx="4" />
        <path d="M12 8v8" />
      </svg>
    ),
    title: "Prescriptions",
    body: "Lower costs at the pharmacy counter with WeSalute Rx — every refill, all year.",
    anchor: "Ongoing savings",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, stroke: "var(--color-gold)", fill: "none", strokeWidth: 1.7 }}>
        <path d="M4 5h2l2 11h9l2-8H7" />
        <circle cx="9" cy="20" r="1.3" />
        <circle cx="17" cy="20" r="1.3" />
      </svg>
    ),
    title: "Groceries & everyday",
    body: "Real savings on the essentials a family buys whether the budget allows it or not.",
    anchor: "Every week",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, stroke: "var(--color-gold)", fill: "none", strokeWidth: 1.7 }}>
        <path d="M3 13l8-2 5-7 2 1-2 7 4 2v2l-6-1-3 5-2-1 1-4-5 1z" />
      </svg>
    ),
    title: "Travel & airfare",
    body: "Airline, hotel, and up to 35% car-rental savings — plus a $3,000 WeSalute Travel Cash Gift.",
    anchor: "Up to 35% on rentals",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, stroke: "var(--color-gold)", fill: "none", strokeWidth: 1.7 }}>
        <path d="M5 16l1.5-5h11L19 16" />
        <rect x="3" y="16" width="18" height="3" rx="1" />
        <circle cx="7" cy="19.5" r="1.1" />
        <circle cx="17" cy="19.5" r="1.1" />
      </svg>
    ),
    title: "Auto & home",
    body: "The big, unavoidable expenses — tires, repairs, appliances — cost less.",
    anchor: "~$300 saved on tires",
  },
];

export default function BenefitTiles() {
  return (
    <section
      id="case"
      style={{
        padding: "clamp(56px,8vw,104px) 0",
        background: "var(--color-slate)",
        color: "var(--color-cream)",
      }}
    >
      <div className="wrap">
        <ScrollReveal>
          <div style={{ maxWidth: "60ch" }}>
            <span className="eyebrow" style={{ color: "var(--color-gold)" }}>Who you&rsquo;re giving to</span>
            <h2 style={{ fontSize: "clamp(1.9rem,1.5rem + 2.2vw,3.1rem)", margin: "0.42em 0 0.5em", color: "var(--color-cream)" }}>
              A year of WeSalute+, where it&rsquo;s felt most
            </h2>
            <p className="lede" style={{ color: "#CBD8D3", maxWidth: "54ch" }}>
              A service-connected injury carries hidden, lifelong costs. Nothing can undo that
              &mdash; but every month it gives a warrior and their family real relief on the
              expenses that never stop coming.
            </p>
          </div>
        </ScrollReveal>

        <div className="gives-layout">
          {/* Aside: photo + savings callout */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <ScrollReveal style={{ flex: 1, minHeight: 0 }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-card)",
                  overflow: "hidden",
                  /* fill all available flex height; fallback minHeight keeps it tall enough on its own */
                  height: "100%",
                  minHeight: 320,
                  background: "linear-gradient(135deg,#0C3150,#001E33)",
                  border: "1px solid rgba(181,223,208,0.18)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="photo"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 72%", display: "block" }}
                  src="/images/veteran-family.jpg"
                  alt="A veteran and his family laughing together on a couch at home, wearing a WeSalute shirt"
                />
                <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 0 1px rgba(181,223,208,.14)", borderRadius: "inherit", pointerEvents: "none" }} />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div
                style={{
                  background: "var(--color-gold)",
                  color: "var(--color-slate)",
                  borderRadius: "var(--radius-card)",
                  padding: "22px 24px",
                }}
              >
                <div style={{ fontFamily: "var(--font-akkurat)", fontWeight: 800, fontSize: "clamp(2rem,1.6rem + 1.6vw,2.6rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                  $1,100<span style={{ fontWeight: 600, fontSize: "0.42em", letterSpacing: 0 }}> saved</span>
                </div>
                <div style={{ marginTop: 6, fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.35 }}>
                  What one family saved in six months — on travel, gifts, and everyday spending.
                </div>
                <span style={{ display: "block", marginTop: 9, fontFamily: "var(--font-space)", fontSize: "0.63rem", letterSpacing: "0.03em", opacity: 0.72 }}>
                  // Real testimonial — spouse of a Wounded Veteran
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Benefit tiles grid */}
          <div className="gives-tiles">
            {TILES.map((tile) => (
              <ScrollReveal key={tile.title}>
                <div
                  style={{
                    background: "var(--color-slate-lift)",
                    border: "1px solid rgba(181,223,208,0.18)",
                    borderRadius: "var(--radius-card)",
                    padding: "20px 20px 22px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 7,
                    transition: "border-color .2s ease, transform .2s ease",
                  }}
                  className="gtile"
                >
                  <div
                    aria-hidden="true"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 9,
                      background: "rgba(255,196,62,.12)",
                      border: "1px solid rgba(255,196,62,.32)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 3,
                    }}
                  >
                    {tile.icon}
                  </div>
                  <h3 style={{ margin: 0, fontFamily: "var(--font-akkurat)", fontWeight: 700, fontSize: "1.02rem", color: "var(--color-cream)" }}>
                    {tile.title}
                  </h3>
                  <p style={{ fontSize: "0.89rem", color: "#B6C5BF", lineHeight: 1.45 }}>{tile.body}</p>
                  <div style={{ marginTop: "auto", paddingTop: 9, fontFamily: "var(--font-space)", fontSize: "0.71rem", letterSpacing: "0.03em", color: "var(--color-gold)" }}>
                    {tile.anchor}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Testimonial quote */}
        <ScrollReveal style={{ marginTop: "clamp(24px,3vw,34px)" }}>
          <figure
            style={{
              border: "1px solid rgba(181,223,208,0.18)",
              borderLeft: "3px solid var(--color-gold)",
              borderRadius: "var(--radius-card)",
              padding: "clamp(26px,3.5vw,40px)",
              background: "rgba(181,223,208,.05)",
              margin: 0,
            }}
          >
            <blockquote
              style={{
                margin: 0,
                fontFamily: "var(--font-akkurat)",
                fontWeight: 600,
                fontSize: "clamp(1.3rem,1.1rem + 1vw,1.85rem)",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                color: "var(--color-cream)",
              }}
            >
              &ldquo;I want to say this program is a Godsend. It helped me in more ways than I can tell you.
              I am proud to be a member.&rdquo;
            </blockquote>
            <figcaption
              style={{
                display: "block",
                marginTop: 18,
                fontStyle: "normal",
                fontFamily: "var(--font-space)",
                fontSize: "0.74rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-mint)",
              }}
            >
              Jennifer Roy &middot; U.S. Army Wounded Veteran &middot; Member since 2012
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>

      <style>{`
        .gives-layout { display: grid; grid-template-columns: .92fr 1.08fr; gap: clamp(22px,3.5vw,44px); margin-top: clamp(36px,4vw,52px); align-items: stretch; }
        @media (max-width: 880px) { .gives-layout { grid-template-columns: 1fr; } }
        .gives-tiles { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 560px) { .gives-tiles { grid-template-columns: 1fr; } }
        .gtile:hover { border-color: rgba(255,196,62,.45) !important; transform: translateY(-3px); }
      `}</style>
    </section>
  );
}
