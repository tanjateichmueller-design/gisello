import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/pilot")({
  component: PilotPage,
  head: () => ({
    meta: [
      { title: "Pilot 2026 · Cohort 01 · GISELLO" },
      {
        name: "description",
        content:
          "Ten patients. One year. Founder-led. The GISELLO 2026 fertility and aesthetics pilot, invite-only, €0 coordination.",
      },
      { property: "og:title", content: "Pilot 2026 · GISELLO" },
      {
        property: "og:description",
        content: "Ten invited patients. Founder-led. €0 coordination.",
      },
    ],
  }),
});

const SLOTS = [
  { n: "01", filled: true },
  { n: "02", filled: true },
  { n: "03", filled: true },
  { n: "04", filled: false },
  { n: "05", filled: false },
  { n: "06", filled: false },
  { n: "07", filled: false },
  { n: "08", filled: false },
  { n: "09", filled: false },
  { n: "10", filled: false },
];

const META_ROWS: Array<[string, string]> = [
  ["Indication", "Fertility · Aesthetics"],
  ["Coordination fee", "€0"],
  ["Geography", "UAE  ·  EU clinics"],
  ["Operator", "Founder-led"],
  ["Vault", "Manual now · DB Q4 2026"],
];

const IT_IS = [
  "Free for the first 10 patients · €0 coordination fee.",
  "Run end-to-end by the founder · one number, one inbox.",
  "A working system: AI ingests records, MD signs the brief, navigator coordinates travel.",
  "Two indications only · fertility and aesthetics.",
];

const IT_IS_NOT = [
  "A polished consumer product · expect rough edges, expect us to ask questions.",
  "A clinic directory or marketplace · we do not hand you a list and walk away.",
  "A wellness or lifestyle service · medical care, with named clinicians.",
  "For everyone · we will tell you in 30 minutes if we are the right fit.",
];

const MILESTONES = [
  { q: "Q2", tag: "IN PROGRESS", tone: "live", h: "Cohort 01 opens, Fertility & Aesthetics", b: "Founder intake calls · first 3 patients matched · manual Vault" },
  { q: "Q3", tag: "NEXT", tone: "next", h: "Treatments", b: "EU centres deliver · post-op briefs return · outcomes recorded" },
  { q: "Q4", tag: "PLANNED", tone: "planned", h: "Vault MVP live", b: "Patient portal · self-service Brief access · revoke controls" },
];

const FIT_YOU = [
  "You are pursuing fertility or aesthetic treatment abroad.",
  "You have at least one prior medical record to share.",
  "You are willing to share outcomes for the system to learn.",
  "You can travel within EU, UK, or UAE jurisdictions.",
];
const FIT_NOT = [
  "You need urgent or emergency care · we cannot move that fast.",
  "You require an indication outside fertility or aesthetics.",
  "You expect a polished consumer app · we are in alpha.",
];
const FIT_GET = [
  "A 30-minute founder call to confirm fit.",
  "A signed clinical brief in the languages you need.",
  "A shortlist of 3-5 vetted clinics, with rationale.",
  "A named navigator from intake through 12-month follow-up.",
  "All coordination at €0 for Cohort 01.",
];

function PilotPage() {
  return (
    <PageShell subnavTitle="GISELLO · Pilot 2026">
      {/* Hero */}
      <section style={{ padding: "80px 48px 60px" }}>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-[1.6fr_320px] items-start" style={{ maxWidth: 1180, gap: 48 }}>
          <div>
            <div style={mono()}>Pilot 2026 · Cohort 01</div>
            <h1 className="mt-6" style={display()}>
              Ten patients.
              <br />
              One year.
              <br />
              <span style={{ fontStyle: "italic", color: "var(--color-gisello-blue)" }}>Founder-led.</span>
            </h1>
            <p className="mt-8" style={lead()}>
              GISELLO is in alpha. The pilot is invite-only, free of coordination fees,
              and run end-to-end by the founder. We are building infrastructure with
              the first ten patients, not selling a service.
            </p>
            <div className="mt-8 flex flex-wrap items-center" style={{ gap: 12 }}>
              <Link
                to="/book-call"
                className="inline-flex items-center justify-center bg-ink text-paper rounded-full"
                style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, padding: "12px 22px" }}
              >
                Apply to the pilot →
              </Link>
              <Link
                to="/book-call"
                className="inline-flex items-center justify-center border border-ink text-ink rounded-full"
                style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, padding: "12px 22px" }}
              >
                Book a 30-min call
              </Link>
            </div>
          </div>

          {/* Cohort tracker */}
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
                COHORT 01 · 2026
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: "#1f9d55",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: 999, background: "#1f9d55" }} />
                LIVE
              </span>
            </div>

            <div
              className="mt-6"
              style={{ fontFamily: "var(--font-display)", fontSize: 36, lineHeight: 1.1, color: "var(--color-ink)", fontWeight: 500 }}
            >
              3 / 10 enrolled
            </div>
            <div className="mt-1" style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--color-gray-60)" }}>
              7 slots open · applications reviewed weekly
            </div>

            <div className="mt-6 grid grid-cols-5" style={{ gap: 10 }}>
              {SLOTS.map((s) => (
                <div
                  key={s.n}
                  style={{
                    aspectRatio: "1 / 1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: s.filled ? "var(--color-gisello-blue)" : "color-mix(in oklab, var(--color-rule) 60%, transparent)",
                    color: s.filled ? "var(--color-paper)" : "var(--color-gray-60)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    letterSpacing: "0.1em",
                  }}
                >
                  {s.n}
                </div>
              ))}
            </div>

            <div className="mt-6">
              {META_ROWS.map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between"
                  style={{ borderTop: "1px solid var(--color-rule)", padding: "12px 0", fontFamily: "var(--font-sans)", fontSize: 13 }}
                >
                  <span style={{ color: "var(--color-gray-60)" }}>{k}</span>
                  <span style={{ color: "var(--color-ink)", fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Anti-positioning */}
      <section style={{ padding: "80px 48px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={mono()}>Anti-positioning</div>
          <h2 className="mt-6" style={h2()}>
            The pilot is a healthtech alpha,
            <br />
            <span style={{ fontStyle: "italic" }}>not a concierge service.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2" style={{ gap: 0, borderTop: "1px solid var(--color-rule)" }}>
            <div style={{ padding: "28px 32px 28px 0", borderRight: "1px solid var(--color-rule)" }}>
              <div style={{ ...mono(), color: "var(--color-ochre)" }}>IT IS</div>
              <ul className="mt-5">
                {IT_IS.map((t) => (
                  <li key={t} style={listItem()}>{t}</li>
                ))}
              </ul>
            </div>
            <div style={{ padding: "28px 0 28px 32px" }}>
              <div style={{ ...mono(), color: "var(--color-ochre)" }}>IT IS NOT</div>
              <ul className="mt-5">
                {IT_IS_NOT.map((t) => (
                  <li key={t} style={listItem()}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quarterly milestones */}
      <section style={{ background: "var(--color-paper-pure)", padding: "80px 48px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={mono()}>Pilot timeline · 2026</div>
          <h2 className="mt-6" style={h2()}>
            Quarterly milestones,
            <br />
            visible to every patient.
          </h2>

          <div
            className="mt-12 grid grid-cols-1 md:grid-cols-3"
            style={{ gap: 0, borderTop: "1px solid var(--color-rule)", paddingTop: 24 }}
          >
            {MILESTONES.map((m, i) => (
              <div
                key={m.q}
                style={{
                  padding: i === 0 ? "0 32px 0 0" : i === MILESTONES.length - 1 ? "0 0 0 32px" : "0 32px",
                  borderRight: i < MILESTONES.length - 1 ? "1px solid var(--color-rule)" : "none",
                }}
              >
                <div className="flex items-center justify-between">
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 500, color: "var(--color-gisello-blue)" }}>
                    {m.q}
                  </div>
                  {m.tone === "live" && (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em",
                        background: "var(--color-ink)", color: "var(--color-paper)",
                        borderRadius: 999, padding: "4px 10px",
                      }}
                    >
                      NOW
                    </span>
                  )}
                </div>
                <div
                  className="mt-3"
                  style={{
                    ...mono(),
                    color: m.tone === "live" ? "#1f7a3a" : m.tone === "next" ? "var(--color-ochre)" : "var(--color-gray-60)",
                  }}
                >
                  {m.tag}
                </div>
                <div className="mt-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 17, color: "var(--color-ink)" }}>
                  {m.h}
                </div>
                <p className="mt-2" style={cell()}>{m.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section style={{ padding: "80px 48px 120px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={mono()}>Eligibility</div>
          <h2 className="mt-6" style={h2()}>Who fits Cohort 01.</h2>

          <div
            className="mt-12 grid grid-cols-1 md:grid-cols-3"
            style={{ gap: 32, borderTop: "1px solid var(--color-rule)", paddingTop: 24 }}
          >
            <FitColumn glyph="✓" label="You fit if" tone="ink" items={FIT_YOU} />
            <FitColumn glyph="✕" label="Not the right fit" tone="ochre" items={FIT_NOT} />
            <FitColumn glyph="◆" label="What you get" tone="blue" items={FIT_GET} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function FitColumn({ glyph, label, tone, items }: { glyph: string; label: string; tone: "ink" | "ochre" | "blue"; items: string[] }) {
  const color = tone === "ochre" ? "var(--color-ochre)" : tone === "blue" ? "var(--color-gisello-blue)" : "var(--color-ink)";
  return (
    <div>
      <div
        style={{
          width: 36, height: 36, border: "1px solid var(--color-rule)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-mono)", fontSize: 14, color,
        }}
      >
        [ {glyph} ]
      </div>
      <div className="mt-5" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 17, color }}>
        {label}
      </div>
      <ul className="mt-4">
        {items.map((t) => (
          <li key={t} style={listItem()}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

const mono = () => ({
  fontFamily: "var(--font-mono)" as const,
  fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "var(--color-gray-60)",
});
const display = () => ({
  fontFamily: "var(--font-display)" as const,
  fontSize: "clamp(44px, 6vw, 72px)", lineHeight: 1.05, letterSpacing: "-0.01em",
  color: "var(--color-ink)", fontWeight: 500,
});
const h2 = () => ({
  fontFamily: "var(--font-display)" as const,
  fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, color: "var(--color-ink)", fontWeight: 500,
});
const lead = () => ({
  fontFamily: "var(--font-sans)" as const,
  fontSize: 16, lineHeight: 1.6, color: "var(--color-ink)", maxWidth: 520,
});
const cell = () => ({
  fontFamily: "var(--font-sans)" as const,
  fontSize: 14, lineHeight: 1.6, color: "var(--color-gray-60)",
});
const listItem = () => ({
  fontFamily: "var(--font-sans)" as const,
  fontSize: 14, lineHeight: 1.7, color: "var(--color-ink)", padding: "8px 0",
});
