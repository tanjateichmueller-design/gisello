interface Phase {
  code: string;
  title: string;
}
interface Detail {
  label: string;
  value: string;
}

const PHASES: Phase[] = [
  { code: "01 · DAY 0", title: "30-min intake" },
  { code: "02 · WEEK 1", title: "Records brief" },
  { code: "03 · WEEK 2", title: "Clinic match" },
  { code: "04 · TRAVEL", title: "Treatment abroad" },
  { code: "05 · 12 MO", title: "Recovery + GP" },
];

const DETAILS: Detail[] = [
  { label: "YOU SAY", value: "“This is my situation”" },
  { label: "AI + MD", value: "11 langs · signed" },
  { label: "YOU GET", value: "3–5 vetted clinics" },
  { label: "NAVIGATOR", value: "Logistics · 24/7" },
  { label: "FOLLOW-UP", value: "30d · 6m · 12m" },
];

const STATS: Detail[] = [
  { label: "ONE PERSON", value: "Tanja" },
  { label: "RECORDS", value: "Yours" },
  { label: "COST TO YOU", value: "Coordination fee" },
  { label: "SLOTS LEFT", value: "7 / 10" },
];

export function JourneyPanel() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 80% at 80% 100%, oklch(0.32 0.10 155 / 0.55) 0%, oklch(0.18 0.09 270) 55%, oklch(0.12 0.07 270) 100%)",
        border: "1px solid var(--color-ink)",
        borderRadius: 12,
        padding: "28px 28px 24px",
        color: "var(--color-paper)",
        minHeight: 460,
      }}
    >
      {/* grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.04,
        }}
      />

      {/* Header row */}
      <div className="relative flex items-center justify-between">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-gray-30)",
          }}
        >
          YOUR JOURNEY · END TO END
        </span>
        <span
          className="inline-flex items-center"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-paper)",
            gap: 8,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "oklch(0.78 0.18 145)",
              boxShadow: "0 0 8px oklch(0.78 0.18 145 / 0.8)",
            }}
          />
          5 PHASES
        </span>
      </div>

      {/* Phase cards */}
      <div
        className="relative mt-5 grid grid-cols-5"
        style={{ gap: 10 }}
      >
        {PHASES.map((p) => (
          <div
            key={p.code}
            style={{
              border: "1px solid oklch(1 0 0 / 0.18)",
              borderRadius: 8,
              padding: "12px 12px 14px",
              background: "oklch(0.18 0.05 270 / 0.4)",
              minHeight: 92,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.2em",
                color: "var(--color-ochre)",
              }}
            >
              {p.code}
            </div>
            <div
              className="mt-2"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 500,
                lineHeight: 1.25,
                color: "var(--color-paper)",
              }}
            >
              {p.title}
            </div>
          </div>
        ))}
      </div>

      {/* Detail cards */}
      <div
        className="relative mt-3 grid grid-cols-5"
        style={{ gap: 10 }}
      >
        {DETAILS.map((d) => (
          <div
            key={d.label}
            style={{
              border: "1px solid oklch(1 0 0 / 0.12)",
              borderRadius: 8,
              padding: "10px 12px 12px",
              background: "oklch(0.18 0.05 270 / 0.25)",
              minHeight: 76,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.22em",
                color: "var(--color-gray-30)",
              }}
            >
              {d.label}
            </div>
            <div
              className="mt-1.5"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                fontWeight: 500,
                lineHeight: 1.3,
                color: "var(--color-paper)",
              }}
            >
              {d.value}
            </div>
          </div>
        ))}
      </div>

      {/* Stats row */}
      <div
        className="relative mt-6 pt-5 grid grid-cols-4"
        style={{
          gap: 16,
          borderTop: "1px solid oklch(1 0 0 / 0.12)",
        }}
      >
        {STATS.map((s) => (
          <div key={s.label}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.24em",
                color: "var(--color-gray-30)",
              }}
            >
              {s.label}
            </div>
            <div
              className="mt-2"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 26,
                fontWeight: 500,
                lineHeight: 1,
                color: "var(--color-paper)",
              }}
            >
              {s.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
