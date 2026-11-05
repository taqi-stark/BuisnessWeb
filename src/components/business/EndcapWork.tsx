import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "./EndcapIcons";
import { projectsData } from "@/content/projects";
import { HeroSystemPreview } from "./HeroSystemPreview";

export function EndcapWork() {
  const [showInteractiveDemo, setShowInteractiveDemo] = useState(false);

  return (
    <section
      id="projects"
      className="w-full bg-paper text-ink py-16 sm:py-24 border-b border-ink"
    >
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-muted mb-4">
              SELECTED WORK
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.95] text-ink">
              OUR
              <br />
              <span className="font-serif-italic font-normal tracking-[-0.02em]">
                work.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-md">
              Custom websites, high-speed POS billing engines, and e-commerce portals engineered for real commercial results.
            </p>
            <button
              type="button"
              onClick={() => setShowInteractiveDemo(!showInteractiveDemo)}
              className="inline-flex items-center gap-2 bg-ink text-paper px-4 py-2 text-xs font-bold rounded-sm shrink-0 transition-colors hover:bg-neutral-800"
            >
              <span>{showInteractiveDemo ? "Hide interactive tester" : "Test systems live"}</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Optional Interactive Tester Dock (from existing site) */}
        {showInteractiveDemo && (
          <div className="mb-14 p-4 sm:p-6 bg-paper-dark border border-ink">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-ink">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-ink">
                  LIVE INTERACTIVE SANDBOX
                </span>
                <p className="text-xs text-muted">
                  Test barcode scanning, real estate search, and WhatsApp ordering payloads live.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowInteractiveDemo(false)}
                className="font-mono text-xs underline font-bold"
              >
                Close sandbox
              </button>
            </div>
            <HeroSystemPreview activeSlide={0} onSelectSlide={() => {}} />
          </div>
        )}

        {/* Editorial Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projectsData.map((project, idx) => (
            <article
              key={project.id}
              className="group border border-ink bg-paper-light p-6 sm:p-8 flex flex-col justify-between transition-all hover:shadow-[4px_4px_0px_#181a17]"
            >
              {/* Top row */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-ink/20">
                  <span className="font-mono text-xs font-bold text-ink">
                    0{idx + 1} / {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold bg-acid px-2.5 py-0.5 border border-ink">
                    {project.badge}
                  </span>
                </div>

                {/* Project Image Frame */}
                <div className="relative my-6 overflow-hidden border border-ink bg-paper aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  {/* Subtle top window bar */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-paper/90 backdrop-blur-sm border-b border-ink/40 px-3 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-ink" />
                    <div className="w-1.5 h-1.5 rounded-full bg-ink" />
                    <div className="w-1.5 h-1.5 rounded-full bg-ink" />
                    <span className="ml-2 font-mono text-[10px] text-muted truncate">
                      {project.liveUrl.replace("https://", "")}
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink group-hover:text-neutral-900 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted font-normal leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 py-4 my-4 border-y border-ink/20">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="font-display text-xl sm:text-2xl font-black text-ink block">
                        {m.value}
                      </span>
                      <span className="font-mono text-[11px] text-muted uppercase tracking-wider block">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-ink/20">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-bold text-ink underline underline-offset-4 hover:opacity-75 transition-opacity"
                >
                  <span>Visit live system</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </a>

                <Link
                  to={`/work/${project.id}`}
                  className="inline-flex items-center gap-2 bg-ink text-paper px-4 py-2 text-xs font-bold rounded-sm transition-colors hover:bg-neutral-800"
                >
                  <span>Case study</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
