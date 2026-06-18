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
    <>
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
                      color: "var(--color-slate)",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--color-gold-deep)",
                        fontWeight: 700,
                        borderBottom: "1.5px dashed rgba(232,172,44,.55)",
                        paddingBottom: 1,
                      }}
                    >
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

          <ScrollReveal style={{ marginTop: "clamp(40px,5vw,60px)", maxWidth: "46ch" }}>
            <figure style={{ margin: 0 }}>
              <blockquote
                style={{
                  margin: 0,
                  fontFamily: "var(--font-akkurat)",
                  fontWeight: 600,
                  fontSize: "clamp(1.35rem,1.1rem + 1.1vw,1.95rem)",
                  lineHeight: 1.28,
                  letterSpacing: "-0.01em",
                  color: "var(--color-slate)",
                }}
              >
                &ldquo;I get savings on everything from airfare to different events. It&rsquo;s really
                helped us save thousands of dollars on stuff we use pretty regularly.&rdquo;
              </blockquote>
              <figcaption
                style={{
                  display: "block",
                  marginTop: 16,
                  fontStyle: "normal",
                  fontFamily: "var(--font-space)",
                  fontSize: "0.74rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#274457",
                }}
              >
                Duane Brooks &middot; U.S. Army Veteran &middot; WeSalute Wounded Veteran Program
              </figcaption>
            </figure>
          </ScrollReveal>

          {/* YouTube embed */}
          <ScrollReveal style={{ marginTop: "clamp(36px,5vw,56px)" }}>
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-card)",
                overflow: "hidden",
                boxShadow: "0 24px 60px -20px rgba(0,19,31,.5)",
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
          </ScrollReveal>
          <ScrollReveal>
            <p style={{ marginTop: 14, fontFamily: "var(--font-space)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#274457" }}>
              A wounded veteran shares his experience with WeSalute+
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Emotional image band */}
      <figure
        style={{ margin: 0, position: "relative", minHeight: "clamp(320px,44vw,540px)", overflow: "hidden" }}
        role="img"
        aria-label="A veteran with a prosthetic leg kneeling on a running track, wearing a WeSalute shirt"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 72%", display: "block" }}
          src="/images/veteran-track.jpg"
          alt="A veteran with a prosthetic leg kneeling on a running track at a stadium, wearing a WeSalute shirt"
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,19,31,.34),rgba(0,19,31,.12) 42%,rgba(0,19,31,.68))" }} />
        <figcaption style={{ position: "absolute", left: "clamp(20px,5vw,64px)", bottom: 22, fontFamily: "var(--font-space)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-cream)", textShadow: "0 1px 12px rgba(0,0,0,.55)" }}>
          A wounded veteran in the WeSalute Community
        </figcaption>
      </figure>

      <style>{`
        .stats-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: clamp(16px,2.5vw,30px); margin-top: clamp(36px,4vw,52px); }
        @media (max-width: 760px) { .stats-grid { grid-template-columns: 1fr; gap: 20px; } }
      `}</style>
    </>
  );
}
