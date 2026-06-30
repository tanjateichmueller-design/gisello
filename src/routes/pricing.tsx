import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing · Patient-pays, transparent · GISELLO" },
      {
        name: "description",
        content:
          "Clinics don't pay us. You do. Three transparent tiers with no commissions, ever.",
      },
      { property: "og:title", content: "Pricing · GISELLO" },
      {
        property: "og:description",
        content: "Patient-pays pricing, three tiers, no commissions.",
      },
    ],
  }),
});

const TIERS = [
  {
    eyebrow: "Cohort 01 · Pilot",
    price: "€0",
    sub: "Free, invite-only, 7 of 10 slots remaining",
    items: [
      "30-min founder intake",
      "Encrypted Vault",
      "AI-drafted, MD-signed Brief",
      "3-5 vetted clinic shortlist",
      "Travel coordination",
      "12-month follow-up",
    ],
    cta: "Apply to pilot",
    to: "/book-call" as const,
    dark: true,
  },
  {
    eyebrow: "Standard",
    price: "€1,800",
    sub: "Per case, post-pilot, Q1 2027",
    items: [
      "Everything in Cohort 01",
      "Self-service patient vault",
      "Multi-clinic comparison view",
      "Insurance pre-auth support",
      "GP handoff package",
    ],
    cta: "Join the waitlist",
    to: "/book-call" as const,
  },
  {
    eyebrow: "Complex case",
    price: "From €4,500",
    sub: "Multi-discipline, post-pilot",
    items: [
      "Everything in Standard",
      "Multi-MD review board",
      "Multi-jurisdiction coordination",
      "Second-opinion review",
      "Dedicated case manager",
    ],
    cta: "Talk to founder",
    to: "/founder" as const,
  },
];

const INCLUDED = [
  "Coordination, briefs, matching, navigation, follow-up.",
  "All AI processing of your records.",
  "MD review and signature on every brief.",
  "Travel logistics support.",
];
const NOT_INCLUDED = [
  "The treatment itself, paid directly to the clinic.",
  "Travel and accommodation costs.",
  "Insurance premiums or claims.",
  "Medications outside the treatment plan.",
];

function PricingPage() {
  return (
    <PageShell subnavTitle="GISELLO · Pricing">
      <section style={{ padding: "80px 48px 40px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={eyebrow()}>Pricing · Patient-pays, transparent</div>
          <h1 className="mt-6" style={display()}>
            Clinics don't pay us.
            <br />
            <span style={{ fontStyle: "italic", color: "var(--color-gisello-blue)" }}>You do.</span>
            <br />
            That's the whole point.
          </h1>
          <p className="mt-8" style={lead()}>
            We put the patient first. We act on your behalf, and we match you to clinics
            based on the highest documented success rates for your treatment and your
            personal preferences, not on which clinic pays us the most. The whole engine
            is AI-enabled, but the loyalty is to you.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 48px 100px" }}>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3" style={{ maxWidth: 1180, gap: 24 }}>
          {TIERS.map((t) => (
            <article
              key={t.eyebrow}
              className="flex flex-col"
              style={{
                borderRadius: 16,
                padding: 32,
                background: t.dark ? "var(--color-gisello-blue)" : "var(--color-paper-pure)",
                color: t.dark ? "var(--color-paper)" : "var(--color-ink)",
                border: t.dark ? "none" : "1px solid var(--color-rule)",
              }}
            >
              <div
                style={{
                  ...mono(),
                  color: t.dark ? "var(--color-ochre)" : "var(--color-gray-60)",
                }}
              >
                {t.eyebrow}
              </div>
              <div
                className="mt-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 48,
                  lineHeight: 1,
                  fontWeight: 500,
                }}
              >
                {t.price}
              </div>
              <div
                className="mt-3"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  opacity: 0.8,
                }}
              >
                {t.sub}
              </div>
              <ul
                className="mt-6"
                style={{
                  borderTop: t.dark
                    ? "1px solid color-mix(in oklab, var(--color-paper) 20%, transparent)"
                    : "1px solid var(--color-rule)",
                }}
              >
                {t.items.map((it) => (
                  <li
                    key={it}
                    style={{
                      padding: "12px 0",
                      borderBottom: t.dark
                        ? "1px solid color-mix(in oklab, var(--color-paper) 15%, transparent)"
                        : "1px solid var(--color-rule)",
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                    }}
                  >
                    · {it}
                  </li>
                ))}
              </ul>
              <Link
                to={t.to}
                className="mt-8 inline-flex items-center justify-center rounded-full"
                style={{
                  background: t.dark ? "var(--color-paper)" : "var(--color-ink)",
                  color: t.dark ? "var(--color-ink)" : "var(--color-paper)",
                  padding: "12px 24px",
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 500,
                  alignSelf: "flex-start",
                }}
              >
                {t.cta} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--color-paper-pure)", padding: "100px 48px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={mono()}>What the fee is and is not</div>
          <h2 className="mt-6" style={h2()}>
            What our fee covers,
            <br />
            and what it explicitly <span style={{ fontStyle: "italic" }}>doesn't.</span>
          </h2>

          <div
            className="mt-12 grid grid-cols-1 md:grid-cols-2"
            style={{ gap: 48, borderTop: "1px solid var(--color-rule)", paddingTop: 24 }}
          >
            <div>
              <div style={{ ...mono(), color: "var(--color-ochre)" }}>INCLUDED</div>
              <ul className="mt-4">
                {INCLUDED.map((i) => (
                  <li key={i} style={listItem()}>· {i}</li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ ...mono(), color: "var(--color-ochre)" }}>NOT INCLUDED</div>
              <ul className="mt-4">
                {NOT_INCLUDED.map((i) => (
                  <li key={i} style={listItem()}>· {i}</li>
                ))}
              </ul>
            </div>
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
  maxWidth: 720,
});
const listItem = () => ({
  fontFamily: "var(--font-sans)" as const,
  fontSize: 15,
  lineHeight: 1.7,
  color: "var(--color-ink)",
  padding: "8px 0",
});
