import { createFileRoute } from "@tanstack/react-router";
import { PilotBanner } from "@/components/PilotBanner";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { StartHere } from "@/components/StartHere";

export const Route = createFileRoute("/pilot")({
  component: PilotPage,
  head: () => ({
    meta: [
      { title: "Pilot Programme 2026 — GISELLO" },
      {
        name: "description",
        content:
          "Ten invited patients. Founder-led, free of charge in 2026. The GISELLO pilot for cross-border fertility care.",
      },
      { property: "og:title", content: "Pilot Programme 2026 — GISELLO" },
      {
        property: "og:description",
        content:
          "Ten patients. Founder-led. Free of charge. The 2026 fertility pilot.",
      },
    ],
  }),
});

interface Criterion {
  num: string;
  title: string;
  body: string;
}

const CRITERIA: Criterion[] = [
  {
    num: "01",
    title: "Carrying the weight of the journey",
    body: "You're emotionally exhausted from rounds of treatment, appointments, and waiting — and you're ready for someone to walk this next step with you, not sell you something.",
  },
  {
    num: "02",
    title: "Researching fertility treatment cross-border",
    body: "You're actively exploring fertility treatment — IVF, IUI, donor options, or anything in between — outside your home country, and you want a structured second path.",
  },
  {
    num: "03",
    title: "Based in the UK, EU, GCC, or UAE",
    body: "Our 2026 pilot is built for patients travelling from these regions, and open to destinations in Czechia, Spain, Greece, Cyprus, or Dubai.",
  },
  {
    num: "04",
    title: "Able to self-pay or use international PMI",
    body: "Treatment costs sit with you or your insurer. We cover coordination — you cover the clinic — and we handle insurance reimbursement on your behalf. No commissions, ever.",
  },
  {
    num: "05",
    title: "Comfortable with documentation",
    body: "We need real medical records to build a real brief. No records, no match.",
  },
  {
    num: "06",
    title: "Wanting one companion beside you",
    body: "You'll work directly with Tanja — one person for intake, decision calls, and check-ins — across the whole journey.",
  },
];

interface IncludedItem {
  label: string;
  detail: string;
  body?: string;
}

const INCLUDED: IncludedItem[] = [
  {
    label: "Founder-led intake",
    detail: "30-min call · free · no obligation",
    body: "Direct conversation about your situation, budget, and timing. We listen first. We tell you whether you're a fit for the pilot before you commit to anything.",
  },
  {
    label: "Clinical brief",
    detail: "AI-drafted · clinician-reviewed",
    body: "Based on your medical records, we write a medical brief that travels with you to every clinic — so you never repeat your story from scratch.",
  },
  {
    label: "Clinic shortlist",
    detail: "3-5 vetted CoE matches",
    body: "Based on your clinical brief and personal preferences, our matching algorithm puts together a shortlist of clinics with the highest success rates — so you go where the outcomes are best, not where the commissions are.",
  },
  {
    label: "Travel and treatment coordination",
    detail: "logistics · accommodation · language",
    body: "Visa support if needed, accommodation booking, language support at the clinic, document handoff at every step. The Patient Navigator is your single contact.",
  },
  { label: "Patient Navigator", detail: "single point of contact · 24/7 in-destination" },
  {
    label: "Outcome tracking and follow-up",
    detail: "outcomes tracked · claims handled",
    body: "30-day, 6-month, and 1-year follow-ups. Insurance reimbursement claim handling if applicable.",
  },
];

function PilotPage() {
  return (
    <div id="top" className="min-h-screen bg-paper">
      <PilotBanner />
      <NavBar />
      <main>
        {/* Hero band */}
        <section
          className="bg-ink text-paper"
          style={{ padding: "120px 48px" }}
        >
          <div className="mx-auto" style={{ maxWidth: 1280 }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-ochre)",
              }}
            >
              03 / Pilot programme · 2026
            </span>

            <div
              className="mt-12 grid grid-cols-1 lg:grid-cols-[6fr_5fr]"
              style={{ gap: 64 }}
            >
              <div>
                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(48px, 5.5vw, 76px)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.01em",
                    color: "var(--color-paper)",
                    fontWeight: 500,
                  }}
                >
                  Ten patients.
                  <br />
                  <span style={{ fontStyle: "italic" }}>
                    One year. Founder-led.
                  </span>
                </h1>
                <p
                  className="mt-10"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 18,
                    lineHeight: 1.6,
                    color: "var(--color-paper)",
                    maxWidth: 520,
                  }}
                >
                  In 2026, GISELLO accepts ten invited patients into our
                  fertility pilot — free of charge. Every step is run by the
                  founder. Every decision is yours.
                </p>
                <div
                  className="mt-10"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-ochre)",
                  }}
                >
                  10 PATIENTS · 0 COST · 1 FOUNDER
                </div>
              </div>

              {/* Stats panel */}
              <div
                className="grid grid-cols-2"
                style={{
                  border: "1px solid var(--color-paper)",
                  borderColor: "color-mix(in oklab, var(--color-paper) 30%, transparent)",
                }}
              >
                {[
                  { k: "10", l: "Invited patients" },
                  { k: "€0", l: "Coordination fee (treatment costs separate)" },
                  { k: "1", l: "Centre of Excellence (Fertility)" },
                  { k: "Q4 2026", l: "Full regulatory framework" },
                ].map((s) => (
                  <div
                    key={s.l}
                    style={{
                      padding: "32px 28px",
                      borderBottom:
                        "1px solid color-mix(in oklab, var(--color-paper) 20%, transparent)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 44,
                        lineHeight: 1,
                        color: "var(--color-ochre)",
                        fontWeight: 500,
                      }}
                    >
                      {s.k}
                    </div>
                    <div
                      className="mt-3"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--color-paper)",
                      }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who fits the pilot */}
        <section className="bg-paper" style={{ padding: "100px 48px" }}>
          <div className="mx-auto" style={{ maxWidth: 1180 }}>
            <div
              style={{ height: 1, background: "var(--color-ink)", opacity: 0.2 }}
            />
            <h2
              className="mt-14"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 4.5vw, 60px)",
                lineHeight: 1.1,
                color: "var(--color-ink)",
                fontWeight: 500,
              }}
            >
              Who the pilot is for.
            </h2>
            <p
              className="mt-5"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.6,
                color: "var(--color-gray-60)",
                maxWidth: 640,
              }}
            >
              We're selective on purpose. The pilot is small so every patient
              gets full founder attention. Here's what we're looking for.
            </p>

            <div
              className="mt-14 grid grid-cols-1 md:grid-cols-2"
              style={{ gap: 20 }}
            >
              {CRITERIA.map((c) => (
                <article
                  key={c.num}
                  style={{
                    border: "1px solid var(--color-ink)",
                    background: "var(--color-paper)",
                    padding: "36px 36px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 44,
                      lineHeight: 1,
                      color: "var(--color-ink)",
                      fontWeight: 500,
                    }}
                  >
                    {c.num}
                  </div>
                  <h3
                    className="mt-5"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      fontSize: 18,
                      color: "var(--color-ink)",
                      lineHeight: 1.3,
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="mt-3"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: "var(--color-gray-60)",
                    }}
                  >
                    {c.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-paper" style={{ padding: "60px 48px 120px" }}>
          <div className="mx-auto" style={{ maxWidth: 1180 }}>
            <div className="flex items-end justify-between flex-wrap gap-3">
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-ochre)",
                }}
              >
                What's included
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  color: "var(--color-ink)",
                }}
              >
                Free for all ten 2026 patients
              </span>
            </div>
            <div
              className="mt-5"
              style={{ height: 1, background: "var(--color-ink)" }}
            />

            <ul className="mt-6">
              {INCLUDED.map((i, idx) => (
                <li
                  key={i.label}
                  style={{
                    padding: "22px 0",
                    borderBottom:
                      idx === INCLUDED.length - 1
                        ? "none"
                        : "1px solid var(--color-rule)",
                  }}
                >
                  <div
                    className="grid grid-cols-[40px_1fr_auto] items-baseline"
                    style={{ gap: 16 }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: "0.2em",
                        color: "var(--color-ochre)",
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 24,
                        lineHeight: 1.2,
                        color: "var(--color-ink)",
                      }}
                    >
                      {i.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--color-gray-60)",
                      }}
                    >
                      {i.detail}
                    </span>
                  </div>
                  {i.body && (
                    <div
                      className="grid grid-cols-[40px_1fr] mt-3"
                      style={{ gap: 16 }}
                    >
                      <span />
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 14,
                          lineHeight: 1.65,
                          color: "var(--color-gray-60)",
                          maxWidth: 720,
                        }}
                      >
                        {i.body}
                      </p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <StartHere />
      </main>
      <Footer />
    </div>
  );
}
