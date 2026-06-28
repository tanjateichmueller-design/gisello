import { Link } from "@tanstack/react-router";

export function SavingsBanner() {
  return (
    <section
      className="text-white"
      style={{
        background: "var(--color-gisello-blue)",
        padding: "80px 48px",
      }}
    >
      <div className="mx-auto grid items-center gap-10 md:grid-cols-2" style={{ maxWidth: 1280 }}>
        <div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-ochre)",
            }}
          >
            Cost transparency
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 500,
              marginTop: 12,
            }}
          >
            Save up to <span style={{ color: "var(--color-ochre)" }}>60%</span> on your treatment
          </h2>
        </div>
        <div className="flex flex-col gap-6 md:items-end">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              lineHeight: 1.6,
              color: "color-mix(in oklab, white 80%, transparent)",
              maxWidth: 480,
            }}
          >
            Compared to UK and German private care. Treatment, clinic coordination, travel logistics
            and your Patient Navigator, all in one transparent price.
          </p>
          <Link
            to="/book-call"
            className="inline-flex items-center gap-2 transition-colors hover:bg-ochre hover:text-white"
            style={{
              background: "white",
              color: "var(--color-gisello-blue)",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              padding: "16px 28px",
              fontSize: 15,
              letterSpacing: "0.02em",
            }}
          >
            Book a 30 minute call →
          </Link>
        </div>
      </div>
    </section>
  );
}
