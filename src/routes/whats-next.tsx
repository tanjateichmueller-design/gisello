import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { CompanionMark } from "@/components/CompanionMark";

export const Route = createFileRoute("/whats-next")({
  component: WhatsNextPage,
  head: () => ({
    meta: [
      { title: "What's next · GISELLO" },
      {
        name: "description",
        content:
          "Centres of Excellence, opening one at a time. Trust before volume. The GISELLO roadmap, 2026 to 2029+.",
      },
      { property: "og:title", content: "What's next · GISELLO" },
      {
        property: "og:description",
        content: "Build the system. Prove the model. Then scale.",
      },
    ],
  }),
});

const TIMELINE = [
  { y: "2026", tag: "PILOT", tone: "live", h: "Fertility", b: "Founder-led pilot · 10 patients · €0" },
  { y: "2027", tag: "Y1", tone: "next", h: "Fertility, commercial", b: "First commercial cohort · UAE, UK/EU, US" },
  { y: "2028", tag: "Y2", tone: "planned", h: "Aesthetics & Hair", b: "Second CoE opens · AI-led patient track" },
  { y: "2029+", tag: "Y3+", tone: "planned", h: "Oncology · Cardio · Complex Surgery", b: "Three further CoEs · platform at scale" },
];

const PHASES = [
  { y: "2026", n: "01 · Build", b: "Foundation year. Founder-led pilot, encrypted Vault MVP, first clinical partnerships in fertility. No commercial revenue by design." },
  { y: "2027-28", n: "02 · Launch", b: "Commercial launch in fertility, then aesthetics. We open the platform to a wider patient base only after the pilot proves the model end-to-end." },
  { y: "2029+", n: "03 · Scale", b: "New CoEs come online, oncology, cardiovascular, complex surgery. The matching engine is now informed by real outcome data across specialties." },
];

const PRINCIPLES = [
  { t: "Trust before volume", b: "A new CoE only opens after the previous one shows real, measurable outcomes. We will not trade quality for growth." },
  { t: "Patient-paid, always", b: "Our loyalty stays with the patient because the patient pays. Clinics never pay us for placement, and that will not change as we scale." },
  { t: "AI for the structured work", b: "AI handles records, language, document logistics, matching. Humans handle every clinical and ethical decision. The split does not move." },
  { t: "Regulated by design", b: "Every new market and CoE is built against the strictest of GDPR, UAE PDPL, CCPA/CPRA, and HIPAA from day one." },
];

function WhatsNextPage() {
  return (
    <PageShell subnavTitle="GISELLO · What's next">
      <section style={{ padding: "80px 48px 60px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={mono()}>What's next · 2026 → 2029+</div>
          <h1 className="mt-6" style={display()}>
            Centres of Excellence,
            <br />
            opening one at a time.
            <br />
            <span style={{ fontStyle: "italic", color: "var(--color-gisello-blue)" }}>Trust before volume.</span>
          </h1>
          <p className="mt-8" style={lead()}>
            We are building GISELLO around Centres of Excellence, vetted clinical
            specialties we open one at a time, only after the previous one is delivering
            measurable outcomes. Here is what is live, what is next, and what comes after.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-paper-pure)", padding: "80px 48px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={mono()}>Centres of Excellence · launch timeline</div>
          <h2 className="mt-6" style={h2()}>
            One specialty at a time. <span style={{ fontStyle: "italic" }}>Each earns the next.</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4" style={{ gap: 24, borderTop: "1px solid var(--color-rule)", paddingTop: 24 }}>
            {TIMELINE.map((t) => (
              <div key={t.y}>
                <div className="flex items-center justify-between">
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 500, color: "var(--color-gisello-blue)" }}>{t.y}</div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em",
                      background: "var(--color-ink)", color: "var(--color-paper)",
                      borderRadius: 999, padding: "4px 10px",
                    }}
                  >
                    {t.tag}
                  </span>
                </div>
                <div
                  className="mt-3"
                  style={{
                    ...mono(),
                    color: t.tone === "live" ? "#1f7a3a" : t.tone === "next" ? "var(--color-ochre)" : "var(--color-gray-60)",
                  }}
                >
                  {t.tone === "live" ? "NOW" : t.tone === "next" ? "NEXT" : "PLANNED"}
                </div>
                <div className="mt-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 17, color: "var(--color-ink)" }}>
                  {t.h}
                </div>
                <p className="mt-2" style={cell()}>{t.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 48px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={mono()}>Three phases · the long view</div>
          <h2 className="mt-6" style={h2()}>
            Build the system.
            <br />
            Prove the model. <span style={{ fontStyle: "italic" }}>Then scale.</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3" style={{ gap: 32, borderTop: "1px solid var(--color-rule)", paddingTop: 24 }}>
            {PHASES.map((p) => (
              <div key={p.n}>
                <CompanionMark size={28} />
                <div className="mt-5" style={mono()}>{p.y}</div>
                <div className="mt-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 18, color: "var(--color-ink)" }}>
                  {p.n}
                </div>
                <p className="mt-3" style={cell()}>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-paper-pure)", padding: "100px 48px 120px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={mono()}>How we decide what to do next</div>
          <h2 className="mt-6" style={h2()}>
            Four principles that shape <span style={{ fontStyle: "italic" }}>every roadmap call.</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2" style={{ gap: 0, borderTop: "1px solid var(--color-rule)" }}>
            {PRINCIPLES.map((p) => (
              <div key={p.t} style={{ padding: "28px 0 28px 0", borderBottom: "1px solid var(--color-rule)" }}>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 17, color: "var(--color-ink)" }}>
                  {p.t}
                </div>
                <p className="mt-3" style={{ ...cell(), maxWidth: 480 }}>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
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
  fontSize: 16, lineHeight: 1.6, color: "var(--color-ink)", maxWidth: 600,
});
const cell = () => ({
  fontFamily: "var(--font-sans)" as const,
  fontSize: 14, lineHeight: 1.6, color: "var(--color-gray-60)",
});
