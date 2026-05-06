import { Circle, CircleHalf, Square } from "./SystemIcons";

interface Layer {
  icon: React.ReactNode;
  title: string;
  body: string;
  status: string;
}

const LAYERS: Layer[] = [
  {
    icon: <Circle />,
    title: "Vault",
    body: "Encrypted patient record. AI ingests records in 11 languages and structures them to a FHIR-aligned schema. Revocable. Yours forever.",
    status: "STATUS · LIVE FOR COHORT 01",
  },
  {
    icon: <CircleHalf />,
    title: "Brief",
    body: "Doctor-to-doctor clinical summary. AI-drafted, MD-signed, multilingual. Travels with you across borders, in your language and the clinic's.",
    status: "STATUS · 3 SIGNED THIS WEEK",
  },
  {
    icon: <Square />,
    title: "Match",
    body: "Protocol-fit ranking across vetted Centres of Excellence. Outcome-weighted. Zero commission inputs. The shortlist comes with rationale.",
    status: "STATUS · 47 VARS · 4 FU CENTRES",
  },
];

export function SystemSection() {
  return (
    <section
      id="vault"
      className="bg-paper"
      style={{ padding: "120px 48px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: "var(--color-gray-60)",
          }}
        >
          Introducing the GISELLO system
        </div>

        <div
          className="mt-10 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr]"
          style={{ gap: 64 }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4.4vw, 56px)",
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              color: "var(--color-ink)",
              fontWeight: 500,
            }}
          >
            A coordinated layer between you, your records, and the right clinic.
          </h2>
          <p
            className="self-end"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              lineHeight: 1.55,
              color: "var(--color-gray-60)",
              maxWidth: 460,
            }}
          >
            Three layers, Vault, Brief, Match, operated by a Patient Navigator. The AI is structural and explicit. Clinical decisions stay human.
          </p>
        </div>

        <div
          className="mt-20 grid grid-cols-1 md:grid-cols-3"
          style={{
            gap: 0,
            borderTop: "1px solid var(--color-rule)",
          }}
        >
          {LAYERS.map((l, i) => (
            <div
              key={l.title}
              style={{
                padding: "32px 32px 28px",
                borderRight:
                  i < LAYERS.length - 1
                    ? "1px solid var(--color-rule)"
                    : undefined,
              }}
            >
              <div
                className="inline-flex items-center justify-center"
                style={{
                  width: 28,
                  height: 28,
                  border: "1px solid var(--color-ink)",
                  borderRadius: 4,
                }}
              >
                {l.icon}
              </div>
              <h3
                className="mt-5"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "var(--color-ink)",
                }}
              >
                {l.title}
              </h3>
              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14.5,
                  lineHeight: 1.55,
                  color: "var(--color-gray-60)",
                }}
              >
                {l.body}
              </p>
              <div
                className="mt-8"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-gray-60)",
                }}
              >
                {l.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
