interface Teaser {
  eyebrow: string;
  headline: string;
  subtitle: string;
  link: string;
  href: string;
}

const TEASERS: Teaser[] = [
  {
    eyebrow: "Founder",
    headline: "GISELLO Founder Story",
    subtitle:
      "From Weimar to Dubai. Nine years at Amazon. One company built around the patient.",
    link: "READ THE STORY →",
    href: "/founder",
  },
  {
    eyebrow: "Writing",
    headline: "Editorial weekly",
    subtitle:
      "Substantive writing on cross-border care. New piece every Sunday.",
    link: "READ THE LATEST →",
    href: "/writing",
  },
  {
    eyebrow: "What's next",
    headline: "Five centres of excellence",
    subtitle:
      "Sequenced rollout: fertility, aesthetic, oncology, orthopaedic, cardiovascular. One per year.",
    link: "SEE THE ROADMAP →",
    href: "/whats-next",
  },
];

function TeaserBlock({ t }: { t: Teaser }) {
  return (
    <a
      href={t.href}
      className="bg-paper-pure block group transition-colors"
      style={{
        border: "1px solid var(--color-ink)",
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
        {t.eyebrow}
      </div>
      <h3
        className="mt-4"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 32,
          lineHeight: 1.1,
          letterSpacing: "-0.01em",
          color: "var(--color-ink)",
        }}
      >
        {t.headline}
      </h3>
      <p
        className="mt-3"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          lineHeight: 1.5,
          color: "var(--color-gray-60)",
        }}
      >
        {t.subtitle}
      </p>
      <div
        className="mt-8 group-hover:translate-x-0.5 transition-transform"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--color-ochre)",
        }}
      >
        {t.link}
      </div>
    </a>
  );
}

export function TeaserGrid() {
  return (
    <section
      id="explore"
      className="bg-paper"
      style={{ padding: "80px 48px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <div className="flex items-end justify-between flex-wrap gap-3">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-ochre)",
            }}
          >
            03 / Explore
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 28,
              fontStyle: "italic",
              color: "var(--color-ink)",
              lineHeight: 1,
            }}
          >
            More about GISELLO
          </span>
        </div>
        <div
          className="mt-5"
          style={{ height: 1.5, background: "var(--color-ink)" }}
        />

        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 24 }}
        >
          {TEASERS.map((t) => (
            <TeaserBlock key={t.eyebrow} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
