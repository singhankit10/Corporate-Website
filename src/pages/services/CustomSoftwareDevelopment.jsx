import { useEffect } from 'react';
import './CustomSoftwareDevelopment.css';

const CustomSoftwareDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const offerings = [
    {
      title: "Web Applications",
      description: "Scalable, responsive web apps built with modern frameworks like React, Vue, and Angular.",
      icon: (
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" 
          stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      )
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile solutions for iOS and Android that deliver exceptional user experiences.",
      icon: (
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      )
    },
    {
      title: "Enterprise Software",
      description: "Robust, secure enterprise solutions that streamline operations and drive business efficiency.",
      icon: (
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
      )
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs designed for seamless integration and optimal performance.",
      icon: (
        <>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      )
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "AWS", category: "Cloud" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, define project scope, and create a detailed roadmap."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create intuitive interfaces and interactive prototypes for validation."
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular sprints, code reviews, and continuous integration."
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing ensures quality, security, and performance standards."
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Smooth deployment with ongoing maintenance and technical support."
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
          <span className="service-badge">CUSTOM DEVELOPMENT</span>
          <h1 className="service-hero-title">Custom Software Development</h1>
          <p className="service-hero-description">
            Transform your business with tailored software solutions designed to meet your unique challenges 
            and drive measurable results.
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
          <h2 className="section-title">Technologies We Use</h2>
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
          <h2 className="section-title">Our Development Process</h2>
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
          <h2 className="cta-title">Ready to Build Your Solution?</h2>
          <p className="cta-description">
            Let's discuss how we can help transform your ideas into powerful software solutions.
          </p>
          <a href="/#contact" className="cta-button">
            <span>Start Your Project</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftwareDevelopment;