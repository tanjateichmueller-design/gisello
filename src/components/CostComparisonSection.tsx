type Row = { treatment: string; home: string; gisello: string };

const ROWS: Row[] = [
  { treatment: "Hip Replacement (unilateral)", home: "€18,000", gisello: "from €6,500" },
  { treatment: "Knee Replacement (unilateral)", home: "€17,000", gisello: "from €6,200" },
  { treatment: "3 Dental Implants (with crowns)", home: "€9,500", gisello: "from €3,200" },
  { treatment: "IVF, own eggs (1 cycle)", home: "€8,000", gisello: "from €3,500" },
  { treatment: "IVF, donor eggs (1 cycle)", home: "€12,000", gisello: "from €5,200" },
  { treatment: "Full-Body Health Check", home: "€4,500", gisello: "from €1,400" },
];

export function CostComparisonSection() {
  return (
    <section className="bg-paper" style={{ padding: "100px 48px" }}>
      <div className="mx-auto" style={{ maxWidth: 1100 }}>
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
            Indicative pricing
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
            World-class care, without the price tag.
          </h2>
        </div>

        <div
          style={{
            border: "1px solid color-mix(in oklab, var(--color-gisello-blue) 15%, transparent)",
          }}
        >
          <div
            className="grid"
            style={{
              gridTemplateColumns: "2fr 1fr 1fr",
              background: "color-mix(in oklab, var(--color-gisello-blue) 8%, transparent)",
              padding: "18px 24px",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-gisello-blue)",
            }}
          >
            <div>Treatment</div>
            <div>UK / DE private</div>
            <div>Gisello partner</div>
          </div>
          {ROWS.map((r, i) => (
            <div
              key={r.treatment}
              className="grid items-center"
              style={{
                gridTemplateColumns: "2fr 1fr 1fr",
                padding: "22px 24px",
                borderTop:
                  i === 0
                    ? "none"
                    : "1px solid color-mix(in oklab, var(--color-gisello-blue) 10%, transparent)",
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "var(--color-gisello-blue)",
              }}
            >
              <div style={{ fontWeight: 500 }}>{r.treatment}</div>
              <div
                style={{
                  color: "color-mix(in oklab, var(--color-gisello-blue) 55%, transparent)",
                  textDecoration: "line-through",
                }}
              >
                {r.home}
              </div>
              <div style={{ color: "var(--color-ochre)", fontWeight: 600 }}>{r.gisello}</div>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "color-mix(in oklab, var(--color-gisello-blue) 55%, transparent)",
            marginTop: 20,
            lineHeight: 1.6,
          }}
        >
          All prices in EUR. Home-country prices are indicative for UK and German private care.
          Gisello prices represent base partner rates. Your final coordinated price is confirmed
          after a free Patient Navigator consultation and clinical brief.
        </p>
      </div>
    </section>
  );
}
