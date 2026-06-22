import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    idx: "STEP 01",
    title: "You give",
    // gift box — the act of giving
    icon: (
      <>
        <rect x="3" y="8" width="18" height="13" rx="1.5" />
        <path d="M3 12h18" />
        <path d="M12 8v13" />
        <path d="M12 8S10.5 3.8 8 4.2C6.4 4.5 6.2 6.6 7.6 7.4 8.8 8 12 8 12 8z" />
        <path d="M12 8s1.5-4.2 4-3.8c1.6.3 1.8 2.4.4 3.2C15.2 8 12 8 12 8z" />
      </>
    ),
    body: "Choose a gift amount. $64.95 covers one wounded veteran's full year of WeSalute+ — they receive all the same benefits.",
    featured: false,
  },
  {
    idx: "STEP 02",
    title: "A warrior is welcomed",
    // ID card — the member being enrolled and issued their card
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="11" r="2" />
        <path d="M5.5 16c.4-1.6 1.6-2.5 3-2.5s2.6.9 3 2.5" />
        <path d="M14.5 9.5h4" />
        <path d="M14.5 12.5h4" />
        <path d="M14.5 15h2.5" />
      </>
    ),
    body: "A wounded veteran on the list is enrolled and issued their WeSalute+ ID Card — moved from waiting to welcomed, because of you.",
    featured: true,
  },
  {
    idx: "STEP 03",
    title: "The Membership goes to work",
    // sparkle — the year of savings and benefits unlocked
    icon: (
      <>
        <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" />
        <path d="M18.5 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z" />
      </>
    ),
    body: "For a full year they unlock real savings on travel, everyday essentials, and the moments that matter most.",
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
            <span className="eyebrow" style={{ color: "var(--color-gold-deep)" }}>Your support matters</span>
            <h2 style={{ fontSize: "clamp(1.9rem,1.5rem + 2.2vw,3.1rem)", margin: "0.42em 0 0.5em" }}>
              How your gift becomes a WeSalute+ Membership
            </h2>
            <p className="lede" style={{ maxWidth: "54ch" }}>
              A gift here does one specific thing: it puts WeSalute+ in the hands of a wounded
              veteran who deserves it.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="steps-grid" style={{ marginTop: "clamp(34px,4vw,52px)" }}>
          {STEPS.map((step) => (
            <ScrollReveal key={step.idx} style={{ height: "100%" }}>
              <div
                style={{
                  background: "var(--color-cream)",
                  border: "1px solid rgba(0,30,51,0.12)",
                  borderRadius: "var(--radius-card)",
                  padding: "26px 24px 28px",
                  position: "relative",
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                {/* icon — corresponds to the step's content */}
                <div
                  aria-hidden="true"
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    border: step.featured ? "1px solid var(--color-gold)" : "1px solid rgba(232,172,44,.5)",
                    background: step.featured ? "var(--color-gold)" : "rgba(232,172,44,.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    style={{
                      width: 24,
                      height: 24,
                      stroke: "var(--color-slate)",
                      fill: "none",
                      strokeWidth: 1.7,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }}
                  >
                    {step.icon}
                  </svg>
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
              That&rsquo;s the true cost of WeSalute+ &mdash; not a suggested amount. One gift, one year, one warrior welcomed.
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
