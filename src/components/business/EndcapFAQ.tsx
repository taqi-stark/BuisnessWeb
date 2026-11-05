import React, { useState } from "react";
import { ArrowUpRightIcon } from "./EndcapIcons";
import { businessData } from "@/content/business";

const faqItems = [
  {
    q: "How much does a custom business website or retail POS system cost?",
    a: "Business websites start from PKR 35,000 (7–10 days turnaround), while retail POS & inventory systems start from PKR 55,000 (2–3 weeks turnaround). All pricing is fixed and agreed upon before work begins — zero surprise invoices or hourly overages.",
  },
  {
    q: "Are there any recurring monthly subscription or platform fees?",
    a: "No. You receive 100% source code and database ownership upon project delivery. Unlike SaaS platforms that charge monthly fees or commissions per order, Digital Dukaan solutions are self-owned with 0 PKR monthly platform cuts.",
  },
  {
    q: "Does the retail POS system work with thermal printers and barcode scanners?",
    a: "Yes. It supports standard 80mm and 58mm thermal receipt printers, USB and wireless handheld barcode scanners, electronic cash drawers, and customer Khata ledgers. Cashiers can complete checkout in under 2 seconds.",
  },
  {
    q: "Can overseas buyers from the UK, UAE, or US use our portal to inquire?",
    a: "Yes. Our real estate property portals and commerce platforms are built specifically for Pakistani businesses catering to overseas diaspora buyers. Every listing includes a 1-tap WhatsApp inquiry button that automatically attaches the property size (Marla/Kanal), price, and society link.",
  },
  {
    q: "What happens after the website or software is launched?",
    a: "We provide hands-on cashier and admin staff training, domain and DNS configuration, production deployment, and direct post-launch technical support with 1-on-1 access to developer Ali Taqi.",
  },
  {
    q: "Can our existing domain name and email accounts stay where they are?",
    a: "Yes. We can point your domain name to the new website or web app without touching your existing email inbox or domain registrar.",
  },
];

export function EndcapFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const directWa = `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
    "Hi Ali, I have a specific question about building a website or software for my business."
  )}`;

  return (
    <section
      id="faq"
      className="w-full bg-paper text-ink py-16 sm:py-24 border-b border-ink"
    >
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-muted mb-4">
              COMMON INQUIRIES &amp; AEO
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.95] text-ink">
              ANSWERS &amp;
              <br />
              <span className="font-serif-italic font-normal tracking-[-0.02em]">
                details.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-md">
              Clear, factual answers to what clients ask before hiring us. No technical jargon.
            </p>
            <a
              href={directWa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-paper px-4 py-2 text-xs font-bold rounded-sm shrink-0 transition-colors hover:bg-neutral-800"
            >
              <span>Ask a question</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Accordion List with 1px black borders */}
        <div className="border-t border-ink">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border-b border-ink transition-colors duration-150"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-6 sm:py-7 px-2 sm:px-4 flex items-center justify-between text-left focus:outline-none focus-visible:bg-[#e9ebdd]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-2xl font-bold tracking-tight text-ink pr-6">
                    {item.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center border border-ink font-mono text-sm font-bold transition-transform duration-200 ${
                      isOpen ? "bg-ink text-acid rotate-45" : "bg-transparent text-ink"
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-2 sm:px-4 pb-6 pt-1 text-sm sm:text-base text-ink/85 leading-relaxed max-w-3xl">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
