import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { CompanionMark } from "@/components/CompanionMark";

export const Route = createFileRoute("/patient-vault")({
  component: VaultPage,
  head: () => ({
    meta: [
      { title: "Patient Vault · GISELLO" },
      {
        name: "description",
        content:
          "Your records. Structured once. Yours forever. Encrypted patient record at the center of GISELLO.",
      },
      { property: "og:title", content: "Patient Vault · GISELLO" },
      {
        property: "og:description",
        content: "Encrypted, FHIR-aligned patient record. You hold the keys.",
      },
    ],
  }),
});

const JOBS = [
  {
    title: "Ingest",
    body: "You upload PDFs, photos, exports, hand-written notes in any of 11 languages. AI extracts the structured medical content. No retyping.",
  },
  {
    title: "Structure",
    body: "Records are normalized to a FHIR-aligned schema. Lab values become numbers, imaging becomes findings, history becomes timeline.",
  },
  {
    title: "Travel",
    body: "Briefs are generated from the Vault and sent to clinics in their language. Outcome data flows back. The Vault grows with you.",
  },
];

const GUARANTEES = [
  { n: "1", title: "You own it", body: "The Vault belongs to you, not to GISELLO. We are stewards, not custodians." },
  { n: "2", title: "You can leave", body: "Export to PDF or FHIR bundle any time. Delete on request, with audit trail." },
  { n: "3", title: "You see access", body: "Every read, every share, every signature is logged and visible to you." },
  { n: "4", title: "You revoke", body: "Pull access from any clinic, partner, or even GISELLO itself in one click." },
  { n: "5", title: "Never sold", body: "Your data is never sold, never used to train models outside your case." },
];

const TIMELINE = [
  { q: "Q1 2026", t: "Manual Vault" },
  { q: "Q2 2026", t: "Brief generation" },
  { q: "Q3 2026", t: "Patient portal" },
  { q: "Q4 2026", t: "Self-service" },
];

function VaultPage() {
  return (
    <PageShell subnavTitle="GISELLO · Patient Vault">
      <section style={{ padding: "80px 48px 60px" }}>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]" style={{ maxWidth: 1180, gap: 64 }}>
          <div>
            <div style={mono()}>Patient Vault</div>
            <h1 className="mt-6" style={display()}>
              Your records.
              <br />
              Structured once.
              <br />
              <span style={{ fontStyle: "italic", color: "var(--color-gisello-blue)" }}>Yours forever.</span>
            </h1>
            <p className="mt-8" style={lead()}>
              The Vault is the encrypted patient record at the center of GISELLO. AI
              ingests scattered documents in 11 languages and structures them to a
              FHIR-aligned schema. You hold the keys.
            </p>
            <div className="mt-8 flex flex-wrap items-center" style={{ gap: 12 }}>
              <Link
                to="/book-call"
                className="inline-flex items-center justify-center bg-ink text-paper rounded-full"
                style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, padding: "12px 22px" }}
              >
                Get a Vault in Cohort 01 →
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center border border-ink text-ink rounded-full"
                style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, padding: "12px 22px" }}
              >
                How it works
              </Link>
            </div>
          </div>

          <aside
            style={{
              border: "1px solid var(--color-rule)",
              borderRadius: 12,
              background: "var(--color-paper-pure)",
              padding: 28,
            }}
          >
            <div className="flex items-center justify-between">
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  background: "color-mix(in oklab, var(--color-ochre) 25%, transparent)",
                  padding: "4px 8px",
                  color: "var(--color-ink)",
                }}
              >
                PATIENT VAULT · YOU
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: "var(--color-gisello-blue)",
                }}
              >
                ● ENCRYPTED
              </span>
            </div>
            <div
              className="mt-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 26,
                lineHeight: 1.2,
                color: "var(--color-ink)",
              }}
            >
              14 records · 3 languages · 1 structured schema
            </div>
            <div className="mt-2" style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--color-gray-60)" }}>
              Last updated · 4 minutes ago
            </div>

            <div className="mt-6" style={{ borderTop: "1px solid var(--color-rule)" }}>
              {[
                ["Lab results", "6 documents · DE/EN"],
                ["Imaging", "3 reports · ES"],
                ["Clinical notes", "4 notes · DE/EN"],
                ["Prescriptions", "1 active"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between"
                  style={{ borderBottom: "1px solid var(--color-rule)", padding: "12px 0", fontFamily: "var(--font-sans)", fontSize: 13 }}
                >
                  <span style={{ color: "var(--color-ink)" }}>{k}</span>
                  <span style={{ color: "var(--color-gray-60)" }}>{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", color: "var(--color-gray-60)" }}>
                SCHEMA · FHIR R4 · GDPR · UAE PDPL
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11,
                  background: "color-mix(in oklab, var(--color-ochre) 25%, transparent)",
                  padding: "4px 10px",
                  borderRadius: 999,
                  color: "var(--color-ink)",
                }}
              >
                Revoke access
              </span>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ padding: "80px 48px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={mono()}>What the Vault does</div>
          <h2 className="mt-6" style={h2()}>
            Three jobs. <span style={{ fontStyle: "italic" }}>One source of truth.</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3" style={{ gap: 32, borderTop: "1px solid var(--color-rule)", paddingTop: 24 }}>
            {JOBS.map((j) => (
              <div key={j.title}>
                <CompanionMark size={28} />
                <div className="mt-5" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 18, color: "var(--color-ink)" }}>
                  {j.title}
                </div>
                <p className="mt-3" style={cell()}>{j.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-paper-pure)", padding: "100px 48px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={mono()}>Your data, on your terms</div>
          <h2 className="mt-6" style={h2()}>Five guarantees, in plain language.</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-5" style={{ gap: 24, borderTop: "1px solid var(--color-rule)", paddingTop: 24 }}>
            {GUARANTEES.map((g) => (
              <div key={g.n}>
                <div
                  style={{
                    width: 28, height: 28, border: "1px solid var(--color-rule)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-ink)",
                  }}
                >
                  {g.n}
                </div>
                <div className="mt-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15, color: "var(--color-ink)" }}>
                  {g.title}
                </div>
                <p className="mt-2" style={cell()}>{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 48px 120px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180, border: "1px solid var(--color-rule)", borderRadius: 12, padding: 40 }}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr]" style={{ gap: 40 }}>
            <div>
              <div style={mono()}>Where the Vault is today</div>
              <h3
                className="mt-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  lineHeight: 1.2,
                  color: "var(--color-ink)",
                  fontWeight: 500,
                }}
              >
                Cohort 01 runs on a manual, encrypted Vault. The full database goes live in Q4 2026.
              </h3>
              <p className="mt-5" style={cell()}>
                In Cohort 01 your records are stored encrypted on dedicated infrastructure,
                accessed only by your named navigator and signing MD. The self-service patient
                portal launches with Cohort 02.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: 16 }}>
              {TIMELINE.map((t) => (
                <div key={t.q} style={{ borderTop: "1px solid var(--color-rule)", paddingTop: 12 }}>
                  <div style={{ ...mono(), color: "var(--color-ochre)" }}>{t.q}</div>
                  <div className="mt-2" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-ink)" }}>{t.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

const mono = () => ({
  fontFamily: "var(--font-mono)" as const,
  fontSize: 10,
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "var(--color-gray-60)",
});
const display = () => ({
  fontFamily: "var(--font-display)" as const,
  fontSize: "clamp(44px, 6vw, 68px)",
  lineHeight: 1.05,
  letterSpacing: "-0.01em",
  color: "var(--color-ink)",
  fontWeight: 500,
});
const h2 = () => ({
  fontFamily: "var(--font-display)" as const,
  fontSize: "clamp(32px, 4vw, 48px)",
  lineHeight: 1.1,
  color: "var(--color-ink)",
  fontWeight: 500,
});
const lead = () => ({
  fontFamily: "var(--font-sans)" as const,
  fontSize: 16, lineHeight: 1.6, color: "var(--color-ink)", maxWidth: 520,
});
const cell = () => ({
  fontFamily: "var(--font-sans)" as const,
  fontSize: 14, lineHeight: 1.6, color: "var(--color-gray-60)",
});
