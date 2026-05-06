import { Link } from "@tanstack/react-router";

export function PilotBanner() {
  return (
    <div
      className="w-full bg-ink text-paper"
      style={{ padding: "10px 48px" }}
    >
      <div
        className="mx-auto flex items-center justify-center flex-wrap"
        style={{
          maxWidth: 1280,
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          gap: 10,
        }}
      >
        <span style={{ color: "var(--color-ochre)", fontWeight: 600 }}>
          Pilot 2026
        </span>
        <span aria-hidden style={{ opacity: 0.5 }}>·</span>
        <span>Fertility + Aesthetics</span>
        <span aria-hidden style={{ opacity: 0.5 }}>·</span>
        <span>10 patients</span>
        <span aria-hidden style={{ opacity: 0.5 }}>·</span>
        <span>founder-led, €0</span>
        <span aria-hidden style={{ marginLeft: 8 }} />
        <Link
          to="/book-call"
          className="hover:opacity-80 transition-opacity"
          style={{ color: "var(--color-paper)", fontWeight: 600 }}
        >
          Book a 30-min intro call ›
        </Link>
      </div>
    </div>
  );
}
