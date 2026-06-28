type Navigator = {
  name: string;
  role: string;
  languages: string;
  corridor: string;
};

const NAVIGATORS: Navigator[] = [
  {
    name: "Tanja Teichmüller",
    role: "Founder & Lead Navigator",
    languages: "DE · EN",
    corridor: "Germany ↔ Georgia, Spain",
  },
  {
    name: "Patient Navigator",
    role: "Fertility Pathways",
    languages: "EN · ES",
    corridor: "UK ↔ Spain, Georgia",
  },
  {
    name: "Patient Navigator",
    role: "Orthopaedic Pathways",
    languages: "EN · PL · DE",
    corridor: "DE / UK ↔ Poland, Turkey",
  },
  {
    name: "Patient Navigator",
    role: "Dental & Aesthetic Pathways",
    languages: "EN · TR · DE",
    corridor: "EU ↔ Turkey, UAE",
  },
];

export function NavigatorsSection() {
  return (
    <section className="bg-paper" style={{ padding: "100px 48px" }}>
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <div className="text-center" style={{ marginBottom: 56 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "color-mix(in oklab, var(--color-gisello-blue) 60%, transparent)",
            }}
          >
            The people behind the platform
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
            Meet your Patient Navigators.
          </h2>
        </div>

        <div className="grid gap-px" style={{ background: "color-mix(in oklab, var(--color-gisello-blue) 12%, transparent)", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {NAVIGATORS.map((n, i) => (
            <article
              key={i}
              className="bg-paper flex flex-col"
              style={{ padding: "36px 28px" }}
            >
              <div
                aria-hidden
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--color-gisello-blue) 8%, transparent), color-mix(in oklab, var(--color-ochre) 12%, transparent))",
                  marginBottom: 24,
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-ochre)",
                  marginBottom: 8,
                }}
              >
                {n.role}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  letterSpacing: "-0.01em",
                  color: "var(--color-gisello-blue)",
                  fontWeight: 500,
                  marginBottom: 12,
                }}
              >
                {n.name}
              </h3>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "color-mix(in oklab, var(--color-gisello-blue) 70%, transparent)",
                  lineHeight: 1.6,
                }}
              >
                <div>{n.languages}</div>
                <div>{n.corridor}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
