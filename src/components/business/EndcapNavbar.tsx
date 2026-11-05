import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ArrowUpRightIcon } from "./EndcapIcons";
import { businessData } from "@/content/business";

interface EndcapNavbarProps {
  onOpenConsultation?: () => void;
}

export function EndcapNavbar({ onOpenConsultation }: EndcapNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
    businessData.profile.defaultWhatsAppMessage
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-acid/95 backdrop-blur-md border-b border-ink">
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex h-20 items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#home"
          className="group flex items-baseline gap-1 text-ink focus:outline-none"
          aria-label="Digital Dukaan home"
        >
          <span className="font-display text-3xl sm:text-[34px] font-black tracking-[-0.06em] leading-none">
            Digital Dukaan
          </span>
          <span className="inline-block w-2 h-2 bg-ink translate-y-[-2px] group-hover:bg-ink/80 transition-colors" />
        </a>

        {/* Desktop Nav Links */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] font-semibold text-ink"
          aria-label="Main Navigation"
        >
          <a
            href="#services"
            className="transition-opacity hover:opacity-70 focus-visible:opacity-70"
          >
            Services
          </a>
          <a
            href="#projects"
            className="transition-opacity hover:opacity-70 focus-visible:opacity-70"
          >
            Our work
          </a>
          <a
            href="#who-we-work-with"
            className="transition-opacity hover:opacity-70 focus-visible:opacity-70"
          >
            Who we work with
          </a>
          <a
            href="#faq"
            className="transition-opacity hover:opacity-70 focus-visible:opacity-70"
          >
            FAQ
          </a>
          <a
            href="#process"
            className="transition-opacity hover:opacity-70 focus-visible:opacity-70"
          >
            Process
          </a>
          <a
            href="#about"
            className="transition-opacity hover:opacity-70 focus-visible:opacity-70"
          >
            About
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-ink text-paper px-4 sm:px-5 py-2.5 text-xs sm:text-[13px] font-semibold tracking-tight rounded-sm transition-all hover:bg-neutral-800"
          >
            <span>Let’s talk</span>
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="grid h-10 w-10 place-items-center border border-ink bg-transparent text-ink md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="border-t border-ink bg-acid px-6 py-5 md:hidden space-y-3">
          <a
            href="#services"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-semibold text-ink py-1.5"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-semibold text-ink py-1.5"
          >
            Our work
          </a>
          <a
            href="#who-we-work-with"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-semibold text-ink py-1.5"
          >
            Who we work with
          </a>
          <a
            href="#process"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-semibold text-ink py-1.5"
          >
            Process
          </a>
          <a
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-semibold text-ink py-1.5"
          >
            About
          </a>
          <div className="pt-2 border-t border-ink/30 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between bg-ink text-white px-4 py-2.5 text-sm font-semibold rounded-sm"
            >
              <span>WhatsApp Direct</span>
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
