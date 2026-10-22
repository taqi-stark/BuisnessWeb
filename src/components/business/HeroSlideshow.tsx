import { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { businessData } from "@/content/business";

const slides = [
  { title: "Websites that turn visitors into customers", subtitle: "Build trust online and make it easy for customers to find, understand, and contact your business.", image: "/projects/real_estate.webp", tag: "Business websites", features: ["Mobile-first design", "Local SEO setup", "WhatsApp inquiries"] },
  { title: "Simple systems for smoother daily work", subtitle: "Replace paper records with clear billing, inventory, and reporting tools built around your workflow.", image: "/projects/pos_system.webp", tag: "POS & inventory software", features: ["Fast checkout", "Live stock tracking", "Daily reports"] },
  { title: "Online stores made for local customers", subtitle: "Showcase your products and let customers place orders directly through a simple online experience.", image: "/projects/whatsapp_integration.webp", tag: "E-commerce & WhatsApp", features: ["Product catalogs", "WhatsApp ordering", "Mobile shopping"] },
  { title: "Digital invitations made personal", subtitle: "Give guests a beautiful invitation they can open and share online.", image: "/projects/digital_cards_cover.svg", tag: "Digital cards", features: ["Personal event details", "Interactive design", "Shareable link"] },
];

export const HeroSlideshow = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((i) => (i + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);
  const slide = slides[active];
  const whatsapp = `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent("Hi Ali, I'd like to discuss a digital solution for my business.")}`;

  return <section id="top" className="relative isolate min-h-[690px] h-[calc(100svh-76px)] max-h-[900px] overflow-hidden bg-slate-950 text-white">
    {slides.map((item, index) => <div key={item.tag} aria-hidden="true" className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${active === index ? "opacity-100" : "opacity-0"}`}><img src={item.image} alt="" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/25" /></div>)}
    <div className="mx-auto flex h-full max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-12">
      <div className="max-w-3xl" key={slide.tag}>
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-200"><Sparkles className="h-4 w-4" />{slide.tag}</span>
        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">{slide.title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-xl">{slide.subtitle}</p>
        <div className="mt-7 flex flex-wrap gap-2">{slide.features.map((feature) => <span key={feature} className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-slate-950/40 px-3 py-2 text-xs font-semibold text-slate-100"><CheckCircle2 className="h-4 w-4 text-emerald-400" />{feature}</span>)}</div>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-emerald-500 px-6 py-4 font-bold text-white transition hover:bg-emerald-400"><MessageCircle className="h-5 w-5" />Discuss your project</a>
          <a href="#projects" className="inline-flex items-center justify-center gap-2 border border-white/35 bg-white/10 px-6 py-4 font-bold text-white transition hover:bg-white/20">Browse demo projects<ArrowDown className="h-4 w-4" /></a>
        </div>
      </div>
    </div>
    <button aria-label="Previous service" onClick={() => setActive((active - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-slate-950/40 hover:bg-slate-950/80"><ArrowLeft className="h-5 w-5" /></button>
    <button aria-label="Next service" onClick={() => setActive((active + 1) % slides.length)} className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-slate-950/40 hover:bg-slate-950/80"><ArrowRight className="h-5 w-5" /></button>
    <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2">{slides.map((item, index) => <button key={item.tag} aria-label={`Show ${item.tag}`} onClick={() => setActive(index)} className={`h-2.5 rounded-full transition-all ${active === index ? "w-9 bg-amber-400" : "w-2.5 bg-white/50"}`} />)}</div>
  </section>;
};
