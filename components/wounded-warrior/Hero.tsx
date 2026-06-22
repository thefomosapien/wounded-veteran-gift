import ScrollReveal from "./ScrollReveal";
import WaitlistRow from "./WaitlistRow";

export default function Hero() {
  return (
    <section
      style={{
        background: "var(--color-slate)",
        color: "var(--color-cream)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* radial gradient overlays */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(120% 80% at 85% -10%, rgba(181,223,208,.10), transparent 55%), radial-gradient(90% 70% at 0% 110%, rgba(255,196,62,.08), transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="wrap"
        style={{
          position: "relative",
          paddingTop: "clamp(28px,4.2vw,52px)",
          paddingBottom: "clamp(34px,4.5vw,56px)",
        }}
      >
        {/* Hero grid */}
        <div className="hero-grid">
          {/* Left column — copy */}
          <div>
            <span
              className="eyebrow"
              style={{
                color: "var(--color-mint)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.7em",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--color-gold)",
                  boxShadow: "0 0 0 4px rgba(255,196,62,.18)",
                  display: "inline-block",
                }}
              />
              The WeSalute Wounded Veteran Program
            </span>

            <h1
              style={{
                fontSize: "clamp(2.25rem,1.7rem + 3vw,4rem)",
                fontWeight: 800,
                margin: "0.3em 0 0.34em",
                letterSpacing: "-0.022em",
              }}
            >
              A wounded veteran is waiting. Your gift{" "}
              <span style={{ color: "var(--color-gold)" }}>is what moves the line.</span>
            </h1>

            <p
              style={{
                maxWidth: "38ch",
                color: "#D7E0DC",
                fontSize: "clamp(1.02rem,1rem + 0.35vw,1.18rem)",
                lineHeight: 1.5,
              }}
            >
              WeSalute has sponsored wounded veterans with a full year of WeSalute+ since day
              one &mdash; but the need has outpaced the giving. Your gift moves a warrior off
              the waitlist and into the membership they deserve.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 22 }}>
              <a href="#gift" className="btn btn-primary" data-cta="hero-primary">
                Sponsor a warrior &mdash; $64.95 <span className="arw" aria-hidden="true">&rarr;</span>
              </a>
              <a href="#how" className="btn btn-ghost-light" data-cta="hero-secondary">
                See how it works
              </a>
            </div>

            <p
              style={{
                marginTop: 13,
                fontFamily: "var(--font-space)",
                fontSize: "0.74rem",
                letterSpacing: "0.04em",
                color: "var(--color-mint-deep)",
              }}
            >
              100% of every gift funds a Membership for a wounded veteran.
            </p>
          </div>

          {/* Right column — photo + ID card overlay */}
          <ScrollReveal>
            <div
              style={{
                position: "relative",
                borderRadius: 16,
                boxShadow: "var(--shadow-card)",
                paddingBottom: 52,
                paddingLeft: 28,
                marginLeft: 12,
              }}
            >
              {/* Photo frame */}
              <div style={{ borderRadius: 16, overflow: "hidden", position: "relative" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-veteran.jpg"
                  alt="A woman veteran in a wheelchair along a riverside path at sunset, wearing a WeSalute shirt"
                  fetchPriority="high"
                  decoding="async"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 30%",
                    minHeight: 360,
                    maxHeight: 460,
                    borderRadius: 16,
                  }}
                />
                {/* gradient overlay */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(160deg,rgba(0,19,31,.04) 40%,rgba(0,19,31,.42))",
                    borderRadius: 16,
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* ID Card — bleeds outside the photo frame */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/wounded-vet-card.svg"
                alt="WeSalute+ Wounded Veteran Program ID Card — issued by your gift"
                className="hero-id-card"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: -10,
                  zIndex: 2,
                  width: "min(260px, 60%)",
                  height: "auto",
                  display: "block",
                  borderRadius: 12,
                  filter: "drop-shadow(0 22px 40px rgba(0,10,18,.7)) drop-shadow(0 8px 16px rgba(0,10,18,.5))",
                  transform: "rotate(-4deg) translateY(6px)",
                  transition: "transform .4s cubic-bezier(.2,.7,.2,1)",
                }}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Waitlist at-a-glance */}
        <WaitlistRow />
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(32px, 5vw, 64px);
          align-items: center;
        }
        @media (max-width: 920px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        .hero-id-card:hover {
          transform: rotate(-2deg) translateY(2px) !important;
          filter: drop-shadow(0 28px 48px rgba(0,10,18,.78)) drop-shadow(0 10px 20px rgba(0,10,18,.55)) !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-id-card { transition: none !important; }
        }
      `}</style>
    </section>
  );
}
