const OUTLETS = [
  "TechCrunch",
  "Sifted",
  "Handelsblatt",
  "EU-Startups",
  "Fertility Road",
  "Forbes Health",
];

export function PressStrip() {
  return (
    <section
      aria-label="Press"
      className="bg-paper border-y"
      style={{
        borderColor: "color-mix(in oklab, var(--color-gisello-blue) 12%, transparent)",
        padding: "32px 48px",
      }}
    >
      <div className="mx-auto flex flex-col items-center gap-6" style={{ maxWidth: 1280 }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "color-mix(in oklab, var(--color-gisello-blue) 60%, transparent)",
          }}
        >
          As featured in
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {OUTLETS.map((o) => (
            <span
              key={o}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                color: "color-mix(in oklab, var(--color-gisello-blue) 55%, transparent)",
                letterSpacing: "-0.01em",
              }}
            >
              {o}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
