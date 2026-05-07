import { Link } from "@tanstack/react-router";

const ITEMS = [
  { label: "How it works", href: "/how-it-works" },
  { label: "About Gisello", href: "/#who" },
  { label: "Pilot", href: "/pilot" },
  { label: "Patient Vault", href: "/#vault" },
];

export function SubNav({ title = "GISELLO Pilot · Cohort 01" }: { title?: string } = {}) {
  return (
    <div
      className="w-full bg-paper border-b"
      style={{ borderColor: "var(--color-rule)" }}
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
          <a
            href="#founder"
            className="hidden md:inline-flex items-center justify-center border border-ink text-ink hover:bg-ink hover:text-paper transition-colors rounded-full"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 500,
              padding: "8px 18px",
            }}
          >
            Talk to founder
          </a>
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
