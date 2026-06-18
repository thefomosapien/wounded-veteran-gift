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
              <div
                role="img"
                aria-label="WeSalute+ ID Card — Issued by your gift"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: -10,
                  zIndex: 2,
                  width: "min(230px, 56%)",
                  background: "linear-gradient(150deg,#0D3A58 0%,#001E33 100%)",
                  border: "1px solid rgba(181,223,208,.3)",
                  borderRadius: 12,
                  padding: "14px 16px 13px",
                  color: "var(--color-cream)",
                  boxShadow:
                    "0 22px 48px -8px rgba(0,10,18,.75), 0 8px 16px -6px rgba(0,10,18,.55), inset 0 1px 0 rgba(255,255,255,.07)",
                  transform: "rotate(-4deg) translateY(6px)",
                  transition: "transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s ease",
                  backdropFilter: "blur(2px)",
                }}
                className="hero-id-card"
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-akkurat)", fontWeight: 800, fontSize: "0.95rem", letterSpacing: "-0.01em" }}>
                    We<b style={{ color: "var(--color-gold)" }}>Salute+</b>
                  </span>
                  <span
                    aria-hidden="true"
                    style={{
                      width: 32,
                      height: 23,
                      borderRadius: 5,
                      background: "linear-gradient(135deg,var(--color-mint),var(--color-mint-deep))",
                      opacity: 0.9,
                      position: "relative",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        inset: 5,
                        border: "1px solid rgba(0,30,51,.35)",
                        borderRadius: 2,
                        display: "block",
                      }}
                    />
                  </span>
                </div>

                <div
                  style={{
                    marginTop: 13,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontFamily: "var(--font-space)",
                    fontWeight: 700,
                    fontSize: "0.58rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-gold)",
                    border: "1.5px solid var(--color-gold)",
                    borderRadius: 4,
                    padding: "4px 7px",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--color-gold)",
                      animation: "goldPulse 2s infinite",
                      display: "inline-block",
                    }}
                  />
                  Issued by your gift
                </div>

                <div
                  style={{
                    marginTop: 11,
                    fontFamily: "var(--font-space)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-mint-deep)",
                  }}
                >
                  Wounded Veteran Program
                </div>
                <div style={{ marginTop: 3, fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.005em" }}>
                  [ Service Member ]
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 9,
                    fontFamily: "var(--font-space)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.06em",
                    color: "#8AAAA0",
                  }}
                >
                  <span>MEMBER&nbsp;&middot;&nbsp;ACTIVE&nbsp;1&nbsp;YR</span>
                  <span>WS+&nbsp;&middot;&nbsp;2026</span>
                </div>
              </div>
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
          box-shadow: 0 28px 56px -8px rgba(0,10,18,.8), 0 10px 20px -6px rgba(0,10,18,.6), inset 0 1px 0 rgba(255,255,255,.07) !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-id-card { transition: none !important; }
        }
      `}</style>
    </section>
  );
}
