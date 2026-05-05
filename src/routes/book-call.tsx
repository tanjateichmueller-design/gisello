import { createFileRoute, Link } from "@tanstack/react-router";
import { PilotBanner } from "@/components/PilotBanner";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/book-call")({
  component: BookCallPage,
  head: () => ({
    meta: [
      { title: "Book a 30-minute intro call · GISELLO" },
      {
        name: "description",
        content:
          "Book a 30-minute, founder-led intro call with Tanja. Free, no obligation. Part of the GISELLO 2026 fertility pilot.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Book a 30-minute intro call · GISELLO" },
      {
        property: "og:description",
        content:
          "Founder-led 30-minute intro call. Free, no obligation. By invitation only.",
      },
    ],
  }),
});

function BookCallPage() {
  return (
    <div id="top" className="min-h-screen bg-paper">
      <PilotBanner />
      <NavBar />
      <main>
        {/* Hero band */}
        <section className="bg-ink text-paper" style={{ padding: "120px 48px 80px" }}>
          <div className="mx-auto" style={{ maxWidth: 1180 }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-ochre)",
              }}
            >
              Path 01 · Book the call directly
            </span>

            <h1
              className="mt-10"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(44px, 5vw, 68px)",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                color: "var(--color-paper)",
                fontWeight: 500,
              }}
            >
              Book your 30-minute
              <br />
              <span style={{ fontStyle: "italic" }}>intro call with Tanja.</span>
            </h1>

            <p
              className="mt-8"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 18,
                lineHeight: 1.6,
                color: "var(--color-paper)",
                maxWidth: 620,
              }}
            >
              Founder-led. Free of charge. No obligation. After the call, if it's a
              fit, you'll receive a registration link to activate your Patient Vault.
            </p>

            <div
              className="mt-8"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-ochre)",
              }}
            >
              30 MIN · ENGLISH · ZOOM OR GOOGLE MEET
            </div>
          </div>
        </section>

        {/* Cal.com embed */}
        <section className="bg-paper" style={{ padding: "80px 48px 60px" }}>
          <div className="mx-auto" style={{ maxWidth: 1180 }}>
            <div style={{ height: 1, background: "var(--color-ink)", opacity: 0.2 }} />

            <div
              className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr]"
              style={{ gap: 48 }}
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
                  What to expect
                </span>
                <h2
                  className="mt-5"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    lineHeight: 1.15,
                    color: "var(--color-ink)",
                    fontWeight: 500,
                  }}
                >
                  A real conversation, not a sales call.
                </h2>
                <ul
                  className="mt-8 space-y-5"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "var(--color-gray-60)",
                  }}
                >
                  <li>
                    <strong style={{ color: "var(--color-ink)" }}>30 minutes</strong>{" "}
                    with Tanja, the founder, on Zoom or Google Meet.
                  </li>
                  <li>
                    We listen first. Tell us what's been hard, what you've tried, and
                    what you're looking for.
                  </li>
                  <li>
                    No medical information required to book. Bring questions.
                  </li>
                  <li>
                    If we're a fit, you'll get a registration link to activate your
                    Patient Vault. If not, we'll point you somewhere better.
                  </li>
                </ul>

                <Link
                  to="/pilot"
                  className="mt-10 inline-flex items-center text-ink hover:text-ochre transition-colors"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  ← Back to pilot
                </Link>
              </div>

              {/* Booking card */}
              <div
                style={{
                  border: "1px solid var(--color-ink)",
                  background: "var(--color-paper)",
                  padding: 36,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-ochre)",
                  }}
                >
                  cal.com/tanja-gisello/30min
                </div>

                <h3
                  className="mt-5"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    lineHeight: 1.2,
                    color: "var(--color-ink)",
                    fontWeight: 500,
                  }}
                >
                  Pick a time that works.
                </h3>

                <p
                  className="mt-3"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "var(--color-gray-60)",
                  }}
                >
                  You'll be redirected to Cal.com to choose a slot in your time zone.
                  A calendar invite with the meeting link arrives by email.
                </p>

                <a
                  href="https://cal.com/tanja-gisello/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full inline-flex items-center justify-center bg-ink text-paper hover:opacity-90 transition-opacity"
                  style={{
                    padding: "20px 36px",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  BOOK 30 MINUTES →
                </a>

                <div
                  className="mt-6 pt-6"
                  style={{
                    borderTop: "1px solid var(--color-rule)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-gray-60)",
                  }}
                >
                  FREE · FOUNDER-LED · NO OBLIGATION
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
