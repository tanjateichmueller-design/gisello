import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import heroSuite from "@/assets/hero-suite.jpg";
import heroClinic from "@/assets/hero-clinic.jpg";
import heroDoctor from "@/assets/hero-doctor.jpg";

import heroPatientWaiting from "@/assets/hero-patient-waiting.jpg";
import heroPatientDoctor from "@/assets/hero-patient-doctor.jpg";
import heroPatientClinical from "@/assets/hero-patient-clinical.jpg";
import heroNursesCorridor from "@/assets/hero-nurses-corridor.jpg";
import heroNurseWorking from "@/assets/hero-nurse-working.jpg";
import heroSurgicalTeam from "@/assets/hero-surgical-team.jpg";
import heroClinicModern from "@/assets/hero-clinic-modern.jpg";

const SLIDES = [
  heroClinicModern,
  heroNursesCorridor,
  heroPatientDoctor,
  heroSurgicalTeam,
  heroPatientWaiting,
  heroNurseWorking,
  heroPatientClinical,
  heroClinic,
  heroDoctor,
  heroSuite,
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="who"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "calc(100vh - 120px)" }}
    >
      {/* Slideshow layers */}
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === index ? 1 : 0,
            transform: i === index ? "scale(1.05)" : "scale(1)",
            transition: "opacity 1.6s ease-in-out, transform 6s ease-out",
          }}
        />
      ))}

      {/* Tint overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--color-gisello-blue) 40%, transparent) 0%, color-mix(in oklab, var(--color-gisello-blue) 60%, transparent) 100%)",
        }}
      />

      <div
        className="relative mx-auto flex flex-col items-center justify-center text-center"
        style={{
          maxWidth: 1100,
          padding: "140px 32px 160px",
          minHeight: "calc(100vh - 120px)",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 6vw, 80px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--color-paper)",
            fontWeight: 500,
            textShadow: "0 2px 24px rgba(0,0,0,0.3)",
          }}
        >
          World-class care. Zero wait. A patient navigator by your side.
        </h1>

        <div className="mt-12">
          <Link
            id="book"
            to="/book-call"
            className="inline-flex items-center justify-center bg-ink text-paper hover:bg-ochre hover:text-ink transition-colors rounded-full"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              fontWeight: 500,
              padding: "16px 32px",
            }}
          >
            Book a 30 minute call →
          </Link>
        </div>

        <a
          href="#treatments"
          className="mt-10 inline-flex flex-col items-center group"
          style={{
            color: "var(--color-paper)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          <span>See the treatments</span>
          <svg
            width="20"
            height="28"
            viewBox="0 0 20 28"
            fill="none"
            className="mt-2 animate-bounce"
            style={{ animationDuration: "2s" }}
          >
            <path
              d="M10 4 V22 M3 15 L10 22 L17 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
