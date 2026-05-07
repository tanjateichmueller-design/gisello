import type { ReactNode } from "react";
import { PilotBanner } from "./PilotBanner";
import { NavBar } from "./NavBar";
import { SubNav } from "./SubNav";
import { Footer } from "./Footer";

export function PageShell({
  subnavTitle,
  children,
}: {
  subnavTitle: string;
  children: ReactNode;
}) {
  return (
    <div id="top" className="min-h-screen bg-paper">
      <PilotBanner />
      <NavBar />
      <SubNav title={subnavTitle} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
