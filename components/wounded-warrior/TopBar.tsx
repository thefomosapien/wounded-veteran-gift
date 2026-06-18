import WeSaluteLogo from "./icons/WeSaluteLogo";

export default function TopBar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(0,30,51,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(181,223,208,0.18)",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
          height: 64,
        }}
      >
        <a
          href="#top"
          aria-label="WeSalute"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            textDecoration: "none",
            color: "var(--color-cream)",
          }}
        >
          <WeSaluteLogo style={{ height: 34, width: "auto", display: "block", borderRadius: 3 }} />
          <span
            className="brandmark-tag"
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "0.6rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--color-mint)",
              borderLeft: "1px solid rgba(181,223,208,0.18)",
              paddingLeft: 11,
              lineHeight: 1.3,
              maxWidth: 130,
            }}
          >
            Wounded Veteran Program
          </span>
        </a>

        <nav
          aria-label="Primary"
          style={{ display: "flex", alignItems: "center", gap: 26 }}
        >
          {[
            { href: "#how", label: "How it works" },
            { href: "#case", label: "Who they are" },
            { href: "#gift", label: "Give" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{
                textDecoration: "none",
                color: "var(--color-mint)",
                fontWeight: 600,
                fontSize: "0.92rem",
                opacity: 0.85,
                transition: "opacity 0.15s ease",
              }}
              className="nav-text-link"
            >
              {label}
            </a>
          ))}
          <a
            href="#gift"
            className="btn btn-primary"
            style={{ padding: "0.6em 1.1em", fontSize: "0.9rem" }}
            data-cta="nav-cta"
          >
            Sponsor a Warrior
          </a>
        </nav>
      </div>

      <style>{`
        @media (max-width: 840px) {
          .nav-text-link { display: none !important; }
          .brandmark-tag { display: none !important; }
        }
      `}</style>
    </header>
  );
}
