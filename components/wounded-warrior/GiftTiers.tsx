"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

type Freq = "once" | "recurring";

const TIERS = [
  {
    kicker: "Move a name up",
    amount: "$25",
    per: "one-time",
    desc: "A partial gift toward a wounded veteran's Membership. Every dollar moves someone closer to the front of the list.",
    cta: "Give $25",
    dataCta: "tier-25",
    featured: false,
  },
  {
    kicker: "Sponsor a full year",
    amount: "$64.95",
    per: "one warrior / 1 yr",
    desc: "The true cost of one Membership. You sponsor one wounded veteran for a full year of WeSalute+ — and one name comes off the list.",
    cta: "Sponsor a warrior",
    dataCta: "tier-65",
    featured: true,
    ribbon: "Most popular",
  },
  {
    kicker: "Sponsor two",
    amount: "$130",
    per: "two warriors / 1 yr",
    desc: "Welcome two wounded veterans at once. Two full years of WeSalute+, two names cleared from the waitlist.",
    cta: "Sponsor two warriors",
    dataCta: "tier-130",
    featured: false,
    ribbon: "Most impactful",
  },
];

export default function GiftTiers() {
  const [freq, setFreq] = useState<Freq>("once");

  return (
    <section
      id="gift"
      style={{ padding: "clamp(56px,8vw,104px) 0", background: "var(--color-cream)" }}
    >
      <div className="wrap">
        <ScrollReveal>
          <div style={{ maxWidth: "60ch" }}>
            <span className="eyebrow" style={{ color: "var(--color-gold-deep)" }}>Give the gift of WeSalute+</span>
            <h2 style={{ fontSize: "clamp(1.9rem,1.5rem + 2.2vw,3.1rem)", margin: "0.42em 0 0.5em" }}>
              Choose how many names you move
            </h2>
            <p className="lede" style={{ maxWidth: "54ch" }}>
              Every gift goes straight to a wounded veteran&rsquo;s cost of WeSalute+ &mdash; nothing
              held back. Give once, or give monthly to keep names moving off the waitlist all year.
            </p>

            {/* Frequency toggle */}
            <div
              role="group"
              aria-label="Select gift frequency"
              style={{
                display: "inline-flex",
                background: "var(--color-paper)",
                border: "1px solid rgba(0,30,51,0.12)",
                borderRadius: 999,
                padding: 5,
                marginTop: 24,
                gap: 4,
              }}
            >
              {(["once", "recurring"] as Freq[]).map((f) => (
                <button
                  key={f}
                  aria-pressed={freq === f}
                  onClick={() => setFreq(f)}
                  style={{
                    border: 0,
                    background: freq === f ? "var(--color-slate)" : "transparent",
                    fontFamily: "var(--font-akkurat)",
                    fontWeight: 600,
                    fontSize: "0.92rem",
                    color: freq === f ? "var(--color-cream)" : "var(--color-ink-soft)",
                    padding: "0.55em 1.25em",
                    borderRadius: 999,
                    cursor: "pointer",
                    transition: "background .2s ease, color .2s ease",
                  }}
                >
                  {f === "once" ? "One-time gift" : "Recurring gift"}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Tier cards */}
        <div className="tiers-grid">
          {TIERS.map((tier) => (
            <ScrollReveal key={tier.dataCta}>
              <div
                style={{
                  background: tier.featured ? "#fff" : "var(--color-paper)",
                  border: tier.featured ? "1.5px solid var(--color-gold)" : "1px solid rgba(0,30,51,0.12)",
                  borderRadius: "var(--radius-card)",
                  padding: "28px 24px 26px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "transform .2s ease, box-shadow .2s ease, border-color .2s ease",
                  boxShadow: tier.featured ? "0 18px 50px -26px rgba(232,172,44,.5)" : "none",
                }}
                className="tier-card"
              >
                {tier.ribbon && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: 24,
                      background: "var(--color-gold)",
                      color: "var(--color-slate)",
                      fontFamily: "var(--font-space)",
                      fontWeight: 700,
                      fontSize: "0.64rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "5px 10px",
                      borderRadius: 5,
                    }}
                  >
                    {tier.ribbon}
                  </div>
                )}

                <div style={{ fontFamily: "var(--font-space)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-soft)" }}>
                  {tier.kicker}
                </div>

                <div style={{ fontFamily: "var(--font-akkurat)", fontWeight: 800, fontSize: "clamp(2.1rem,1.8rem + 1.4vw,2.7rem)", letterSpacing: "-0.02em", margin: "8px 0 2px", color: "var(--color-slate)", lineHeight: 1 }}>
                  {tier.amount}
                  <span style={{ display: "block", marginTop: 6, fontFamily: "var(--font-space)", fontSize: "0.72rem", fontWeight: 400, color: "var(--color-ink-soft)", letterSpacing: "0.04em" }}>
                    {freq === "recurring" ? `${tier.per} · annually` : tier.per}
                  </span>
                </div>

                <p style={{ color: "var(--color-ink-soft)", fontSize: "0.98rem", margin: "10px 0 22px", flex: 1 }}>
                  {tier.desc}
                </p>

                {/* TODO: wire to payment flow */}
                <a
                  href="#"
                  className={`btn ${tier.featured ? "btn-primary" : "btn-ghost-dark"}`}
                  data-cta={tier.dataCta}
                  data-payment="placeholder"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {tier.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Other amount */}
        <ScrollReveal>
          <div
            style={{
              marginTop: 22,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 18,
              flexWrap: "wrap",
              background: "var(--color-paper)",
              border: "1px dashed rgba(0,30,51,0.12)",
              borderRadius: "var(--radius-card)",
              padding: "20px 24px",
            }}
          >
            <p style={{ color: "var(--color-ink-soft)", fontSize: "0.96rem", maxWidth: "48ch" }}>
              <strong>Choose your own amount.</strong> Give what feels right &mdash; every dollar helps bridge the gap
              and gets a waiting warrior closer to the support they deserve.
            </p>
            {/* TODO: wire to payment flow */}
            <a href="#" className="btn btn-ghost-dark" data-cta="tier-other" data-payment="placeholder">
              Choose Your Own Amount to Give <span className="arw" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .tiers-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: clamp(16px,2vw,22px); margin-top: clamp(28px,3.5vw,40px); }
        @media (max-width: 860px) { .tiers-grid { grid-template-columns: 1fr; } }
        .tier-card:hover { transform: translateY(-4px); box-shadow: 0 24px 60px -28px rgba(0,19,31,0.55) !important; }
      `}</style>
    </section>
  );
}
