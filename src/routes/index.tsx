import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/NavBar";

import { Hero } from "@/components/Hero";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { PatientJourneySection } from "@/components/PatientJourneySection";

import { SystemDetailsTeaser } from "@/components/SystemDetailsTeaser";
import { VaultTeaserSection } from "@/components/VaultTeaserSection";
import { NavigatorsSection } from "@/components/NavigatorsSection";

import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { FieldNotes } from "@/components/FieldNotes";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GISELLO · World-class care, zero wait, a Patient Navigator by your side" },
      {
        name: "description",
        content:
          "Gisello coordinates fertility, orthopaedic, dental and wellness treatment across Georgia, Turkey, Spain, Poland and the UAE. AI matching, human Patient Navigators, transparent prices.",
      },
      { property: "og:title", content: "GISELLO · World-class care, zero wait" },
      { property: "og:url", content: "https://www.gisello.com/" },
      {
        property: "og:description",
        content:
          "Cross-border medical care with a dedicated Patient Navigator and an encrypted Patient Vault. Save up to 60% versus private care at home.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.gisello.com/" }],
  }),
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-paper">
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-30">
          <NavBar transparent />
        </div>
        <Hero />
      </div>
      <main>
        <TreatmentsSection />
        <PatientJourneySection />
        
        <SystemDetailsTeaser />
        <VaultTeaserSection />
        <NavigatorsSection />
        <PartnerClinicsSection />
        <TestimonialsCarousel />
        <FieldNotes />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
