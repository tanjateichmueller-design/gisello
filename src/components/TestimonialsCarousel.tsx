type Quote = {
  text: string;
  name: string;
  origin: string;
  flag: string;
};

const QUOTES: Quote[] = [
  {
    text:
      "After two failed cycles at home, Gisello matched us with a clinic in Tbilisi within ten days. Our Navigator was on every call, in our language.",
    name: "Sofia",
    origin: "Germany",
    flag: "🇩🇪",
  },
  {
    text:
      "I had been on an NHS waiting list for eighteen months. Three weeks after my first call with Gisello, I had a new hip. No drama, no surprises.",
    name: "James",
    origin: "United Kingdom",
    flag: "🇬🇧",
  },
  {
    text:
      "The Vault changed everything. Every clinic saw the same scans, the same labs. I stopped repeating my story.",
    name: "Lena",
    origin: "Austria",
    flag: "🇦🇹",
  },
];

export function TestimonialsCarousel() {
  return (
    <section
      className="text-white"
      style={{
        background: "var(--color-gisello-blue)",
        padding: "100px 48px",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <div className="text-center" style={{ marginBottom: 56 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-ochre)",
            }}
          >
            Real voices
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(34px, 4vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 500,
              marginTop: 12,
            }}
          >
            Patients, in their own words.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <figure
              key={i}
              style={{
                border: "1px solid color-mix(in oklab, white 18%, transparent)",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  lineHeight: 1.45,
                  letterSpacing: "-0.01em",
                  color: "white",
                  fontWeight: 400,
                }}
              >
                "{q.text}"
              </blockquote>
              <figcaption
                className="flex items-center gap-3"
                style={{ marginTop: "auto" }}
              >
                <span style={{ fontSize: 22 }}>{q.flag}</span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    {q.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "color-mix(in oklab, white 60%, transparent)",
                    }}
                  >
                    {q.origin}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
