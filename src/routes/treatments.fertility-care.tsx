import { createFileRoute, Link } from "@tanstack/react-router";
import { NavBar } from "@/components/NavBar";
import { SubNav } from "@/components/SubNav";
import { Footer } from "@/components/Footer";

import heroImg from "@/assets/fertility-hero.jpg";
import ivfOwn from "@/assets/fertility-ivf-own.jpg";
import ivfDonor from "@/assets/fertility-ivf-donor.jpg";
import embryoFreezing from "@/assets/fertility-embryo-freezing.jpg";
import eggFreezing from "@/assets/fertility-egg-freezing.jpg";
import geneticTesting from "@/assets/fertility-genetic-testing.jpg";
import surrogacy from "@/assets/fertility-surrogacy.jpg";

export const Route = createFileRoute("/treatments/fertility-care")({
  component: FertilityCarePage,
  head: () => ({
    meta: [
      { title: "Fertility Care Abroad · IVF, Egg Freezing, Surrogacy · GISELLO" },
      {
        name: "description",
        content:
          "World-class fertility care with no wait time. IVF with own or donor eggs, embryo and egg freezing, PGT genetic testing, and surrogacy, coordinated by a dedicated Patient Navigator.",
      },
      { property: "og:title", content: "Fertility Care Abroad · GISELLO" },
      {
        property: "og:description",
        content:
          "AI-matched fertility clinics abroad with a Patient Navigator at every step. IVF, egg freezing, genetic testing, surrogacy.",
      },
      { property: "og:image", content: "https://www.gisello.com/og-fertility.jpg" },
      { property: "og:url", content: "https://www.gisello.com/treatments/fertility-care" },
    ],
    links: [
      { rel: "canonical", href: "https://www.gisello.com/treatments/fertility-care" },
    ],
  }),
});

const TREATMENTS = [
  {
    img: ivfOwn,
    title: "IVF with Own Eggs",
    body: "In-vitro fertilisation using your own eggs and partner or donor sperm, performed at AI-matched, accredited clinics with embryologist-led care.",
  },
  {
    img: ivfDonor,
    title: "IVF with Donor Eggs",
    body: "A carefully screened donor-egg cycle when own-egg IVF isn't the right path. Full donor profiling, medical, and legal coordination handled for you.",
  },
  {
    img: embryoFreezing,
    title: "Embryo Freezing",
    body: "Cryopreserve embryos after an IVF cycle for future transfers, fertility preservation, or family planning across borders, with secure long-term storage.",
  },
  {
    img: eggFreezing,
    title: "Egg Freezing",
    body: "Preserve your fertility on your timeline. Oocyte vitrification at leading clinics, with stimulation protocols designed around your medical profile.",
  },
  {
    img: geneticTesting,
    title: "Genetic Testing (PGT-A / PGT-M)",
    body: "Pre-implantation genetic testing to screen embryos for chromosomal and inherited conditions before transfer, improving outcomes and peace of mind.",
  },
  {
    img: surrogacy,
    title: "Surrogacy",
    body: "Coordinated gestational surrogacy in jurisdictions where it is fully legally regulated, with end-to-end medical, legal, and travel oversight.",
  },
];

const WHY = [
  {
    eyebrow: "01",
    title: "Patient Navigator-led",
    body: "One dedicated human guides you across borders, clinics, and decisions.",
  },
  {
    eyebrow: "02",
    title: "AI-matched clinics",
    body: "Our inhouse AI shortlists 3 to 5 clinics matched to your medical profile and preferences.",
  },
  {
    eyebrow: "03",
    title: "Save up to 60%",
    body: "World-class fertility care at a fraction of private-treatment cost at home.",
  },
  {
    eyebrow: "04",
    title: "End-to-end coordination",
    body: "Records, travel, treatment, and follow-up handled in one continuous case.",
  },
];

const JOURNEY = [
  "Founder-led intake call with your Patient Navigator.",
  "AI match against accredited fertility clinics abroad.",
  "Receive a shortlist of 3 to 5 clinics with full clinical brief.",
  "Virtual consultations with each clinic of your choice.",
  "Travel, visa, and stay coordinated end to end.",
  "Treatment cycle at your chosen clinic, supervised by your Navigator.",
  "Recovery and personalised aftercare in suite.",
  "Return home with structured follow-up and shared records.",
];

function Underline() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 20"
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: -14,
        width: 180,
        height: 18,
      }}
    >
      <path
        d="M5 12 Q 100 -4 195 10"
        fill="none"
        stroke="var(--color-ochre)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center" style={{ marginBottom: 72 }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 4vw, 52px)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "var(--color-gisello-blue)",
          fontWeight: 500,
          display: "inline-block",
          position: "relative",
        }}
      >
        {children}
        <Underline />
      </h2>
    </div>
  );
}

function FertilityCarePage() {
  return (
    <div className="min-h-screen bg-paper">
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-30">
          <NavBar transparent />
          <SubNav transparent />
        </div>
        <section
          className="relative w-full overflow-hidden"
          style={{ minHeight: "82vh" }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${heroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--color-gisello-blue) 55%, transparent) 0%, color-mix(in oklab, var(--color-gisello-blue) 70%, transparent) 100%)",
            }}
          />
          <div
            className="relative mx-auto flex flex-col items-center justify-center text-center"
            style={{
              maxWidth: 1100,
              padding: "160px 32px 120px",
              minHeight: "82vh",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--color-paper)",
                opacity: 0.85,
                marginBottom: 24,
              }}
            >
              Fertility Center of Excellence
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 6vw, 76px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--color-paper)",
                fontWeight: 500,
                textShadow: "0 2px 24px rgba(0,0,0,0.3)",
              }}
            >
              World-class fertility care,
              <br />
              without the wait.
            </h1>
            <p
              className="mt-8"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 18,
                lineHeight: 1.5,
                color: "var(--color-paper)",
                opacity: 0.92,
                maxWidth: 720,
              }}
            >
              A dedicated Patient Navigator and our inhouse AI match you with the
              best fertility clinics abroad, based on your medical records and
              personal preferences. You stay in control, every step of the way.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                to="/book-call"
                className="inline-flex items-center justify-center bg-ink text-paper hover:bg-ochre hover:text-ink transition-colors rounded-full"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  fontWeight: 500,
                  padding: "16px 32px",
                }}
              >
                Book a 30 minute call →
              </Link>
              <a
                href="#treatments"
                className="inline-flex items-center justify-center rounded-full"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  fontWeight: 500,
                  padding: "16px 28px",
                  border: "1px solid var(--color-paper)",
                  color: "var(--color-paper)",
                }}
              >
                See treatments
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Why Gisello */}
      <section style={{ padding: "100px 48px", background: "var(--color-paper)" }}>
        <div className="mx-auto" style={{ maxWidth: 1200 }}>
          <SectionHeading>Why Gisello</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 24 }}>
            {WHY.map((w) => (
              <div
                key={w.title}
                style={{
                  padding: 32,
                  border: "1px solid var(--color-rule)",
                  background: "var(--color-paper-pure)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.22em",
                    color: "var(--color-ochre)",
                    marginBottom: 16,
                  }}
                >
                  {w.eyebrow}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    lineHeight: 1.2,
                    color: "var(--color-gisello-blue)",
                    marginBottom: 12,
                    fontWeight: 500,
                  }}
                >
                  {w.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "var(--color-gray-60)",
                  }}
                >
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section
        style={{
          padding: "100px 48px",
          background: "var(--color-paper-pure)",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 1200 }}>
          <SectionHeading>Your journey with us</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 24 }}>
            {JOURNEY.map((step, i) => (
              <div
                key={step}
                style={{
                  padding: 28,
                  borderTop: "2px solid var(--color-ochre)",
                  background: "var(--color-paper)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.22em",
                    color: "var(--color-gisello-blue)",
                    marginBottom: 16,
                  }}
                >
                  STEP {String(i + 1).padStart(2, "0")}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 19,
                    lineHeight: 1.35,
                    color: "var(--color-ink)",
                    fontWeight: 500,
                  }}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments grid */}
      <section
        id="treatments"
        style={{ padding: "100px 48px", background: "var(--color-paper)" }}
      >
        <div className="mx-auto" style={{ maxWidth: 1280 }}>
          <SectionHeading>Expert-led fertility solutions</SectionHeading>
          <p
            className="mx-auto text-center"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              lineHeight: 1.55,
              color: "var(--color-gray-60)",
              maxWidth: 720,
              marginTop: -40,
              marginBottom: 64,
            }}
          >
            From IVF and egg freezing to PGT genetic testing and surrogacy, you
            receive world-class care at a fraction of private-treatment cost at
            home, coordinated by your Patient Navigator.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: 24 }}
          >
            {TREATMENTS.map((t) => (
              <article
                key={t.title}
                style={{
                  border: "1px solid var(--color-rule)",
                  background: "var(--color-paper)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="relative overflow-hidden group"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <img
                    src={t.img}
                    alt={t.title}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div style={{ padding: 28, flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 24,
                      lineHeight: 1.2,
                      color: "var(--color-gisello-blue)",
                      marginBottom: 12,
                      fontWeight: 500,
                    }}
                  >
                    {t.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      lineHeight: 1.55,
                      color: "var(--color-gray-60)",
                      flex: 1,
                    }}
                  >
                    {t.body}
                  </p>
                  <div style={{ marginTop: 24 }}>
                    <Link
                      to="/book-call"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "var(--color-ink)",
                        borderBottom: "1px solid var(--color-ochre)",
                        paddingBottom: 4,
                      }}
                    >
                      Talk to a Navigator →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cost strip */}
      <section
        style={{ padding: "100px 48px", background: "var(--color-paper-pure)" }}
      >
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <SectionHeading>Up to 60% less than private care at home</SectionHeading>
          <div style={{ border: "1px solid var(--color-rule)", background: "var(--color-paper)" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "var(--font-sans)",
                fontSize: 15,
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "var(--color-gisello-blue)",
                    color: "var(--color-paper)",
                  }}
                >
                  <th style={{ padding: 18, textAlign: "left" }}>Treatment</th>
                  <th style={{ padding: 18, textAlign: "left" }}>UK (home, private)</th>
                  <th style={{ padding: 18, textAlign: "left" }}>Czech Republic</th>
                  <th style={{ padding: 18, textAlign: "left" }}>Spain</th>
                  <th style={{ padding: 18, textAlign: "left" }}>Greece</th>
                  <th style={{ padding: 18, textAlign: "left" }}>Georgia</th>
                  <th style={{ padding: 18, textAlign: "left" }}>Savings vs UK</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["IVF, own eggs", "€7,500", "€2,500", "€5,500", "€3,200", "€2,200", "Up to €5,300"],
                  ["IVF, donor eggs", "€11,500", "€4,500", "€7,500", "€5,200", "€4,200", "Up to €7,300"],
                  ["Egg freezing", "€5,200", "€2,200", "€3,200", "€2,500", "€2,000", "Up to €3,200"],
                  ["Embryo freezing & storage", "€2,200", "€600", "€900", "€700", "€500", "Up to €1,700"],
                  ["Genetic testing (PGT-A / PGT-M)", "€5,500", "€2,200", "€4,000", "€2,800", "€1,800", "Up to €3,700"],
                  ["Surrogacy", "€85,000", "€45,000", "Restricted", "€55,000", "€35,000", "Up to €50,000"],
                ].map((row, i) => (
                  <tr
                    key={row[0]}
                    style={{
                      borderTop: i === 0 ? "none" : "1px solid var(--color-rule)",
                    }}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          padding: 18,
                          color: j === 6 ? "var(--color-ochre)" : "var(--color-ink)",
                          fontWeight: j === 6 ? 500 : 400,
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-gray-60)",
              marginTop: 16,
            }}
          >
            Indicative pricing. Final quote provided after clinical brief.
          </p>
        </div>
      </section>

      {/* Compliance band */}
      <section
        style={{
          padding: "56px 48px",
          background: "var(--color-gisello-blue)",
        }}
      >
        <div
          className="mx-auto text-center"
          style={{ maxWidth: 960 }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              lineHeight: 1.55,
              color: "var(--color-paper)",
            }}
          >
            Our partner clinics meet GDPR, UK GDPR, UAE PDPL and applicable
            Assisted Reproductive Technology regulation. Patient Navigator
            oversight on every case.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "120px 48px", background: "var(--color-paper)" }}>
        <div className="mx-auto text-center" style={{ maxWidth: 800 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "var(--color-gisello-blue)",
              fontWeight: 500,
            }}
          >
            Ready to talk it through?
          </h2>
          <p
            className="mt-6"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              lineHeight: 1.55,
              color: "var(--color-gray-60)",
            }}
          >
            Book a 30 minute call with your Patient Navigator. We listen first.
            No pressure, no sales pitch.
          </p>
          <div className="mt-10">
            <Link
              to="/book-call"
              className="inline-flex items-center justify-center bg-ink text-paper hover:bg-ochre hover:text-ink transition-colors rounded-full"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                fontWeight: 500,
                padding: "16px 32px",
              }}
            >
              Book a 30 minute call →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
