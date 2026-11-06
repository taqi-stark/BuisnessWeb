import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "./EndcapIcons";
import { businessData } from "@/content/business";

export function EndcapContact() {
  const directEmail = `mailto:${businessData.profile.email}?subject=Project%20Inquiry%20via%20Digital%20Dukaan`;

  return (
    <section
      id="contact"
      className="w-full bg-acid text-ink py-16 sm:py-24 border-b border-ink overflow-hidden"
    >
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Eyebrow */}
        <p className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-ink/80 mb-6 sm:mb-8">
          CONTACT DIGITAL DUKAAN
        </p>

        {/* Massive Invitation Link Row (Screenshot 5) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 sm:pb-14">
          <Link
            to="/contact"
            className="group block"
            aria-label="Let's talk - open contact page"
          >
            <h2 className="font-display text-5xl sm:text-8xl md:text-9xl lg:text-[132px] font-black tracking-[-0.07em] leading-[0.88] select-none text-ink group-hover:text-neutral-900 transition-colors">
              LET’S
              <br />
              <span className="font-serif-italic font-normal tracking-[-0.03em]">
                talk.
              </span>
            </h2>
          </Link>

          {/* Big black square button with arrow (Screenshot 5) -> navigates to /contact */}
          <Link
            to="/contact"
            aria-label="Open contact page"
            className="group grid h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 place-items-center bg-ink text-acid rounded-sm shadow-md transition-all hover:bg-neutral-800 hover:scale-105"
          >
            <ArrowUpRightIcon className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Invitation Bottom Details matching screenshot 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-8 border-t border-ink/40">
          <div className="lg:col-span-6">
            <p className="text-base sm:text-lg font-medium text-ink/90 leading-relaxed max-w-xl">
              A website, a retail POS system, or custom business software.
              <br />
              We reply within an hour during business hours, and we only use your details to answer you.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 bg-ink text-paper px-6 py-3.5 text-xs sm:text-sm font-bold rounded-sm shadow-sm transition-all hover:bg-neutral-800"
            >
              <span>Let’s talk</span>
              <ArrowUpRightIcon className="w-4 h-4" />
            </Link>

            <span className="text-xs sm:text-sm font-medium text-ink">
              or email Ali at{" "}
              <a
                href={directEmail}
                className="font-bold underline underline-offset-4 hover:opacity-75 transition-opacity"
              >
                {businessData.profile.email}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
