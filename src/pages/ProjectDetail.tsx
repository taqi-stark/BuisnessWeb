import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ExternalLink, MessageCircle } from "lucide-react";
import { projectsData } from "@/content/projects";
import { businessData } from "@/content/business";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData.find((item) => item.id === projectId);
  if (!project) return <main className="detail-missing"><Link to="/#projects"><ArrowLeft size={16} /> Back to selected work</Link><h1>Project not found</h1></main>;
  const inquiry = `https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(`Hi Ali, I viewed the ${project.title} project and would like to discuss something similar.`)}`;
  return <div className="portfolio-site detail-site">
    <header className="site-nav detail-nav"><Link className="site-brand" to="/"><span className="brand-mark">AT</span><span><b>Ali Taqi</b><small>Independent developer</small></span></Link><Link className="detail-back" to="/#projects"><ArrowLeft size={15} />Selected work</Link><a className="nav-cta" href={project.liveUrl} target="_blank" rel="noreferrer">Open live project<ExternalLink size={14} /></a></header>
    <main className="detail-main">
      <section className="snap-section detail-hero">
        <div className="detail-copy"><div className="eyebrow"><span className="eyebrow-dot" />{project.category}</div><h1>{project.title}</h1><p>{project.tagline}</p><div className="detail-actions"><a className="button button-gold" href={project.liveUrl} target="_blank" rel="noreferrer">View the live project<ExternalLink size={15} /></a><a className="button detail-contact" href={inquiry} target="_blank" rel="noreferrer"><MessageCircle size={15} />Discuss something similar</a></div><div className="detail-address">LIVE PREVIEW <span>{project.liveUrl.replace("https://", "")}</span></div></div>
        <div className="detail-preview"><img src={project.image} alt={`${project.title} preview`} /><span className="preview-index">PROJECT / {project.id.toUpperCase()}</span></div>
        <a href="#overview" className="scroll-cue">Project overview <span /></a>
      </section>
      <section id="overview" className="snap-section detail-overview">
        <div className="overview-copy"><div className="eyebrow"><span className="eyebrow-dot" />The thinking behind it</div><h2>Built around a real need.</h2><p>{project.description}</p><div className="detail-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="overview-back" href="/#projects">Back to selected work<ArrowLeft size={14} /></a></div>
        <div className="overview-side"><div className="metric-grid">{project.metrics.map((metric) => <article className="detail-metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></article>)}</div><div className="feature-list"><h3>Project features</h3>{project.features.slice(0, 4).map((feature) => <div key={feature}><Check size={15} /><span>{feature}</span></div>)}</div><a className="button button-gold overview-live" href={project.liveUrl} target="_blank" rel="noreferrer">Visit the live project<ArrowUpRight size={15} /></a></div>
      </section>
    </main>
  </div>;
}
