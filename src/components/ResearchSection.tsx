export function ResearchSection() {
  return (
    <section
      className="text-white"
      style={{
        background: "var(--color-gisello-blue)",
        padding: "100px 48px",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <div className="text-center" style={{ marginBottom: 56 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-ochre)",
            }}
          >
            From our research
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(34px, 4vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 500,
              marginTop: 12,
            }}
          >
            We listened before we built.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              lineHeight: 1.6,
              color: "color-mix(in oklab, white 85%, transparent)",
              marginTop: 20,
              maxWidth: 720,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Before Gisello existed, we interviewed 30 prospective fertility patients across the UK, Germany and the UAE. Three things came up in almost every conversation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div
            style={{
              border: "1px solid color-mix(in oklab, white 18%, transparent)",
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                color: "white",
                fontWeight: 500,
              }}
            >
              No one in their corner
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.55,
                color: "color-mix(in oklab, white 85%, transparent)",
              }}
            >
              Patients described coordinating records, clinics, travel and follow-up almost entirely alone, with no single person responsible for the journey.
            </p>
          </div>

          <div
            style={{
              border: "1px solid color-mix(in oklab, white 18%, transparent)",
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                color: "white",
                fontWeight: 500,
              }}
            >
              Afraid of being a number
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.55,
                color: "color-mix(in oklab, white 85%, transparent)",
              }}
            >
              The deepest worry was rarely the medicine. It was arriving at a clinic abroad and being treated as a transaction rather than a person.
            </p>
          </div>

          <div
            style={{
              border: "1px solid color-mix(in oklab, white 18%, transparent)",
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                color: "white",
                fontWeight: 500,
              }}
            >
              Buried in the admin
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.55,
                color: "color-mix(in oklab, white 85%, transparent)",
              }}
            >
              The non-medical load, documents, translation, scheduling and logistics, weighed as heavily as the medical decision itself.
            </p>
          </div>
        </div>

        <div
          className="text-center"
          style={{
            marginTop: 48,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "color-mix(in oklab, white 60%, transparent)",
          }}
        >
          n=30 · prospective fertility patients · UK · Germany · UAE
        </div>
      </div>
    </section>
  );
}
