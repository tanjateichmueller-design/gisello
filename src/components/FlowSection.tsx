import testimonialImg from "@/assets/testimonial-mother-baby.png";

interface Phase {
  num: string;
  tag: string;
  title: string;
  body: string;
  meta: string;
}

const PHASES: Phase[] = [
  {
    num: "01",
    tag: "01 · Intake",
    title: "You tell us your situation",
    body: "A 30-minute intro call with the founder. We listen, ask the right questions, and understand the medical context, your budget, and where you can travel. No medical records uploaded yet — that's not how the pilot works.",
    meta: "30 MIN · FOUNDER-LED · FREE",
  },
  {
    num: "02",
    tag: "02 · Brief",
    title: "We compress your situation into a clinical brief",
    body: "AI processes your medical context into a structured doctor-to-doctor document. No marketing language. No fluff. The brief is the product — what we send to clinics on your behalf.",
    meta: "2-3 DAYS · AI-DRAFTED · CLINICIAN-REVIEWED",
  },
  {
    num: "03",
    tag: "03 · Match",
    title: "You receive a shortlist of clinics that fit",
    body: "For your CoE (Centre of Excellence — Fertility, in 2026), we identify clinics that match your clinical profile, budget band, and travel willingness. You see the rationale for each match. You choose.",
    meta: "3-5 OPTIONS · YOUR DECISION · TRANSPARENT",
  },
  {
    num: "04",
    tag: "04 · Travel & Treatment",
    title: "We coordinate the journey",
    body: "Travel logistics, accommodation, language support at the clinic, document handoff. You focus on the treatment. We handle the rest. The Patient Navigator is your single point of contact.",
    meta: "1-2 WEEKS · IN-DESTINATION · 24/7 PM ACCESS",
  },
  {
    num: "05",
    tag: "05 · Recovery & Follow-up",
    title: "We don't disappear when you fly home",
    body: "Post-treatment care doesn't stop at the clinic door. We track outcomes, coordinate follow-up appointments, and handle insurance reimbursement claims if your plan covers cross-border care. You're not alone after.",
    meta: "30 DAYS - 12 MONTHS · OUTCOME TRACKED · INSURANCE HANDLED",
  },
];

function PhaseCard({ p }: { p: Phase }) {
  return (
    <article
      className="grid grid-cols-1 md:grid-cols-[260px_1fr]"
      style={{
        border: "1px solid var(--color-ink)",
        background: "var(--color-paper)",
        padding: "44px 48px",
        gap: 24,
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 64,
            lineHeight: 1,
            color: "var(--color-ink)",
            fontWeight: 500,
          }}
        >
          {p.num}
        </div>
        <div
          className="mt-6"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-gray-60)",
          }}
        >
          {p.tag}
        </div>
      </div>

      <div>
        <h3
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: 22,
            lineHeight: 1.3,
            color: "var(--color-ink)",
          }}
        >
          {p.title}
        </h3>
        <p
          className="mt-4"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            lineHeight: 1.65,
            color: "var(--color-gray-60)",
            maxWidth: 720,
          }}
        >
          {p.body}
        </p>
        <div
          className="mt-7"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.2em",
            color: "var(--color-ochre)",
          }}
        >
          {p.meta}
        </div>
      </div>
    </article>
  );
}

export function FlowSection() {
  return (
    <>
      {/* Navy intro band */}
      <section
        id="flow"
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
            02 / Cross-border care · end-to-end
          </span>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[6fr_5fr]" style={{ gap: 64 }}>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(48px, 5.5vw, 76px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.01em",
                  color: "var(--color-paper)",
                  fontWeight: 500,
                }}
              >
                From intake
                <br />
                <span style={{ fontStyle: "italic" }}>to follow-up.</span>
                <br />
                <span style={{ fontStyle: "italic" }}>
                  We're with you all
                </span>
                <br />
                <span style={{ fontStyle: "italic" }}>the way.</span>
              </h2>

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
                AI handles the cognition. Humans handle the care. Records that
                travel. Decisions that are yours.
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
                5 PHASES · 1 COMPANION · ZERO HANDOFF GAPS
              </div>
            </div>

            {/* Testimonial card */}
            <div
              className="bg-paper-pure"
              style={{ borderTop: "3px solid var(--color-ochre)" }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-ink">
                <img
                  src={testimonialImg}
                  alt="Mother holding her newborn after fertility treatment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div style={{ padding: "32px 36px 36px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    color: "var(--color-ochre)",
                    lineHeight: 1,
                  }}
                >
                  &rdquo;
                </span>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: 18,
                    lineHeight: 1.55,
                    color: "var(--color-ink)",
                  }}
                >
                  In the UK, we'd been told it wasn't possible to become
                  pregnant because of my endometriosis. 12 months later, we are
                  holding our daughter.
                </p>
                <div
                  className="mt-6"
                  style={{ height: 1, background: "var(--color-rule)" }}
                />
                <div className="mt-5 flex items-end justify-between flex-wrap gap-2">
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        fontSize: 14,
                        color: "var(--color-ink)",
                      }}
                    >
                      Sarah &amp; James, London
                    </div>
                    <div
                      className="mt-1"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--color-gray-60)",
                      }}
                    >
                      IVF · CLINIC REPROFIT, PRAGUE
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--color-ochre)",
                    }}
                  >
                    ✓ SUCCESSFUL PREGNANCY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light section: five phases stacked */}
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
            One companion across five phases.
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
            From the moment you tell us what's wrong to the moment you're back
            on your feet at home — we're with you. Here's what happens at each
            step.
          </p>

          <div className="mt-14 flex flex-col" style={{ gap: 24 }}>
            {PHASES.map((p) => (
              <PhaseCard key={p.num} p={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
