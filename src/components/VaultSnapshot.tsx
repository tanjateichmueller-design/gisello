import { CompanionMark, Wordmark } from "./CompanionMark";

function Eyebrow({
  children,
  color = "ochre",
}: {
  children: React.ReactNode;
  color?: "ochre" | "gray-60" | "ink" | "paper";
}) {
  const colorMap = {
    ochre: "var(--color-ochre)",
    "gray-60": "var(--color-gray-60)",
    ink: "var(--color-ink)",
    paper: "var(--color-paper)",
  } as const;
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: colorMap[color],
        lineHeight: 1,
      }}
    >
      {children}
    </span>
  );
}

interface VaultCardProps {
  eyebrow: string;
  title: string;
  rows: { label: string; value: string }[];
  redacted?: boolean;
  disabled?: boolean;
}

function VaultCard({ eyebrow, title, rows, redacted, disabled }: VaultCardProps) {
  return (
    <div
      className="bg-paper-pure"
      style={{
        border: disabled ? "1px dashed var(--color-ink)" : "1px solid var(--color-ink)",
        padding: 20,
        opacity: disabled ? 0.55 : 1,
      }}
    >
      <Eyebrow color={disabled ? "gray-60" : "ochre"}>{eyebrow}</Eyebrow>
      <h3
        className="mt-3"
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: 16,
          color: "var(--color-ink)",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>
      <div className="mt-3 flex flex-col gap-y-1.5">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex justify-between gap-3"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              lineHeight: 1.4,
            }}
          >
            <span style={{ color: "var(--color-gray-60)" }}>{r.label}</span>
            <span style={{ color: "var(--color-ink)" }} className="text-right">
              {r.value}
            </span>
          </div>
        ))}
      </div>

      {redacted && (
        <div className="mt-3 flex flex-col gap-y-1.5">
          <div style={{ height: 6, width: "100%", background: "var(--color-rule)" }} />
          <div style={{ height: 6, width: "84%", background: "var(--color-rule)" }} />
          <div style={{ height: 6, width: "62%", background: "var(--color-rule)" }} />
        </div>
      )}

      {disabled && (
        <div
          className="mt-3 flex items-center justify-center"
          style={{
            border: "1px dashed var(--color-ink)",
            padding: 22,
          }}
        >
          <Eyebrow color="gray-60">DISABLED · PILOT</Eyebrow>
        </div>
      )}
    </div>
  );
}

export function VaultSnapshot() {
  return (
    <div
      className="bg-paper-pure w-full"
      style={{
        border: "1px solid var(--color-rule)",
        padding: 32,
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <Eyebrow color="ochre">01 / Patient vault</Eyebrow>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-ink)",
          }}
        >
          Direction · A
        </span>
      </div>
      <div
        className="mt-4"
        style={{ height: 1.5, background: "var(--color-ink)" }}
      />

      {/* Vault hero */}
      <div className="mt-7">
        <Eyebrow color="gray-60">Pilot · 2026 · Patient #03</Eyebrow>
        <h2
          className="mt-3"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 32,
            lineHeight: 1.1,
            color: "var(--color-ink)",
            letterSpacing: "-0.01em",
          }}
        >
          Patient Vault
        </h2>
      </div>

      {/* Card grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12 }}>
        <VaultCard
          eyebrow="Profile"
          title="Sarah Mitchell"
          rows={[
            { label: "Country", value: "UK · Bristol" },
            { label: "Languages", value: "EN · DE" },
            { label: "Time zone", value: "GMT+0" },
          ]}
        />
        <VaultCard
          eyebrow="Preferences"
          title="Budget €8–15K"
          rows={[
            { label: "Willing", value: "CZ · ES · GR" },
            { label: "Recovery", value: "4 weeks" },
            { label: "Clinic lang.", value: "English" },
          ]}
        />
        <VaultCard
          eyebrow="Medical context"
          title="Fertility · IVF donor"
          rows={[
            { label: "Insurance", value: "Self-pay" },
            { label: "Notes", value: "500 char max" },
          ]}
          redacted
        />
        <VaultCard
          eyebrow="Documents"
          title="Upload zone"
          rows={[{ label: "Status", value: "Coming Q4 2026" }]}
          disabled
        />
      </div>

      {/* Pilot status bar */}
      <div
        className="mt-5 bg-ink text-paper flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
        style={{
          padding: "14px 22px",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          lineHeight: 1.2,
        }}
      >
        <span>Brief · sent 12 Apr 2026</span>
        <span>Status · awaiting clinic</span>
      </div>

      {/* Footer */}
      <div
        className="mt-8"
        style={{ height: 1.5, background: "var(--color-ink)" }}
      />
      <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center" style={{ gap: 12 }}>
          <CompanionMark size={22} />
          <Wordmark size={14} />
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-ochre)",
          }}
        >
          Pilot · 2026 · Direction A · Vault preview
        </span>
      </div>
    </div>
  );
}
