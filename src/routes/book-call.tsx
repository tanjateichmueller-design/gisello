import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PilotBanner } from "@/components/PilotBanner";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/book-call")({
  component: BookCallPage,
  head: () => ({
    meta: [
      { title: "Three paths. Same call. · GISELLO" },
      {
        name: "description",
        content:
          "Book your 30-minute intro call with Tanja. Three paths, one conversation. Founder-led, free, invitation-only.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Three paths. Same call. · GISELLO" },
      {
        property: "og:description",
        content: "Founder-led 30-minute intro call. Free. Invitation-only.",
      },
    ],
  }),
});

const STEPS = [
  {
    n: "01",
    title: "You book the call",
    body: "Either via Cal.com directly (Path 01) or after submitting the short form (Path 02), or via WhatsApp (Path 03). All routes converge here.",
    day: "DAY 0",
  },
  {
    n: "02",
    title: "We meet for 30 minutes",
    body: "Founder-led. We listen, ask the right questions about your situation, and answer yours. No pressure to commit.",
    day: "DAY 1-7",
  },
  {
    n: "03",
    title: "Registration link, if we fit",
    body: "Activates your Patient Vault. You add profile details, preferences, and short medical context. No records uploaded until Q4 2026.",
    day: "DAY 1-7 (POST CALL)",
  },
  {
    n: "04",
    title: "We start the brief",
    body: "AI-drafted, clinician-reviewed. We send it to a shortlist of clinics. You receive a copy. You choose where to go.",
    day: "DAY 7-10",
  },
];

const REGIMES = [
  {
    code: "GDPR · EU / EEA",
    title: "General Data Protection Regulation",
    meta: "REGULATION (EU) 2016/679",
    body: "You have the right to access, rectify, delete, restrict, port, and object to processing of your personal data. Lawful basis: consent (Art. 6(1)(a)) for marketing communications, legitimate interest (Art. 6(1)(f)) for booking coordination. Data is processed in the EU region. International transfers use Standard Contractual Clauses. Lodge complaints with your local supervisory authority.",
  },
  {
    code: "UK GDPR · UNITED KINGDOM",
    title: "UK General Data Protection Regulation",
    meta: "UK GDPR + DATA PROTECTION ACT 2018",
    body: "Equivalent rights to EU GDPR, enforced by the ICO. Data transfers to the EU rely on the EU adequacy decision. Transfers to the UAE rely on the International Data Transfer Agreement (IDTA) or addendum to SCCs.",
  },
  {
    code: "PDPL · UAE",
    title: "Personal Data Protection Law",
    meta: "FEDERAL DECREE-LAW NO. 45 OF 2021",
    body: "You have rights to access, correction, deletion, restriction, and objection. Cross-border transfers require adequacy or contractual safeguards. Our EU storage is treated as a cross-border transfer covered by the Supabase DPA (no UAE adequacy list published yet). UAE Data Office is the supervisory authority.",
  },
  {
    code: "CCPA / CPRA · UNITED STATES",
    title: "California Consumer Privacy Act",
    meta: "CCPA (2018) AS AMENDED BY CPRA (2020)",
    body: "California residents have the right to know, delete, correct, and limit use of sensitive personal information. We do not sell or share personal information. No data residency requirement. Submit requests to tanja@gisello.health.",
  },
];

function BookCallPage() {
  const [openRegime, setOpenRegime] = useState<number | null>(null);
  const [agree, setAgree] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-paper">
      <PilotBanner />
      <NavBar />
      <main>
        {/* 01 — Hero */}
        <section className="text-paper" style={{ background: "var(--color-gisello-blue)",  padding: "100px 48px 120px" }}>
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
              01 / APPLY · 2026 PILOT
            </span>

            <h1
              className="mt-10"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(56px, 6vw, 88px)",
                lineHeight: 1.02,
                letterSpacing: "-0.01em",
                color: "var(--color-paper)",
                fontWeight: 500,
              }}
            >
              Three paths.
              <br />
              <span style={{ fontStyle: "italic" }}>Same call.</span>
            </h1>

            <p
              className="mt-10"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                lineHeight: 1.55,
                color: "var(--color-paper)",
                maxWidth: 560,
              }}
            >
              The pilot is invitation-only after a 30-minute intro call with the
              founder. Pick whichever path feels right for you. Both end in the same
              conversation.
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
              FREE · CAL.COM · GDPR · UK GDPR · UAE PDPL · US CCPA NOTICE BELOW
            </div>
          </div>
        </section>

        {/* 02 — Three paths */}
        <section className="bg-paper" style={{ padding: "80px 48px 100px" }}>
          <div className="mx-auto" style={{ maxWidth: 1400 }}>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-ochre)",
                }}
              >
                02 / THREE PATHS
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  color: "var(--color-ink)",
                }}
              >
                All lead to the same intro call
              </span>
            </div>
            <div
              className="mt-5"
              style={{ height: 1, background: "var(--color-ink)" }}
            />

            <div
              className="mt-12 grid grid-cols-1 lg:grid-cols-3"
              style={{ gap: 24 }}
            >
              {/* PATH 01 — Cal.com */}
              <article
                style={{
                  border: "1px solid var(--color-ink)",
                  background: "var(--color-paper)",
                  padding: "32px 32px 36px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="flex items-center justify-between">
                  <span style={mono()}>
                    PATH 01 · <span style={{ color: "var(--color-ink)" }}>RECOMMENDED</span>
                  </span>
                  <span style={mono()}>FASTEST</span>
                </div>

                <h3 className="mt-7" style={cardTitle()}>
                  Book the call directly.
                </h3>
                <p className="mt-4" style={cardBody()}>
                  Pick a time that works. The 30-minute intro is with Tanja, the
                  founder. After the call, if it's a fit, you'll get a registration
                  link to activate your Patient Vault.
                </p>

                <div
                  className="mt-8"
                  style={{
                    border: "1px dashed var(--color-rule-strong, #b9b3a6)",
                    background: "color-mix(in oklab, var(--color-paper) 60%, transparent)",
                    padding: 22,
                  }}
                >
                  <a
                    href="https://cal.com/tanja-gisello/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-ink text-paper hover:opacity-90 transition-opacity"
                    style={{
                      padding: "18px 24px",
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    BOOK 30 MINUTES →
                  </a>

                  <div className="mt-4" style={mono(10)}>
                    OR PICK A SLOT BELOW · CAL.COM/TANJA-GISELLO/30MIN
                  </div>

                  {/* Mock day strip */}
                  <div
                    className="mt-5 grid grid-cols-7 text-center"
                    style={{ gap: 6 }}
                  >
                    {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => (
                      <div key={d} style={mono(10)}>
                        {d}
                      </div>
                    ))}
                    {[
                      { n: "12", on: false },
                      { n: "13", on: true },
                      { n: "14", on: true },
                      { n: "15", on: false },
                      { n: "16", on: true },
                      { n: "17", on: false },
                      { n: "18", on: false },
                    ].map((d) => (
                      <div
                        key={d.n}
                        style={{
                          padding: "8px 0",
                          border: `1px solid ${d.on ? "var(--color-ink)" : "var(--color-rule)"}`,
                          color: d.on ? "var(--color-ink)" : "var(--color-gray-60)",
                          fontFamily: "var(--font-mono)",
                          fontSize: 12,
                        }}
                      >
                        {d.n}
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 grid grid-cols-3" style={{ gap: 6 }}>
                    {["09:00", "10:30", "14:00"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        style={{
                          padding: "8px 0",
                          border: "1px solid var(--color-ink)",
                          color: "var(--color-ink)",
                          fontFamily: "var(--font-mono)",
                          fontSize: 12,
                          background: "transparent",
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <div
                    className="mt-2 grid grid-cols-3"
                    style={{ gap: 6 }}
                  >
                    <button
                      type="button"
                      style={{
                        padding: "8px 0",
                        border: "1px solid var(--color-ink)",
                        color: "var(--color-ink)",
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        background: "transparent",
                      }}
                    >
                      15:30
                    </button>
                  </div>
                </div>

                <div className="mt-auto pt-8" style={mono()}>
                  30 MIN · ENGLISH · ZOOM OR GOOGLE MEET
                </div>
              </article>

              {/* PATH 02 — Form */}
              <article
                style={{
                  border: "1px solid var(--color-ink)",
                  background: "var(--color-paper)",
                  padding: "32px 32px 36px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="flex items-center justify-between">
                  <span style={mono()}>
                    PATH 02 · <span style={{ color: "var(--color-ink)" }}>SELF-SERVE</span>
                  </span>
                  <span style={mono()}>MORE TIME TO THINK</span>
                </div>

                <h3 className="mt-7" style={cardTitle()}>
                  Tell us a little first.
                </h3>
                <p className="mt-4" style={cardBody()}>
                  Fill out a short form (under 2 minutes). We'll email you back with a
                  Cal.com link tailored to your time zone, and a few resources to read
                  while you wait.
                </p>

                <form
                  className="mt-8"
                  style={{
                    border: "1px solid color-mix(in oklab, var(--color-ink) 15%, transparent)",
                    background: "color-mix(in oklab, var(--color-paper-pure, #fff) 50%, var(--color-paper) 50%)",
                    padding: 22,
                  }}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-2" style={{ gap: 12 }}>
                    <Field label="FIRST NAME">
                      <input type="text" style={inputStyle()} />
                    </Field>
                    <Field label="LAST NAME">
                      <input type="text" style={inputStyle()} />
                    </Field>
                  </div>

                  <Field label="EMAIL" className="mt-4">
                    <input type="email" style={inputStyle()} />
                  </Field>

                  <Field label="COUNTRY" className="mt-4">
                    <select style={inputStyle()} defaultValue="">
                      <option value="" disabled>
                        Select country
                      </option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                      <option>United Arab Emirates</option>
                      <option>United States</option>
                      <option>Other</option>
                    </select>
                  </Field>

                  <Field label="TREATMENT AREA" className="mt-4">
                    <select style={inputStyle()} defaultValue="">
                      <option value="" disabled>
                        Select area
                      </option>
                      <option>Fertility</option>
                      <option>Other</option>
                    </select>
                  </Field>

                  <Field label="BRIEF CONTEXT" className="mt-4">
                    <textarea
                      maxLength={500}
                      placeholder="Tell us a little about your situation (optional)"
                      rows={3}
                      style={{ ...inputStyle(), resize: "vertical", height: "auto" }}
                    />
                    <div
                      style={{
                        ...mono(10),
                        textAlign: "right",
                        marginTop: 4,
                        color: "var(--color-ochre)",
                      }}
                    >
                      0/500
                    </div>
                  </Field>

                  <label
                    className="mt-4 flex items-start"
                    style={{ gap: 10, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.55, color: "var(--color-ink)" }}
                  >
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      style={{ marginTop: 4 }}
                    />
                    <span>
                      I have read and accept the{" "}
                      <a href="#privacy" style={{ color: "var(--color-ochre)", textDecoration: "underline" }}>
                        applicable privacy notice
                      </a>{" "}
                      (GDPR · UK GDPR · UAE PDPL · CCPA) regarding how GISELLO
                      collects and processes my personal data.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={!agree}
                    className="mt-6 w-full inline-flex items-center justify-center bg-ink text-paper hover:opacity-90 transition-opacity"
                    style={{
                      padding: "18px 20px",
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      opacity: agree ? 1 : 0.5,
                      cursor: agree ? "pointer" : "not-allowed",
                    }}
                  >
                    SEND &amp; GET MY CALENDAR LINK →
                  </button>
                </form>

                <div className="mt-auto pt-8" style={mono()}>
                  &lt;2 MIN · NO MEDICAL INFORMATION ASKED · GDPR COMPLIANT
                </div>
              </article>

              {/* PATH 03 — WhatsApp */}
              <article
                style={{
                  border: "1px solid var(--color-ink)",
                  background: "var(--color-paper)",
                  padding: "32px 32px 36px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="flex items-center justify-between">
                  <span style={mono()}>
                    PATH 03 · <span style={{ color: "var(--color-ink)" }}>DIRECT</span>
                  </span>
                  <span style={mono()}>MOST PERSONAL</span>
                </div>

                <h3 className="mt-7" style={cardTitle()}>
                  Message Tanja directly.
                </h3>
                <p className="mt-4" style={cardBody()}>
                  WhatsApp is how most of our pilot patients reach us first. Send a
                  message and Tanja will respond personally. No forms, no scheduling
                  tools, just a conversation.
                </p>

                <div
                  className="mt-8"
                  style={{
                    border: "1px solid color-mix(in oklab, var(--color-ink) 15%, transparent)",
                    background: "color-mix(in oklab, var(--color-paper-pure, #fff) 50%, var(--color-paper) 50%)",
                    padding: 22,
                  }}
                >
                  <div style={mono()}>WHATSAPP · +971500000000</div>

                  <div className="mt-5" style={{ height: 1, background: "var(--color-rule)" }} />

                  <div className="mt-5" style={mono(10)}>
                    SUGGESTED OPENING
                  </div>
                  <p
                    className="mt-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: 18,
                      lineHeight: 1.45,
                      color: "var(--color-ink)",
                    }}
                  >
                    "Hi Tanja, I'd like to find out more about the GISELLO pilot."
                  </p>

                  <a
                    href="https://wa.me/971500000000?text=Hi%20Tanja%2C%20I%27d%20like%20to%20find%20out%20more%20about%20the%20GISELLO%20pilot."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 w-full inline-flex items-center justify-center bg-ink text-paper hover:opacity-90 transition-opacity"
                    style={{
                      padding: "18px 24px",
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    OPEN WHATSAPP →
                  </a>

                  <p
                    className="mt-5"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      lineHeight: 1.55,
                      color: "var(--color-gray-60)",
                    }}
                  >
                    Tanja responds personally. Typically within a few hours, Mon to
                    Fri, 09:00-18:00 GST.
                  </p>
                </div>

                <div className="mt-auto pt-8" style={mono()}>
                  WHATSAPP · FOUNDER-LED · DUBAI BUSINESS HOURS
                </div>
              </article>
            </div>

            {/* WhatsApp / Meta footnote */}
            <div
              className="mt-10"
              style={{
                borderLeft: "2px solid var(--color-ochre)",
                padding: "8px 0 8px 16px",
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                lineHeight: 1.55,
                color: "var(--color-ink)",
                maxWidth: 920,
              }}
            >
              Path 03 uses WhatsApp, operated by Meta Platforms Ireland Ltd. Messages
              are processed under{" "}
              <a
                href="https://www.whatsapp.com/legal/business-data-transfer-addendum"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-ochre)", textDecoration: "underline" }}
              >
                Meta's Business Data Processing Terms
              </a>
              . If you prefer not to use Meta infrastructure, use Path 01 or Path 02
              instead.
            </div>
          </div>
        </section>

        {/* 03 — What happens next */}
        <section className="bg-paper" style={{ padding: "60px 48px 100px" }}>
          <div className="mx-auto" style={{ maxWidth: 1400 }}>
            <span style={mono()}>03 / WHAT HAPPENS NEXT</span>
            <div
              className="mt-5"
              style={{ height: 1, background: "var(--color-ink)" }}
            />

            <h2
              className="mt-12"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 4.5vw, 60px)",
                lineHeight: 1.05,
                color: "var(--color-ink)",
                fontWeight: 500,
              }}
            >
              Four steps. About a week.
            </h2>

            <div
              className="mt-12"
              style={{ height: 1, background: "var(--color-ink)" }}
            />

            <div
              className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              style={{ gap: 32 }}
            >
              {STEPS.map((s) => (
                <div key={s.n}>
                  <div style={mono()}>STEP {s.n}</div>
                  <h3
                    className="mt-4"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "var(--color-ink)",
                      lineHeight: 1.3,
                    }}
                  >
                    {s.title}
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
                    {s.body}
                  </p>
                  <div
                    className="mt-5"
                    style={{
                      ...mono(10),
                      color: "var(--color-ochre)",
                    }}
                  >
                    {s.day}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 — Privacy & Data */}
        <section
          id="privacy"
          className="text-paper" style={{ background: "var(--color-gisello-blue)" }}
          style={{ padding: "100px 48px" }}
        >
          <div className="mx-auto" style={{ maxWidth: 1400 }}>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <span style={{ ...mono(), color: "var(--color-ochre)" }}>
                04 / PRIVACY &amp; DATA
              </span>
              <span style={{ ...mono(), color: "var(--color-paper)" }}>
                GDPR · UK GDPR · UAE PDPL · US CCPA
              </span>
            </div>
            <div
              className="mt-5"
              style={{
                height: 1,
                background:
                  "color-mix(in oklab, var(--color-paper) 30%, transparent)",
              }}
            />

            <h2
              className="mt-14"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 4vw, 52px)",
                lineHeight: 1.1,
                color: "var(--color-paper)",
                fontWeight: 500,
              }}
            >
              What we collect. When we collect it.
            </h2>
            <p
              className="mt-6"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.6,
                color: "color-mix(in oklab, var(--color-paper) 80%, transparent)",
                maxWidth: 640,
              }}
            >
              Data collection happens in three distinct stages. Each stage requires
              separate consent and operates under the applicable data regime for your
              jurisdiction.
            </p>

            <div
              className="mt-14 grid grid-cols-1 md:grid-cols-3"
              style={{ gap: 0 }}
            >
              <Stage
                code="STAGE 01"
                tag="NOW"
                title="Collected via this form"
                items={[
                  "First name, last name, email",
                  "Country (for time zone, language, and applicable regime)",
                  'Treatment area (high-level, e.g., "Fertility")',
                  "Brief context (max 500 chars, free text, no clinical specifics)",
                  "Cal.com booking metadata (date, time, time zone)",
                ]}
                footer="SUPABASE · EU REGION · REGIME-SPECIFIC TRANSFER BASIS APPLIES"
                border
              />
              <Stage
                code="STAGE 02"
                tag="POST-CALL"
                title="Exchanged via secure email"
                items={[
                  "Medical context you choose to share via email",
                  "Relevant documents you attach (if any)",
                  "Clinic preferences and priorities",
                  "Correspondence with GISELLO after the intro call",
                ]}
                footer="EXPLICIT CONSENT REQUIRED · NOT AUTO-STORED"
                border
              />
              <Stage
                code="STAGE 03"
                tag="Q4 2026"
                title="Patient Vault, not yet active"
                items={[
                  "Structured medical profile (with your consent)",
                  "Document uploads (lab results, imaging, optional)",
                  "Clinic communication history",
                  "Treatment preferences and outcome notes",
                ]}
                footer="DATABASE ARCHITECTURE PENDING · REGIME-ALIGNED SETUP"
                muted
              />
            </div>

            <p
              className="mt-10"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                lineHeight: 1.65,
                color: "color-mix(in oklab, var(--color-paper) 60%, transparent)",
                maxWidth: 1100,
              }}
            >
              Stage 02 data is exchanged only with your explicit consent after the
              intro call and is not automatically stored in any database during the
              pilot. Stage 03 database infrastructure is being designed to comply
              with all applicable data regimes before activation.
            </p>
          </div>
        </section>

        {/* 04B — Applicable regimes */}
        <section
          className="text-paper" style={{ background: "var(--color-gisello-blue)" }}
          style={{ padding: "20px 48px 120px" }}
        >
          <div className="mx-auto" style={{ maxWidth: 1400 }}>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <span style={{ ...mono(), color: "var(--color-ochre)" }}>
                04B / APPLICABLE REGIMES
              </span>
              <span style={{ ...mono(), color: "var(--color-paper)" }}>
                Your rights by jurisdiction
              </span>
            </div>
            <div
              className="mt-5"
              style={{
                height: 1,
                background:
                  "color-mix(in oklab, var(--color-paper) 30%, transparent)",
              }}
            />

            <ul className="mt-2">
              {REGIMES.map((r, idx) => {
                const open = openRegime === idx;
                return (
                  <li
                    key={r.code}
                    style={{
                      borderBottom:
                        "1px solid color-mix(in oklab, var(--color-paper) 20%, transparent)",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenRegime(open ? null : idx)}
                      className="w-full text-left flex items-center justify-between"
                      style={{
                        padding: "28px 0",
                        gap: 24,
                        background: "transparent",
                        color: "var(--color-paper)",
                      }}
                    >
                      <span
                        className="flex items-baseline flex-wrap"
                        style={{ gap: 18 }}
                      >
                        <span style={{ ...mono(), color: "var(--color-ochre)" }}>
                          {r.code}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontWeight: 700,
                            fontSize: 18,
                            color: "var(--color-paper)",
                          }}
                        >
                          {r.title}
                        </span>
                        <span
                          style={{
                            ...mono(10),
                            color:
                              "color-mix(in oklab, var(--color-paper) 55%, transparent)",
                          }}
                        >
                          {r.meta}
                        </span>
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 22,
                          color: "var(--color-ochre)",
                          lineHeight: 1,
                        }}
                      >
                        {open ? "−" : "+"}
                      </span>
                    </button>
                    {open && (
                      <p
                        style={{
                          padding: "0 0 28px",
                          fontFamily: "var(--font-sans)",
                          fontSize: 14,
                          lineHeight: 1.7,
                          color:
                            "color-mix(in oklab, var(--color-paper) 80%, transparent)",
                          maxWidth: 1000,
                        }}
                      >
                        {r.body}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>

            <div
              className="mt-16 grid grid-cols-1 md:grid-cols-2"
              style={{ gap: 48 }}
            >
              <div>
                <div style={{ ...mono(), color: "var(--color-paper)" }}>
                  DATA CONTROLLER
                </div>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    lineHeight: 1.7,
                    color:
                      "color-mix(in oklab, var(--color-paper) 85%, transparent)",
                  }}
                >
                  Anima Health Technology FZ-LLC (pre-incorporation) · Dubai, UAE ·{" "}
                  <a
                    href="mailto:tanja@gisello.health"
                    style={{
                      color: "var(--color-ochre)",
                      textDecoration: "underline",
                    }}
                  >
                    tanja@gisello.health
                  </a>{" "}
                  · Registered under UAE PDPL. EU/UK representative appointment in
                  progress.
                </p>
              </div>

              <div>
                <div style={{ ...mono(), color: "var(--color-paper)" }}>
                  THIRD-PARTY PROCESSORS
                </div>
                <div
                  className="mt-4 space-y-5"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    lineHeight: 1.6,
                    color:
                      "color-mix(in oklab, var(--color-paper) 85%, transparent)",
                  }}
                >
                  <div>
                    <strong style={{ color: "var(--color-paper)" }}>
                      Cal.com, Inc.
                    </strong>
                    <div className="mt-1">
                      Booking scheduling (Path 01). Standard Contractual Clauses
                      (EU/UK), adequacy mechanism (UAE).
                    </div>
                  </div>
                  <div>
                    <strong style={{ color: "var(--color-paper)" }}>
                      Meta Platforms Ireland Ltd.
                    </strong>
                    <div className="mt-1">
                      WhatsApp messaging (Path 03). Meta's Business Data Processing
                      Terms. Use Path 01 or 02 to avoid Meta infrastructure.
                    </div>
                  </div>
                  <div>
                    <strong style={{ color: "var(--color-paper)" }}>
                      Supabase, Inc.
                    </strong>
                    <div className="mt-1">
                      Form submission storage (Path 02). DPA in place, EU region
                      storage satisfies EU/UK adequacy. UAE patients: EU storage is a
                      cross-border transfer under PDPL, covered by Supabase DPA as
                      contractual safeguard (no UAE adequacy list published yet).
                      US/CCPA: no data residency requirement.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <Link
                to="/pilot"
                style={{
                  ...mono(),
                  color: "var(--color-ochre)",
                  textDecoration: "none",
                }}
              >
                ← BACK TO PILOT
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/* helpers */

function mono(size = 11): React.CSSProperties {
  return {
    fontFamily: "var(--font-mono)",
    fontSize: size,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--color-ochre)",
  };
}

function cardTitle(): React.CSSProperties {
  return {
    fontFamily: "var(--font-display)",
    fontSize: 28,
    lineHeight: 1.2,
    color: "var(--color-ink)",
    fontWeight: 500,
  };
}

function cardBody(): React.CSSProperties {
  return {
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    lineHeight: 1.65,
    color: "var(--color-gray-60)",
  };
}

function inputStyle(): React.CSSProperties {
  return {
    width: "100%",
    padding: "12px 12px",
    border: "1px solid color-mix(in oklab, var(--color-ink) 25%, transparent)",
    background: "var(--color-paper-pure, #fff)",
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    color: "var(--color-ink)",
    height: 44,
    borderRadius: 0,
    outline: "none",
  };
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
      <div style={{ ...mono(10), color: "var(--color-ochre)" }}>{label}</div>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

function Stage({
  code,
  tag,
  title,
  items,
  footer,
  border,
  muted,
}: {
  code: string;
  tag: string;
  title: string;
  items: string[];
  footer: string;
  border?: boolean;
  muted?: boolean;
}) {
  const text = muted
    ? "color-mix(in oklab, var(--color-paper) 50%, transparent)"
    : "color-mix(in oklab, var(--color-paper) 85%, transparent)";
  return (
    <div
      style={{
        padding: "0 28px",
        borderRight: border
          ? "1px solid color-mix(in oklab, var(--color-paper) 20%, transparent)"
          : "none",
      }}
    >
      <div className="flex items-baseline" style={{ gap: 12 }}>
        <span style={{ ...mono(), color: "var(--color-ochre)" }}>{code}</span>
        <span
          style={{
            ...mono(10),
            color: "color-mix(in oklab, var(--color-paper) 55%, transparent)",
          }}
        >
          {tag}
        </span>
      </div>
      <h3
        className="mt-4"
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          fontSize: 18,
          color: muted
            ? "color-mix(in oklab, var(--color-paper) 60%, transparent)"
            : "var(--color-paper)",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li
            key={it}
            className="flex items-start"
            style={{
              gap: 12,
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              lineHeight: 1.55,
              color: text,
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                background: muted
                  ? "color-mix(in oklab, var(--color-ochre) 40%, transparent)"
                  : "var(--color-ochre)",
                marginTop: 6,
                flexShrink: 0,
              }}
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>
      <div
        className="mt-8"
        style={{
          ...mono(10),
          color: "color-mix(in oklab, var(--color-paper) 55%, transparent)",
          letterSpacing: "0.18em",
        }}
      >
        {footer}
      </div>
    </div>
  );
}
