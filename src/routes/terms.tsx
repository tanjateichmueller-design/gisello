import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms · GISELLO" },
      {
        name: "description",
        content:
          "GISELLO terms and conditions for the Patient Navigator service, the Vault, and the 2026 founder-led pilot cohort. Full terms published before Cohort 01 onboarding.",
      },
      { property: "og:title", content: "Terms · GISELLO" },
      { property: "og:url", content: "https://www.gisello.com/terms" },
    ],
    links: [{ rel: "canonical", href: "https://www.gisello.com/terms" }],
  }),
});

function TermsPage() {
  return (
    <PageShell subnavTitle="GISELLO · Terms">
      <PagePlaceholder
        eyebrow="Terms & Conditions"
        title="Terms."
        body="The full terms and conditions will be published before Cohort 01 onboarding."
      />
    </PageShell>
  );
}
