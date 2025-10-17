import { useEffect } from 'react';
import './IndustryPages.css';

const Manufacturing = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const solutions = [
    {
      title: "Smart Factory & IoT",
      description: "Sensor networks, PLC integration, real-time telemetry, and condition monitoring for shop floors.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <rect x="40" y="90" width="120" height="50" rx="6" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
          <circle cx="60" cy="115" r="8" fill="#60a5fa"/><circle cx="90" cy="115" r="8" fill="#60a5fa"/><circle cx="120" cy="115" r="8" fill="#60a5fa"/>
          <path d="M60 70 q20-20 40 0 q20 20 40 0" stroke="#3b82f6" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      title: "MES & Production Tracking",
      description: "Work orders, line balancing, OEE, traceability, and digital work instructions across plants.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <rect x="50" y="40" width="100" height="120" rx="8" fill="white" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="60" y="55" width="80" height="14" rx="4" fill="#3b82f6"/>
          <rect x="60" y="80" width="80" height="12" rx="4" fill="#93c5fd"/>
          <rect x="60" y="98" width="80" height="12" rx="4" fill="#60a5fa"/>
          <rect x="60" y="116" width="80" height="12" rx="4" fill="#93c5fd"/>
        </svg>
      )
    },
    {
      title: "Quality & Compliance",
      description: "SPC, CAPA, checklists, e-signatures, and audit trails aligned with ISO/TS standards.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <circle cx="100" cy="90" r="35" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
          <path d="M85 90 l12 12 22-28" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="60" y="130" width="80" height="10" rx="4" fill="#60a5fa"/>
        </svg>
      )
    },
    {
      title: "Predictive Maintenance",
      description: "Time-series models for failure prediction, maintenance planning, and spare parts optimization.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <line x1="40" y1="140" x2="160" y2="140" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="40" y1="140" x2="40" y2="60" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="55" y="115" width="20" height="25" rx="3" fill="#60a5fa"/>
          <rect x="85" y="100" width="20" height="40" rx="3" fill="#3b82f6"/>
          <rect x="115" y="80" width="20" height="60" rx="3" fill="#60a5fa"/>
          <path d="M55 120 L85 105 L115 90 L145 95" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  const benefits = [
    "Improved OEE and first-time-right rates",
    "End-to-end traceability & genealogy",
    "Factory-to-cloud secure data pipelines",
    "Downtime reduction with predictive models",
    "Paperless operations & digital SOPs",
    "Multi-plant rollouts with central control"
  ];

  return (
    <div className="industry-page">
      <section className="industry-hero">
        <div className="industry-hero-container">
          <a href="/#industries" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            Back to Industries
          </a>
          <span className="industry-badge">MANUFACTURING</span>
          <h1 className="industry-hero-title">Smarter, Leaner Manufacturing Ops</h1>
          <p className="industry-hero-description">
            Connect machines, people, and processes to unlock throughput, quality, and uptime.
          </p>
        </div>
      </section>

      <section className="industry-solutions">
        <div className="industry-container">
          <h2 className="section-heading">Our Manufacturing Solutions</h2>
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
          <h2 className="section-heading">Why Choose Us for Manufacturing</h2>
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
          <h2 className="cta-heading">Optimize Your Factory Today</h2>
          <p className="cta-text">Share your KPIs and constraints—we’ll map a roadmap to measurable gains.</p>
          <a href="/#contact" className="cta-button">
            <span>Schedule a Call</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
