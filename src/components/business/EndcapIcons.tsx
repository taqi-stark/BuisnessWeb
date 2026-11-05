import React from "react";

// The signature 8-petal neon asterisk/flower badge icon from Endcap
export function AsteriskBadgeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* 8 rounded pill petals radiating from center */}
      <rect x="10.5" y="1" width="3" height="22" rx="1.5" />
      <rect x="1" y="10.5" width="22" height="3" rx="1.5" />
      <rect
        x="10.5"
        y="1"
        width="3"
        height="22"
        rx="1.5"
        transform="rotate(45 12 12)"
      />
      <rect
        x="10.5"
        y="1"
        width="3"
        height="22"
        rx="1.5"
        transform="rotate(-45 12 12)"
      />
    </svg>
  );
}

// Arrow icon used across Endcap links and buttons
export function ArrowUpRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 18 18 6M6 6h12v12" />
    </svg>
  );
}

// HERO Wireframe Diagram 1: Website
export function WireframeWebsite({ className = "w-48 h-28" }: { className?: string }) {
  return (
    <div className={`flex flex-col justify-between border-2 border-ink p-2.5 bg-transparent ${className}`}>
      {/* Browser window header */}
      <div className="flex items-center gap-1.5 pb-2 border-b border-ink/40">
        <div className="w-1.5 h-1.5 rounded-full bg-ink" />
        <div className="w-1.5 h-1.5 rounded-full bg-ink" />
        <div className="w-1.5 h-1.5 rounded-full bg-ink" />
      </div>
      {/* Content wireframe: image with mountain line & paragraphs */}
      <div className="grid grid-cols-5 gap-2 items-center py-1">
        <div className="col-span-3 space-y-1.5">
          <div className="h-1 bg-ink w-full" />
          <div className="h-1 bg-ink/60 w-4/5" />
          <div className="h-1 bg-ink/40 w-3/5" />
        </div>
        <div className="col-span-2 border border-ink h-12 flex items-end justify-center p-0.5 overflow-hidden">
          <svg viewBox="0 0 40 30" className="w-full h-full stroke-ink fill-none" strokeWidth="1.5">
            <polyline points="2,26 14,10 24,20 38,4" />
          </svg>
        </div>
      </div>
      <div className="border-t border-ink/40 pt-1">
        <div className="h-1 bg-ink/60 w-full" />
      </div>
    </div>
  );
}

// HERO Wireframe Diagram 2: Automation
export function WireframeAutomation({ className = "w-48 h-28" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-between gap-2 border-2 border-ink p-2.5 bg-transparent ${className}`}>
      {/* Document 1 with text lines */}
      <div className="w-16 h-20 border border-ink p-1.5 flex flex-col justify-between">
        <div className="space-y-1.5">
          <div className="h-1 bg-ink w-full" />
          <div className="h-1 bg-ink/60 w-3/4" />
          <div className="h-1 bg-ink/40 w-5/6" />
          <div className="h-1 bg-ink/60 w-2/3" />
        </div>
        <div className="h-1 bg-ink/40 w-1/2" />
      </div>

      {/* Arrow */}
      <div className="flex items-center justify-center text-ink font-mono font-bold text-lg">
        →
      </div>

      {/* Document 2 with checklist items */}
      <div className="w-16 h-20 border border-ink p-1.5 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-bold">✓</span>
            <div className="h-1 bg-ink w-3/4" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-bold">✓</span>
            <div className="h-1 bg-ink w-2/3" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-bold">✓</span>
            <div className="h-1 bg-ink w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
}

// HERO Wireframe Diagram 3: Print / Software
export function WireframeSoftware({ className = "w-48 h-28" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 border-2 border-ink bg-transparent ${className}`}>
      {/* Left panel */}
      <div className="p-2 border-r border-ink flex flex-col justify-between">
        <div className="border border-ink h-9 mb-1 bg-ink/5" />
        <div className="space-y-1">
          <div className="h-1 bg-ink w-full" />
          <div className="h-1 bg-ink/50 w-2/3" />
        </div>
      </div>
      {/* Right panel with split 4-box grid */}
      <div className="p-2 grid grid-cols-2 gap-1.5">
        <div className="border border-ink h-7" />
        <div className="border border-ink h-7" />
        <div className="border border-ink h-7" />
        <div className="border border-ink h-7" />
      </div>
    </div>
  );
}

// WHO WE WORK WITH Architectural Illustration 01: Local Businesses (Storefront)
export function StorefrontIllustration({ className = "w-full h-32" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      stroke="#181a17"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Ground line */}
      <line x1="10" y1="110" x2="190" y2="110" strokeWidth="2" />
      {/* Building outline */}
      <polygon points="30,110 30,55 170,55 170,110" />
      {/* Pitched roof / Pediment */}
      <polygon points="20,55 100,25 180,55" fill="#f8f7f3" strokeWidth="1.5" />
      {/* Awning overhang */}
      <polygon points="25,55 35,70 165,70 175,55" fill="#f2f0e7" />
      {/* Awning stripes */}
      <line x1="60" y1="55" x2="65" y2="70" />
      <line x1="90" y1="55" x2="95" y2="70" />
      <line x1="120" y1="55" x2="125" y2="70" />
      <line x1="145" y1="55" x2="150" y2="70" />
      {/* Display window */}
      <rect x="42" y="78" width="55" height="32" fill="#fff" />
      <line x1="42" y1="94" x2="97" y2="94" />
      <line x1="70" y1="78" x2="70" y2="110" />
      {/* Door */}
      <rect x="115" y="75" width="38" height="35" fill="#fff" />
      <rect x="120" y="80" width="28" height="18" />
      <circle cx="146" cy="98" r="1.5" fill="#181a17" />
      {/* OPEN sign badge on roof */}
      <polygon points="85,20 115,20 120,32 80,32" fill="#dce87a" />
      <text
        x="100"
        y="29"
        fill="#181a17"
        fontSize="7"
        fontFamily="sans-serif"
        fontWeight="800"
        textAnchor="middle"
        stroke="none"
        letterSpacing="1"
      >
        OPEN
      </text>
    </svg>
  );
}

// WHO WE WORK WITH Architectural Illustration 02: Retail & Supermarket (Warehouse / Retail Store)
export function RetailIllustration({ className = "w-full h-32" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      stroke="#181a17"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Ground line */}
      <line x1="10" y1="110" x2="190" y2="110" strokeWidth="2" />
      {/* Main warehouse store block */}
      <rect x="25" y="45" width="115" height="65" fill="#f8f7f3" />
      {/* Higher tower annex on right */}
      <rect x="140" y="32" width="35" height="78" fill="#4d5338" />
      {/* Roof trim line */}
      <line x1="22" y1="45" x2="142" y2="45" strokeWidth="2.5" />
      {/* 3 Retail entrance / rollup bays */}
      <rect x="35" y="60" width="28" height="50" fill="#fff" />
      <line x1="35" y1="68" x2="63" y2="68" />
      <line x1="35" y1="76" x2="63" y2="76" />
      <line x1="35" y1="84" x2="63" y2="84" />
      <line x1="35" y1="92" x2="63" y2="92" />
      <line x1="35" y1="100" x2="63" y2="100" />

      <rect x="70" y="60" width="28" height="50" fill="#fff" />
      <line x1="70" y1="68" x2="98" y2="68" />
      <line x1="70" y1="76" x2="98" y2="76" />
      <line x1="70" y1="84" x2="98" y2="84" />
      <line x1="70" y1="92" x2="98" y2="92" />
      <line x1="70" y1="100" x2="98" y2="100" />

      <rect x="105" y="60" width="28" height="50" fill="#fff" />
      <line x1="105" y1="68" x2="133" y2="68" />
      <line x1="105" y1="76" x2="133" y2="76" />
      <line x1="105" y1="84" x2="133" y2="84" />
      <line x1="105" y1="92" x2="133" y2="92" />
      <line x1="105" y1="100" x2="133" y2="100" />

      {/* Annex door */}
      <rect x="148" y="75" width="18" height="35" fill="#181a17" stroke="none" />
    </svg>
  );
}

// WHO WE WORK WITH Architectural Illustration 03: Professional Firms (Office Tower)
export function FirmIllustration({ className = "w-full h-32" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      stroke="#181a17"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Ground line */}
      <line x1="10" y1="110" x2="190" y2="110" strokeWidth="2" />
      {/* Tower structure */}
      <rect x="50" y="25" width="100" height="85" fill="#fff" />
      {/* Parapet cap */}
      <line x1="46" y1="25" x2="154" y2="25" strokeWidth="2.5" />
      {/* 4 columns x 3 rows of architectural windows */}
      {/* Row 1 */}
      <rect x="62" y="35" width="12" height="14" fill="#e9eadf" />
      <rect x="84" y="35" width="12" height="14" fill="#e9eadf" />
      <rect x="104" y="35" width="12" height="14" fill="#e9eadf" />
      <rect x="126" y="35" width="12" height="14" fill="#e9eadf" />

      {/* Row 2 */}
      <rect x="62" y="55" width="12" height="14" fill="#e9eadf" />
      <rect x="84" y="55" width="12" height="14" fill="#e9eadf" />
      <rect x="104" y="55" width="12" height="14" fill="#e9eadf" />
      <rect x="126" y="55" width="12" height="14" fill="#e9eadf" />

      {/* Row 3 */}
      <rect x="62" y="75" width="12" height="14" fill="#e9eadf" />
      <rect x="84" y="75" width="12" height="14" fill="#e9eadf" />
      <rect x="104" y="75" width="12" height="14" fill="#e9eadf" />
      <rect x="126" y="75" width="12" height="14" fill="#e9eadf" />

      {/* Lobby entrance */}
      <rect x="88" y="94" width="24" height="16" fill="#181a17" />
    </svg>
  );
}

// WHO WE WORK WITH Architectural Illustration 04: Contractors & Builders (Crane & Blocks)
export function ContractorIllustration({ className = "w-full h-32" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      stroke="#181a17"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Ground line */}
      <line x1="10" y1="110" x2="190" y2="110" strokeWidth="2" />
      {/* Tower crane mast */}
      <line x1="38" y1="30" x2="38" y2="110" strokeWidth="2.5" />
      <line x1="44" y1="30" x2="44" y2="110" strokeWidth="2.5" />
      {/* Crane cross lacing */}
      <line x1="38" y1="40" x2="44" y2="50" />
      <line x1="44" y1="40" x2="38" y2="50" />
      <line x1="38" y1="60" x2="44" y2="70" />
      <line x1="44" y1="60" x2="38" y2="70" />
      <line x1="38" y1="80" x2="44" y2="90" />
      <line x1="44" y1="80" x2="38" y2="90" />
      <line x1="38" y1="100" x2="44" y2="110" />
      <line x1="44" y1="100" x2="38" y2="110" />

      {/* Crane jib and counterjib */}
      <line x1="20" y1="32" x2="125" y2="32" strokeWidth="2.5" />
      <polygon points="38,32 41,18 44,32" fill="#181a17" />
      <line x1="41" y1="18" x2="115" y2="32" />
      <line x1="41" y1="18" x2="22" y2="32" />

      {/* Cable hoist */}
      <line x1="95" y1="32" x2="95" y2="60" strokeDasharray="2 2" />
      {/* Suspended block */}
      <rect x="85" y="60" width="20" height="15" fill="#dce87a" strokeWidth="1.5" />

      {/* Staged concrete foundation blocks */}
      <rect x="70" y="80" width="30" height="15" fill="#fff" />
      <rect x="100" y="80" width="30" height="15" fill="#fff" />
      <rect x="70" y="95" width="60" height="15" fill="#e9eadf" />
    </svg>
  );
}

// WHO WE WORK WITH Architectural Illustration 05: Real Estate (2-Story House with LEASE/SALE Sign)
export function RealEstateIllustration({ className = "w-full h-32" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      stroke="#181a17"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Ground line */}
      <line x1="10" y1="110" x2="190" y2="110" strokeWidth="2" />
      {/* House structure */}
      <rect x="45" y="42" width="80" height="68" fill="#fff" />
      {/* Roof */}
      <polygon points="40,42 85,15 130,42" fill="#f8f7f3" strokeWidth="2" />
      {/* Windows 2nd floor */}
      <rect x="58" y="52" width="18" height="16" fill="#e9eadf" />
      <line x1="67" y1="52" x2="67" y2="68" />
      <line x1="58" y1="60" x2="76" y2="60" />

      <rect x="94" y="52" width="18" height="16" fill="#e9eadf" />
      <line x1="103" y1="52" x2="103" y2="68" />
      <line x1="94" y1="60" x2="112" y2="60" />

      {/* Windows 1st floor */}
      <rect x="58" y="78" width="18" height="16" fill="#e9eadf" />
      <line x1="67" y1="78" x2="67" y2="94" />
      <line x1="58" y1="86" x2="76" y2="86" />

      {/* Front door */}
      <rect x="94" y="76" width="18" height="34" fill="#181a17" />

      {/* LEASE Signboard post */}
      <line x1="150" y1="55" x2="150" y2="110" strokeWidth="2" />
      <rect x="135" y="55" width="36" height="20" fill="#181a17" />
      <text
        x="153"
        y="68"
        fill="#dce87a"
        fontSize="7"
        fontFamily="sans-serif"
        fontWeight="800"
        textAnchor="middle"
        stroke="none"
        letterSpacing="0.5"
      >
        FOR SALE
      </text>
    </svg>
  );
}

// WHO WE WORK WITH Architectural Illustration 06: New Locations / Digital Stores (Browser + Map Pins)
export function LocationIllustration({ className = "w-full h-32" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      stroke="#181a17"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Ground line */}
      <line x1="10" y1="110" x2="190" y2="110" strokeWidth="2" />
      {/* Browser window frame */}
      <rect x="35" y="25" width="130" height="75" fill="#fff" />
      <rect x="35" y="25" width="130" height="14" fill="#f2f0e7" />
      <line x1="35" y1="39" x2="165" y2="39" />
      <circle cx="43" cy="32" r="2" fill="#181a17" />
      <circle cx="50" cy="32" r="2" fill="#181a17" />
      <circle cx="57" cy="32" r="2" fill="#181a17" />

      {/* 3 cards with teardrop location pins */}
      {/* Card 1 */}
      <rect x="45" y="48" width="32" height="42" fill="#f8f7f3" strokeWidth="1" />
      <path
        d="M61,54 C58,54 56,56 56,59 C56,63 61,68 61,68 C61,68 66,63 66,59 C66,56 64,54 61,54 Z"
        fill="#dce87a"
        stroke="#181a17"
        strokeWidth="1"
      />
      <circle cx="61" cy="59" r="1.5" fill="#181a17" />
      <line x1="49" y1="74" x2="73" y2="74" />
      <line x1="53" y1="80" x2="69" y2="80" />

      {/* Card 2 */}
      <rect x="84" y="48" width="32" height="42" fill="#f8f7f3" strokeWidth="1" />
      <path
        d="M100,54 C97,54 95,56 95,59 C95,63 100,68 100,68 C100,68 105,63 105,59 C105,56 103,54 100,54 Z"
        fill="#dce87a"
        stroke="#181a17"
        strokeWidth="1"
      />
      <circle cx="100" cy="59" r="1.5" fill="#181a17" />
      <line x1="88" y1="74" x2="112" y2="74" />
      <line x1="92" y1="80" x2="108" y2="80" />

      {/* Card 3 */}
      <rect x="123" y="48" width="32" height="42" fill="#f8f7f3" strokeWidth="1" />
      <path
        d="M139,54 C136,54 134,56 134,59 C134,63 139,68 139,68 C139,68 144,63 144,59 C144,56 142,54 139,54 Z"
        fill="#dce87a"
        stroke="#181a17"
        strokeWidth="1"
      />
      <circle cx="139" cy="59" r="1.5" fill="#181a17" />
      <line x1="127" y1="74" x2="151" y2="74" />
      <line x1="131" y1="80" x2="147" y2="80" />
    </svg>
  );
}
