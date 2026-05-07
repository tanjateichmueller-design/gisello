import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/compliance")({
  component: CompliancePage,
  head: () => ({
    meta: [
      { title: "Compliance & Data Protection · GISELLO" },
      {
        name: "description",
        content:
          "Built for four privacy regimes by design. GDPR, UAE PDPL, CCPA/CPRA, and HIPAA-aligned at every step.",
      },
      { property: "og:title", content: "Compliance · GISELLO" },
      {
        property: "og:description",
        content: "GDPR, PDPL, CCPA/CPRA, HIPAA-aligned cross-border medical care.",
      },
    ],
  }),
});

const REGIMES = [
  { code: "GDPR · UK GDPR", body: "EU data residency · DPA available" },
  { code: "UAE PDPL", body: "DHA pathway · Dubai jurisdiction" },
  { code: "CCPA · CPRA", body: "No sale of PI, ever" },
  { code: "HIPAA-aligned", body: "BAA on request · zero retention mode" },
];

const INVENTORY = [
  { type: "Identity", what: "Name, email, phone, country", why: "Account & contact", how: "Until you delete" },
  { type: "Medical records", what: "Labs, imaging, clinical notes", why: "Brief generation & matching", how: "Until you revoke" },
  { type: "Outcomes", what: "30d, 6m, 12m follow-up data", why: "Quality assurance", how: "De-identified, indefinite" },
  { type: "Logs", what: "Access, share, revoke events", why: "Audit trail", how: "7 years (regulatory)" },
];

const RIGHTS = [
  { title: "Access", body: "Request a full copy of everything we hold on you, in machine-readable form." },
  { title: "Rectify", body: "Correct any inaccuracy in your records, we update upstream copies on your behalf." },
  { title: "Erase", body: "Delete your Vault and supporting data within 30 days, except where law requires retention." },
  { title: "Restrict", body: "Pause processing for any specific use case while you decide." },
  { title: "Port", body: "Export to FHIR bundle, PDF, or to another provider you choose." },
  { title: "Object", body: "Decline any specific processing, including AI inference, at any time." },
];

function CompliancePage() {
  return (
    <PageShell subnavTitle="GISELLO · Compliance">
      <section style={{ padding: "80px 48px 60px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={eyebrow()}>Compliance & Data Protection</div>
          <h1 className="mt-6" style={display()}>
            Built for four
            <br />
            privacy regimes,
            <br />
            <span style={{ fontStyle: "italic", color: "var(--color-gisello-blue)" }}>
              by design.
            </span>
          </h1>
          <p className="mt-8" style={lead()}>
            Cross-border medical care means cross-border data. GISELLO is engineered
            against the strictest of GDPR, UAE PDPL, CCPA/CPRA, and HIPAA at every
            step, and audited against all four.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-paper-pure)", padding: "40px 48px" }}>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-4" style={{ maxWidth: 1180, gap: 32 }}>
          {REGIMES.map((r) => (
            <div key={r.code}>
              <div style={mono()}>{r.code}</div>
              <div className="mt-3" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-ink)" }}>
                {r.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "100px 48px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={mono()}>What we collect, why, and for how long</div>
          <h2 className="mt-6" style={h2()}>The data inventory.</h2>

          <div className="mt-12" style={{ borderTop: "1px solid var(--color-rule)" }}>
            {INVENTORY.map((row) => (
              <div
                key={row.type}
                className="grid grid-cols-1 md:grid-cols-4 items-start"
                style={{ borderBottom: "1px solid var(--color-rule)", padding: "24px 0", gap: 24 }}
              >
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16, color: "var(--color-ink)" }}>
                  {row.type}
                </div>
                <div style={cell()}>{row.what}</div>
                <div style={cell()}>{row.why}</div>
                <div style={{ ...cell(), color: "var(--color-gisello-blue)" }}>{row.how}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-paper-pure)", padding: "100px 48px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={mono()}>Your rights</div>
          <h2 className="mt-6" style={h2()}>
            Six things you can do, <span style={{ fontStyle: "italic" }}>any time.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3" style={{ gap: 32, borderTop: "1px solid var(--color-rule)", paddingTop: 32 }}>
            {RIGHTS.map((r) => (
              <div key={r.title}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    border: "1px solid var(--color-rule)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: 8, height: 8, background: "var(--color-gisello-blue)", transform: "rotate(45deg)" }} />
                </div>
                <div className="mt-5" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 18, color: "var(--color-ink)" }}>
                  {r.title}
                </div>
                <p className="mt-3" style={cell()}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

const eyebrow = () => ({
  fontFamily: "var(--font-mono)" as const,
  fontSize: 10,
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "var(--color-gray-60)",
});
const mono = () => ({ ...eyebrow() });
const display = () => ({
  fontFamily: "var(--font-display)" as const,
  fontSize: "clamp(44px, 6vw, 72px)",
  lineHeight: 1.05,
  letterSpacing: "-0.01em",
  color: "var(--color-ink)",
  fontWeight: 500,
});
const h2 = () => ({
  fontFamily: "var(--font-display)" as const,
  fontSize: "clamp(36px, 4.5vw, 56px)",
  lineHeight: 1.1,
  color: "var(--color-ink)",
  fontWeight: 500,
});
const lead = () => ({
  fontFamily: "var(--font-sans)" as const,
  fontSize: 16,
  lineHeight: 1.6,
  color: "var(--color-ink)",
  maxWidth: 560,
});
const cell = () => ({
  fontFamily: "var(--font-sans)" as const,
  fontSize: 14,
  lineHeight: 1.6,
  color: "var(--color-gray-60)",
});
