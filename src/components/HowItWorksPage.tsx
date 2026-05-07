import { CompanionMark } from "./CompanionMark";

interface Phase {
  num: string;
  day: string;
  title: string;
  subtitle: string;
  body: string;
  ai: string;
  human: string;
  output: string;
}

const PHASES: Phase[] = [
  {
    num: "01",
    day: "DAY 0   ·   30 MIN",
    title: "Intake",
    subtitle: "You tell us what you need",
    body: "A 30-minute call with the founder. We listen, we ask the questions a clinician would, we tell you whether GISELLO is the right fit. No forms before the call.",
    ai: "Notes structured into a working case file",
    human: "Tanja runs the call · clinical context noted",
    output: "Decision: do we work together or refer you elsewhere",
  },
  {
    num: "02",
    day: "WEEK 1",
    title: "Vault & Brief",
    subtitle: "Your records become a doctor-to-doctor summary",
    body: "You upload existing records — labs, imaging, prior treatment notes — in any of 11 languages. AI ingests and structures them to a FHIR-aligned schema. A licensed MD signs the resulting clinical brief.",
    ai: "Multilingual ingestion · structured extraction · brief draft",
    human: "MD review and signature · errors corrected",
    output: "Encrypted Vault + signed Brief in your patient portal",
  },
  {
    num: "03",
    day: "WEEK 2",
    title: "Match",
    subtitle: "A shortlist of clinics, with rationale",
    body: "We rank vetted Centres of Excellence on protocol fit, outcome data, and clinician availability, never on commission. You receive 3-5 options with the reasoning, the trade-offs, and the surgeon's background.",
    ai: "47 variables · outcome-weighted ranking",
    human: "Navigator interprets · brings concerns to surface",
    output: "Shortlist + rationale + Q&A session before you choose",
  },
  {
    num: "04",
    day: "TRAVEL",
    title: "Treatment",
    subtitle: "We coordinate the journey",
    body: "Visa support, flights, accommodation, ground transfer, in-clinic interpretation. Your Brief travels ahead of you in the clinic's language. Your Navigator is on call 24/7 in your timezone.",
    ai: "Itinerary builder · document checks · translation",
    human: "Navigator coordinates · escalates anomalies",
    output: "Treatment delivered · post-op summary in Vault",
  },
  {
    num: "05",
    day: "30 D · 6 MO · 12 MO",
    title: "Recovery",
    subtitle: "We don't disappear when you fly home",
    body: "Three structured follow-ups, a discharge summary in your home GP's language, and a complications pathway. The Vault stays yours; you can revoke access at any time.",
    ai: "Outcome tracking · GP-format discharge summary",
    human: "Navigator check-ins · GP handoff coordinated",
    output: "GP handoff complete · outcome added to Ledger",
  },
];

const SPINE = [
  {
    title: "Vault",
    body: "Encrypted patient record. FHIR-aligned. Yours forever, revocable any time.",
  },
  {
    title: "Brief",
    body: "AI-drafted, MD-signed clinical summary. Travels with you across borders.",
  },
  {
    title: "Clinic Graph",
    body: "Vetted Centres of Excellence with outcome data, no commission inputs.",
  },
];

function PhaseRow({ p }: { p: Phase }) {
  return (
    <article
      className="grid grid-cols-1 md:grid-cols-[160px_1fr]"
      style={{
        borderTop: "1px solid var(--color-rule)",
        padding: "56px 0",
        gap: 32,
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 64,
            lineHeight: 1,
            color: "var(--color-gisello-blue)",
            fontWeight: 500,
          }}
        >
          {p.num}
        </div>
        <div
          className="mt-3"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-ochre)",
          }}
        >
          {p.day}
        </div>
      </div>

      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 38,
            lineHeight: 1.1,
            color: "var(--color-ink)",
            fontWeight: 500,
          }}
        >
          {p.title}
        </h3>
        <div
          className="mt-2"
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: 18,
            color: "var(--color-gisello-blue)",
          }}
        >
          {p.subtitle}
        </div>
        <p
          className="mt-5"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            lineHeight: 1.65,
            color: "var(--color-ink)",
            maxWidth: 680,
          }}
        >
          {p.body}
        </p>

        <div
          className="mt-8 grid grid-cols-1 md:grid-cols-3"
          style={{
            borderTop: "1px solid var(--color-rule)",
            paddingTop: 20,
            gap: 32,
          }}
        >
          {[
            { label: "AI LAYER", value: p.ai },
            { label: "HUMAN LAYER", value: p.human },
            { label: "OUTPUT", value: p.output },
          ].map((c) => (
            <div key={c.label}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  color: "var(--color-gray-60)",
                }}
              >
                {c.label}
              </div>
              <div
                className="mt-2"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: "var(--color-ink)",
                }}
              >
                {c.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "80px 48px 60px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-gray-60)",
            }}
          >
            How GISELLO works
          </div>
          <h1
            className="mt-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 6vw, 72px)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: "var(--color-ink)",
              fontWeight: 500,
            }}
          >
            Five phases.
            <br />
            One companion.
            <br />
            <span style={{ fontStyle: "italic", color: "var(--color-gisello-blue)" }}>
              Records that travel with you.
            </span>
          </h1>
          <p
            className="mt-8"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--color-ink)",
              maxWidth: 560,
            }}
          >
            From the first 30-min intake to the 12-month follow-up call, you have one
            Patient Navigator and one structured record. AI does the heavy lifting on
            documents and matching. A human makes every decision that matters.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section style={{ padding: "20px 48px 80px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          {PHASES.map((p) => (
            <PhaseRow key={p.num} p={p} />
          ))}
        </div>
      </section>

      {/* Data Spine */}
      <section
        style={{
          background: "var(--color-paper-pure)",
          borderTop: "1px solid var(--color-rule)",
          padding: "100px 48px",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-gray-60)",
            }}
          >
            The Data Spine
          </div>
          <h2
            className="mt-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4.5vw, 56px)",
              lineHeight: 1.1,
              color: "var(--color-ink)",
              fontWeight: 500,
              maxWidth: 720,
            }}
          >
            What sits underneath every phase, every patient.
          </h2>

          <div
            className="mt-16 grid grid-cols-1 md:grid-cols-3"
            style={{ gap: 32 }}
          >
            {SPINE.map((s) => (
              <div
                key={s.title}
                style={{
                  borderTop: "1px solid var(--color-rule)",
                  paddingTop: 24,
                }}
              >
                <CompanionMark size={28} />
                <div
                  className="mt-6"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 500,
                    color: "var(--color-ink)",
                  }}
                >
                  {s.title}
                </div>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "var(--color-gray-60)",
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
