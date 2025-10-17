import { useEffect } from 'react';
import './IndustryPages.css';

const TechnologySaas = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const solutions = [
    {
      title: "Cloud Infrastructure",
      description: "Kubernetes, autoscaling, IaC, multi-region deployments, and cost optimization for reliability.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <ellipse cx="100" cy="95" rx="55" ry="30" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="60" y="120" width="80" height="12" rx="6" fill="#60a5fa"/>
          <rect x="70" y="136" width="60" height="10" rx="5" fill="#93c5fd"/>
        </svg>
      )
    },
    {
      title: "API Platforms",
      description: "Design-first APIs, gateways, auth, rate limits, and observability for partner & public APIs.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <rect x="40" y="60" width="120" height="80" rx="10" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
          <circle cx="70" cy="100" r="10" fill="#3b82f6"/>
          <circle cx="130" cy="100" r="10" fill="#60a5fa"/>
          <line x1="80" y1="100" x2="120" y2="100" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Microservices & Data",
      description: "Event-driven services, message queues, CDC, and data lakes with strong contracts and SLAs.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <rect x="40" y="60" width="40" height="30" rx="6" fill="#E8F1FF" stroke="#60a5fa"/>
          <rect x="120" y="60" width="40" height="30" rx="6" fill="#E8F1FF" stroke="#60a5fa"/>
          <rect x="40" y="110" width="40" height="30" rx="6" fill="#E8F1FF" stroke="#60a5fa"/>
          <rect x="120" y="110" width="40" height="30" rx="6" fill="#E8F1FF" stroke="#60a5fa"/>
          <path d="M80 75 H120 M80 125 H120" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "DevOps & SRE",
      description: "CI/CD, blue-green/canary, IaC pipelines, monitoring, on-call, and error budgets for uptime.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <circle cx="80" cy="100" r="25" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
          <circle cx="120" cy="100" r="25" fill="#E8F1FF" stroke="#60a5fa" strokeWidth="2"/>
          <path d="M70 100 h60" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  const benefits = [
    "Secure-by-default architecture & secrets management",
    "Automated testing, CI/CD, and release strategies",
    "Deep observability: logs, traces, metrics, SLOs",
    "Multi-tenant billing, usage, and metering",
    "Data governance & privacy compliance baked in",
    "Scales from MVP to multi-region"
  ];

  return (
    <div className="industry-page">
      <section className="industry-hero">
        <div className="industry-hero-container">
          <a href="/#industries" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            Back to Industries
          </a>
          <span className="industry-badge">TECHNOLOGY & SAAS</span>
          <h1 className="industry-hero-title">Ship Faster. Scale Confidently.</h1>
          <p className="industry-hero-description">
            We design and run reliable cloud platforms, APIs, and DevOps pipelines so your teams can focus on product.
          </p>
        </div>
      </section>

      <section className="industry-solutions">
        <div className="industry-container">
          <h2 className="section-heading">Our Technology & SaaS Solutions</h2>
          <div className="solutions-grid">
            {solutions.map((s, i) => (
              <div key={i} className="solution-item">
                <div className="solution-visual">{s.graphic}</div>
                <h3 className="solution-title">{s.title}</h3>
                <p className="solution-description">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-benefits">
        <div className="industry-container">
          <h2 className="section-heading">Why Choose Us for SaaS</h2>
          <div className="benefits-list">
            {benefits.map((b, i) => (
              <div key={i} className="benefit-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
                  <path d="M8 12l3 3 5-6" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-cta">
        <div className="industry-container">
          <h2 className="cta-heading">Supercharge Your Platform</h2>
          <p className="cta-text">Tell us where you are—MVP or scale—and we’ll chart the next step.</p>
          <a href="/#contact" className="cta-button">
            <span>Get Engineering Help</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default TechnologySaas;
