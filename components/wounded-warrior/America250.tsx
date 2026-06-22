import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function America250() {
  return (
    <section
      id="america250"
      style={{
        padding: "clamp(72px,10vw,128px) 0",
        background: "var(--color-slate-deep)",
        color: "var(--color-cream)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(181,223,208,0.18)",
      }}
    >
      {/* Flag background */}
      <Image
        src="/images/us-flag.jpg"
        alt=""
        aria-hidden="true"
        fill
        style={{ objectFit: "cover", objectPosition: "center 40%", opacity: 0.18 }}
        priority={false}
      />
      {/* Dark scrim */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(0,19,31,.72)", zIndex: 0, pointerEvents: "none" }} />
      {/* Radial glow overlays */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
          background: "radial-gradient(70% 120% at 50% -10%,rgba(255,196,62,.08),transparent 60%), radial-gradient(60% 120% at 50% 120%,rgba(181,223,208,.04),transparent 60%)",
        }}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>

          <ScrollReveal>
            <p style={{ fontFamily: "var(--font-space)", fontSize: "0.66rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-mint)", marginBottom: 20 }}>
              Presented by WeSalute
            </p>
          </ScrollReveal>

          {/* Co-brand lockup */}
          <ScrollReveal>
            <div style={{ width: "min(460px, 84%)", margin: "0 auto" }}>
              <Image
                src="/images/a250-cobrand.png"
                alt="WeSalute × America 250"
                width={920}
                height={111}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority={false}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div style={{ display: "flex", gap: 10, margin: "28px 0 22px", justifyContent: "center" }} aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <svg key={i} viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: "var(--color-gold)", opacity: 0.92 }}>
                  <path d="M12 2l2.6 6.5L21 9l-5 4.3L17.5 21 12 17l-5.5 4L8 13.3 3 9l6.4-.5z" />
                </svg>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 style={{ fontSize: "clamp(2rem,1.5rem + 2.6vw,3.4rem)", lineHeight: 1.05, letterSpacing: "-0.022em", color: "var(--color-cream)", margin: 0, maxWidth: "20ch" }}>
              250 Years of Service.<br />
              <span style={{ color: "var(--color-gold)" }}>One Real Thank You.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p style={{ color: "#CBD8D3", maxWidth: "58ch", margin: "22px auto 32px", fontSize: "clamp(1.02rem,1rem + 0.35vw,1.18rem)" }}>
              America 250 is a celebration worth having &mdash; and the people most responsible for
              it deserve more than a front-row seat to the fireworks. Wounded veterans sacrificed
              more than most of us can measure to get this country to this milestone. Sponsoring one
              with a full year of WeSalute+ is the most direct thank-you we know how to give.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <a href="#gift" className="btn btn-primary" data-cta="a250-primary">
                Sponsor a warrior for the 250th <span className="arw" aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="https://america250.wesalute.com/"
                className="btn btn-ghost-light"
                data-cta="a250-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore WeSalute &times; America 250
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
