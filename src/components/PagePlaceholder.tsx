interface Props {
  eyebrow: string;
  title: string;
  body?: string;
}

export function PagePlaceholder({ eyebrow, title, body }: Props) {
  return (
    <section style={{ padding: "120px 48px 160px" }}>
      <div className="mx-auto" style={{ maxWidth: 1180 }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-gray-60)",
          }}
        >
          {eyebrow}
        </div>
        <h1
          className="mt-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(44px, 6vw, 72px)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            color: "var(--color-ink)",
            fontWeight: 500,
          }}
        >
          {title}
        </h1>
        {body && (
          <p
            className="mt-8"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--color-gray-60)",
              maxWidth: 560,
            }}
          >
            {body}
          </p>
        )}
        <div
          className="mt-10"
          style={{
            display: "inline-block",
            padding: "8px 14px",
            border: "1px solid var(--color-rule)",
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-ochre)",
          }}
        >
          Coming soon
        </div>
      </div>
    </section>
  );
}
