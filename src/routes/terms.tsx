import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms · GISELLO" },
      { name: "description", content: "GISELLO terms and conditions." },
    ],
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
