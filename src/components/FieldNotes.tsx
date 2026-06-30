interface Note {
  title: string;
  subtitle: string;
  date: string;
  gradient: string;
  textTone: "ink" | "paper";
}

const NOTES: Note[] = [
  {
    title: "What a cross-border fertility journey actually involves",
    subtitle: "[ Records, clinics, travel and recovery, start to finish ]",
    date: "May 5, 2026",
    gradient:
      "radial-gradient(120% 90% at 30% 30%, oklch(0.85 0.06 80) 0%, oklch(0.55 0.10 60) 60%, oklch(0.32 0.06 270) 100%)",
    textTone: "paper",
  },
  {
    title: "14 events. 1 patient.",
    subtitle: "[ A walkthrough of the GISELLO system, end-to-end ]",
    date: "Apr 28, 2026",
    gradient:
      "radial-gradient(120% 90% at 70% 30%, oklch(0.78 0.07 200) 0%, oklch(0.45 0.07 220) 50%, oklch(0.25 0.06 270) 100%)",
    textTone: "paper",
  },
  {
    title: "Why choose Czech Republic for fertility treatments?",
    subtitle: "[ Clinics, costs, legal framework and what patients should know ]",
    date: "Jun 20, 2026",
    gradient:
      "radial-gradient(120% 90% at 50% 30%, oklch(0.80 0.05 30) 0%, oklch(0.50 0.08 20) 55%, oklch(0.25 0.05 270) 100%)",
    textTone: "paper",
  },
];

export function FieldNotes() {
  return (
    <section
      id="field-notes"
      className="bg-paper"
      style={{ padding: "80px 48px 120px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <div className="flex items-center justify-between">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4vw, 52px)",
              fontWeight: 500,
              letterSpacing: "-0.015em",
              color: "var(--color-ink)",
              lineHeight: 1,
            }}
          >
            Field notes
          </h2>
          <a
            href="#all-notes"
            className="inline-flex items-center justify-center border border-ink text-ink hover:bg-ink hover:text-paper transition-colors rounded-full"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              fontWeight: 500,
              padding: "8px 18px",
            }}
          >
            View all
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
          {NOTES.map((n) => (
            <article key={n.title} className="flex flex-col">
              <div
                className="flex items-center justify-center text-center"
                style={{
                  background: n.gradient,
                  borderRadius: 12,
                  aspectRatio: "4 / 3",
                  padding: 24,
                  filter: "blur(0.4px)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: 30,
                    lineHeight: 1.1,
                    color:
                      n.textTone === "paper"
                        ? "var(--color-paper)"
                        : "var(--color-ink)",
                    fontWeight: 500,
                  }}
                >
                  {n.title}
                </h3>
              </div>

              <p
                className="mt-5"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  lineHeight: 1.45,
                  color: "var(--color-ink)",
                }}
              >
                {n.subtitle}
              </p>
              <div
                className="mt-3 flex items-center justify-between"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  color: "var(--color-gray-60)",
                }}
              >
                <span>Field note</span>
                <span>{n.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
