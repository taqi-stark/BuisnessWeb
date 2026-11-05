import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, ExternalLink, MessageCircle } from "lucide-react";
import { ArrowUpRightIcon } from "@/components/business/EndcapIcons";
import { citiesData } from "@/content/cities";
import { businessData } from "@/content/business";
import { EndcapFooter } from "@/components/business/EndcapFooter";
import { SpinningBadge } from "@/components/business/SpinningBadge";

export default function CityGuide() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = citySlug ? citiesData[citySlug] : null;

  useEffect(() => {
    if (city) {
      document.title = city.metaTitle;
    }
  }, [city]);

  if (!city) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-paper px-4 text-center text-ink font-sans">
        <span className="border border-ink bg-acid px-3 py-1 font-mono text-xs font-bold text-ink">
          404 / CITY GUIDE NOT FOUND
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink">
          City guide not found
        </h1>
        <Link
          to="/"
          className="mt-2 inline-flex items-center gap-2 border border-ink bg-ink text-paper px-5 py-2.5 text-xs font-bold rounded-sm hover:bg-neutral-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </main>
    );
  }

  const directWa = `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
    `Hi Ali, I'm reaching out from your ${city.name} business guide to discuss a website/software project.`
  )}`;

  const allCities = Object.values(citiesData);

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-ink selection:text-acid flex flex-col font-sans">
      <SpinningBadge />

      {/* Top Masthead */}
      <header className="sticky top-0 z-50 w-full bg-acid/95 backdrop-blur-md border-b border-ink">
        <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-baseline gap-1 text-ink">
            <span className="font-display text-2xl sm:text-3xl font-black tracking-[-0.06em]">
              Digital Dukaan
            </span>
            <span className="inline-block w-2 h-2 bg-ink" />
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/#who-we-work-with"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-ink underline underline-offset-4 hover:opacity-75"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>All services</span>
            </Link>

            <a
              href={directWa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-ink text-paper px-4 py-2 text-xs font-bold rounded-sm hover:bg-neutral-800 transition-colors"
            >
              <span>Let’s talk ({city.name})</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO: Full Vibrant Acid Lime (Screenshot 0 style) */}
        <section className="w-full bg-acid text-ink py-12 sm:py-20 border-b border-ink overflow-hidden">
          <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mb-6">
              <p className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-ink/80">
                LOCAL BUSINESS ARCHITECTURE / {city.name.toUpperCase()} · {city.province.toUpperCase()}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
              <div className="lg:col-span-8">
                <h1 className="font-display text-[44px] sm:text-[76px] md:text-[96px] font-black tracking-[-0.07em] leading-[0.9] select-none text-ink">
                  WEB &amp; AI
                  <br />
                  <span className="font-serif-italic font-normal tracking-[-0.02em]">
                    in {city.name}.
                  </span>
                </h1>
              </div>

              <div className="lg:col-span-4 space-y-4">
                <p className="text-base sm:text-lg font-medium text-ink/90 leading-relaxed">
                  {city.heroHeadline}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={directWa}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 text-xs sm:text-sm font-bold rounded-sm shadow-sm transition-all hover:bg-neutral-800"
                  >
                    <span>Discuss your project</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* City Tagline Bar */}
            <div className="pt-6 border-t border-ink/30 font-mono text-xs font-bold text-ink/85 flex flex-wrap items-center justify-between gap-4">
              <span>FOCUS: {city.tagline}</span>
              <span>100% CODE OWNERSHIP · ZERO MONTHLY FEES</span>
            </div>
          </div>
        </section>

        {/* Market Summary & Local Challenges */}
        <section className="w-full bg-paper text-ink py-16 sm:py-20 border-b border-ink">
          <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-4">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-muted">
                  MARKET ANALYSIS
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink">
                  The {city.name} Commercial Landscape.
                </h2>
                <p className="text-base sm:text-lg text-ink/80 leading-relaxed pt-2">
                  {city.marketSummary}
                </p>
              </div>

              <div className="lg:col-span-5 bg-paper-dark p-6 sm:p-8 border border-ink space-y-4">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                  Local Obstacles We Solve in {city.name}
                </h3>
                <ul className="space-y-3 text-sm text-ink/85">
                  {city.localChallenges.map((challenge, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5">
                      <span className="font-bold text-ink">✓</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tailored Solutions 3-Card Grid (Screenshot 1 & 2 inspired) */}
        <section className="w-full bg-paper text-ink py-16 sm:py-24 border-b border-ink">
          <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mb-12">
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-muted mb-3">
                TAILORED ARCHITECTURE
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink">
                Popular Solutions for {city.name} Businesses.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-ink">
              {city.popularSolutions.map((sol, idx) => {
                const isAccent = idx === 1;

                return (
                  <article
                    key={idx}
                    className={`border-r border-b border-ink p-6 sm:p-8 flex flex-col justify-between min-h-[340px] transition-colors ${
                      isAccent ? "bg-acid hover:bg-acid-hover" : "bg-paper-light hover:bg-[#eae8dd]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-6">
                        <span className="font-mono text-xs font-bold text-ink">
                          0{idx + 1}
                        </span>
                        {isAccent ? (
                          <div
                            aria-hidden="true"
                            className="w-5 h-5 bg-ink rotate-45 transform"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="grid h-8 w-8 place-items-center border border-ink text-ink bg-transparent"
                          >
                            <ArrowUpRightIcon className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-2xl font-bold tracking-tight text-ink mb-3">
                        {sol.title}
                      </h3>
                      <p className="text-sm text-ink/80 leading-relaxed">
                        {sol.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-ink/20 flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-ink">
                        {sol.highlight}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Recommended Case Study link */}
            <div className="mt-12 p-6 sm:p-8 bg-paper-dark border border-ink flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase text-muted block mb-1">
                  RECOMMENDED CASE STUDY
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-ink">
                  {city.recommendedCaseStudy.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted">
                  {city.recommendedCaseStudy.category} · Result: {city.recommendedCaseStudy.metric}
                </p>
              </div>

              <Link
                to={`/work/${city.recommendedCaseStudy.id}`}
                className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 text-xs font-bold rounded-sm hover:bg-neutral-800 transition-colors shrink-0"
              >
                <span>Read case study</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Other City Guides Directory (SEO Internal Linking Network) */}
        <section className="w-full bg-paper text-ink py-16 sm:py-20 border-b border-ink">
          <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-muted mb-4">
              GEOGRAPHIC DIRECTORY &amp; GUIDES
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-8">
              Explore solutions in other business hubs:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {allCities.map((c) => (
                <Link
                  key={c.slug}
                  to={`/web-design/${c.slug}`}
                  className={`p-4 border border-ink text-left transition-colors ${
                    c.slug === city.slug
                      ? "bg-acid font-bold"
                      : "bg-paper-light hover:bg-[#eae8dd]"
                  }`}
                >
                  <span className="font-display text-sm font-bold block text-ink">
                    {c.name}
                  </span>
                  <span className="font-mono text-[10px] text-muted block mt-1">
                    {c.province}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Invitation (Screenshot 5 style) */}
        <section className="w-full bg-acid text-ink py-16 sm:py-24 border-b border-ink">
          <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink/80 mb-6">
              START A PROJECT IN {city.name.toUpperCase()}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8">
              <a href={directWa} target="_blank" rel="noreferrer" className="block">
                <h2 className="font-display text-5xl sm:text-8xl font-black tracking-[-0.07em] leading-[0.88] text-ink">
                  LET’S
                  <br />
                  <span className="font-serif-italic font-normal">
                    talk.
                  </span>
                </h2>
              </a>

              <a
                href={directWa}
                target="_blank"
                rel="noreferrer"
                className="grid h-20 w-20 sm:h-28 sm:w-28 place-items-center bg-ink text-acid rounded-sm shadow-md hover:scale-105 transition-transform"
              >
                <ArrowUpRightIcon className="w-8 h-8 sm:w-10 sm:h-10" />
              </a>
            </div>

            <p className="text-base sm:text-lg font-medium text-ink/90 pt-6 border-t border-ink/30 max-w-xl">
              Tell me about your business in {city.name}. We will review your counter billing or online presence and outline a clean technical blueprint within 1 hour.
            </p>
          </div>
        </section>
      </main>

      <EndcapFooter />
    </div>
  );
}
