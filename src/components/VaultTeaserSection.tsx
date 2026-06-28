import { Link } from "@tanstack/react-router";

const POINTS = [
  {
    label: "Records you own",
    body: "Imaging, labs, scans and clinical notes, structured in one encrypted vault that travels with you across borders.",
  },
  {
    label: "Compliant by design",
    body: "Built around GDPR, UK GDPR and UAE PDPL. Granular consent for every clinic, every share, every export.",
  },
  {
    label: "Shared with your Navigator only",
    body: "No marketing. No data resale. Your Patient Navigator and your chosen clinic, nothing else.",
  },
];

export function VaultTeaserSection() {
  return (
    <section className="bg-paper" style={{ padding: "100px 48px" }}>
      <div className="mx-auto grid gap-16 md:grid-cols-[1fr_1.2fr]" style={{ maxWidth: 1280 }}>
        <div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "color-mix(in oklab, var(--color-gisello-blue) 60%, transparent)",
            }}
          >
            Patient Vault
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
            One medical record, every border.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              lineHeight: 1.6,
              color: "color-mix(in oklab, var(--color-gisello-blue) 75%, transparent)",
              marginTop: 20,
              maxWidth: 460,
            }}
          >
            The Patient Vault is the spine of every Gisello journey. Your records stay yours,
            structured and shareable on your terms.
          </p>
          <Link
            to="/how-it-works"
            className="inline-block transition-colors hover:text-ochre"
            style={{
              marginTop: 28,
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-gisello-blue)",
              borderBottom: "1px solid currentColor",
              paddingBottom: 4,
            }}
          >
            Learn how it works →
          </Link>
        </div>

        <ul className="grid gap-px" style={{ background: "color-mix(in oklab, var(--color-gisello-blue) 12%, transparent)" }}>
          {POINTS.map((p) => (
            <li
              key={p.label}
              className="bg-paper"
              style={{ padding: "32px 36px" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-ochre)",
                  marginBottom: 10,
                }}
              >
                {p.label}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: "var(--color-gisello-blue)",
                }}
              >
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
