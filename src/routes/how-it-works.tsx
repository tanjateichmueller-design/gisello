import { createFileRoute } from "@tanstack/react-router";
import { PilotBanner } from "@/components/PilotBanner";
import { NavBar } from "@/components/NavBar";
import { FlowSection } from "@/components/FlowSection";
import { AntiPositioning } from "@/components/AntiPositioning";
import { StartHere } from "@/components/StartHere";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorks,
  head: () => ({
    meta: [
      { title: "How it works · GISELLO" },
      {
        name: "description",
        content:
          "From intake to follow-up. One companion across five phases of cross-border fertility care. AI handles the cognition. Humans handle the care.",
      },
      { property: "og:title", content: "How it works · GISELLO" },
      {
        property: "og:description",
        content:
          "One companion across five phases. Founder-led, AI-supported cross-border fertility care.",
      },
    ],
  }),
});

function HowItWorks() {
  return (
    <div id="top" className="min-h-screen bg-paper">
      <PilotBanner />
      <NavBar />
      <main>
        <FlowSection />
        <AntiPositioning />
        <StartHere />
      </main>
      <Footer />
    </div>
  );
}
