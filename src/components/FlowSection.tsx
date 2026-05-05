import { CrossBorderFlow } from "./CrossBorderFlow";

export function FlowSection() {
  return (
    <section
      id="flow"
      className="bg-ink text-paper"
      style={{ padding: "100px 48px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <div className="flex items-end justify-between flex-wrap gap-3">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-ochre)",
            }}
          >
            02 / Flow · cross-border · end-to-end
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 28,
              fontStyle: "italic",
              color: "var(--color-paper)",
              lineHeight: 1,
            }}
          >
            How we are
          </span>
        </div>
        <div
          className="mt-5"
          style={{ height: 1.5, background: "var(--color-paper)" }}
        />

        <p
          className="mt-8"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 28,
            lineHeight: 1.3,
            color: "var(--color-paper)",
            maxWidth: 600,
          }}
        >
          We're with you across the journey.{" "}
          <span style={{ fontStyle: "italic" }}>
            Intake to follow-up. AI brain, human-led.
          </span>
        </p>

        <div className="mt-15" style={{ marginTop: 60 }}>
          <CrossBorderFlow />
        </div>
      </div>
    </section>
  );
}
