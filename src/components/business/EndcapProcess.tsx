import React from "react";
import { ArrowUpRightIcon } from "./EndcapIcons";
import { businessData } from "@/content/business";

const processSteps = [
  {
    num: "01",
    title: "Understand the need",
    desc: "We analyze your customer journey, counter billing friction, or inventory bottlenecks in plain conversation — zero tech jargon.",
  },
  {
    num: "02",
    title: "Agree on fixed scope",
    desc: "A transparent architectural plan, fixed deliverables, and upfront milestone pricing. No unexpected scope creep.",
  },
  {
    num: "03",
    title: "Build & test live",
    desc: "Rapid iterative engineering with interactive staging links you can test on your phone or cashier PC before launch.",
  },
  {
    num: "04",
    title: "Launch & support",
    desc: "Production deployment, on-ground staff training for cashier teams, and dedicated post-launch care.",
  },
];

export function EndcapProcess() {
  const whatsappUrl = `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
    businessData.profile.defaultWhatsAppMessage
  )}`;

  return (
    <section
      id="process"
      className="w-full bg-paper text-ink py-16 sm:py-24 border-b border-ink"
    >
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-muted mb-4">
              HOW WE OPERATE
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.95] text-ink">
              HOW WE
              <br />
              <span className="font-serif-italic font-normal tracking-[-0.02em]">
                work.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-md">
              A disciplined, straightforward approach to planning, building, and deploying software that runs reliably from day one.
            </p>
          </div>
        </div>

        {/* 4-Step Process Grid with 1px black borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-ink">
          {processSteps.map((step) => (
            <article
              key={step.num}
              className="border-r border-b border-ink bg-paper-light p-6 sm:p-8 flex flex-col justify-between min-h-[260px] transition-colors hover:bg-[#eae8dd]"
            >
              <span className="font-mono text-xs font-bold text-ink mb-6 block">
                {step.num}
              </span>
              <div className="space-y-2 mt-auto">
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="text-sm text-ink/75 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* About the Studio / Independent Architect band */}
        <div id="about" className="mt-16 sm:mt-24 p-8 sm:p-12 bg-paper-dark border border-ink">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-muted">
                INDEPENDENT STUDIO
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
                Direct 1-on-1 collaboration with your developer.
              </h3>
              <p className="text-base text-muted leading-relaxed">
                No account managers, no junior delegators. When you partner with Digital Dukaan, you work directly with Ali Taqi. From the initial architecture call to post-launch updates, your software is built and maintained by someone who understands your real business workflow.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 text-xs font-bold rounded-sm hover:bg-neutral-800 transition-colors"
                >
                  <span>Chat directly with Ali</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4 border-l border-ink/30 pl-0 lg:pl-8">
              <div className="p-4 bg-paper border border-ink/40">
                <span className="font-display text-2xl sm:text-3xl font-black text-ink block">
                  &lt; 1 Hour
                </span>
                <span className="font-mono text-[11px] text-muted uppercase tracking-wider block mt-1">
                  Response Window
                </span>
              </div>
              <div className="p-4 bg-paper border border-ink/40">
                <span className="font-display text-2xl sm:text-3xl font-black text-ink block">
                  100%
                </span>
                <span className="font-mono text-[11px] text-muted uppercase tracking-wider block mt-1">
                  Code Ownership
                </span>
              </div>
              <div className="p-4 bg-paper border border-ink/40">
                <span className="font-display text-2xl sm:text-3xl font-black text-ink block">
                  0 PKR
                </span>
                <span className="font-mono text-[11px] text-muted uppercase tracking-wider block mt-1">
                  SaaS Lock-in Fees
                </span>
              </div>
              <div className="p-4 bg-paper border border-ink/40">
                <span className="font-display text-2xl sm:text-3xl font-black text-ink block">
                  Nationwide
                </span>
                <span className="font-mono text-[11px] text-muted uppercase tracking-wider block mt-1">
                  Pakistan &amp; Remote
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
