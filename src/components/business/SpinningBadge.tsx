import React from "react";
import { AsteriskBadgeIcon } from "./EndcapIcons";

export function SpinningBadge() {
  return (
    <aside
      aria-label="Studio badge"
      className="fixed right-0 top-20 z-40 hidden sm:flex items-center justify-center p-2.5 bg-ink text-acid shadow-lg transition-transform hover:scale-105 select-none"
    >
      <div className="animate-spin-slow">
        <AsteriskBadgeIcon className="w-6 h-6 text-acid" />
      </div>
    </aside>
  );
}
