import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRightIcon,
  ContractorIllustration,
  FirmIllustration,
  LocationIllustration,
  RealEstateIllustration,
  RetailIllustration,
  StorefrontIllustration,
} from "./EndcapIcons";

export function WhoWeWorkWith() {
  return (
    <section
      id="who-we-work-with"
      className="w-full bg-paper text-ink py-16 sm:py-24 border-b border-ink"
    >
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-muted mb-4">
              WHO WE WORK WITH
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.95] text-ink">
              WHO WE
              <br />
              <span className="font-serif-italic font-normal tracking-[-0.02em]">
                work with.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-md">
              We design websites for businesses of every kind, from local shops and restaurants to professional firms, contractors, and real estate companies.
            </p>
          </div>
        </div>

        {/* 6-Card Architectural Grid with 1px black borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink">
          {/* Card 01: Local Businesses */}
          <article className="border-r border-b border-ink bg-paper-light p-6 sm:p-8 flex flex-col justify-between min-h-[420px] transition-colors hover:bg-[#eae8dd]">
            <div>
              <div className="flex items-center justify-between pb-6">
                <span className="font-mono text-xs font-bold text-ink">01</span>
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 place-items-center border border-ink text-ink bg-transparent"
                >
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="py-4 my-2">
                <StorefrontIllustration className="w-full h-32" />
              </div>
            </div>
            <div className="space-y-2 pt-4">
              <h3 className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-ink">
                Local businesses
              </h3>
              <p className="text-sm text-ink/80 leading-relaxed">
                A clear, fast website that answers what customers ask before they call, and brings in more inquiries.
              </p>
            </div>
          </article>

          {/* Card 02: Restaurants and retail (VIBRANT ACID LIME ACCENT) */}
          <article className="border-r border-b border-ink bg-acid p-6 sm:p-8 flex flex-col justify-between min-h-[420px] transition-colors hover:bg-acid-hover">
            <div>
              <div className="flex items-center justify-between pb-6">
                <span className="font-mono text-xs font-bold text-ink">02</span>
                {/* Signature tilted diamond icon */}
                <div
                  aria-hidden="true"
                  className="w-5 h-5 bg-ink rotate-45 transform"
                />
              </div>
              <div className="py-4 my-2">
                <RetailIllustration className="w-full h-32" />
              </div>
            </div>
            <div className="space-y-2 pt-4">
              <h3 className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-ink">
                Restaurants and retail
              </h3>
              <p className="text-sm text-ink/90 leading-relaxed font-medium">
                A page for every location, with hours, menus, ordering, and the details that bring people in.
              </p>
            </div>
          </article>

          {/* Card 03: Professional firms */}
          <article className="border-r border-b border-ink bg-paper-light p-6 sm:p-8 flex flex-col justify-between min-h-[420px] transition-colors hover:bg-[#eae8dd]">
            <div>
              <div className="flex items-center justify-between pb-6">
                <span className="font-mono text-xs font-bold text-ink">03</span>
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 place-items-center border border-ink text-ink bg-transparent"
                >
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="py-4 my-2">
                <FirmIllustration className="w-full h-32" />
              </div>
            </div>
            <div className="space-y-2 pt-4">
              <h3 className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-ink">
                Professional firms
              </h3>
              <p className="text-sm text-ink/80 leading-relaxed">
                A portfolio and people pages for architects, designers, and other firms, with inquiries that reach a partner.
              </p>
            </div>
          </article>

          {/* Card 04: Contractors and builders */}
          <article className="border-r border-b border-ink bg-paper-light p-6 sm:p-8 flex flex-col justify-between min-h-[420px] transition-colors hover:bg-[#eae8dd]">
            <div>
              <div className="flex items-center justify-between pb-6">
                <span className="font-mono text-xs font-bold text-ink">04</span>
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 place-items-center border border-ink text-ink bg-transparent"
                >
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="py-4 my-2">
                <ContractorIllustration className="w-full h-32" />
              </div>
            </div>
            <div className="space-y-2 pt-4">
              <h3 className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-ink">
                Contractors and builders
              </h3>
              <p className="text-sm text-ink/80 leading-relaxed">
                Finished projects with the scope written out, the license on every page, and bid requests that reach the estimator.
              </p>
            </div>
          </article>

          {/* Card 05: Real estate (VIBRANT ACID LIME ACCENT) */}
          <article className="border-r border-b border-ink bg-acid p-6 sm:p-8 flex flex-col justify-between min-h-[420px] transition-colors hover:bg-acid-hover">
            <div>
              <div className="flex items-center justify-between pb-6">
                <span className="font-mono text-xs font-bold text-ink">05</span>
                {/* Signature tilted diamond icon */}
                <div
                  aria-hidden="true"
                  className="w-5 h-5 bg-ink rotate-45 transform"
                />
              </div>
              <div className="py-4 my-2">
                <RealEstateIllustration className="w-full h-32" />
              </div>
            </div>
            <div className="space-y-2 pt-4">
              <h3 className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-ink">
                Real estate
              </h3>
              <p className="text-sm text-ink/90 leading-relaxed font-medium">
                Websites for brokerages, property managers, owners, and developers, with listings, availability, and leasing contacts.
              </p>
            </div>
          </article>

          {/* Card 06: New locations & Digital Stores */}
          <article className="border-r border-b border-ink bg-paper-light p-6 sm:p-8 flex flex-col justify-between min-h-[420px] transition-colors hover:bg-[#eae8dd]">
            <div>
              <div className="flex items-center justify-between pb-6">
                <span className="font-mono text-xs font-bold text-ink">06</span>
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 place-items-center border border-ink text-ink bg-transparent"
                >
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="py-4 my-2">
                <LocationIllustration className="w-full h-32" />
              </div>
            </div>
            <div className="space-y-2 pt-4">
              <h3 className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-ink">
                New locations
              </h3>
              <p className="text-sm text-ink/80 leading-relaxed">
                A coming-soon page, a Google profile that appears before you open, and signs that point to the right page.
              </p>
            </div>
          </article>
        </div>

        {/* Bottom links row matching screenshot 2 */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-10 border-t border-ink/20 font-semibold text-xs sm:text-sm text-ink">
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 border-b-2 border-ink pb-1 transition-opacity hover:opacity-75"
            >
              <span>Everyone we work with</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <Link
              to="/web-design/lahore"
              className="group inline-flex items-center gap-2 border-b-2 border-ink pb-1 transition-opacity hover:opacity-75"
            >
              <span>City guides</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 border-b-2 border-ink pb-1 transition-opacity hover:opacity-75"
            >
              <span>Free website check</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Quick city guide pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-muted">
            <span className="font-bold text-ink">Guides:</span>
            <Link to="/web-design/lahore" className="hover:text-ink underline">Lahore</Link>
            <span>·</span>
            <Link to="/web-design/islamabad" className="hover:text-ink underline">Islamabad</Link>
            <span>·</span>
            <Link to="/web-design/sargodha" className="hover:text-ink underline">Sargodha</Link>
            <span>·</span>
            <Link to="/web-design/faisalabad" className="hover:text-ink underline">Faisalabad</Link>
            <span>·</span>
            <Link to="/web-design/karachi" className="hover:text-ink underline">Karachi</Link>
            <span>·</span>
            <Link to="/web-design/overseas" className="hover:text-ink underline">Overseas</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
