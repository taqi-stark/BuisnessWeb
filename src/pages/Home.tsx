import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Code2, Globe2, Mail, Menu, MessageCircle, Monitor, Phone, ShoppingBag, X } from "lucide-react";
import { Link } from "react-router-dom";
import { projectsData } from "@/content/projects";
import { businessData } from "@/content/business";

const slides = [
  { label: "Web design & development", title: "A better first impression starts online.", copy: "Fast, considered websites that help your business earn trust and turn visits into conversations.", image: "/projects/real_estate.webp", icon: Globe2 },
  { label: "Business software", title: "Make the everyday work feel effortless.", copy: "Purpose-built tools for billing, inventory, customer records, and the work between them.", image: "/projects/pos_system.webp", icon: Monitor },
  { label: "Commerce & automation", title: "Make it simpler to do business with you.", copy: "Clear product experiences and practical ordering flows, designed around your customers.", image: "/projects/whatsapp_integration.webp", icon: ShoppingBag },
  { label: "Digital invitation cards", title: "Make every invitation feel personal.", copy: "Beautiful, interactive digital cards that make sharing life’s special moments simple.", image: "/projects/digital_cards_cover.svg", icon: Mail },
];
const services = [
  { n: "01", title: "Business websites", price: "From PKR 35,000", copy: "A polished, mobile-first home for your business.", icon: Globe2 },
  { n: "02", title: "POS & inventory", price: "From PKR 55,000", copy: "Billing, stock, and sales reporting in one place.", icon: Monitor },
  { n: "03", title: "Online stores", price: "From PKR 48,000", copy: "Product discovery and easy local checkout.", icon: ShoppingBag },
  { n: "04", title: "Digital invitation cards", price: "Designed for your event", copy: "Personal, interactive invitations guests can open online.", icon: Mail },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((i) => (i + 1) % slides.length), 7000);
    return () => window.clearInterval(timer);
  }, []);
  const whatsapp = `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(businessData.profile.defaultWhatsAppMessage)}`;
  const ActiveIcon = slides[active].icon;
  const featuredProject = projectsData[selectedProjectIndex];

  return <div className="portfolio-site">
    <header className="site-nav">
      <a className="site-brand" href="#home" aria-label="Digital Dukaan home"><span className="brand-mark">DD</span><span><b>Digital Dukaan</b><small>Websites & software</small></span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Selected work</a><a href="#services" onClick={() => setMenuOpen(false)}>What I do</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
      <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} />Let’s talk</a>
    </header>

    <main className="snap-main">
      <section id="home" className="snap-section hero-section">
        <div className="hero-copy" key={active}>
          <div className="eyebrow"><span className="eyebrow-dot" />Independent web & software developer</div>
          <div className="service-label"><ActiveIcon size={15} />{slides[active].label}</div>
          <h1>{slides[active].title}</h1><p>{slides[active].copy}</p>
          <div className="hero-actions"><a className="button button-gold" href={whatsapp} target="_blank" rel="noreferrer">Start a conversation<ArrowUpRight size={16} /></a><a className="text-link" href="#projects">Explore selected work<ArrowDown size={15} /></a></div>
          <div className="hero-pagination" aria-label="Service slides">{slides.map((slide, index) => <button key={slide.label} aria-label={`Show ${slide.label}`} aria-current={index === active} onClick={() => setActive(index)}><span /></button>)}</div>
        </div>
        <div className="hero-visual" key={`visual-${active}`}><div className="visual-image"><img src={slides[active].image} alt={`${slides[active].label} preview`} loading={active === 0 ? "eager" : "lazy"} fetchPriority={active === 0 ? "high" : "auto"} decoding="async" /></div><div className="visual-caption"><span><i />Currently building thoughtful digital products</span><span>PAKISTAN · AVAILABLE WORLDWIDE</span></div><div className="visual-index">0{active + 1}<span> / 0{slides.length}</span></div></div>
        <a href="#projects" className="scroll-cue">Scroll to explore <span /></a>
      </section>

      <section id="projects" className="snap-section work-section">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-dot" />Selected work</div><h2>Made to work beautifully.</h2></div><p>A few examples of websites and software built to solve real business problems.</p></div>
        <div className="catalog-layout">
          <article className="featured-work">
            <Link to={`/work/${featuredProject.id}`} className="featured-image" aria-label={`View ${featuredProject.title}`}>
              <img src={featuredProject.image} alt={`${featuredProject.title} preview`} loading="lazy" decoding="async" />
              <span className="featured-image-index">PROJECT / 0{selectedProjectIndex + 1}</span>
            </Link>
            <div className="featured-details"><div><span className="work-category">{featuredProject.category}</span><h3>{featuredProject.title}</h3></div><Link to={`/work/${featuredProject.id}`} className="featured-link">View project<ArrowUpRight size={15} /></Link></div>
          </article>
          <nav className="catalog-list" aria-label="Choose a project">
            {projectsData.map((project, index) => <button key={project.id} type="button" aria-pressed={selectedProjectIndex === index} onClick={() => setSelectedProjectIndex(index)} className={`catalog-option${selectedProjectIndex === index ? " is-selected" : ""}`}>
              <span className="catalog-number">0{index + 1}</span><span className="catalog-option-copy"><small>{project.category}</small><strong>{project.title}</strong></span><ArrowRight size={16} />
            </button>)}
          </nav>
        </div>
        <div className="section-foot"><span>Selected demos · More projects coming soon</span><a href="#services">Explore services<ArrowDown size={14} /></a></div>
      </section>

      <section id="services" className="snap-section services-section">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-dot" />A clear, focused approach</div><h2>Digital work, done with care.</h2></div><p>One point of contact from the first conversation to launch—and support after.</p></div>
        <div className="services-grid">{services.map(({ n, title, price, copy, icon: Icon }) => <article className="service-card" key={n}><div className="service-card-top"><span>{n} / 04</span><Icon size={20} /></div><div><h3>{title}</h3><p>{copy}</p></div><div className="service-card-foot"><span>{price}</span><Check size={16} /></div></article>)}</div>
        <div className="approach-strip"><span><b>01</b> Understand the need</span><i /><span><b>02</b> Agree on scope</span><i /><span><b>03</b> Build & refine</span><i /><span><b>04</b> Launch with support</span></div>
      </section>

      <section id="contact" className="snap-section contact-section">
        <div className="contact-inner"><div className="eyebrow"><span className="eyebrow-dot" />Have something in mind?</div><h2>Let’s make it<br /><em>work better.</em></h2><p>Tell me what you’re building or what’s slowing your business down. We’ll figure out the right next step together.</p><a className="button button-gold" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} />Start a WhatsApp conversation<ArrowUpRight size={16} /></a><div className="contact-details"><a href={`mailto:${businessData.profile.email}`}>{businessData.profile.email}</a><a href="tel:+923448280359"><Phone size={14} />{businessData.profile.whatsappDisplay}</a></div></div>
        <div className="contact-aside"><Code2 size={24} /><span>Independent by design.</span><p>Thoughtful websites and practical software for ambitious businesses.</p><small>BASED IN PAKISTAN · WORKING EVERYWHERE</small></div>
        <footer className="site-footer"><span>© {new Date().getFullYear()} Digital Dukaan</span><span>Designed & built with intention</span><a href="#home">Back to top ↑</a></footer>
      </section>
    </main>
  </div>;
}
