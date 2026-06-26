import wellness from "@/assets/treatment-wellness.jpg";
import dental from "@/assets/treatment-dental.jpg";
import fertility from "@/assets/treatment-fertility.jpg";
import ortho from "@/assets/treatment-orthopaedic.jpg";

const TREATMENTS = [
  { img: wellness, title: "Health 360 & Wellness", sub: "Diagnostics & Wellness Programmes" },
  { img: dental, title: "Dental", sub: "Corrective & Cosmetic Dentistry" },
  { img: fertility, title: "Fertility Care", sub: "Personalised Fertility & IVF Support" },
  { img: ortho, title: "Orthopaedic", sub: "Joint, Spine & Mobility Care" },
];

export function TreatmentsSection() {
  return (
    <section id="treatments" className="bg-paper" style={{ padding: "100px 48px" }}>
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <div className="text-center">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4.5vw, 56px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--color-gisello-blue)",
              fontWeight: 500,
              display: "inline-block",
              position: "relative",
            }}
          >
            The treatments we
            <br />
            offer, with no wait time
            <svg
              aria-hidden
              viewBox="0 0 200 20"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                bottom: -14,
                width: 180,
                height: 18,
              }}
            >
              <path
                d="M5 12 Q 100 -4 195 10"
                fill="none"
                stroke="var(--color-ochre)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </h2>
        </div>

        <div
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 24 }}
        >
          {TREATMENTS.map((t) => (
            <article
              key={t.title}
              className="relative overflow-hidden group"
              style={{ aspectRatio: "3 / 4", borderRadius: 4 }}
            >
              <img
                src={t.img}
                alt={t.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,30,50,0) 40%, rgba(10,30,50,0.75) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0" style={{ padding: 24 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    color: "var(--color-paper)",
                    fontWeight: 500,
                  }}
                >
                  {t.title}
                </h3>
                <p
                  className="mt-1"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    color: "var(--color-paper)",
                    opacity: 0.9,
                  }}
                >
                  {t.sub}
                </p>
                <div
                  className="mt-3"
                  style={{
                    height: 1,
                    background: "var(--color-paper)",
                    opacity: 0.5,
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
