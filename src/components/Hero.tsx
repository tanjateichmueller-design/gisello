import { Link } from "@tanstack/react-router";
import { JourneyPanel } from "./JourneyPanel";

export function Hero() {
  return (
    <section
      id="who"
      className="bg-paper"
      style={{ padding: "72px 48px 96px" }}
    >
      <div
        className="mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] items-center"
        style={{ maxWidth: 1280, gap: 64 }}
      >
        {/* LEFT */}
        <div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 6.4vw, 84px)",
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              color: "var(--color-ink)",
              fontWeight: 500,
            }}
          >
            AI navigators
            <br />
            for cross-border
            <br />
            <span style={{ fontStyle: "italic" }}>medical care.</span>
          </h1>

          <p
            className="mt-7"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16.5,
              lineHeight: 1.55,
              color: "var(--color-gray-60)",
              maxWidth: 480,
            }}
          >
            GISELLO coordinates fertility and aesthetic treatment across borders, from first call to final follow-up, combining AI for cognition with a Patient Navigator for judgement.
          </p>

          <div className="mt-8 flex flex-wrap items-center" style={{ gap: 12 }}>
            <Link
              id="book"
              to="/book-call"
              className="inline-flex items-center justify-center bg-ink text-paper hover:bg-ochre hover:text-ink transition-colors rounded-full"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 500,
                padding: "13px 26px",
              }}
            >
              Book a 30-min call →
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center border border-ink text-ink hover:bg-ink hover:text-paper transition-colors rounded-full"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 500,
                padding: "13px 26px",
              }}
            >
              How it works
            </Link>
          </div>
        </div>

        {/* RIGHT — journey panel */}
        <div>
          <JourneyPanel />
        </div>
      </div>
    </section>
  );
}
