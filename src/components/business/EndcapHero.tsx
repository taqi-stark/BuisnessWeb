import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRightIcon,
  WireframeAutomation,
  WireframeSoftware,
  WireframeWebsite,
} from "./EndcapIcons";

interface EndcapHeroProps {
  onOpenConsultation?: () => void;
}

export function EndcapHero({ onOpenConsultation }: EndcapHeroProps) {
  return (
    <section
      id="home"
      className="relative w-full bg-acid text-ink border-b border-ink pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden"
    >
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Eyebrow Category */}
        <div className="mb-6 sm:mb-8">
          <p className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-ink/80">
            WEBSITES &amp; BUSINESS SOFTWARE / PUNJAB &amp; BEYOND
          </p>
        </div>

        {/* Giant Headline & Architectural Diagrams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14 sm:mb-20">
          {/* Huge typography */}
          <div className="lg:col-span-7">
            <h1 className="font-display text-[54px] sm:text-[88px] md:text-[112px] lg:text-[128px] xl:text-[142px] font-black tracking-[-0.07em] leading-[0.88] select-none text-ink">
              WEB &amp; AI
              <br />
              STUDIO.
            </h1>
          </div>

          {/* Architectural Wireframes alongside headline (Website / Automation / Software) */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 items-end">
              {/* Wireframe 1: Website */}
              <div className="space-y-1.5">
                <WireframeWebsite className="w-full h-24 sm:h-28" />
                <p className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-ink/75 text-center">
                  WEBSITE
                </p>
              </div>

              {/* Wireframe 2: Automation */}
              <div className="space-y-1.5">
                <WireframeAutomation className="w-full h-24 sm:h-28" />
                <p className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-ink/75 text-center">
                  AUTOMATION
                </p>
              </div>

              {/* Wireframe 3: Software */}
              <div className="space-y-1.5">
                <WireframeSoftware className="w-full h-24 sm:h-28" />
                <p className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-ink/75 text-center">
                  SOFTWARE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Row: Lede on left, Testimonial & Dual CTAs on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-8 border-t border-ink/40">
          {/* Lede text */}
          <div className="lg:col-span-6">
            <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed tracking-tight text-ink/90 max-w-xl">
              Websites, retail POS billing, and business software, designed and built for growing companies in Pakistan and beyond.
            </p>
          </div>

          {/* Right column: Testimonial Quote & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-xs">
              <blockquote className="font-serif-italic text-lg sm:text-xl text-ink font-normal leading-snug">
                “All that I need and it’s outstanding.”
              </blockquote>
              <cite className="block not-italic font-sans text-xs sm:text-sm font-semibold text-ink/80 mt-1">
                Ken Simon, KFS Properties
              </cite>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 bg-ink text-paper px-5 py-3 text-xs sm:text-[13px] font-bold rounded-sm shadow-sm transition-all hover:bg-neutral-800"
              >
                <span>Let’s talk</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </Link>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-transparent text-ink border border-ink px-5 py-3 text-xs sm:text-[13px] font-bold rounded-sm transition-all hover:bg-ink/10"
              >
                <span>See our work</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
