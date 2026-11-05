import React from "react";
import { EndcapNavbar } from "@/components/business/EndcapNavbar";
import { EndcapHero } from "@/components/business/EndcapHero";
import { WhoWeWorkWith } from "@/components/business/WhoWeWorkWith";
import { EndcapWork } from "@/components/business/EndcapWork";
import { EndcapServices } from "@/components/business/EndcapServices";
import { EndcapProcess } from "@/components/business/EndcapProcess";
import { EndcapContact } from "@/components/business/EndcapContact";
import { EndcapFooter } from "@/components/business/EndcapFooter";
import { SpinningBadge } from "@/components/business/SpinningBadge";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-ink selection:text-acid flex flex-col font-sans">
      {/* Signature rotating asterisk badge on the top right edge */}
      <SpinningBadge />

      {/* Top Navbar */}
      <EndcapNavbar />

      <main className="flex-1">
        {/* Hero Section (Screenshot 0) - Full Vibrant Acid Lime */}
        <EndcapHero />

        {/* Who We Work With (Screenshots 1 & 2) - 6-Card Architectural Grid with 2 vibrant lime cards */}
        <WhoWeWorkWith />

        {/* Selected Work / Portfolio Section */}
        <EndcapWork />

        {/* Services & Deliverables - Architectural Numbered Rows */}
        <EndcapServices />

        {/* Studio Process & About Standards */}
        <EndcapProcess />

        {/* Contact Invitation (Screenshot 5) - Full Vibrant Acid Lime "LET'S talk." */}
        <EndcapContact />
      </main>

      {/* Footer (Screenshots 3 & 4) with GIGANTIC Edge-to-Edge Wordmark */}
      <EndcapFooter />
    </div>
  );
}
