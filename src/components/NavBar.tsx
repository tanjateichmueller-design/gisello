import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MarkLockup } from "./CompanionMark";

const NAV = [
  { label: "What we do", href: "/#who" },
  { label: "Compliance", href: "/#compliance" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Writing", href: "/#field-notes" },
  { label: "Company", href: "/#company", caret: true },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="w-full bg-paper border-b sticky top-0 z-40"
      style={{ borderColor: "var(--color-rule)" }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1280, padding: "24px 48px" }}
      >
        <a href="#top" aria-label="GISELLO home">
          <MarkLockup size={32} wordSize={16} />
        </a>

        <nav className="hidden md:flex items-center" style={{ gap: 32 }}>
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-ink hover:text-ochre transition-colors inline-flex items-center"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 14,
                gap: 4,
              }}
            >
              {n.label}
              {n.caret && (
                <span aria-hidden style={{ fontSize: 10, marginTop: 2 }}>▾</span>
              )}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center" style={{ gap: 18 }}>
          <a
            href="#login"
            className="text-ink hover:text-ochre transition-colors"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            Login
          </a>
          <Link
            to="/book-call"
            className="inline-flex items-center justify-center bg-ink text-paper hover:bg-ochre hover:text-ink transition-colors rounded-full"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 13,
              padding: "8px 20px",
            }}
          >
            Apply
          </Link>
        </div>

        <button
          className="md:hidden text-ink"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="square" />
            ) : (
              <>
                <path d="M3 7h18" strokeLinecap="square" />
                <path d="M3 17h18" strokeLinecap="square" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "var(--color-rule)" }}>
          <div className="flex flex-col" style={{ padding: "16px 48px" }}>
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-ink"
                style={{ fontFamily: "var(--font-sans)", fontSize: 16 }}
              >
                {n.label}
              </a>
            ))}
            <a
              href="#login"
              className="mt-2 inline-flex items-center justify-center border border-ink text-ink"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "12px 20px",
              }}
            >
              LOGIN
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
