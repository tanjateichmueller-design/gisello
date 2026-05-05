/**
 * SVG diagram of the GISELLO patient → clinic flow.
 * viewBox 600×380. Paper / ochre on dark ink background.
 */
export function CrossBorderFlow() {
  const paper = "var(--color-paper)";
  const ochre = "var(--color-ochre)";
  const gray60 = "var(--color-gray-60)";

  return (
    <svg
      viewBox="0 0 600 380"
      role="img"
      aria-label="Patient to GISELLO to clinic cross-border flow"
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrow-paper" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill={paper} />
        </marker>
        <marker id="arrow-ochre" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill={ochre} />
        </marker>
      </defs>

      {/* faint crosshair */}
      <line x1="20" y1="180" x2="580" y2="180" stroke={paper} strokeOpacity="0.16" strokeDasharray="3 4" />
      <line x1="280" y1="20" x2="280" y2="360" stroke={paper} strokeOpacity="0.16" strokeDasharray="3 4" />

      {/* BORDER label */}
      <text x="280" y="14" textAnchor="middle" fill={ochre}
        style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em" }}>
        BORDER
      </text>

      {/* arrows top (paper, solid, going right) */}
      <line x1="118" y1="160" x2="225" y2="160" stroke={paper} strokeWidth="1.2" markerEnd="url(#arrow-paper)" />
      <text x="171" y="150" textAnchor="middle" fill={paper}
        style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em" }}>
        INTAKE
      </text>

      <line x1="335" y1="160" x2="465" y2="160" stroke={paper} strokeWidth="1.2" markerEnd="url(#arrow-paper)" />
      <text x="400" y="150" textAnchor="middle" fill={paper}
        style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em" }}>
        BRIEF
      </text>

      {/* arrows bottom (ochre, dashed, going left) */}
      <line x1="465" y1="210" x2="335" y2="210" stroke={ochre} strokeWidth="1.2" strokeDasharray="4 4" markerEnd="url(#arrow-ochre)" />
      <text x="400" y="226" textAnchor="middle" fill={ochre}
        style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em" }}>
        OUTCOME
      </text>

      <line x1="225" y1="210" x2="118" y2="210" stroke={ochre} strokeWidth="1.2" strokeDasharray="4 4" markerEnd="url(#arrow-ochre)" />
      <text x="171" y="226" textAnchor="middle" fill={ochre}
        style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em" }}>
        FOLLOW-UP
      </text>

      {/* nodes */}
      {/* Patient */}
      <circle cx="80" cy="180" r="34" fill="none" stroke={paper} strokeWidth="1.5" />
      <text x="80" y="244" textAnchor="middle" fill={paper}
        style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em" }}>
        [01] PATIENT
      </text>
      <text x="80" y="262" textAnchor="middle" fill={gray60}
        style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.2em" }}>
        UK · ORIGIN
      </text>

      {/* GISELLO */}
      <circle cx="280" cy="180" r="52" fill="var(--color-signal)" stroke={paper} strokeWidth="1.5" />
      <text x="280" y="184" textAnchor="middle" fill={paper}
        style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, letterSpacing: "0.04em" }}>
        GISELLO
      </text>
      <text x="280" y="262" textAnchor="middle" fill={paper}
        style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em" }}>
        [02] END-TO-END CARE
      </text>
      <text x="280" y="280" textAnchor="middle" fill={ochre}
        style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.2em" }}>
        AI BRAIN · HUMAN-LED
      </text>

      {/* Clinic */}
      <circle cx="500" cy="180" r="34" fill="none" stroke={paper} strokeWidth="1.5" />
      <text x="500" y="244" textAnchor="middle" fill={paper}
        style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em" }}>
        [03] CLINIC
      </text>
      <text x="500" y="262" textAnchor="middle" fill={gray60}
        style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.2em" }}>
        CZ · DESTINATION
      </text>

      {/* Phase strip */}
      <text x="300" y="335" textAnchor="middle" fill={gray60}
        style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.25em" }}>
        INTAKE · COORDINATION · TRAVEL · RECOVERY · FOLLOW-UP
      </text>

      {/* origin/destination markers */}
      <text x="80" y="360" textAnchor="middle" fill={gray60}
        style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.2em" }}>
        ORIGIN
      </text>
      <text x="500" y="360" textAnchor="middle" fill={gray60}
        style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.2em" }}>
        DESTINATION
      </text>
    </svg>
  );
}
