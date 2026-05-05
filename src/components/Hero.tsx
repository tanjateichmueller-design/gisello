import founderImg from "@/assets/founder-tanja-cropped.png";

export function Hero() {
  return (
    <section
      id="who"
      className="bg-paper"
      style={{ padding: "80px 48px" }}
    >
      <div
        className="mx-auto grid grid-cols-1 lg:grid-cols-[5fr_6fr]"
        style={{ maxWidth: 1280, gap: 80 }}
      >
        {/* LEFT */}
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
            01 / Cross-border care · end-to-end
          </span>

          <h1
            className="mt-7"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 6vw, 76px)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "var(--color-ink)",
              fontWeight: 500,
            }}
          >
            A companion
            <br />
            <span style={{ fontStyle: "italic" }}>who knows</span>
            <br />
            <span style={{ fontStyle: "italic" }}>the way.</span>
          </h1>

          <p
            className="mt-7"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              lineHeight: 1.5,
              color: "var(--color-ink)",
              maxWidth: 480,
            }}
          >
            Records that travel. People who care. Decisions that are yours.
          </p>

          <div className="mt-9">
            <a
              id="book"
              href="#book-call"
              className="inline-flex items-center bg-ink text-paper hover:bg-ochre hover:text-ink transition-colors"
              style={{
                padding: "16px 28px",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              BOOK A 30-MINUTE INTRO CALL →
            </a>
          </div>

          <div
            className="mt-4"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-ochre)",
            }}
          >
            FREE · FOUNDER-LED · FERTILITY COE · 2026
          </div>
        </div>

        {/* RIGHT — founder image + quote */}
        <div className="flex flex-col">
          <div
            className="relative bg-paper-pure overflow-hidden"
            style={{ border: "1px solid var(--color-rule)" }}
          >
            <img
              src={founderImg}
              alt="Tanja Teichmüller, founder of GISELLO"
              className="block w-full h-auto"
              loading="eager"
            />
          </div>

          <blockquote
            className="bg-paper-pure"
            style={{
              border: "1px solid var(--color-rule)",
              borderTop: "none",
              padding: "28px 32px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: 20,
                lineHeight: 1.5,
                color: "var(--color-ink)",
              }}
            >
              “I built GISELLO because I know what it feels like to navigate a
              foreign healthcare system alone. No one should have to do that —
              especially not during something as personal as fertility
              treatment.”
            </p>
            <div
              className="mt-5"
              style={{ width: 36, height: 1.5, background: "var(--color-ochre)" }}
            />
            <a
              href="https://www.linkedin.com/in/tanjateichmueller/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 hover:underline"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 14,
                color: "var(--color-ink)",
                textUnderlineOffset: 4,
              }}
            >
              Tanja Teichmüller
              <span aria-hidden style={{ fontSize: 12, color: "var(--color-ochre)" }}>↗</span>
            </a>
            <div
              className="mt-1"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-ochre)",
              }}
            >
              Founder, GISELLO
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
