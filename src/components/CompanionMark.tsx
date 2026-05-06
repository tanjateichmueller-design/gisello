interface CompanionMarkProps {
  size?: number;
  inverse?: boolean;
  className?: string;
}

/**
 * GISELLO companion mark — outline circle (ink or paper) with a horizontal
 * mark-line red bar across the diameter, extending 2px past edges.
 */
export function CompanionMark({ size = 32, inverse = false, className }: CompanionMarkProps) {
  const stroke = (3 / 56) * size;
  const lineHeight = (3 / 56) * size;
  const overshoot = (2 / 56) * size;
  const r = size / 2 - stroke / 2;
  const cx = size / 2;
  const cy = size / 2;
  const ringColor = inverse ? "var(--color-paper)" : "var(--color-ink)";

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden="true"
    >
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={ringColor} strokeWidth={stroke} />
      <rect
        x={-overshoot}
        y={cy - lineHeight / 2}
        width={size + overshoot * 2}
        height={lineHeight}
        fill="var(--color-mark-line)"
      />
    </svg>
  );
}

export function Wordmark({ inverse = false, size = 16 }: { inverse?: boolean; size?: number }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        letterSpacing: "0.04em",
        fontSize: size,
        color: inverse ? "var(--color-paper)" : "var(--color-gisello-blue)",
        lineHeight: 1,
      }}
    >
      GISELLO
    </span>
  );
}

export function MarkLockup({
  size = 32,
  wordSize = 16,
  inverse = false,
  gap = 16,
}: {
  size?: number;
  wordSize?: number;
  inverse?: boolean;
  gap?: number;
}) {
  return (
    <div className="flex items-center" style={{ gap }}>
      <CompanionMark size={size} inverse={inverse} />
      <Wordmark inverse={inverse} size={wordSize} />
    </div>
  );
}
