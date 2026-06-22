import ScrollReveal from "./ScrollReveal";

export default function FounderStory() {
  return (
    <section
      style={{
        padding: "clamp(56px,8vw,104px) 0",
        background: "var(--color-slate)",
        color: "var(--color-cream)",
      }}
    >
      <div className="wrap">
        <ScrollReveal>
          <div className="story-head">
            <div style={{ maxWidth: "64ch" }}>
              <span className="eyebrow" style={{ color: "var(--color-gold)" }}>
                Why WeSalute &mdash; and why this is a &ldquo;gift&rdquo;
              </span>
              <h2 style={{ fontSize: "clamp(1.8rem,1.4rem + 2vw,2.8rem)", margin: "0.4em 0 0.55em", color: "var(--color-cream)" }}>
                Built by those who have served.
              </h2>
            </div>

            {/* combat boots — line illustration */}
            <svg
              className="story-boots"
              viewBox="0 0 170 116"
              role="img"
              aria-label="Line illustration of a pair of combat boots"
              style={{ fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}
            >
              {/* back boot */}
              <g
                transform="translate(46 -2) scale(.88)"
                stroke="var(--color-mint)"
                strokeWidth="2"
                opacity="0.4"
              >
                <path d="M44 18 H70 V74 L66 82 H16 L18 76 L44 54 Z" />
                <path d="M13 82 H68 Q72 82 72 87 Q72 92 66 92 H18 Q11 92 11 87 Q11 82 13 82 Z" />
                <path d="M39 28 L51 26 M39 36 L51 34 M39 44 L51 42 M39 52 L51 50" />
              </g>
              {/* front boot */}
              <g stroke="var(--color-gold)" strokeWidth="2">
                <path d="M44 18 H70 V74 L66 82 H16 L18 76 L44 54 Z" />
                <path d="M13 82 H68 Q72 82 72 87 Q72 92 66 92 H18 Q11 92 11 87 Q11 82 13 82 Z" />
                <path d="M39 28 L51 26 M39 36 L51 34 M39 44 L51 42 M39 52 L51 50" />
                <circle cx="44" cy="27" r="1.1" fill="var(--color-gold)" stroke="none" />
                <circle cx="44" cy="35" r="1.1" fill="var(--color-gold)" stroke="none" />
                <circle cx="44" cy="43" r="1.1" fill="var(--color-gold)" stroke="none" />
                <circle cx="44" cy="51" r="1.1" fill="var(--color-gold)" stroke="none" />
                <path d="M20 92 V96 M30 92 V96 M40 92 V96 M50 92 V96 M60 92 V96" />
              </g>
            </svg>
          </div>
        </ScrollReveal>

        <div
          className="history-grid"
          style={{ marginTop: "clamp(30px,4vw,46px)" }}
        >
          {/* Left: narrative + timeline */}
          <div>
            <ScrollReveal>
              <p style={{ color: "#CBD8D3" }}>
                <b style={{ color: "var(--color-cream)" }}>
                  WeSalute has long given more Memberships than the Community funds
                </b>
                , covering the gap so no eligible warrior was turned away. As the need has grown, so
                has the gap &mdash; which is why your gift matters now.
              </p>

              <div style={{ marginTop: "clamp(28px,3.5vw,40px)" }}>
                {[
                  {
                    yr: "THE PAST 26 YEARS",
                    body: (
                      <>
                        As a registered <b>Public Benefit Corporation</b>, WeSalute gives wounded
                        veterans a complimentary Membership and bridges the funding gap, year after year.
                      </>
                    ),
                  },
                  {
                    yr: "TODAY",
                    body: (
                      <>
                        The need has outpaced the giving.{" "}
                        <b>You can help close it</b> &mdash; one gift, one warrior at a time.
                      </>
                    ),
                  },
                ].map(({ yr, body }) => (
                  <ScrollReveal key={yr}>
                    <div
                      style={{
                        paddingLeft: "clamp(16px,2.5vw,24px)",
                        borderLeft: "2px solid rgba(181,223,208,0.25)",
                        marginBottom: 24,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-space)",
                          fontWeight: 700,
                          fontSize: "0.68rem",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "var(--color-gold)",
                          marginBottom: 8,
                        }}
                      >
                        {yr}
                      </div>
                      <p style={{ color: "#CBD8D3", fontSize: "0.97rem" }}>{body}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: PBC callout */}
          <ScrollReveal>
            <div
              style={{
                background: "var(--color-slate-lift)",
                border: "1px solid rgba(181,223,208,0.18)",
                borderRadius: "var(--radius-card)",
                padding: "30px 28px",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-space)",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-mint)",
                  background: "rgba(181,223,208,.08)",
                  border: "1px solid rgba(181,223,208,.2)",
                  borderRadius: 6,
                  padding: "6px 12px",
                  marginBottom: 20,
                }}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 15, height: 15, stroke: "var(--color-mint)", fill: "none", strokeWidth: 1.8 }}>
                  <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
                </svg>
                Public Benefit Corporation
              </span>

              <h3 style={{ fontSize: "1.28rem", color: "var(--color-cream)", marginBottom: 16, lineHeight: 1.25 }}>
                A company measured by who it serves.
              </h3>

              <p style={{ color: "#CBD8D3", fontSize: "0.97rem", marginBottom: 14 }}>
                A Public Benefit Corporation is legally bound to a mission beyond profit. For WeSalute,
                that mission is honoring service &mdash; and success is measured by how well it&rsquo;s
                done, not by margin.
              </p>
              <p style={{ color: "#CBD8D3", fontSize: "0.97rem", marginBottom: 14 }}>
                That&rsquo;s exactly why the Wounded Veteran Program exists. It isn&rsquo;t overhead or
                a write-off. It&rsquo;s the point. When you give, you&rsquo;re not donating to an
                institution &mdash; you&rsquo;re investing in a specific person who already gave everything.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-akkurat)",
                  fontWeight: 700,
                  fontSize: "1.04rem",
                  color: "var(--color-cream)",
                  borderTop: "1px solid rgba(181,223,208,.15)",
                  paddingTop: 16,
                  marginTop: 8,
                }}
              >
                One gift. One warrior. A year of support they deserve.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .story-head { display: flex; align-items: center; justify-content: space-between; gap: clamp(24px,4vw,56px); }
        .story-boots { width: clamp(140px, 18vw, 210px); height: auto; flex-shrink: 0; }
        @media (max-width: 720px) {
          .story-head { flex-direction: column-reverse; align-items: flex-start; gap: 20px; }
          .story-boots { width: 150px; }
        }

        .history-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: clamp(32px,5vw,64px); align-items: start; }
        @media (max-width: 880px) { .history-grid { grid-template-columns: 1fr; gap: 34px; } }
      `}</style>
    </section>
  );
}
