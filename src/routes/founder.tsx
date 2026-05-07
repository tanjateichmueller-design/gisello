import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import founderImg from "@/assets/founder-tanja-cropped.png";

export const Route = createFileRoute("/founder")({
  component: FounderPage,
  head: () => ({
    meta: [
      { title: "Founder · A letter from Tanja · GISELLO" },
      {
        name: "description",
        content:
          "I built Gisello because I needed it and could not find it. A letter from the founder.",
      },
      { property: "og:title", content: "Founder · GISELLO" },
      {
        property: "og:description",
        content: "A letter from Tanja, founder of GISELLO.",
      },
    ],
  }),
});

const PLACES = [
  { tag: "Weimar", title: "Where I'm from", body: "Origin and the formative experiences shaping a patient-first lens." },
  { tag: "9 yrs Amazon", title: "Where I learned to build systems", body: "Roles, scale, the operational discipline I bring to GISELLO." },
  { tag: "Dubai", title: "Where Gisello lives", body: "Why Dubai, the DHA pathway, the regulated home for cross-border care." },
];

function FounderPage() {
  return (
    <PageShell subnavTitle="GISELLO · About">
      <section style={{ padding: "80px 48px 60px" }}>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]" style={{ maxWidth: 1180, gap: 64 }}>
          <div>
            <div style={mono()}>About Gisello · A letter from the founder</div>
            <h1 className="mt-6" style={display()}>
              I built Gisello because I needed it
              <br />
              <span style={{ fontStyle: "italic", color: "var(--color-gisello-blue)" }}>
                and could not find it.
              </span>
            </h1>
            <div className="mt-8" style={mono()}>
              Tanja · Founder · Weimar → 9 yrs Amazon → Dubai
            </div>
          </div>
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              background: "var(--color-paper-pure)",
              aspectRatio: "1 / 1",
            }}
          >
            <img src={founderImg} alt="Tanja, founder of GISELLO" className="block w-full h-full object-cover" style={{ filter: "blur(2px)", opacity: 0.85 }} />
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 48px 100px" }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <div style={mono()}>The letter</div>
          <div className="mt-6" style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.75, color: "var(--color-ink)" }}>
            <p>
              The first time I tried to coordinate cross-border medical care for someone
              I love, the system fell apart at every handoff. Records did not travel.
              Clinics chose us based on who paid the platform, not who would treat us
              best. Insurance claims were rejected on technicalities no one warned us
              about. The decisions were ours, but the information was nowhere.
            </p>
            <p className="mt-6">
              The structural problem is simple. Medical records are written for one
              clinic at a time, in one language, on one schema. The moment a patient
              crosses a border, the record stops working. The platforms that promise to
              help are paid by the clinics they recommend, so the patient is the product,
              not the customer. Insurance failure rates for cross-border claims sit far
              higher than anyone publishes.
            </p>

            <blockquote
              className="my-8"
              style={{
                borderLeft: "3px solid var(--color-ochre)",
                padding: "8px 24px",
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: 22,
                lineHeight: 1.4,
                color: "var(--color-gisello-blue)",
              }}
            >
              GISELLO is the system I needed and could not find, for myself, and for the
              14 million patients who cross borders every year without one.
            </blockquote>

            <p>
              GISELLO is built on a Cyborg Model. AI does the structured work, ingesting
              records in any of 11 languages, normalizing them to a FHIR-aligned schema,
              drafting clinical briefs, and ranking clinics on outcomes. A human, a
              named Patient Navigator and a signing MD, makes every decision that
              matters. The pilot is founder-led. The patient pays, never the clinic, so
              the loyalty stays with the patient.
            </p>
            <p className="mt-6">
              We open Centres of Excellence one at a time, starting with fertility in
              2026. Ten patients, free of coordination fees, one year, one founder. If
              we earn that, we open the next. We will be measured by outcomes, not by
              volume, and we will publish what we learn.
            </p>

            <p
              className="mt-10"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: 22,
                color: "var(--color-gisello-blue)",
              }}
            >
              Tanja
            </p>
            <div className="mt-2" style={mono()}>Dubai · 2026</div>

            <div className="mt-10 flex flex-wrap items-center" style={{ gap: 12 }}>
              <Link
                to="/book-call"
                className="inline-flex items-center justify-center bg-ink text-paper rounded-full"
                style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, padding: "12px 22px" }}
              >
                Talk to me directly →
              </Link>
              <Link
                to="/pilot"
                className="inline-flex items-center justify-center border border-ink text-ink rounded-full"
                style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, padding: "12px 22px" }}
              >
                See the pilot
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-paper-pure)", padding: "100px 48px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={mono()}>Background</div>
          <h2 className="mt-6" style={h2()}>
            Three places that shaped
            <br />
            the operator behind Gisello.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3" style={{ gap: 24, borderTop: "1px solid var(--color-rule)", paddingTop: 24 }}>
            {PLACES.map((p) => (
              <div key={p.tag} style={{ borderRight: "1px solid var(--color-rule)", paddingRight: 24 }}>
                <div
                  style={{
                    width: 28, height: 28, border: "1px solid var(--color-rule)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <div style={{ width: 8, height: 8, background: "var(--color-gisello-blue)", transform: "rotate(45deg)" }} />
                </div>
                <div className="mt-5" style={mono()}>{p.tag}</div>
                <div className="mt-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 17, color: "var(--color-ink)" }}>
                  {p.title}
                </div>
                <p className="mt-3" style={cell()}>{p.body}</p>
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
const cell = () => ({
  fontFamily: "var(--font-sans)" as const,
  fontSize: 14, lineHeight: 1.6, color: "var(--color-gray-60)",
});
