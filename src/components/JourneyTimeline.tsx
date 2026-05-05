interface Step {
  num: string;
  tag: string;
  title: string;
  meta: string;
  position: "top" | "bottom";
  highlight?: boolean;
}

const STEPS: Step[] = [
  {
    num: "01",
    tag: "Intake",
    title: "Book a 30-min intro call",
    meta: "Founder-led · free · AI-structured brief",
    position: "top",
    highlight: true,
  },
  {
    num: "02",
    tag: "Medical brief",
    title: "Your case, precisely structured",
    meta: "AI-generated · clinician-reviewed · matched to your needs",
    position: "bottom",
  },
  {
    num: "03",
    tag: "Coordination",
    title: "We find the right clinic",
    meta: "Brief-driven match · 12+ vetted centres",
    position: "top",
  },
  {
    num: "04",
    tag: "Decision call",
    title: "You choose your clinic",
    meta: "Founder-led · questions welcome · no pressure",
    position: "bottom",
  },
  {
    num: "05",
    tag: "Travel",
    title: "We handle the logistics",
    meta: "End-to-end planning · no gaps",
    position: "top",
  },
  {
    num: "06",
    tag: "Treatment",
    title: "You receive care abroad",
    meta: "GISELLO on-call · clinic liaison · no handoffs",
    position: "bottom",
  },
  {
    num: "07",
    tag: "Recovery",
    title: "You focus on healing",
    meta: "Post-procedure support · real-time updates",
    position: "top",
  },
  {
    num: "08",
    tag: "Aftercare",
    title: "Care doesn't stop at departure",
    meta: "Home GP handoff · complication support · aftercare coordination",
    position: "bottom",
    highlight: true,
  },
];

function StepCard({ s }: { s: Step }) {
  return (
    <div className="text-center px-2">
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--color-gray-30)",
        }}
      >
        {s.num} / <span style={{ color: "var(--color-paper)" }}>{s.tag}</span>
      </div>
      <h3
        className="mt-3"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 22,
          lineHeight: 1.2,
          color: "var(--color-paper)",
          fontWeight: 500,
        }}
      >
        {s.title}
      </h3>
      <p
        className="mt-3 mx-auto"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--color-ochre)",
          lineHeight: 1.7,
          maxWidth: 180,
        }}
      >
        {s.meta}
      </p>
    </div>
  );
}

export function JourneyTimeline() {

  return (
    <section
      id="flow"
      className="bg-ink text-paper"
      style={{ padding: "120px 48px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1440 }}>
        {/* Eyebrow */}
        <div className="flex items-baseline justify-between">
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
              fontSize: 22,
              fontStyle: "italic",
              color: "var(--color-paper)",
            }}
          >
            Built around you, not the system.
          </span>
        </div>

        <div
          className="mt-5"
          style={{ height: 1, background: "var(--color-paper)", opacity: 0.5 }}
        />

        {/* Headline */}
        <h2
          className="mt-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 3.4vw, 44px)",
            lineHeight: 1.25,
            color: "var(--color-paper)",
            fontWeight: 400,
            maxWidth: 900,
          }}
        >
          Every step of your journey, handled.{" "}
          <span style={{ fontStyle: "italic" }}>
            From first call to final follow-up — one companion, no handoffs.
          </span>
        </h2>

        {/* Timeline */}
        <div className="mt-24 relative">
          {/* Top row: odd steps in cols 1,3,5,7 */}
          <div className="grid grid-cols-8" style={{ gap: 16 }}>
            {STEPS.map((s, i) =>
              s.position === "top" ? (
                <div key={s.num} style={{ gridColumn: `${i + 1} / span 1` }}>
                  <StepCard s={s} />
                </div>
              ) : null
            )}
          </div>

          {/* Dotted axis with 8 dots */}
          <div className="relative mt-10 mb-10" style={{ height: 28 }}>
            <div
              className="absolute left-0 right-0 top-1/2"
              style={{
                borderTop: "1px dashed var(--color-gray-30)",
                opacity: 0.55,
              }}
            />
            <div
              className="absolute left-1/2 px-4"
              style={{
                top: "50%",
                transform: "translate(-50%, -50%)",
                background: "var(--color-ink)",
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--color-gray-30)",
                whiteSpace: "nowrap",
              }}
            >
              GISELLO · END-TO-END
            </div>
            <div className="absolute inset-0 grid grid-cols-8" style={{ gap: 16 }}>
              {STEPS.map((s, i) => (
                <div key={i} className="flex items-center justify-center">
                  <span
                    className="block rounded-full"
                    style={{
                      width: 10,
                      height: 10,
                      background: s.highlight
                        ? "var(--color-paper)"
                        : "var(--color-ochre)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row: even steps in cols 2,4,6,8 */}
          <div className="grid grid-cols-8" style={{ gap: 16 }}>
            {STEPS.map((s, i) =>
              s.position === "bottom" ? (
                <div key={s.num} style={{ gridColumn: `${i + 1} / span 1` }}>
                  <StepCard s={s} />
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
