import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Share2,
} from "lucide-react";
import { ArrowUpRightIcon } from "@/components/business/EndcapIcons";
import { businessData } from "@/content/business";
import { EndcapFooter } from "@/components/business/EndcapFooter";
import { SpinningBadge } from "@/components/business/SpinningBadge";

// Social Media Channels
const socialChannels = [
  {
    name: "WhatsApp Direct",
    handle: "+92 344 8280359",
    url: `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
      businessData.profile.defaultWhatsAppMessage
    )}`,
    desc: "Fastest response (under 1 hour)",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "Ali Taqi · Digital Dukaan",
    url: "https://www.linkedin.com/in/ali-taqi/",
    desc: "Connect professionally & follow case studies",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    handle: "github.com/taqi-stark",
    url: "https://github.com/taqi-stark",
    desc: "Inspect open-source code & repositories",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@digitaldukaan.dev",
    url: "https://www.instagram.com/",
    desc: "UI designs, design teardowns & stories",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "Digital Dukaan Studio",
    url: "https://www.facebook.com/",
    desc: "Updates, customer reviews & announcements",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    handle: "@digitaldukaan",
    url: "https://x.com/",
    desc: "Tech stack, performance tips & web engineering",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [formName, setFormName] = useState("");
  const [formContact, setFormContact] = useState("");
  const [formService, setFormService] = useState("Business Website & Portal");
  const [formLocation, setFormLocation] = useState("Lahore, Pakistan");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Digital Dukaan | Direct Project Consultation";
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = `Hi Ali, I'm reaching out from your Digital Dukaan Contact Page.%0A%0A*Name / Business:* ${encodeURIComponent(
      formName
    )}%0A*Phone / WhatsApp:* ${encodeURIComponent(
      formContact
    )}%0A*Solution Needed:* ${encodeURIComponent(
      formService
    )}%0A*Location:* ${encodeURIComponent(
      formLocation
    )}%0A*Project Scope / Notes:* ${encodeURIComponent(formMessage)}`;

    const waLink = `https://wa.me/${businessData.profile.whatsappNumber}?text=${payload}`;
    window.open(waLink, "_blank");
    setIsSubmitted(true);
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent(`Project Brief: ${formService} - ${formName || "New Client"}`);
    const body = encodeURIComponent(
      `Hi Ali,\n\nI would like to discuss a project with Digital Dukaan.\n\nName / Business: ${formName}\nPhone: ${formContact}\nSolution: ${formService}\nLocation: ${formLocation}\n\nProject Scope & Notes:\n${formMessage}\n`
    );
    window.location.href = `mailto:${businessData.profile.email}?subject=${subject}&body=${body}`;
  };

  const directWaUrl = `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
    businessData.profile.defaultWhatsAppMessage
  )}`;

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-ink selection:text-acid flex flex-col font-sans">
      <SpinningBadge />

      {/* Top Masthead */}
      <header className="sticky top-0 z-50 w-full bg-acid/95 backdrop-blur-md border-b border-ink">
        <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-baseline gap-1 text-ink" aria-label="Digital Dukaan home">
            <span className="font-display text-2xl sm:text-3xl font-black tracking-[-0.06em]">
              Digital Dukaan
            </span>
            <span className="inline-block w-2 h-2 bg-ink" />
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-ink underline underline-offset-4 hover:opacity-75"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Home</span>
            </Link>

            <a
              href={directWaUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-ink text-paper px-4 py-2 text-xs font-bold rounded-sm hover:bg-neutral-800 transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO BANNER: Full Vibrant Acid Lime (Screenshot 5 / Endcap style) */}
        <section className="w-full bg-acid text-ink py-12 sm:py-20 border-b border-ink overflow-hidden">
          <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mb-6">
              <p className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-ink/80">
                DIRECT INQUIRY &amp; ARCHITECTURAL CONSULTATION
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-[50px] sm:text-[84px] md:text-[104px] font-black tracking-[-0.07em] leading-[0.88] select-none text-ink">
                  LET’S
                  <br />
                  <span className="font-serif-italic font-normal tracking-[-0.03em]">
                    talk.
                  </span>
                </h1>
              </div>

              <div className="lg:col-span-4 space-y-4">
                <p className="text-base sm:text-lg font-medium text-ink/90 leading-relaxed">
                  A website, a retail POS billing system, or custom business software.
                  We reply within an hour during business hours with a clear, fixed technical plan.
                </p>
                <div className="flex items-center gap-4 pt-1 font-mono text-xs font-bold text-ink/80">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Response &lt; 1hr
                  </span>
                  <span>·</span>
                  <span>Direct 1-on-1 with Ali</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN INTERACTIVE SECTION: Form + Social Media & Direct Channels */}
        <section className="w-full bg-paper text-ink py-16 sm:py-24 border-b border-ink">
          <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* LEFT COLUMN: The Project Brief Form (from Image 1) */}
              <div className="lg:col-span-7 bg-paper-light p-6 sm:p-10 border border-ink">
                <div className="mb-8">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    PROJECT INQUIRY FORM
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                    Send an instant project brief
                  </h2>
                  <p className="text-sm text-muted mt-2 leading-relaxed">
                    Tell me about your business and goals. We'll outline the cleanest technical path forward with upfront milestone pricing.
                  </p>
                </div>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-[11px] font-bold uppercase text-ink mb-2">
                        Your Name / Business *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. M. Subhan (Subhania Real Estate)"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full bg-paper border border-ink px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] font-bold uppercase text-ink mb-2">
                        WhatsApp or Phone *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. +92 344 8280359"
                        value={formContact}
                        onChange={(e) => setFormContact(e.target.value)}
                        className="w-full bg-paper border border-ink px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-[11px] font-bold uppercase text-ink mb-2">
                        Solution Type
                      </label>
                      <select
                        value={formService}
                        onChange={(e) => setFormService(e.target.value)}
                        className="w-full bg-paper border border-ink px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ink"
                      >
                        <option>Business Website &amp; Portal (From PKR 35,000)</option>
                        <option>Retail POS &amp; Inventory Billing (From PKR 55,000)</option>
                        <option>Digital Store &amp; WhatsApp Commerce (From PKR 48,000)</option>
                        <option>Custom Business Software (Custom Scope)</option>
                        <option>Digital Wedding Card / Invitations (Interactive)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] font-bold uppercase text-ink mb-2">
                        Location / Market
                      </label>
                      <select
                        value={formLocation}
                        onChange={(e) => setFormLocation(e.target.value)}
                        className="w-full bg-paper border border-ink px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ink"
                      >
                        <option>Lahore, Punjab</option>
                        <option>Islamabad / Rawalpindi</option>
                        <option>Sargodha &amp; Khushab</option>
                        <option>Faisalabad, Punjab</option>
                        <option>Karachi, Sindh</option>
                        <option>Overseas (UAE / UK / USA Diaspora)</option>
                        <option>Other / Remote</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] font-bold uppercase text-ink mb-2">
                      Project Notes or Questions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe what you want built, your current billing or website problems, or your preferred launch date..."
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full bg-paper border border-ink px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink resize-none"
                    />
                  </div>

                  {/* Dual Action Submit */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-ink text-paper px-6 py-3.5 text-xs sm:text-sm font-bold rounded-sm transition-all hover:bg-neutral-800"
                    >
                      <span>Transmit inquiry via WhatsApp</span>
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleEmailSubmit}
                      className="inline-flex items-center justify-center gap-2 border border-ink bg-transparent text-ink px-6 py-3.5 text-xs sm:text-sm font-bold rounded-sm transition-all hover:bg-ink/10"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Direct Email</span>
                    </button>
                  </div>

                  {isSubmitted && (
                    <div className="p-4 bg-acid border border-ink flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-ink shrink-0" />
                      <p className="text-xs sm:text-sm font-bold text-ink">
                        Inquiry transmitted via WhatsApp! Ali will review your requirements and respond shortly.
                      </p>
                    </div>
                  )}

                  <p className="font-mono text-[11px] text-muted pt-2">
                    🔒 Zero spam. We only use your details to review your project. Direct 1-on-1 access.
                  </p>
                </form>
              </div>

              {/* RIGHT COLUMN: Social Media Page Icons & Communication Channels */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                    CONNECT DIRECTLY
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                    Official Pages &amp; Channels
                  </h3>
                  <p className="text-sm text-muted mt-2">
                    Follow Digital Dukaan across our official social profiles, check source repositories, or connect directly on your preferred app.
                  </p>
                </div>

                {/* Social Media Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {socialChannels.map((channel, sIdx) => (
                    <a
                      key={sIdx}
                      href={channel.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group p-4 border border-ink bg-paper-light flex items-start gap-3.5 transition-colors hover:bg-acid"
                    >
                      <div className="grid h-9 w-9 shrink-0 place-items-center border border-ink bg-paper text-ink group-hover:bg-ink group-hover:text-acid transition-colors">
                        {channel.icon}
                      </div>
                      <div className="min-w-0">
                        <span className="font-display text-sm font-bold text-ink block truncate group-hover:text-neutral-900">
                          {channel.name}
                        </span>
                        <span className="font-mono text-[11px] text-muted block truncate group-hover:text-ink/80">
                          {channel.handle}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Studio Direct Contact Box */}
                <div className="p-6 bg-paper-dark border border-ink space-y-4">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                    Digital Dukaan Studio Details
                  </h4>

                  <div className="space-y-3 text-xs sm:text-sm text-ink/85 font-medium">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-ink shrink-0" />
                      <a
                        href={`mailto:${businessData.profile.email}`}
                        className="underline hover:opacity-75"
                      >
                        {businessData.profile.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-ink shrink-0" />
                      <a
                        href={`tel:+${businessData.profile.whatsappNumber}`}
                        className="underline hover:opacity-75"
                      >
                        {businessData.profile.whatsappDisplay}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-ink shrink-0" />
                      <span>Punjab, Pakistan · Serving Nationwide &amp; Remote</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-ink shrink-0" />
                      <span>Mon – Sat: 9:00 AM – 9:00 PM PKT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <EndcapFooter />
    </div>
  );
}
