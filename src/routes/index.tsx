import { createFileRoute } from "@tanstack/react-router";
import { PilotBanner } from "@/components/PilotBanner";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { VaultSnapshot } from "@/components/VaultSnapshot";
import { FlowSection } from "@/components/FlowSection";
import { TeaserGrid } from "@/components/TeaserGrid";
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

        {/* Patient vault preview — sits between hero and flow */}
        <section
          id="vault"
          className="bg-paper"
          style={{ padding: "40px 48px 100px" }}
        >
          <div className="mx-auto" style={{ maxWidth: 1280 }}>
            <VaultSnapshot />
          </div>
        </section>

        <FlowSection />
        <TeaserGrid />
      </main>
      <Footer />
    </div>
  );
}
