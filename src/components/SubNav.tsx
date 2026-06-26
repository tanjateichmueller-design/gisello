import { Link } from "@tanstack/react-router";

const ITEMS = [
  { label: "How it works", href: "/how-it-works" },
  { label: "About Gisello", href: "/about" },
  { label: "Pilot", href: "/pilot" },
  { label: "Patient Vault", href: "/patient-vault" },
];

export function SubNav({
  title = "GISELLO Pilot · Cohort 01",
  transparent = false,
}: { title?: string; transparent?: boolean } = {}) {
  return (
    <div
      className={`w-full ${transparent ? "nav-transparent border-b-0" : "bg-paper border-b"}`}
      style={transparent ? undefined : { borderColor: "var(--color-rule)" }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1280, padding: "14px 48px" }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: 13,
            color: "var(--color-ink)",
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </span>

        <nav className="hidden md:flex items-center" style={{ gap: 28 }}>
          {ITEMS.map((i) =>
            i.href.startsWith("/") && !i.href.includes("#") ? (
              <Link
                key={i.label}
                to={i.href}
                className="text-ink hover:text-ochre transition-colors"
                style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500 }}
              >
                {i.label}
              </Link>
            ) : (
              <a
                key={i.label}
                href={i.href}
                className="text-ink hover:text-ochre transition-colors"
                style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500 }}
              >
                {i.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center" style={{ gap: 12 }}>
          <Link
            to="/founder"
            className="hidden md:inline-flex items-center justify-center border border-ink text-ink hover:bg-ink hover:text-paper transition-colors rounded-full"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 500,
              padding: "8px 18px",
            }}
          >
            Talk to founder
          </Link>
          <Link
            to="/book-call"
            className="inline-flex items-center justify-center bg-ink text-paper hover:bg-ochre hover:text-ink transition-colors rounded-full"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 500,
              padding: "8px 18px",
            }}
          >
            Book a call →
          </Link>
        </div>
      </div>
    </div>
  );
}
