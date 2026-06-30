import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/writing")({
  component: WritingPage,
  head: () => ({
    meta: [
      { title: "Writing · Field notes from the founder · GISELLO" },
      {
        name: "description",
        content:
          "Substantive writing on cross-border care. A new piece every Sunday.",
      },
      { property: "og:title", content: "Writing · GISELLO" },
      {
        property: "og:description",
        content: "Field notes on healthtech, regulation, and the systems patients navigate alone.",
      },
    ],
  }),
});

const FEATURED = [
  { title: "Cohort 01 opens", body: "What we are measuring, what we are not promising.", date: "May 5, 2026", tone: "warm" },
  { title: "14 events. 1 patient.", body: "A walkthrough of the GISELLO system, end-to-end.", date: "Apr 28, 2026", tone: "deep" },
  
];

const POSTS = Array.from({ length: 5 }).map((_, i) => ({
  date: `DD MON YY`,
  title: `Post title, clear, direct, no clickbait`,
  body: `One-line summary or opening sentence, what this post argues.`,
  i,
}));

function WritingPage() {
  return (
    <PageShell subnavTitle="GISELLO · Writing">
      <section style={{ padding: "80px 48px 40px" }}>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]" style={{ maxWidth: 1180, gap: 48 }}>
          <div>
            <div style={mono()}>Field notes from the founder</div>
            <h1 className="mt-6" style={display()}>
              Substantive writing
              <br />
              on <span style={{ fontStyle: "italic", color: "var(--color-gisello-blue)" }}>cross-border care.</span>
            </h1>
          </div>
          <div className="flex flex-col justify-end">
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6, color: "var(--color-ink)" }}>
              A new piece every Sunday. Healthtech, regulation, the broken systems
              patients navigate alone, and what we are building instead.
            </p>
            <button
              type="button"
              className="mt-5 inline-flex items-center justify-center bg-ink text-paper rounded-full self-start"
              style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, padding: "10px 22px" }}
            >
              Subscribe →
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 48px 60px" }}>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3" style={{ maxWidth: 1180, gap: 24 }}>
          {FEATURED.map((f) => (
            <article key={f.title} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--color-rule)" }}>
              <div
                style={{
                  height: 180,
                  background:
                    f.tone === "warm"
                      ? "linear-gradient(135deg, #c8b59a, #6b6b6b)"
                      : f.tone === "deep"
                      ? "linear-gradient(135deg, #2b5a4d, #1a2438)"
                      : "linear-gradient(135deg, #c89456, #6b4523)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 24,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    color: "var(--color-paper)",
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  {f.title}
                </div>
              </div>
              <div style={{ padding: 20 }}>
                <p style={cell()}>{f.body}</p>
                <div className="mt-4 flex items-center justify-between" style={mono()}>
                  <span>Field note</span>
                  <span>{f.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ padding: "20px 48px 120px" }}>
        <div className="mx-auto" style={{ maxWidth: 1180, borderTop: "1px solid var(--color-rule)" }}>
          {POSTS.map((p) => (
            <article
              key={p.i}
              className="grid grid-cols-[120px_1fr_80px] items-baseline"
              style={{ padding: "28px 0", borderBottom: "1px solid var(--color-rule)", gap: 24 }}
            >
              <div style={mono()}>[ {p.date} ]</div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    lineHeight: 1.2,
                    color: "var(--color-ink)",
                    fontWeight: 500,
                  }}
                >
                  [ {p.title} ]
                </div>
                <div className="mt-2" style={cell()}>[ {p.body} ]</div>
              </div>
              <div style={{ ...mono(), color: "var(--color-ochre)", textAlign: "right" }}>READ →</div>
            </article>
          ))}
          <div className="mt-12" style={{ textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--color-ochre)" }}>
            ARTICLE TEMPLATE · COMING SOON
          </div>
        </div>
      </section>
    </PageShell>
  );
}

const mono = () => ({
  fontFamily: "var(--font-mono)" as const,
  fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "var(--color-gray-60)",
});
const display = () => ({
  fontFamily: "var(--font-display)" as const,
  fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.01em",
  color: "var(--color-ink)", fontWeight: 500,
});
const cell = () => ({
  fontFamily: "var(--font-sans)" as const,
  fontSize: 14, lineHeight: 1.6, color: "var(--color-gray-60)",
});
