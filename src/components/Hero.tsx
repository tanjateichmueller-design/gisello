import { Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-suite.jpg";

export function Hero() {
  return (
    <section
      id="who"
      className="relative w-full"
      style={{
        minHeight: "calc(100vh - 120px)",
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Tint overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--color-gisello-blue) 35%, transparent) 0%, color-mix(in oklab, var(--color-gisello-blue) 55%, transparent) 100%)",
        }}
      />

      <div
        className="relative mx-auto flex flex-col items-center justify-center text-center"
        style={{
          maxWidth: 1100,
          padding: "140px 32px 160px",
          minHeight: "calc(100vh - 120px)",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 6vw, 80px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--color-paper)",
            fontWeight: 500,
            textShadow: "0 2px 24px rgba(0,0,0,0.25)",
          }}
        >
          Access to world-class medical care
          <br />
          <span style={{ fontStyle: "italic" }}>
            with your Patient Navigator every step of the way.
          </span>
        </h1>

        <div className="mt-12">
          <Link
            id="book"
            to="/book-call"
            className="inline-flex items-center justify-center bg-ink text-paper hover:bg-ochre hover:text-ink transition-colors rounded-full"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              fontWeight: 500,
              padding: "16px 32px",
            }}
          >
            Book a 30 minute call →
          </Link>
        </div>
      </div>
    </section>
  );
}
