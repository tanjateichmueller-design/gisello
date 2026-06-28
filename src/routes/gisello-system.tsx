import { createFileRoute, Link } from "@tanstack/react-router";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import support from "@/assets/system-support.jpg";
import navigator from "@/assets/system-navigator.jpg";
import companion from "@/assets/system-ai-companion.jpg";
import backbone from "@/assets/system-backbone.jpg";
import planning from "@/assets/system-planning.jpg";
import preAfterCare from "@/assets/pre-after-care.jpg";

export const Route = createFileRoute("/gisello-system")({
  component: GiselloSystemPage,
  head: () => ({
    meta: [
      { title: "The Gisello System · How it works" },
      {
        name: "description",
        content:
          "How Gisello's Patient Navigators, AI companion Gina, and AI backbone coordinate every step of your cross-border care.",
      },
      { property: "og:title", content: "The Gisello System" },
      {
        property: "og:description",
        content:
          "End-to-end patient support powered by human Patient Navigators, an AI companion, and a quiet AI backbone.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.gisello.com/gisello-system" }],
  }),
});

const SOLUTIONS = [
  {
    label: "Guided, on-demand support",
    body: "A real human, your Patient Navigator, plus an AI companion on call. Whenever you need an answer, you get one.",
  },
  {
    label: "Patient-first clinic matching",
    body: "Matched on fit, never on clinic kickbacks. Based on your medical profile and needs, your price point, and your personal preferences.",
  },
  {
    label: "Assurance of quality",
    body: "Clinics vetted on accreditation, named physicians, published outcomes, Gisello experience and aftercare SLAs.",
  },
  {
    label: "Planning and scheduling",
    body: "Gisello leads end-to-end planning around your schedule, clinic availability, treatment needs and travel.",
  },
  {
    label: "Streamlined journey",
    body: "A faster, calmer, more reliable path through selection, treatment and aftercare.",
  },
];

function GiselloSystemPage() {
  return (
    <div className="min-h-screen bg-paper">
      <NavBar />

      {/* Hero */}
      <section
        style={{
          padding: "80px 48px 56px",
          background: "var(--color-gisello-blue)",
          color: "var(--color-paper)",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            The Gisello System
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              fontWeight: 500,
              marginTop: 14,
            }}
          >
            End-to-end care, coordinated by humans, powered by AI.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              lineHeight: 1.6,
              maxWidth: 720,
              marginTop: 18,
              opacity: 0.85,
            }}
          >
            Gisello combines a dedicated Patient Navigator, an AI companion named Gina, and a
            secure AI backbone so you can access world-class treatment abroad without the
            usual waiting, guesswork or sales pressure.
          </p>
        </div>
      </section>

      {/* The solution */}
      <section style={{ padding: "80px 48px" }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.4vw, 42px)",
              color: "var(--color-gisello-blue)",
              fontWeight: 500,
              letterSpacing: "-0.015em",
              marginBottom: 40,
            }}
          >
            The solution: end-to-end support that addresses every patient need.
          </h2>
          <div className="grid" style={{ gap: 1, background: "color-mix(in oklab, var(--color-gisello-blue) 14%, transparent)" }}>
            {SOLUTIONS.map((s, i) => (
              <div
                key={i}
                className="bg-paper grid"
                style={{
                  gridTemplateColumns: "minmax(220px, 320px) 1fr",
                  gap: 32,
                  padding: "24px 28px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-paper)",
                    background: "var(--color-gisello-blue)",
                    padding: "12px 16px",
                  }}
                >
                  {s.label}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "color-mix(in oklab, var(--color-gisello-blue) 78%, transparent)",
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two layers */}
      <section style={{ padding: "80px 48px", background: "color-mix(in oklab, var(--color-gisello-blue) 4%, var(--color-paper))" }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.4vw, 42px)",
              color: "var(--color-gisello-blue)",
              fontWeight: 500,
              letterSpacing: "-0.015em",
              marginBottom: 40,
              textAlign: "center",
            }}
          >
            Two layers of support, working as one.
          </h2>
          <div className="grid" style={{ gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {[
              {
                img: companion,
                tag: 'AI Companion "Gina"',
                lead: "Instant answers grounded in your context.",
                bullets: [
                  "24/7 access via chat and voice, in browser and in-app",
                  "Guides you through simple steps like intake",
                  "Answers grounded in your records and your stage",
                  "Reminders for the next steps that matter",
                ],
              },
              {
                img: navigator,
                tag: "Patient Navigator",
                lead: "Personal connection and human judgment when it counts.",
                bullets: [
                  "Owns your relationship and emotional support",
                  "Orchestrates the journey at every key stage",
                  "Signs off on AI-drafted briefs and content",
                  "Available for ad-hoc escalation, anytime",
                ],
              },
            ].map((c) => (
              <article
                key={c.tag}
                className="bg-paper"
                style={{ border: "1px solid color-mix(in oklab, var(--color-gisello-blue) 14%, transparent)" }}
              >
                <img
                  src={c.img}
                  alt={c.tag}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "24px 26px 28px" }}>
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
                    {c.tag}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      color: "var(--color-gisello-blue)",
                      fontWeight: 500,
                      marginBottom: 14,
                    }}
                  >
                    {c.lead}
                  </h3>
                  <ul style={{ display: "grid", gap: 8, listStyle: "none", padding: 0, margin: 0 }}>
                    {c.bullets.map((b) => (
                      <li
                        key={b}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 14,
                          lineHeight: 1.55,
                          color: "color-mix(in oklab, var(--color-gisello-blue) 75%, transparent)",
                          paddingLeft: 16,
                          position: "relative",
                        }}
                      >
                        <span style={{ position: "absolute", left: 0, color: "var(--color-ochre)" }}>•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Backbone */}
      <section style={{ padding: "80px 48px" }}>
        <div
          className="mx-auto grid"
          style={{ maxWidth: 1100, gap: 48, gridTemplateColumns: "1.1fr 1fr", alignItems: "center" }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-ochre)",
              }}
            >
              Gisello AI Backbone
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.4vw, 42px)",
                color: "var(--color-gisello-blue)",
                fontWeight: 500,
                letterSpacing: "-0.015em",
                marginTop: 12,
                marginBottom: 18,
              }}
            >
              Quiet technology that does the heavy lifting.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15.5,
                lineHeight: 1.65,
                color: "color-mix(in oklab, var(--color-gisello-blue) 78%, transparent)",
                marginBottom: 16,
              }}
            >
              Patient, clinic, travel and communication data flow into Gisello's AI worker
              agents and structured workflows. They streamline operations, ground Gina's
              answers, and free Patient Navigators to focus on you.
            </p>
            <ul style={{ display: "grid", gap: 10, listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Records structured and translated across 11 languages",
                "Clinic matching based on fit, never on commissions",
                "Doctor-to-doctor briefs drafted by AI, signed by an MD",
                "Privacy and consent aligned with GDPR, UK GDPR and PDPL",
              ].map((b) => (
                <li
                  key={b}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "color-mix(in oklab, var(--color-gisello-blue) 75%, transparent)",
                    paddingLeft: 16,
                    position: "relative",
                  }}
                >
                  <span style={{ position: "absolute", left: 0, color: "var(--color-ochre)" }}>•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={backbone}
            alt="Gisello AI backbone"
            loading="lazy"
            width={1024}
            height={1024}
            style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Planning */}
      <section
        style={{
          padding: "80px 48px",
          background: "var(--color-gisello-blue)",
          color: "var(--color-paper)",
        }}
      >
        <div
          className="mx-auto grid"
          style={{ maxWidth: 1100, gap: 48, gridTemplateColumns: "1fr 1.1fr", alignItems: "center" }}
        >
          <img
            src={planning}
            alt="Planning and travel"
            loading="lazy"
            width={1024}
            height={1024}
            style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover" }}
          />
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.4vw, 42px)",
                fontWeight: 500,
                letterSpacing: "-0.015em",
                marginBottom: 16,
              }}
            >
              One timeline, from first call to coming home.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.65, opacity: 0.85, marginBottom: 28 }}>
              Treatment, travel, accommodation, follow-up. We plan it around your life and
              keep it on track, so the only thing you focus on is getting better.
            </p>
            <Link
              to="/book-call"
              style={{
                display: "inline-block",
                background: "var(--color-ochre)",
                color: "var(--color-gisello-blue)",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "16px 28px",
              }}
            >
              Book a 30 minute call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
