const THEMES = [
  {
    label: "No one in their corner",
    body: "Patients described coordinating records, clinics, travel and follow-up almost entirely alone, with no single person responsible for the journey.",
  },
  {
    label: "Afraid of being a number",
    body: "The deepest worry was rarely the medicine. It was arriving at a clinic abroad and being treated as a transaction rather than a person.",
  },
  {
    label: "Buried in the admin",
    body: "The non-medical load, documents, translation, scheduling and logistics, weighed as heavily as the medical decision itself.",
  },
];

export function PatientResearch() {
  return (
    <section
      className="text-white"
      style={{ background: "var(--color-gisello-blue)", padding: "100px 48px" }}
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
              fontFamily: "var(--font-body)",
              fontSize: 17,
              lineHeight: 1.6,
              color: "color-mix(in oklab, white 80%, transparent)",
              maxWidth: 640,
              margin: "20px auto 0",
            }}
          >
            Before Gisello existed, we interviewed 30 prospective fertility patients
            across the UK, Germany and the UAE. Three things came up in almost every
            conversation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {THEMES.map((t) => (
            <div
              key={t.label}
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
                  fontSize: 24,
                  fontWeight: 500,
                }}
              >
                {t.label}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "color-mix(in oklab, white 82%, transparent)",
                }}
              >
                {t.body}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "color-mix(in oklab, white 55%, transparent)",
            textAlign: "center",
            marginTop: 48,
          }}
        >
          n=30 · prospective fertility patients · UK · Germany · UAE
        </p>
      </div>
    </section>
  );
}
