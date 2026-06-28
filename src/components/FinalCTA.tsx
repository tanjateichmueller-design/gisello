import { Link } from "@tanstack/react-router";

export function FinalCTA() {
  return (
    <section
      className="bg-paper"
      style={{
        padding: "100px 48px",
        borderTop: "1px solid color-mix(in oklab, var(--color-gisello-blue) 12%, transparent)",
      }}
    >
      <div
        className="mx-auto flex flex-col items-center text-center gap-8"
        style={{ maxWidth: 880 }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "color-mix(in oklab, var(--color-gisello-blue) 60%, transparent)",
          }}
        >
          Next step
        </span>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--color-gisello-blue)",
            fontWeight: 500,
          }}
        >
          Talk to a Patient Navigator.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 18,
            lineHeight: 1.6,
            color: "color-mix(in oklab, var(--color-gisello-blue) 75%, transparent)",
            maxWidth: 620,
          }}
        >
          A 30 minute call. No pressure, no sales pitch. We listen first, then tell you whether
          Gisello is the right fit.
        </p>
        <Link
          to="/book-call"
          className="inline-flex items-center gap-2 transition-colors hover:bg-ochre"
          style={{
            background: "var(--color-gisello-blue)",
            color: "white",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            padding: "18px 32px",
            fontSize: 15,
            letterSpacing: "0.02em",
          }}
        >
          Book a 30 minute call →
        </Link>
      </div>
    </section>
  );
}
