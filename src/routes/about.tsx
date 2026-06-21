import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About · GISELLO" },
      {
        name: "description",
        content:
          "GISELLO is a founder-led practice coordinating cross-border fertility and aesthetic care, pairing AI cognition with a human Patient Navigator from first call to follow-up.",
      },
      { property: "og:title", content: "About · GISELLO" },
      {
        property: "og:description",
        content:
          "Why GISELLO exists, who it serves, and how a Patient Navigator coordinates cross-border care end to end.",
      },
      { property: "og:url", content: "https://www.gisello.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://www.gisello.com/about" }],
  }),
});

function AboutPage() {
  return (
    <PageShell subnavTitle="GISELLO · About">
      <section style={{ padding: "120px 48px 160px" }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-gray-60)",
            }}
          >
            About GISELLO
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
            A coordinated layer for cross-border care.
          </h1>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--color-ink)",
              marginTop: 40,
            }}
          >
            <p>
              GISELLO exists because cross-border medical care is still organised
              like a referral, not a relationship. Patients carry their own
              records, repeat their own history, and translate clinical
              decisions across languages, time zones, and reimbursement systems.
              That work falls on the people least equipped to do it.
            </p>
            <p className="mt-6">
              We build the layer that absorbs that work. A Patient Navigator
              holds the relationship and the judgement. AI holds the cognition,
              the timeline, and the record. Together they coordinate fertility
              and aesthetic treatment from first call to final follow-up,
              across the clinics and countries that fit each case.
            </p>
            <p className="mt-6">
              GISELLO is founder-led and intentionally small. Cohort 01 opens
              in 2026 with a limited number of patients so every journey is
              navigated personally. Read the founder letter for the origin
              story, or the pilot page for eligibility and timing.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
