import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "./EndcapIcons";
import { businessData } from "@/content/business";

export function EndcapFooter() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
    businessData.profile.defaultWhatsAppMessage
  )}`;

  return (
    <footer className="w-full bg-paper text-ink pt-14 pb-8 overflow-hidden">
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-ink/20">
          {/* Brand Wordmark */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="inline-flex items-baseline gap-1 font-display text-4xl sm:text-5xl font-black tracking-[-0.06em] text-ink"
            >
              <span>Digital Dukaan</span>
              <span className="inline-block w-2.5 h-2.5 bg-acid translate-y-[-2px] border border-ink" />
            </Link>
            <p className="font-mono text-xs text-muted mt-2">
              Web &amp; Software Studio
            </p>
          </div>

          {/* Location & Focus */}
          <div className="md:col-span-4 space-y-1 text-xs sm:text-sm text-ink/80">
            <p className="font-medium">
              Websites &amp; POS Billing Systems.
            </p>
            <p className="text-muted">
              Based in Punjab, Pakistan. Serving nationwide &amp; remote.
            </p>
          </div>

          {/* Direct Contact Links */}
          <div className="md:col-span-4 flex flex-col md:items-end space-y-1 text-xs sm:text-sm">
            <a
              href={`mailto:${businessData.profile.email}`}
              className="inline-flex items-center gap-1.5 font-bold text-ink underline underline-offset-4 hover:opacity-75 transition-opacity"
            >
              <span>{businessData.profile.email}</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={`tel:+${businessData.profile.whatsappNumber}`}
              className="font-medium text-muted hover:text-ink transition-colors"
            >
              Call {businessData.profile.whatsappDisplay}
            </a>
          </div>
        </div>

        {/* Footer Nav Links */}
        <nav
          className="flex flex-wrap items-center gap-6 sm:gap-9 py-6 text-xs sm:text-[13px] font-semibold text-ink"
          aria-label="Footer Navigation"
        >
          <a href="/#services" className="hover:opacity-75 transition-opacity">
            Services
          </a>
          <a href="/#projects" className="hover:opacity-75 transition-opacity">
            Our work
          </a>
          <a href="/#who-we-work-with" className="hover:opacity-75 transition-opacity">
            Who we work with
          </a>
          <Link to="/web-design/lahore" className="hover:opacity-75 transition-opacity">
            City guides
          </Link>
          <a href="/#faq" className="hover:opacity-75 transition-opacity">
            FAQ
          </a>
          <a href="/#process" className="hover:opacity-75 transition-opacity">
            Process
          </a>
          <a href="/#about" className="hover:opacity-75 transition-opacity">
            About Digital Dukaan
          </a>
          <Link to="/contact" className="hover:opacity-75 transition-opacity">
            Contact
          </Link>
          <a
            href="#home"
            className="ml-auto text-muted hover:text-ink transition-colors"
          >
            Back to top ↑
          </a>
        </nav>

        {/* Copyright notice */}
        <div className="py-4 border-t border-ink/20 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-muted">
          <span>© {new Date().getFullYear()} Digital Dukaan Web Design &amp; Software Studio</span>
          <span>Engineered with precision</span>
        </div>

        {/* GIGANTIC Edge-to-Edge Wordmark: 100% visible from 'D' to 'N.' on all viewports */}
        <div
          className="mt-6 sm:mt-10 select-none overflow-hidden cursor-default w-full"
          aria-hidden="true"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg
            viewBox="0 0 1200 125"
            className="w-full h-auto block select-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="25"
              y="96"
              fill={isHovered ? "#6e7e23" : "#181a17"}
              fontFamily="'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif"
              fontWeight="900"
              fontSize="112"
              letterSpacing="-5"
              textLength="1100"
              lengthAdjust="spacingAndGlyphs"
              className="transition-colors duration-300"
            >
              DIGITAL DUKAAN
            </text>
            {/* Signature Acid Lime Dot */}
            <rect
              x="1140"
              y="38"
              width="24"
              height="24"
              fill="#dce87a"
              stroke="#181a17"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </div>

      {/* Floating Bottom Quick Dock (Mobile / Desktop Bottom Bar) */}
      <div
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 p-1.5 bg-ink text-paper rounded-sm shadow-xl border border-paper/20 backdrop-blur-md"
        role="region"
        aria-label="Floating quick contact"
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 bg-acid text-ink px-3.5 py-1.5 text-xs font-bold rounded-sm transition-transform hover:scale-105"
        >
          <span>Let’s talk</span>
          <ArrowUpRightIcon className="w-3.5 h-3.5" />
        </Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-paper hover:text-acid transition-colors"
        >
          <span>WhatsApp</span>
        </a>
      </div>
    </footer>
  );
}
