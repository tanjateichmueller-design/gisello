import { Link } from "@tanstack/react-router";
import founderImg from "@/assets/founder-tanja-cropped.png";

export function FounderQuoteBlock() {
  return (
    <section id="founder" className="bg-paper" style={{ padding: "40px 48px 80px" }}>
      <div
        className="mx-auto"
        style={{
          maxWidth: 1280,
          background: "var(--color-paper-pure)",
          borderRadius: 16,
          padding: 48,
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr]"
          style={{ gap: 48 }}
        >
          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              background: "var(--color-rule)",
              aspectRatio: "1 / 1",
              filter: "blur(2px)",
              opacity: 0.6,
            }}
          >
            <img
              src={founderImg}
              alt="Tanja Teichmüller"
              className="block w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                color: "var(--color-gray-60)",
              }}
            >
              Founder
            </span>
            <blockquote
              className="mt-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3vw, 40px)",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                color: "var(--color-ink)",
                fontWeight: 500,
              }}
            >
              "GISELLO is the system I needed and could not find, for myself, and for the 14 million patients who cross borders every year without one."
            </blockquote>
            <div
              className="mt-6"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                color: "var(--color-gray-60)",
              }}
            >
              Tanja · Founder · Weimar → 9 yrs Amazon → Dubai
            </div>

            <div className="mt-7 flex flex-wrap items-center" style={{ gap: 12 }}>
              <a
                href="#story"
                className="inline-flex items-center justify-center bg-ink text-paper hover:bg-ochre hover:text-ink transition-colors rounded-full"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 500,
                  padding: "10px 22px",
                }}
              >
                Read the founder story ›
              </a>
              <Link
                to="/book-call"
                className="inline-flex items-center justify-center border border-ink text-ink hover:bg-ink hover:text-paper transition-colors rounded-full"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 500,
                  padding: "10px 22px",
                }}
              >
                Talk to me directly
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
