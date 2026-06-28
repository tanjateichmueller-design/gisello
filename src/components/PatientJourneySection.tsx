import { Link } from "@tanstack/react-router";
import intake from "@/assets/hero-patient-doctor.jpg";
import brief from "@/assets/journey-ai-matching.jpg";
import match from "@/assets/journey-bloodtest.jpg";
import virtualConsult from "@/assets/journey-virtual-consult.jpg";
import travel from "@/assets/hero-suite.jpg";
import treatment from "@/assets/hero-surgical-team.jpg";
import recovery from "@/assets/treatment-wellness.jpg";
import aftercare from "@/assets/hero-doctor.jpg";

interface Step {
  img: string;
  label: string;
  phase: "before" | "during" | "after";
}

const STEPS: Step[] = [
  { img: intake, label: "Day 0", phase: "before" },
  { img: brief, label: "Week 1", phase: "before" },
  { img: match, label: "Week 2", phase: "before" },
  { img: virtualConsult, label: "Week 3", phase: "before" },
  { img: travel, label: "Week 4", phase: "during" },
  { img: treatment, label: "Week 5", phase: "during" },
  { img: recovery, label: "Week 7", phase: "after" },
  { img: aftercare, label: "Week 9", phase: "after" },
];

const PHASES = [
  {
    title: "Before Treatment",
    body: "From day one, your Patient Navigator and AI companion work with you. We review your records and match you with 3 to 5 top clinics suited to your medical profile and preferences, then help you choose the right fit.",
    span: 4,
    color: "var(--color-gisello-blue)",
  },
  {
    title: "During Treatment",
    body: "We coordinate travel, accommodation, and your clinic team. You arrive prepared, never alone.",
    span: 2,
    color: "var(--color-ochre)",
  },
  {
    title: "After Treatment",
    body: "Recovery support, home GP handoff, and aftercare coordination. Care that does not stop at departure.",
    span: 2,
    color: "#1f7a3a",
  },
];

const PHASE_COLOR: Record<Step["phase"], string> = {
  before: "var(--color-gisello-blue)",
  during: "var(--color-ochre)",
  after: "#1f7a3a",
};

export function PatientJourneySection() {
  return (
    <section
      id="journey"
      className="bg-paper"
      style={{ padding: "120px 48px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1320 }}>
        <div className="text-center">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4.5vw, 56px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--color-gisello-blue)",
              fontWeight: 500,
              display: "inline-block",
              position: "relative",
            }}
          >
            Your journey, led by your Patient Navigator,
            <br />
            from first call to full recovery
            <svg
              aria-hidden
              viewBox="0 0 240 20"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                bottom: -14,
                width: 240,
                height: 18,
              }}
            >
              <path
                d="M5 12 C 60 2, 180 2, 235 12"
                stroke="var(--color-ochre)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </h2>
        </div>

        {/* Phase headers */}
        <div
          className="mt-24 grid"
          style={{
            gridTemplateColumns: `repeat(${STEPS.length}, minmax(0, 1fr))`,
            gap: 20,
            alignItems: "start",
          }}
        >
          {PHASES.map((p, i) => (
            <div key={i} style={{ gridColumn: `span ${p.span}` }}>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: 17,
                  color: p.color,
                }}
              >
                {p.title}
              </div>
              <p
                className="mt-2"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: "var(--color-gray-60)",
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div
          className="mt-6 grid"
          style={{
            gridTemplateColumns: `repeat(${STEPS.length}, minmax(0, 1fr))`,
            gap: 20,
            alignItems: "end",
          }}
        >
          {STEPS.map((s, i) => (
            <div key={i}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3 / 4",
                  overflow: "hidden",
                  borderRadius: 4,
                  background: "var(--color-gray-30)",
                }}
              >
                <img
                  src={s.img}
                  alt={s.label}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Timeline axis */}
        <div className="relative mt-8" style={{ height: 60 }}>
          <div
            className="absolute left-0 right-0"
            style={{
              top: 28,
              height: 1,
              background: "var(--color-gisello-blue)",
              opacity: 0.7,
            }}
          />
          <div
            className="absolute inset-0 grid"
            style={{
              gridTemplateColumns: `repeat(${STEPS.length}, minmax(0, 1fr))`,
              gap: 20,
            }}
          >
            {STEPS.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
                style={{ position: "relative" }}
              >
                <div
                  style={{
                    width: 1,
                    height: 22,
                    background: "var(--color-gisello-blue)",
                    opacity: 0.7,
                  }}
                />
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 999,
                    background: PHASE_COLOR[s.phase],
                    marginTop: -1,
                  }}
                />
                <span
                  className="mt-3"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    color: "var(--color-ink)",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/book-call"
            className="inline-flex items-center justify-center transition-colors"
            style={{
              background: "var(--color-gisello-blue)",
              color: "var(--color-paper)",
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              padding: "16px 32px",
              borderRadius: 999,
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--color-ochre)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--color-gisello-blue)")
            }
          >
            Book a 30 minute call
          </Link>
        </div>
      </div>
    </section>
  );
}
