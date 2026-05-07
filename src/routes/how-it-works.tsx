import { createFileRoute } from "@tanstack/react-router";
import { PilotBanner } from "@/components/PilotBanner";
import { NavBar } from "@/components/NavBar";
import { SubNav } from "@/components/SubNav";
import { HowItWorksPage } from "@/components/HowItWorksPage";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorks,
  head: () => ({
    meta: [
      { title: "How it works · GISELLO" },
      {
        name: "description",
        content:
          "Five phases. One companion. Records that travel with you. AI handles documents and matching. A human makes every decision that matters.",
      },
      { property: "og:title", content: "How it works · GISELLO" },
      {
        property: "og:description",
        content:
          "Five phases of cross-border fertility care, founder-led and AI-supported.",
      },
    ],
  }),
});

function HowItWorks() {
  return (
    <div id="top" className="min-h-screen bg-paper">
      <PilotBanner />
      <NavBar />
      <SubNav title="GISELLO · How it works" />
      <main>
        <HowItWorksPage />
      </main>
      <Footer />
    </div>
  );
}
