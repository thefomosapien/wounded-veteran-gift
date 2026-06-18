import ScrollReveal from "./ScrollReveal";

export default function ClosingCTA() {
  return (
    <section
      id="give"
      style={{
        background: "var(--color-slate-deep)",
        color: "var(--color-cream)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Closing bg photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/veteran-track.jpg"
        alt=""
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 28%", opacity: 0.5, display: "block" }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg,rgba(0,19,31,.72),rgba(0,19,31,.52) 45%,rgba(0,19,31,.78)), radial-gradient(72% 82% at 50% 44%,rgba(0,19,31,.18),rgba(0,19,31,.64))",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(80% 90% at 50% 120%,rgba(255,196,62,.10),transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="wrap"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          paddingTop: "clamp(64px,9vw,120px)",
          paddingBottom: "clamp(64px,9vw,120px)",
        }}
      >
        <ScrollReveal>
          <span className="eyebrow" style={{ color: "var(--color-mint)" }}>
            They&rsquo;ve given more than we can ever give back
          </span>
        </ScrollReveal>

        <ScrollReveal>
          <h2
            style={{
              fontSize: "clamp(2.1rem,1.6rem + 2.8vw,3.7rem)",
              margin: "0.4em auto 0.5em",
              maxWidth: "18ch",
              color: "var(--color-cream)",
            }}
          >
            Turn a waitlist back into a{" "}
            <span style={{ color: "var(--color-gold)" }}>welcome.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p style={{ maxWidth: "50ch", margin: "0 auto 30px", color: "#CBD8D3", fontSize: "clamp(1.05rem,1rem + 0.4vw,1.22rem)" }}>
            There&rsquo;s a list of wounded veterans waiting for the support they deserve. One gift
            moves one name off it. Be the reason a veteran is welcomed today.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            {/* TODO: wire to payment flow */}
            <a href="#gift" className="btn btn-primary" data-cta="closing-primary">
              Sponsor a warrior &mdash; $64.95 <span className="arw" aria-hidden="true">&rarr;</span>
            </a>
            <a href="#gift" className="btn btn-ghost-light" data-cta="closing-secondary">
              Choose another amount
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <span style={{ fontFamily: "var(--font-akkurat)", fontSize: "0.9rem", fontWeight: 600, color: "var(--color-cream)", opacity: 0.82, letterSpacing: "0.01em" }}>
              100% of your gift funds a WeSalute+ Membership for a wounded veteran.
            </span>
            <span style={{ fontFamily: "var(--font-space)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-mint-deep)" }}>
              No membership required to give
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
