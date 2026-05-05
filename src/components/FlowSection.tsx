interface Step {
  id: string;
  eyebrow: string;
  title: string;
  detail: string;
  position: "top" | "bottom";
}

const STEPS: Step[] = [
  {
    id: "01",
    eyebrow: "01 / Intake",
    title: "Book a 30-min intro call",
    detail: "Founder-led · free · AI-structured brief",
    position: "top",
  },
  {
    id: "02",
    eyebrow: "02 / Medical brief",
    title: "Your case, precisely structured",
    detail: "AI-generated · clinician-reviewed · matched to your needs",
    position: "bottom",
  },
  {
    id: "03",
    eyebrow: "03 / Coordination",
    title: "We find the right clinic",
    detail: "Brief-driven match · 12+ vetted centres",
    position: "top",
  },
  {
    id: "04",
    eyebrow: "04 / Decision call",
    title: "You choose your clinic",
    detail: "Founder-led · questions welcome · no pressure",
    position: "bottom",
  },
  {
    id: "05",
    eyebrow: "05 / Travel",
    title: "We handle the logistics",
    detail: "End-to-end planning · no gaps",
    position: "top",
  },
  {
    id: "06",
    eyebrow: "06 / Treatment",
    title: "You receive care abroad",
    detail: "GISELLO on-call · clinic liaison · no handoffs",
    position: "bottom",
  },
  {
    id: "07",
    eyebrow: "07 / Recovery",
    title: "You focus on healing",
    detail: "Post-procedure support · real-time updates",
    position: "top",
  },
  {
    id: "08",
    eyebrow: "08 / Aftercare",
    title: "Care doesn't stop at departure",
    detail: "Home GP handoff · complication support · aftercare coordination",
    position: "bottom",
  },
];

function StepNode({ filled }: { filled: boolean }) {
  return (
    <div className="flex justify-center" aria-hidden>
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: filled ? "var(--color-ochre)" : "var(--color-paper)",
          border: filled ? "none" : "1.5px solid var(--color-paper)",
        }}
      />
    </div>
  );
}

function StepCard({ step }: { step: Step }) {
  return (
    <div className="text-center px-3">
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--color-gray-30)",
          lineHeight: 1,
        }}
      >
        {step.eyebrow}
      </div>
      <h3
        className="mt-3 mx-auto"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 22,
          lineHeight: 1.2,
          color: "var(--color-paper)",
          maxWidth: 220,
        }}
      >
        {step.title}
      </h3>
      <p
        className="mt-3 mx-auto"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.15em",
          color: "var(--color-ochre)",
          lineHeight: 1.6,
          maxWidth: 220,
        }}
      >
        {step.detail}
      </p>
    </div>
  );
}

export function FlowSection() {
  return (
    <section
      id="flow"
      className="bg-ink text-paper"
      style={{ padding: "100px 48px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        {/* Section eyebrow row */}
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

        {/* Positioning sentence */}
        <p
          className="mt-10"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 32,
            lineHeight: 1.3,
            color: "var(--color-paper)",
            maxWidth: 760,
          }}
        >
          Every step of your journey, handled.{" "}
          <span style={{ fontStyle: "italic" }}>
            From first call to final follow-up — one companion, no handoffs.
          </span>
        </p>

        {/* Desktop alternating timeline */}
        <div className="hidden lg:block mt-20">
          {/* Top row of cards (odd steps) */}
          <div className="grid grid-cols-8">
            {STEPS.map((s) => (
              <div key={`top-${s.id}`}>
                {s.position === "top" ? <StepCard step={s} /> : null}
              </div>
            ))}
          </div>

          {/* Axis with nodes */}
          <div className="relative my-8">
            <div
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2"
              style={{
                height: 1,
                borderTop: "1px dashed var(--color-paper)",
                opacity: 0.35,
              }}
            />
            <div className="relative grid grid-cols-8">
              {STEPS.map((s, i) => (
                <StepNode key={s.id} filled={i !== 0 && i !== STEPS.length - 1} />
              ))}
            </div>
            {/* Center label */}
            <div
              className="absolute left-1/2 -translate-x-1/2 -top-4 px-3 bg-ink"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-gray-30)",
              }}
            >
              GISELLO · END-TO-END
            </div>
          </div>

          {/* Bottom row of cards (even steps) */}
          <div className="grid grid-cols-8">
            {STEPS.map((s) => (
              <div key={`bot-${s.id}`}>
                {s.position === "bottom" ? <StepCard step={s} /> : null}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet stacked version */}
        <div className="lg:hidden mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {STEPS.map((s, i) => (
            <div key={s.id} className="relative">
              <StepNode filled={i !== 0 && i !== STEPS.length - 1} />
              <div className="mt-4">
                <StepCard step={s} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
