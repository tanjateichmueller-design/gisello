import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/NavBar";
import { SubNav } from "@/components/SubNav";
import { Hero } from "@/components/Hero";
import { SystemSection } from "@/components/SystemSection";
import { FounderQuoteBlock } from "@/components/FounderQuoteBlock";
import { FieldNotes } from "@/components/FieldNotes";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GISELLO · AI navigators for cross-border medical care" },
      {
        name: "description",
        content:
          "GISELLO coordinates fertility and aesthetic treatment across borders, combining AI for cognition with a Patient Navigator for judgement.",
      },
      { property: "og:title", content: "GISELLO · AI navigators for cross-border medical care" },
      { property: "og:url", content: "https://www.gisello.com/" },
      {
        property: "og:description",
        content:
          "Founder-led pilot 2026. Vault, Brief, Match. Three layers, one Patient Navigator.",
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
          <SubNav transparent />
        </div>
        <Hero />
      </div>
      <main>
        <SystemSection />
        <FounderQuoteBlock />
        <FieldNotes />
      </main>
      <Footer />
    </div>
  );
}
