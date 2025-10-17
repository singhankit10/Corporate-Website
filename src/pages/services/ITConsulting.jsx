import { useEffect } from 'react';
import './CommonServicesStyles.css';

const ITConsulting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const offerings = [
    {
      title: "Digital Transformation",
      description: "Guide your organization through digital transformation with strategic roadmaps and change management.",
      icon: (
        <>
          <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </>
      )
    },
    {
      title: "Technology Roadmap",
      description: "Develop comprehensive technology strategies aligned with your business goals and market dynamics.",
      icon: (
        <>
          <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" 
            stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </>
      )
    },
    {
      title: "System Architecture",
      description: "Design scalable, secure, and efficient system architectures for complex enterprise environments.",
      icon: (
        <>
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
            stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </>
      )
    },
    {
      title: "Process Optimization",
      description: "Streamline business processes and workflows using technology to increase efficiency and reduce costs.",
      icon: (
        <>
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
            stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </>
      )
    }
  ];

  const technologies = [
    { name: "TOGAF", category: "Framework" },
    { name: "ITIL", category: "Best Practices" },
    { name: "Agile", category: "Methodology" },
    { name: "SAFe", category: "Scaling Framework" },
    { name: "COBIT", category: "Governance" },
    { name: "Lean", category: "Process" },
    { name: "Six Sigma", category: "Quality" },
    { name: "DevOps", category: "Culture" }
  ];

  const process = [
    {
      step: "01",
      title: "Business Analysis",
      description: "Deep dive into your business operations, challenges, and strategic objectives to identify opportunities."
    },
    {
      step: "02",
      title: "Current State Assessment",
      description: "Evaluate existing technology stack, processes, and organizational capabilities against industry standards."
    },
    {
      step: "03",
      title: "Strategy Development",
      description: "Create a comprehensive IT strategy with clear objectives, milestones, and measurable success criteria."
    },
    {
      step: "04",
      title: "Roadmap Creation",
      description: "Develop a phased implementation roadmap with priorities, timelines, resources, and budget estimates."
    },
    {
      step: "05",
      title: "Implementation Support",
      description: "Provide ongoing guidance, change management, and support throughout the transformation journey."
    }
  ];

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-container">
          <a href="/#services" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Back to Services
          </a>
          <span className="service-badge">IT STRATEGY</span>
          <h1 className="service-hero-title">Strategic IT Consulting</h1>
          <p className="service-hero-description">
            Navigate complex technology decisions with confidence. Our strategic IT consulting helps you 
            align technology investments with business goals, optimize operations, and stay ahead of the competition.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="service-offerings">
        <div className="offerings-container">
          <h2 className="section-title">What We Offer</h2>
          <div className="offerings-grid">
            {offerings.map((offer, idx) => (
              <div key={idx} className="offering-card">
                <div className="offering-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    {offer.icon}
                  </svg>
                </div>
                <h3 className="offering-title">{offer.title}</h3>
                <p className="offering-description">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="service-tech">
        <div className="tech-container">
          <h2 className="section-title">Frameworks & Methodologies</h2>
          <div className="tech-grid">
            {technologies.map((tech, idx) => (
              <div key={idx} className="tech-badge">
                <span className="tech-name">{tech.name}</span>
                <span className="tech-category">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process">
        <div className="process-container">
          <h2 className="section-title">Our Consulting Process</h2>
          <div className="process-timeline">
            {process.map((item, idx) => (
              <div key={idx} className="process-step">
                <div className="step-number">{item.step}</div>
                <div className="step-content">
                  <h3 className="step-title">{item.title}</h3>
                  <p className="step-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Transform Your IT Strategy?</h2>
          <p className="cta-description">
            Let's discuss how we can help you develop a technology roadmap that drives 
            business growth and operational excellence.
          </p>
          <a href="/#contact" className="cta-button">
            <span>Schedule Consultation</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ITConsulting;