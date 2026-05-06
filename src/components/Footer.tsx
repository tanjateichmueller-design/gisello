import { MarkLockup } from "./CompanionMark";

export function Footer() {
  return (
    <footer
      className="text-paper"
      style={{ padding: "60px 48px", background: "var(--color-gisello-blue)" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <MarkLockup size={32} wordSize={16} inverse />
          </div>

          <nav className="flex flex-wrap" style={{ gap: 32 }}>
            {["T&Cs", "Privacy", "Pilot Consent"].map((l) => (
              <a
                key={l}
                href="#"
                className="hover:text-paper transition-colors"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  color: "var(--color-gray-30)",
                }}
              >
                {l}
              </a>
            ))}
          </nav>

          <div className="md:justify-self-end flex flex-wrap" style={{ gap: 24 }}>
            {[
              { label: "INSTAGRAM", href: "https://www.instagram.com/animahealthtechnology/" },
              { label: "LINKEDIN", href: "https://www.linkedin.com/company/112211754/admin/page-posts/published/" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-ochre)",
                }}
                className="hover:opacity-80 transition-opacity"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-10"
          style={{ height: 1, background: "var(--color-paper)", opacity: 0.2 }}
        />

        <div
          className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--color-gray-30)",
            lineHeight: 1.6,
          }}
        >
          <span>
            GISELLO HEALTH · 2026 · GISELLO HEALTH TECHNOLOGY FZ-LLC ·
            PRE-INCORPORATION · FULL REGULATORY FRAMEWORK · Q4 2026
          </span>
          <span></span>
        </div>
      </div>
    </footer>
  );
}
