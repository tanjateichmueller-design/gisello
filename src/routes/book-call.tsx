import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/book-call")({
  component: BookCallPage,
  head: () => ({
    meta: [
      { title: "Book a call · Talk to the founder · GISELLO" },
      {
        name: "description",
        content:
          "Book a 30 minute call with your Patient Navigator. Talk to us before you decide anything.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Book a call · GISELLO" },
      {
        property: "og:description",
        content: "Talk to the founder before you decide anything.",
      },
    ],
  }),
});

const NEXT_STEPS = [
  { n: "00", t: "You pick a route below", w: "Now" },
  { n: "01", t: "30-min founder call", w: "Within 48 h" },
  { n: "02", t: "We confirm fit · share next steps", w: "Same call" },
  { n: "03", t: "You upload records to encrypted Vault", w: "Day 2-7" },
  { n: "04", t: "AI drafts brief · MD signs", w: "Week 1" },
];

const STAGES = [
  { n: "1", h: "Now · pre-call", b: "Only what you put in the form. Stored encrypted, used only to contact you. Deleted on request, no questions asked." },
  { n: "2", h: "Post-call · if we work together", b: "You upload medical records to your encrypted Vault. AI processes them, MD reviews. Logs visible to you." },
  { n: "3", h: "Q4 2026 · Vault DB live", b: "Self-service portal. Revoke clinic access in one click. Export to FHIR or PDF any time." },
];

function BookCallPage() {
  const [treatment, setTreatment] = useState<"fertility" | "aesthetics" | "unsure">("fertility");
  const [agree, setAgree] = useState(false);

  return (
    <PageShell subnavTitle="GISELLO · Book a call">
      {/* Hero */}
      <section style={{ padding: "80px 48px 60px" }}>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]" style={{ maxWidth: 1180, gap: 64 }}>
          <div>
            <div style={mono()}>Step 01 of 14</div>
            <h1 className="mt-6" style={display()}>
              Talk to your
              <br />
              Patient Navigator
              <br />
              before{" "}
              you decide
              <br />
              anything.
            </h1>
            <p className="mt-8" style={lead()}>
              Book a 30 minute call with your dedicated Patient Navigator, your one human point of contact across the whole journey. We listen, ask the questions a clinician would, and use our AI-enabled infrastructure to match you with the best clinic abroad based on your medical records and personal preferences. If GISELLO is not the right fit, we will tell you who is.
            </p>

          </div>

          <aside
            style={{
              border: "1px solid var(--color-rule)",
              borderRadius: 12,
              background: "var(--color-paper-pure)",
              padding: 28,
              alignSelf: "start",
            }}
          >
            <div
              style={{
                ...mono(),
                background: "color-mix(in oklab, var(--color-ochre) 25%, transparent)",
                color: "var(--color-ink)",
                padding: "4px 8px",
                display: "inline-block",
              }}
            >
              WHAT HAPPENS NEXT
            </div>
            <div className="mt-5">
              {NEXT_STEPS.map((s) => (
                <div
                  key={s.n}
                  className="grid grid-cols-[36px_1fr_auto] items-baseline"
                  style={{
                    borderTop: "1px solid var(--color-rule)",
                    padding: "12px 0",
                    gap: 12,
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                  }}
                >
                  <span style={{ ...mono(), color: "var(--color-ochre)" }}>{s.n}</span>
                  <span style={{ color: "var(--color-ink)" }}>{s.t}</span>
                  <span style={{ color: "var(--color-gray-60)" }}>{s.w}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Three routes */}
      <section style={{ padding: "60px 48px 80px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={mono()}>Pick a route, same conversation</div>
          <h2 className="mt-6" style={h2()}>
            Three ways to start.
            <br />
            <span style={{ fontStyle: "italic" }}>Choose by latency.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
            {/* Route 01 — Cal.com */}
            <RouteCard
              dark
              latency="24 h"
              title="Schedule on Cal.com"
              body="Pick a time that works · automated calendar"
              cta="Open calendar"
              href="https://cal.com/tanja-gisello/30min"
            />
            {/* Route 02 — WhatsApp */}
            <RouteCard
              latency="< 6 h"
              title="WhatsApp the founder"
              body="Direct chat with Tanja · async or live"
              cta="Open WhatsApp →"
              href="https://wa.me/971500000000"
            />
            {/* Route 03 — Form */}
            <RouteCard
              latency="0-48 h"
              title="Submit a short form"
              body="Tell us your situation · we reach out"
              cta="Below ↓"
              href="#intake-form"
            />
          </div>
        </div>
      </section>

      {/* Intake form */}
      <section id="intake-form" style={{ background: "var(--color-paper-pure)", padding: "100px 48px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={mono()}>Route 03 · Short intake form</div>
          <h2 className="mt-6" style={h2()}>
            Six fields. <span style={{ fontStyle: "italic" }}>Two minutes.</span>
          </h2>

          <form
            className="mt-10"
            onSubmit={(e) => e.preventDefault()}
            style={{
              maxWidth: 720,
              background: "var(--color-paper)",
              border: "1px solid var(--color-rule)",
              borderRadius: 12,
              padding: 32,
            }}
          >
            <Field label="TREATMENT *">
              <div className="flex flex-wrap" style={{ gap: 10 }}>
                {[
                  ["fertility", "◆ Fertility"],
                  ["aesthetics", "○ Aesthetics"],
                  ["unsure", "○ Not sure yet"],
                ].map(([key, label]) => {
                  const active = treatment === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setTreatment(key as typeof treatment)}
                      style={{
                        padding: "8px 16px",
                        borderRadius: 999,
                        border: "1px solid var(--color-ink)",
                        background: active ? "var(--color-ink)" : "transparent",
                        color: active ? "var(--color-paper)" : "var(--color-ink)",
                        fontFamily: "var(--font-sans)",
                        fontSize: 13,
                        cursor: "pointer",
                      }}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </Field>

            <Field label="First name *" className="mt-6">
              <input type="text" placeholder="e.g. Sarah" style={inputStyle()} />
            </Field>

            <Field label="Email *" className="mt-4">
              <input type="email" placeholder="you@email.com" style={inputStyle()} />
            </Field>

            <Field label="Phone (with country code) *" className="mt-4">
              <input type="tel" placeholder="+971 50 ..." style={inputStyle()} />
            </Field>

            <Field label="Country of residence *" className="mt-4">
              <input type="text" placeholder="United Arab Emirates" style={inputStyle()} />
            </Field>

            <Field label="NOTE — anything you want us to know first" className="mt-4">
              <textarea
                rows={3}
                placeholder='e.g. "I had two prior IVF cycles in Germany, looking for a clinic in Spain or Portugal."'
                style={{ ...inputStyle(), resize: "vertical" }}
              />
            </Field>

            <label
              className="mt-5 flex items-start"
              style={{ gap: 10, fontFamily: "var(--font-sans)", fontSize: 12, lineHeight: 1.55, color: "var(--color-gray-60)" }}
            >
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                style={{ marginTop: 4 }}
              />
              <span>
                By submitting, you agree to our{" "}
                <a href="#privacy" style={{ color: "var(--color-ochre)", textDecoration: "underline" }}>
                  privacy policy
                </a>
                . We never sell your data. You can revoke consent any time.
              </span>
            </label>

            <button
              type="submit"
              disabled={!agree}
              className="mt-6 inline-flex items-center justify-center bg-ink text-paper rounded-full"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 500,
                padding: "12px 22px",
                opacity: agree ? 1 : 0.5,
                cursor: agree ? "pointer" : "not-allowed",
              }}
            >
              Submit · we'll reach out within 48 h →
            </button>
          </form>
        </div>
      </section>

      {/* Three stages */}
      <section style={{ padding: "80px 48px 120px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div style={mono()}>What happens to your data</div>
          <h2 className="mt-6" style={h2()}>
            Three stages. <span style={{ fontStyle: "italic" }}>You hold the keys at every one.</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3" style={{ gap: 32, borderTop: "1px solid var(--color-rule)", paddingTop: 24 }}>
            {STAGES.map((s) => (
              <div key={s.n}>
                <div
                  style={{
                    width: 32, height: 32, border: "1px solid var(--color-rule)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-ink)",
                  }}
                >
                  {s.n}
                </div>
                <div className="mt-5" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 17, color: "var(--color-ink)" }}>
                  {s.h}
                </div>
                <p className="mt-3" style={cell()}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function RouteCard({
  dark,
  latency,
  title,
  body,
  cta,
  href,
}: {
  dark?: boolean;
  latency: string;
  title: string;
  body: string;
  cta: string;
  href: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <article
      className="flex flex-col"
      style={{
        borderRadius: 16,
        padding: 32,
        background: dark ? "var(--color-gisello-blue)" : "var(--color-paper-pure)",
        color: dark ? "var(--color-paper)" : "var(--color-ink)",
        border: dark ? "none" : "1px solid var(--color-rule)",
        minHeight: 240,
      }}
    >
      <div
        style={{
          ...mono(),
          color: dark ? "var(--color-ochre)" : "var(--color-gray-60)",
        }}
      >
        LATENCY · {latency}
      </div>
      <h3
        className="mt-6"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 26,
          lineHeight: 1.2,
          fontWeight: 500,
        }}
      >
        {title}
      </h3>
      <p
        className="mt-3"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          lineHeight: 1.5,
          opacity: dark ? 0.85 : 1,
          color: dark ? "var(--color-paper)" : "var(--color-gray-60)",
        }}
      >
        {body}
      </p>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="mt-auto inline-flex items-center justify-center rounded-full"
        style={{
          alignSelf: "flex-start",
          marginTop: 32,
          padding: "10px 20px",
          background: dark ? "var(--color-paper)" : "var(--color-ink)",
          color: dark ? "var(--color-ink)" : "var(--color-paper)",
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        {cta}
      </a>
    </article>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        style={{
          display: "block",
          fontFamily: "var(--font-sans)",
          fontSize: 12,
          color: "var(--color-gray-60)",
          marginBottom: 8,
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle = (): React.CSSProperties => ({
  width: "100%",
  padding: "12px 14px",
  border: "1px solid var(--color-rule)",
  borderRadius: 8,
  background: "var(--color-paper-pure)",
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  color: "var(--color-ink)",
  outline: "none",
});

const mono = () => ({
  fontFamily: "var(--font-mono)" as const,
  fontSize: 10,
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "var(--color-gray-60)",
});
const display = () => ({
  fontFamily: "var(--font-display)" as const,
  fontSize: "clamp(48px, 6vw, 80px)",
  lineHeight: 1.02,
  letterSpacing: "-0.01em",
  color: "var(--color-ink)",
  fontWeight: 500,
});
const h2 = () => ({
  fontFamily: "var(--font-display)" as const,
  fontSize: "clamp(32px, 4vw, 48px)",
  lineHeight: 1.1,
  color: "var(--color-ink)",
  fontWeight: 500,
});
const lead = () => ({
  fontFamily: "var(--font-sans)" as const,
  fontSize: 16,
  lineHeight: 1.6,
  color: "var(--color-ink)",
  maxWidth: 480,
});
const cell = () => ({
  fontFamily: "var(--font-sans)" as const,
  fontSize: 14,
  lineHeight: 1.6,
  color: "var(--color-gray-60)",
});
