import ScrollReveal from "./ScrollReveal";

const STATS = [
  {
    n: "[5.1M+]",
    label: "Eligible wounded veterans with a 30%+ service-connected disability.",
    src: "// PLACEHOLDER — confirm figure",
  },
  {
    n: "[300K+]",
    label: "New disabled veterans every year, with a 30%+ service-connected disability.",
    src: "// PLACEHOLDER — confirm figure",
  },
  {
    n: "[418+]",
    label: "Memberships gifted this year — with many warriors still waiting.",
    src: "// PLACEHOLDER — confirm figure",
  },
];

export default function ProofSection() {
  return (
    <section
      style={{
        padding: "clamp(56px,8vw,104px) 0",
        background: "var(--color-mint)",
        color: "var(--color-slate)",
      }}
    >
      <div className="wrap">
        <ScrollReveal style={{ maxWidth: "50ch" }}>
          <span className="eyebrow" style={{ color: "var(--color-slate)", opacity: 0.7 }}>The need, in numbers</span>
          <h2 style={{ fontSize: "clamp(1.8rem,1.4rem + 2vw,2.8rem)", color: "var(--color-slate)", margin: "0.4em 0 0" }}>
            The gap is real &mdash; and you can see it close
          </h2>
        </ScrollReveal>

        {/* Stats row */}
        <div className="stats-grid">
          {STATS.map((stat) => (
            <ScrollReveal key={stat.n}>
              <div style={{ borderTop: "2px solid var(--color-slate)", paddingTop: 18 }}>
                <div
                  style={{
                    fontFamily: "var(--font-akkurat)",
                    fontWeight: 800,
                    fontSize: "clamp(2.4rem,1.9rem + 2.2vw,3.4rem)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  <span style={{ color: "var(--color-gold-deep)", fontWeight: 700, borderBottom: "1.5px dashed rgba(232,172,44,.55)", paddingBottom: 1 }}>
                    {stat.n}
                  </span>
                </div>
                <div style={{ marginTop: 10, fontSize: "0.98rem", color: "#1c3140", maxWidth: "30ch" }}>
                  {stat.label}
                  <span style={{ display: "block", marginTop: 8, fontFamily: "var(--font-space)", fontSize: "0.66rem", letterSpacing: "0.06em", color: "#3a5161" }}>
                    {stat.src}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Quote + video side by side */}
        <div className="proof-qv-grid">
          {/* Quote — left */}
          <ScrollReveal>
            <figure style={{ margin: 0, display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
              <blockquote
                style={{
                  margin: 0,
                  fontFamily: "var(--font-akkurat)",
                  fontWeight: 600,
                  fontSize: "clamp(1.2rem,1rem + 1vw,1.7rem)",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  color: "var(--color-slate)",
                  borderLeft: "3px solid var(--color-slate)",
                  paddingLeft: "clamp(16px,2.5vw,24px)",
                }}
              >
                &ldquo;I get savings on everything from airfare to different events. It&rsquo;s really
                helped us save thousands of dollars on stuff we use pretty regularly.&rdquo;
              </blockquote>
              <figcaption
                style={{
                  display: "block",
                  marginTop: 18,
                  paddingLeft: "clamp(16px,2.5vw,24px)",
                  fontStyle: "normal",
                  fontFamily: "var(--font-space)",
                  fontSize: "0.74rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#274457",
                }}
              >
                Duane Brooks &middot; U.S. Army Veteran<br />WeSalute Wounded Veteran Program
              </figcaption>
            </figure>
          </ScrollReveal>

          {/* Video — right */}
          <ScrollReveal>
            <div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-card)",
                  overflow: "hidden",
                  boxShadow: "0 24px 60px -20px rgba(0,19,31,.4)",
                  background: "#000",
                }}
              >
                <div style={{ paddingTop: "56.25%" }} />
                <iframe
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                  src="https://www.youtube-nocookie.com/embed/XsG84SH4pUI"
                  title="A wounded veteran shares how WeSalute+ saved his family thousands of dollars"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p style={{ marginTop: 12, fontFamily: "var(--font-space)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#274457" }}>
                A wounded veteran shares his experience with WeSalute+
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .stats-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: clamp(16px,2.5vw,30px); margin-top: clamp(36px,4vw,52px); }
        @media (max-width: 760px) { .stats-grid { grid-template-columns: 1fr; gap: 20px; } }

        .proof-qv-grid { display: grid; grid-template-columns: 1fr 1.6fr; gap: clamp(28px,4vw,56px); align-items: center; margin-top: clamp(44px,6vw,68px); }
        @media (max-width: 820px) { .proof-qv-grid { grid-template-columns: 1fr; gap: 32px; } }
      `}</style>
    </section>
  );
}
