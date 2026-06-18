import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    idx: "STEP 01",
    title: "You give",
    body: "Choose a gift. $64.95 covers one wounded veteran's full year of WeSalute+ — the same Membership a paying Member receives.",
    featured: false,
  },
  {
    idx: "STEP 02",
    title: "A warrior is welcomed",
    body: "A wounded veteran on the list is enrolled and issued their WeSalute+ ID Card — moved from waiting to welcomed, because of you.",
    featured: true,
  },
  {
    idx: "STEP 03",
    title: "The Membership goes to work",
    body: "For a full year they unlock real savings on travel, everyday essentials, and the moments that bring a family back together.",
    featured: false,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      style={{
        padding: "clamp(56px,8vw,104px) 0",
        background: "var(--color-paper)",
        borderTop: "1px solid rgba(0,30,51,0.12)",
        borderBottom: "1px solid rgba(0,30,51,0.12)",
      }}
    >
      <div className="wrap">
        <ScrollReveal>
          <div style={{ maxWidth: "60ch" }}>
            <span className="eyebrow" style={{ color: "var(--color-gold-deep)" }}>One gift, one warrior</span>
            <h2 style={{ fontSize: "clamp(1.9rem,1.5rem + 2.2vw,3.1rem)", margin: "0.42em 0 0.5em" }}>
              How your gift becomes a Membership
            </h2>
            <p className="lede" style={{ maxWidth: "54ch" }}>
              No overhead math, no abstraction. A gift here does one specific thing: it puts a
              WeSalute+ Membership in the hands of a wounded veteran who deserves it. This is
              the WeSalute Community&rsquo;s way of delivering A Real Thank You<sup>®</sup>.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="steps-grid" style={{ marginTop: "clamp(34px,4vw,52px)" }}>
          {STEPS.map((step) => (
            <ScrollReveal key={step.idx}>
              <div
                style={{
                  background: "var(--color-cream)",
                  border: "1px solid rgba(0,30,51,0.12)",
                  borderRadius: "var(--radius-card)",
                  padding: "26px 24px 28px",
                  position: "relative",
                }}
              >
                {/* glyph — ID card icon */}
                <div
                  aria-hidden="true"
                  style={{
                    width: 40,
                    height: 26,
                    borderRadius: 5,
                    border: step.featured ? "1.5px solid var(--color-gold)" : "1.5px solid var(--color-slate)",
                    background: step.featured ? "var(--color-gold)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      width: 11,
                      height: 8,
                      borderRadius: 2,
                      background: step.featured ? "var(--color-slate)" : "var(--color-mint-deep)",
                      display: "inline-block",
                    }}
                  />
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-space)",
                    fontWeight: 700,
                    fontSize: "0.74rem",
                    letterSpacing: "0.14em",
                    color: "var(--color-gold-deep)",
                  }}
                >
                  {step.idx}
                </div>
                <h3 style={{ fontSize: "1.32rem", margin: "14px 0 9px", letterSpacing: "-0.01em" }}>
                  {step.title}
                </h3>
                <p style={{ color: "var(--color-ink-soft)", fontSize: "1rem" }}>{step.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Anchor callout */}
        <ScrollReveal>
          <div
            style={{
              marginTop: "clamp(30px,4vw,44px)",
              background: "var(--color-slate)",
              color: "var(--color-cream)",
              borderRadius: "var(--radius-card)",
              padding: "clamp(22px,3vw,30px) clamp(24px,3vw,34px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 22,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-akkurat)",
                fontWeight: 800,
                fontSize: "clamp(1.5rem,1.2rem + 1.4vw,2.1rem)",
                letterSpacing: "-0.02em",
              }}
            >
              <b style={{ color: "var(--color-gold)" }}>$64.95</b> sponsors one warrior for one full year.
            </div>
            <p style={{ color: "#CBD8D3", maxWidth: "42ch", fontSize: "1rem" }}>
              That&rsquo;s the true cost of a Membership &mdash; not a suggested amount. One gift, one year, one warrior welcomed.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(18px,2.5vw,30px); }
        @media (max-width: 820px) { .steps-grid { grid-template-columns: 1fr; gap: 16px; } }
      `}</style>
    </section>
  );
}
