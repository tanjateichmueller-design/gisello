import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/press")({
  component: PressPage,
  head: () => ({
    meta: [
      { title: "Press & PR · GISELLO" },
      {
        name: "description",
        content:
          "Press, media, and interview enquiries for GISELLO, the founder-led practice coordinating cross-border fertility and aesthetic care with AI navigators.",
      },
      { property: "og:title", content: "Press & PR · GISELLO" },
      { property: "og:url", content: "https://www.gisello.com/press" },
    ],
    links: [{ rel: "canonical", href: "https://www.gisello.com/press" }],
  }),
});

function PressPage() {
  return (
    <PageShell subnavTitle="GISELLO · Press & PR">
      <PagePlaceholder
        eyebrow="Press & PR"
        title="Press & PR."
        body="For media enquiries, please reach out to the founder directly."
      />
    </PageShell>
  );
}
