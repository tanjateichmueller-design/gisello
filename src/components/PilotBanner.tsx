export function PilotBanner() {
  return (
    <div
      className="w-full bg-ink text-paper"
      style={{ padding: "11px 60px" }}
    >
      <div
        className="flex items-center justify-center gap-x-2 flex-wrap"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          lineHeight: 1.4,
        }}
      >
        <span>PILOT PROGRAMME</span>
        <span aria-hidden>·</span>
        <span>2026</span>
        <span aria-hidden>·</span>
        <span>10 INVITED PATIENTS</span>
        <span aria-hidden>·</span>
        <span>FOUNDER-LED</span>
        <span aria-hidden>·</span>
        <span>FERTILITY CENTER OF EXCELLENCE</span>
        <span aria-hidden className="mx-2" />
        <a
          href="#book"
          className="text-ochre underline underline-offset-4 decoration-1 hover:opacity-80 transition-opacity"
        >
          → BOOK A CALL
        </a>
      </div>
    </div>
  );
}
