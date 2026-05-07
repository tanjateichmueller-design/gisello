import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/press")({
  component: PressPage,
  head: () => ({
    meta: [
      { title: "Press & PR · GISELLO" },
      { name: "description", content: "Press and PR enquiries for GISELLO." },
    ],
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
