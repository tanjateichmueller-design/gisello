import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Gisello · GISELLO" },
      { name: "description", content: "About Gisello." },
    ],
  }),
});

function AboutPage() {
  return (
    <PageShell subnavTitle="GISELLO · About">
      <PagePlaceholder
        eyebrow="About Gisello"
        title="About Gisello."
        body="This page is in progress. Read the founder letter for context on why Gisello exists."
      />
    </PageShell>
  );
}
