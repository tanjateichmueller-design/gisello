import { Link } from "@tanstack/react-router";
import support from "@/assets/system-support.jpg";
import navigator from "@/assets/system-navigator.jpg";
import companion from "@/assets/system-ai-companion.jpg";
import backbone from "@/assets/system-backbone.jpg";
import planning from "@/assets/system-planning.jpg";

type Card = {
  img: string;
  label: string;
  title: string;
  body: string;
};

const CARDS: Card[] = [
  {
    img: support,
    label: "End-to-end support",
    title: "All your needs, one place.",
    body: "Medical, travel, scheduling and aftercare, coordinated for you from first call to follow-up.",
  },
  {
    img: navigator,
    label: "Patient Navigator",
    title: "A real human, always.",
    body: "Your dedicated guide owns the relationship, signs off on key steps and is reachable when it counts.",
  },
  {
    img: companion,
    label: 'AI Companion "Gina"',
    title: "Instant answers, 24/7.",
    body: "Chat or voice, grounded in your records and your stage of the journey. No waiting rooms.",
  },
  {
    img: backbone,
    label: "Patient Portal",
    title: "Your records, safely stored.",
    body: "Your medical records are stored safely in the Patient Portal, encrypted, structured and shareable only on your terms.",
  },
  {
    img: planning,
    label: "Planning & scheduling",
    title: "Travel without the chaos.",
    body: "We plan around your calendar, the clinic's availability and your treatment, all in one timeline.",
  },
];

export function SystemDetailsTeaser() {
  return (
    <section className="bg-paper" style={{ padding: "80px 48px 100px" }}>
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <div
          className="flex items-end justify-between"
          style={{ gap: 32, marginBottom: 40, flexWrap: "wrap" }}
        >
          <div style={{ maxWidth: 640 }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-ochre)",
              }}
            >
              Inside the Gisello system
            </span>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3vw, 38px)",
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                color: "var(--color-gisello-blue)",
                fontWeight: 500,
                marginTop: 10,
              }}
            >
              End-to-end support, two layers of help, one secure Patient Vault.
            </h3>
          </div>
          <Link
            to="/gisello-system"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--color-gisello-blue)",
              borderBottom: "1px solid var(--color-gisello-blue)",
              paddingBottom: 4,
            }}
          >
            See how it works in detail →
          </Link>
        </div>

        <div
          className="grid"
          style={{
            gap: 20,
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="flex flex-col"
              style={{
                border: "1px solid color-mix(in oklab, var(--color-gisello-blue) 14%, transparent)",
                background: "var(--color-paper)",
              }}
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                width={1024}
                height={1024}
                style={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div style={{ padding: "18px 18px 22px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-ochre)",
                    marginBottom: 8,
                  }}
                >
                  {c.label}
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 18,
                    lineHeight: 1.25,
                    color: "var(--color-gisello-blue)",
                    fontWeight: 500,
                    marginBottom: 8,
                  }}
                >
                  {c.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12.5,
                    lineHeight: 1.55,
                    color: "color-mix(in oklab, var(--color-gisello-blue) 72%, transparent)",
                  }}
                >
                  {c.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
