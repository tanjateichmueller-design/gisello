export function StartHere() {
  return (
    <section
      id="start"
      className="bg-ink text-paper"
      style={{ padding: "120px 48px 100px" }}
    >
      <div
        className="mx-auto text-center flex flex-col items-center"
        style={{ maxWidth: 720 }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-ochre)",
          }}
        >
          05 / Start here
        </span>

        <p
          className="mt-10"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 26,
            lineHeight: 1.5,
            color: "var(--color-paper)",
          }}
        >
          The pilot is open for fertility treatments.
          <br />
          Ten patients. Founder-led and free of charge in 2026.
        </p>

        <p
          className="mt-8"
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: 22,
            color: "var(--color-paper)",
          }}
        >
          You struggle with your fertility journey? Let me help you!
        </p>

        <a
          href="#book-call"
          className="mt-10 inline-flex items-center bg-paper text-ink hover:bg-paper-pure transition-colors"
          style={{
            padding: "20px 48px",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          BOOK A 30-MINUTE INTRO CALL →
        </a>
      </div>
    </section>
  );
}
