interface NotItem {
  title: string;
  body: string;
}

const ITEMS: NotItem[] = [
  {
    title: "A clinic directory",
    body: "We don't send you to \"browse.\" Every patient gets a brief and a shortlist tailored to them.",
  },
  {
    title: "A commission middleman",
    body: "We don't take commission from clinics. You pay us. Clinics pay clinic-brief fees only when chosen.",
  },
  {
    title: "An AI chatbot",
    body: "AI processes documents and drafts briefs. It doesn't replace the human relationship with your Patient Manager.",
  },
  {
    title: "A wellness platform",
    body: "This is medical care, not lifestyle. We won't tell you to \"trust the journey.\" We'll tell you what the data shows.",
  },
];

export function AntiPositioning() {
  return (
    <section className="bg-paper" style={{ padding: "100px 48px" }}>
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
            02 / What we are not
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              color: "var(--color-ink)",
            }}
          >
            Anti-positioning
          </span>
        </div>
        <div
          className="mt-5"
          style={{ height: 1, background: "var(--color-ink)" }}
        />

        <h2
          className="mt-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 4.5vw, 56px)",
            lineHeight: 1.1,
            color: "var(--color-ink)",
            fontWeight: 500,
          }}
        >
          What GISELLO is not.
        </h2>

        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 20 }}
        >
          {ITEMS.map((it) => (
            <div
              key={it.title}
              style={{
                border: "1px solid var(--color-rule)",
                padding: "28px 26px",
                background: "var(--color-paper)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-ink)",
                }}
              >
                Not this
              </div>
              <h3
                className="mt-4"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: 17,
                  color: "var(--color-ink)",
                  lineHeight: 1.3,
                }}
              >
                {it.title}
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
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
