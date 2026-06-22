import ScrollReveal from "./ScrollReveal";

export default function ClosingCTA() {
  return (
    <section id="give" style={{ background: "var(--color-slate-deep)", color: "var(--color-cream)" }}>
      <div className="closing-grid">

        {/* Left — veteran photo, full bleed */}
        <figure className="closing-media" style={{ position: "relative", overflow: "hidden", minHeight: "clamp(380px,50vw,640px)", margin: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/veteran-track.jpg"
            alt="A veteran with a prosthetic leg kneeling on a running track, wearing a WeSalute shirt"
            loading="lazy"
            decoding="async"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 28%", display: "block" }}
          />
          {/* Gradient fades the right edge into the dark panel */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 55%, var(--color-slate-deep) 100%)" }} />
          {/* Subtle top/bottom scrim for legibility */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,19,31,.3) 0%, transparent 30%, transparent 70%, rgba(0,19,31,.5) 100%)" }} />
          <figcaption style={{
            position: "absolute", left: "clamp(20px,4vw,40px)", bottom: 20,
            fontFamily: "var(--font-space)", fontSize: "0.68rem", letterSpacing: "0.12em",
            textTransform: "uppercase", color: "rgba(255,255,255,.6)", textShadow: "0 1px 8px rgba(0,0,0,.6)",
          }}>
            A wounded veteran in the WeSalute Community
          </figcaption>
        </figure>

        {/* Right — CTA copy */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(48px,7vw,96px) clamp(28px,5vw,72px)",
          position: "relative",
        }}>
          {/* Subtle gold glow from below */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(80% 60% at 50% 110%, rgba(255,196,62,.10), transparent 60%)", pointerEvents: "none" }} />

          <div style={{ position: "relative" }}>
            <ScrollReveal>
              <span className="eyebrow" style={{ color: "var(--color-mint)" }}>
                They&rsquo;ve given more than we can ever give back
              </span>
            </ScrollReveal>

            <ScrollReveal>
              <h2 style={{
                fontSize: "clamp(2rem,1.4rem + 2.8vw,3.4rem)",
                margin: "0.4em 0 0.5em",
                color: "var(--color-cream)",
                lineHeight: 1.05,
                letterSpacing: "-0.022em",
              }}>
                Turn a waitlist back<br />into a{" "}
                <span style={{ color: "var(--color-gold)" }}>welcome.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <p style={{ maxWidth: "42ch", marginBottom: 30, color: "#CBD8D3", fontSize: "clamp(1rem,0.96rem + 0.3vw,1.15rem)" }}>
                There&rsquo;s a list of wounded veterans waiting for the support they deserve. One gift
                moves one name off it. Be the reason a veteran is welcomed today.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <a href="#gift" className="btn btn-primary" data-cta="closing-primary">
                  Sponsor a warrior &mdash; $64.95 <span className="arw" aria-hidden="true">&rarr;</span>
                </a>
                <a href="#gift" className="btn btn-ghost-light" data-cta="closing-secondary">
                  Choose another amount
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontFamily: "var(--font-akkurat)", fontSize: "0.9rem", fontWeight: 600, color: "var(--color-cream)", opacity: 0.82 }}>
                  100% of your gift funds a WeSalute+ Membership for a wounded veteran.
                </span>
                <span style={{ fontFamily: "var(--font-space)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-mint-deep)" }}>
                  No membership required to give
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style>{`
        .closing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: clamp(480px, 60vw, 720px);
        }
        @media (max-width: 860px) {
          .closing-grid { grid-template-columns: 1fr; }
          .closing-media { min-height: 300px; }
        }
      `}</style>
    </section>
  );
}
