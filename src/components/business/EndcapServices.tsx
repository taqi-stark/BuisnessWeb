import React, { useState } from "react";
import { ArrowUpRightIcon } from "./EndcapIcons";
import { businessData } from "@/content/business";

const servicesList = [
  {
    n: "01",
    title: "Business Websites & Portals",
    price: "From PKR 35,000",
    timeline: "7–10 Days",
    summary:
      "A fast, mobile-first digital flagship engineered for Google search prominence and instant customer inquiries.",
    deliverables: [
      "Custom responsive architecture (4G network optimized)",
      "Local SEO & Google Maps business profile integration",
      "1-tap direct WhatsApp lead routing buttons",
      "Easy management panel for instant content updates",
    ],
  },
  {
    n: "02",
    title: "Retail POS & Inventory Billing",
    price: "From PKR 55,000",
    timeline: "2–3 Weeks",
    summary:
      "Complete barcode billing counter, automated stock deduction, and Khata ledger in an offline-resilient system.",
    deliverables: [
      "Sub-2-second barcode scanner cashier checkout",
      "Automated inventory deduction & low-stock alerts",
      "80mm & 58mm thermal receipt printer slip support",
      "Daily gross profit margin & customer Khata ledger",
    ],
  },
  {
    n: "03",
    title: "WhatsApp Stores & Commerce",
    price: "From PKR 48,000",
    timeline: "10–14 Days",
    summary:
      "Frictionless product discovery paired with pre-formatted WhatsApp cart ordering and zero monthly commissions.",
    deliverables: [
      "Mobile-first product catalog with category search",
      "Structured WhatsApp order payload with full item totals",
      "Cash on Delivery & Direct Bank checkout flows",
      "Zero monthly subscription cuts or percentage fees",
    ],
  },
  {
    n: "04",
    title: "Custom Software & Digital Suites",
    price: "Tailored Scope",
    timeline: "Custom",
    summary:
      "Bespoke internal operations software, property listing databases, and interactive wedding invitation suites.",
    deliverables: [
      "Tailored specifically around your real business workflow",
      "Role-based staff & manager permission levels",
      "Interactive digital wedding cards with RSVP envelopes",
      "100% client source code ownership & ongoing care",
    ],
  },
];

export function EndcapServices() {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const whatsappInquiry = (serviceName: string) =>
    `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
      `Hi Ali, I'm interested in discussing your ${serviceName} service.`
    )}`;

  return (
    <section
      id="services"
      className="w-full bg-paper text-ink py-16 sm:py-24 border-b border-ink"
    >
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-muted mb-4">
              CAPABILITIES &amp; DELIVERABLES
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.95] text-ink">
              WHAT WE
              <br />
              <span className="font-serif-italic font-normal tracking-[-0.02em]">
                build.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-md">
              Clear deliverables, fixed pricing, and full code ownership. No recurring vendor lock-in or surprise fees.
            </p>
          </div>
        </div>

        {/* Numbered Row Accordion / Directory in Endcap architectural style */}
        <div className="border-t border-ink">
          {servicesList.map((service, index) => {
            const isHovered = activeRow === index;

            return (
              <div
                key={service.n}
                onMouseEnter={() => setActiveRow(index)}
                onMouseLeave={() => setActiveRow(null)}
                className={`border-b border-ink transition-colors duration-200 ${
                  isHovered ? "bg-[#e9ebdd]" : "bg-transparent"
                }`}
              >
                <div className="py-7 sm:py-9 px-3 sm:px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Index */}
                    <div className="lg:col-span-1">
                      <span className="font-mono text-xs sm:text-sm font-bold text-ink">
                        {service.n}
                      </span>
                    </div>

                    {/* Service Title & Scope */}
                    <div className="lg:col-span-5 space-y-2">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed max-w-md">
                        {service.summary}
                      </p>
                      <div className="flex items-center gap-4 pt-1 font-mono text-xs text-ink/80">
                        <span className="font-bold">{service.price}</span>
                        <span>·</span>
                        <span>{service.timeline}</span>
                      </div>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="lg:col-span-5">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-ink/85">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="font-bold text-ink">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Arrow */}
                    <div className="lg:col-span-1 flex lg:justify-end items-center">
                      <a
                        href={whatsappInquiry(service.title)}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Inquire about ${service.title}`}
                        className={`grid h-10 w-10 place-items-center border border-ink rounded-sm transition-all ${
                          isHovered
                            ? "bg-ink text-acid translate-x-1"
                            : "bg-transparent text-ink"
                        }`}
                      >
                        <ArrowUpRightIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
