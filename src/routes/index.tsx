import { createFileRoute } from "@tanstack/react-router";
import { PilotBanner } from "@/components/PilotBanner";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { TeaserGrid } from "@/components/TeaserGrid";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GISELLO — A companion who knows the way" },
      {
        name: "description",
        content:
          "Cross-border fertility care, end-to-end. Records that travel. People who care. Decisions that are yours. Founder-led pilot for 2026.",
      },
      { property: "og:title", content: "GISELLO — A companion who knows the way" },
      {
        property: "og:description",
        content:
          "Founder-led, AI-supported, human-led cross-border care. Pilot 2026.",
      },
    ],
  }),
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-paper">
      <PilotBanner />
      <NavBar />
      <main>
        <Hero />
        <JourneyTimeline />
        <TeaserGrid />
      </main>
      <Footer />
    </div>
  );
}
