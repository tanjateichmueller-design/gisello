const CORRIDORS = [
  { flag: "🇬🇪", name: "Georgia" },
  { flag: "🇹🇷", name: "Turkey" },
  { flag: "🇪🇸", name: "Spain" },
  { flag: "🇵🇱", name: "Poland" },
  { flag: "🇦🇪", name: "UAE" },
];

const CLINICS = [
  "Innova IVF",
  "Acibadem",
  "Memorial",
  "IVI",
  "Medicover",
  "Mediclinic",
  "Quirónsalud",
  "LIV Hospital",
];

export function PartnerClinicsSection() {
  return (
    <section
      style={{
        padding: "100px 48px",
        background: "color-mix(in oklab, var(--color-gisello-blue) 4%, var(--color-paper))",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <div className="text-center" style={{ marginBottom: 48 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "color-mix(in oklab, var(--color-gisello-blue) 60%, transparent)",
            }}
          >
            Vetted partner network
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(34px, 4vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--color-gisello-blue)",
              fontWeight: 500,
              marginTop: 12,
            }}
          >
            Leading clinics, across our corridors.
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3" style={{ marginBottom: 40 }}>
          {CORRIDORS.map((c) => (
            <span
              key={c.name}
              className="inline-flex items-center gap-2"
              style={{
                border: "1px solid color-mix(in oklab, var(--color-gisello-blue) 20%, transparent)",
                padding: "10px 18px",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "var(--color-gisello-blue)",
                background: "var(--color-paper)",
              }}
            >
              <span style={{ fontSize: 18 }}>{c.flag}</span>
              {c.name}
            </span>
          ))}
        </div>

        <div
          className="grid gap-px"
          style={{
            background: "color-mix(in oklab, var(--color-gisello-blue) 12%, transparent)",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          }}
        >
          {CLINICS.map((c) => (
            <div
              key={c}
              className="bg-paper flex items-center justify-center"
              style={{
                padding: "32px 16px",
                fontFamily: "var(--font-display)",
                fontSize: 20,
                color: "color-mix(in oklab, var(--color-gisello-blue) 65%, transparent)",
                letterSpacing: "-0.01em",
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
