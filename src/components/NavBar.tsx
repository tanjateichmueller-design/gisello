import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MarkLockup } from "./CompanionMark";

type NavItem =
  | { label: string; to: string; children?: never }
  | { label: string; children: { label: string; to: string }[]; to?: never };

const NAV: NavItem[] = [
  { label: "What we do", to: "/how-it-works" },
  {
    label: "Treatments",
    children: [
      { label: "Fertility Care", to: "/treatments/fertility-care" },
    ],
  },
  { label: "Compliance", to: "/compliance" },
  { label: "Pricing", to: "/pricing" },
  { label: "Writing", to: "/writing" },
  {
    label: "Company",
    children: [
      { label: "Founder", to: "/founder" },
      { label: "About Gisello", to: "/about" },
      { label: "What's next", to: "/whats-next" },
      { label: "Press & PR", to: "/press" },
      { label: "Terms", to: "/terms" },
    ],
  },
];

export function NavBar({ transparent = false }: { transparent?: boolean } = {}) {
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);


  return (
    <header
      className={`w-full top-0 z-40 ${transparent ? "nav-transparent" : "bg-paper border-b sticky"}`}
      style={transparent ? undefined : { borderColor: "var(--color-rule)" }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1280, padding: "24px 48px" }}
      >
        <Link to="/" aria-label="GISELLO home">
          <MarkLockup size={32} wordSize={16} inverse={transparent} />
        </Link>

        <nav className="hidden md:flex items-center" style={{ gap: 32 }}>
          {NAV.map((n) =>
            n.children ? (
              <div
                key={n.label}
                className="relative"
                onMouseEnter={() => setCompanyOpen(true)}
                onMouseLeave={() => setCompanyOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setCompanyOpen((o) => !o)}
                  className="text-ink hover:text-ochre transition-colors inline-flex items-center"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: 14,
                    gap: 4,
                    background: "transparent",
                  }}
                >
                  {n.label}
                  <span aria-hidden style={{ fontSize: 10, marginTop: 2 }}>▾</span>
                </button>
                {companyOpen && (
                  <div
                    className="absolute right-0 bg-paper border"
                    style={{
                      top: "100%",
                      marginTop: 8,
                      borderColor: "var(--color-rule)",
                      minWidth: 200,
                      padding: 8,
                      zIndex: 50,
                    }}
                  >
                    {n.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        onClick={() => setCompanyOpen(false)}
                        className="block text-ink hover:text-ochre transition-colors"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 14,
                          padding: "8px 12px",
                        }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={n.label}
                to={n.to}
                className="text-ink hover:text-ochre transition-colors"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: 14,
                }}
              >
                {n.label}
              </Link>
            )
          )}
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
            {NAV.flatMap((n) =>
              n.children
                ? n.children.map((c) => (
                    <Link
                      key={c.label}
                      to={c.to}
                      onClick={() => setOpen(false)}
                      className="py-3 text-ink"
                      style={{ fontFamily: "var(--font-sans)", fontSize: 16 }}
                    >
                      {c.label}
                    </Link>
                  ))
                : [
                    <Link
                      key={n.label}
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="py-3 text-ink"
                      style={{ fontFamily: "var(--font-sans)", fontSize: 16 }}
                    >
                      {n.label}
                    </Link>,
                  ]
            )}
            <Link
              to="/book-call"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-ink text-paper rounded-full"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                padding: "12px 20px",
              }}
            >
              Apply
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
