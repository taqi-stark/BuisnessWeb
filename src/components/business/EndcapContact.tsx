import React, { useState } from "react";
import { ArrowUpRightIcon } from "./EndcapIcons";
import { businessData } from "@/content/business";

export function EndcapContact() {
  const [formName, setFormName] = useState("");
  const [formContact, setFormContact] = useState("");
  const [formService, setFormService] = useState("Website Design");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = `Hi Ali, I'm reaching out from your website portfolio.%0A%0A*Name:* ${encodeURIComponent(
      formName
    )}%0A*Contact:* ${encodeURIComponent(formContact)}%0A*Service:* ${encodeURIComponent(
      formService
    )}%0A*Message:* ${encodeURIComponent(formMessage)}`;

    const waLink = `https://wa.me/${businessData.profile.whatsappNumber}?text=${payload}`;
    window.open(waLink, "_blank");
    setIsSubmitted(true);
  };

  const directEmail = `mailto:${businessData.profile.email}?subject=Project%20Inquiry%20via%20Digital%20Dukaan`;
  const directWa = `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
    businessData.profile.defaultWhatsAppMessage
  )}`;

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
          <a
            href={directWa}
            target="_blank"
            rel="noreferrer"
            className="group block"
            aria-label="Let's talk on WhatsApp"
          >
            <h2 className="font-display text-5xl sm:text-8xl md:text-9xl lg:text-[132px] font-black tracking-[-0.07em] leading-[0.88] select-none text-ink group-hover:text-neutral-900 transition-colors">
              LET’S
              <br />
              <span className="font-serif-italic font-normal tracking-[-0.03em]">
                talk.
              </span>
            </h2>
          </a>

          {/* Big black square button with arrow (Screenshot 5) */}
          <a
            href={directWa}
            target="_blank"
            rel="noreferrer"
            aria-label="Start conversation"
            className="group grid h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 place-items-center bg-ink text-acid rounded-sm shadow-md transition-all hover:bg-neutral-800 hover:scale-105"
          >
            <ArrowUpRightIcon className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
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
            <a
              href={directWa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 bg-ink text-paper px-6 py-3.5 text-xs sm:text-sm font-bold rounded-sm shadow-sm transition-all hover:bg-neutral-800"
            >
              <span>Let’s talk</span>
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>

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

        {/* Clean Architectural Quick Inquiry Form */}
        <div className="mt-12 sm:mt-16 bg-paper p-6 sm:p-10 border border-ink">
          <h3 className="font-display text-2xl font-bold tracking-tight text-ink mb-2">
            Send an instant project brief
          </h3>
          <p className="text-sm text-muted mb-6">
            Tell me about your business and goals. We'll outline the cleanest technical path forward.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[11px] font-bold uppercase text-ink mb-1.5">
                  Your Name / Business
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. M. Subhan"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full bg-paper-light border border-ink px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-ink"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] font-bold uppercase text-ink mb-1.5">
                  WhatsApp or Phone
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +92 300 1234567"
                  value={formContact}
                  onChange={(e) => setFormContact(e.target.value)}
                  className="w-full bg-paper-light border border-ink px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-ink"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[11px] font-bold uppercase text-ink mb-1.5">
                  Solution Type
                </label>
                <select
                  value={formService}
                  onChange={(e) => setFormService(e.target.value)}
                  className="w-full bg-paper-light border border-ink px-4 py-3 text-sm text-ink focus:outline-none focus:ring-1 focus:ring-ink"
                >
                  <option>Business Website &amp; Portal</option>
                  <option>Retail POS &amp; Inventory Billing</option>
                  <option>Digital Store &amp; WhatsApp Commerce</option>
                  <option>Custom Business Software</option>
                  <option>Digital Wedding Card / Invitations</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[11px] font-bold uppercase text-ink mb-1.5">
                  Direct Location
                </label>
                <input
                  type="text"
                  readOnly
                  value="Punjab, Pakistan · Nationwide & Remote"
                  className="w-full bg-paper-dark border border-ink px-4 py-3 text-sm text-ink/70 cursor-not-allowed"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[11px] font-bold uppercase text-ink mb-1.5">
                Project Notes or Questions
              </label>
              <textarea
                rows={3}
                placeholder="Describe your current setup or what you need built..."
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                className="w-full bg-paper-light border border-ink px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-ink resize-none"
              />
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3.5 text-xs sm:text-sm font-bold rounded-sm transition-all hover:bg-neutral-800"
              >
                <span>Transmit inquiry via WhatsApp</span>
                <ArrowUpRightIcon className="w-4 h-4" />
              </button>

              <span className="font-mono text-xs text-muted">
                Typical reply time: within 1 hour
              </span>
            </div>

            {isSubmitted && (
              <p className="text-xs text-ink font-semibold pt-2">
                ✓ WhatsApp opened. We look forward to reviewing your requirements!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
