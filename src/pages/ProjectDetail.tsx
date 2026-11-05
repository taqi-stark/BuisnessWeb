import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, MessageCircle } from "lucide-react";
import { ArrowUpRightIcon } from "@/components/business/EndcapIcons";
import { projectsData } from "@/content/projects";
import { businessData } from "@/content/business";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData.find((item) => item.id === projectId);

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-paper px-4 text-center text-ink">
        <span className="border border-ink bg-acid px-3 py-1 font-mono text-xs font-bold text-ink">
          404 / CASE STUDY NOT FOUND
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink">
          Project not found
        </h1>
        <Link
          to="/#projects"
          className="mt-2 inline-flex items-center gap-2 border border-ink bg-ink text-paper px-5 py-2.5 text-xs font-bold rounded-sm hover:bg-neutral-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to selected work</span>
        </Link>
      </main>
    );
  }

  const inquiry = `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
    `Hi Ali, I viewed the ${project.title} project and would like to discuss something similar.`
  )}`;

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-ink selection:text-acid flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 w-full bg-paper/95 backdrop-blur-md border-b border-ink">
        <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-baseline gap-1 text-ink">
            <span className="font-display text-2xl sm:text-3xl font-black tracking-[-0.06em]">
              Digital Dukaan
            </span>
            <span className="inline-block w-2 h-2 bg-acid border border-ink" />
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-ink underline underline-offset-4 hover:opacity-75"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to all projects</span>
            </Link>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-ink text-paper px-4 py-2 text-xs font-bold rounded-sm hover:bg-neutral-800 transition-colors"
            >
              <span>Visit live site</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 sm:py-20">
        <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          {/* Project Title Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-ink pb-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted">
                  CASE STUDY / {project.category}
                </span>
                <span className="bg-acid border border-ink font-mono text-[11px] font-bold px-2 py-0.5">
                  {project.badge}
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-[-0.05em] leading-[0.95] text-ink">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl text-muted font-normal max-w-2xl">
                {project.tagline}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-ink text-paper px-6 py-3.5 text-xs font-bold rounded-sm hover:bg-neutral-800 transition-colors"
              >
                <span>Launch live URL</span>
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>

              <a
                href={inquiry}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-ink bg-acid text-ink px-6 py-3.5 text-xs font-bold rounded-sm hover:bg-acid-hover transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Discuss similar build</span>
              </a>
            </div>
          </div>

          {/* Large Project Image Preview */}
          <div className="border border-ink bg-paper-light p-4 sm:p-8">
            <div className="border border-ink overflow-hidden bg-white">
              <div className="h-7 bg-paper border-b border-ink px-3 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-ink" />
                <div className="w-2 h-2 rounded-full bg-ink" />
                <div className="w-2 h-2 rounded-full bg-ink" />
                <span className="ml-2 font-mono text-[11px] text-muted">
                  {project.liveUrl}
                </span>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </div>

          {/* Details & Deliverables Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            {/* Overview */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                Project Overview &amp; Architecture
              </h2>
              <p className="text-base sm:text-lg text-ink/80 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="pt-2">
                <span className="block font-mono text-xs font-bold uppercase tracking-wider text-muted mb-2">
                  Technical Tags
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="border border-ink bg-paper-dark px-3 py-1 font-mono text-xs text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics & Key Features */}
            <div className="lg:col-span-5 space-y-6 border-t lg:border-t-0 lg:border-l border-ink lg:pl-8 pt-6 lg:pt-0">
              <div>
                <span className="block font-mono text-xs font-bold uppercase tracking-wider text-muted mb-4">
                  Measured Impact
                </span>
                <div className="grid grid-cols-2 gap-4">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="border border-ink bg-acid p-4">
                      <span className="font-display text-2xl font-black text-ink block">
                        {m.value}
                      </span>
                      <span className="font-mono text-[10px] uppercase text-ink/80 block mt-1">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="block font-mono text-xs font-bold uppercase tracking-wider text-muted mb-3">
                  Core Deliverables
                </span>
                <ul className="space-y-2 text-sm text-ink/85">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="font-bold text-ink">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-ink bg-paper py-8">
        <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
          <span>Digital Dukaan · Web &amp; Software Studio</span>
          <Link to="/#projects" className="underline hover:text-ink">
            ← Back to all projects
          </Link>
        </div>
      </footer>
    </div>
  );
}
