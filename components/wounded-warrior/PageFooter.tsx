export default function PageFooter() {
  return (
    <footer
      style={{
        background: "var(--color-slate)",
        color: "#9FB6AF",
        borderTop: "1px solid rgba(181,223,208,0.18)",
        padding: "48px 0 40px",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 26,
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-akkurat)",
            fontWeight: 700,
            color: "var(--color-cream)",
            fontSize: "1.05rem",
            letterSpacing: "-0.01em",
          }}
        >
          Service.{" "}
          <span style={{ color: "var(--color-gold)" }}>Saluted.</span>
        </div>

        <nav
          aria-label="Footer"
          style={{ display: "flex", gap: 26, flexWrap: "wrap", fontSize: "0.9rem" }}
        >
          {[
            "Program FAQs",
            "Are you an eligible veteran?",
            "Manage a recurring gift",
            "About WeSalute",
          ].map((label) => (
            <a
              key={label}
              href="#"
              style={{
                color: "var(--color-mint)",
                textDecoration: "none",
                opacity: 0.85,
                transition: "opacity .15s ease",
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <small
          style={{
            display: "block",
            width: "100%",
            marginTop: 26,
            fontFamily: "var(--font-space)",
            fontSize: "0.68rem",
            letterSpacing: "0.05em",
            color: "#6f8a82",
          }}
        >
          &copy; 2026 WeSalute &middot; A Public Benefit Corporation since 2000 &middot; The WeSalute
          Wounded Veteran Program
        </small>
      </div>
    </footer>
  );
}
