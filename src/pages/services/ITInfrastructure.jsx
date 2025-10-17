import { useEffect } from 'react';
import './CommonServicesStyles.css';

const ITInfrastructure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const offerings = [
    {
      title: "Network Infrastructure",
      description: "Design, implement, and manage secure, high-performance network infrastructure for your organization.",
      icon: (
        <>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 2v3m0 14v3M2 12h3m14 0h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      )
    },
    {
      title: "Server Management",
      description: "Comprehensive server administration, monitoring, patching, and performance optimization services.",
      icon: (
        <>
          <rect x="2" y="4" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="2" y="10" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="2" y="16" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="6" cy="6" r="1" fill="currentColor"/>
          <circle cx="6" cy="12" r="1" fill="currentColor"/>
          <circle cx="6" cy="18" r="1" fill="currentColor"/>
        </>
      )
    },
    {
      title: "Backup & Recovery",
      description: "Reliable backup solutions and disaster recovery plans to protect your critical business data.",
      icon: (
        <>
          <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" 
            stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </>
      )
    },
    {
      title: "Infrastructure Monitoring",
      description: "24/7 monitoring and proactive maintenance to ensure optimal performance and minimize downtime.",
      icon: (
        <>
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
            stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </>
      )
    }
  ];

  const technologies = [
    { name: "VMware", category: "Virtualization" },
    { name: "Hyper-V", category: "Virtualization" },
    { name: "Cisco", category: "Networking" },
    { name: "Juniper", category: "Networking" },
    { name: "Veeam", category: "Backup" },
    { name: "Nagios", category: "Monitoring" },
    { name: "Zabbix", category: "Monitoring" },
    { name: "Active Directory", category: "Directory Service" }
  ];

  const process = [
    {
      step: "01",
      title: "Infrastructure Assessment",
      description: "Comprehensive evaluation of your current IT infrastructure, identifying bottlenecks and vulnerabilities."
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Architect optimal infrastructure solutions tailored to your business needs and growth projections."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy infrastructure with minimal disruption, following industry best practices and security standards."
    },
    {
      step: "04",
      title: "Migration & Integration",
      description: "Seamlessly migrate workloads and integrate new infrastructure with existing systems and applications."
    },
    {
      step: "05",
      title: "Ongoing Management",
      description: "Provide 24/7 monitoring, maintenance, updates, and support to ensure optimal performance and security."
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
          <span className="service-badge">INFRASTRUCTURE</span>
          <h1 className="service-hero-title">IT Infrastructure Management</h1>
          <p className="service-hero-description">
            Build a reliable, scalable, and secure IT foundation. From network design to server management 
            and disaster recovery, we ensure your infrastructure supports your business operations seamlessly.
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
          <h2 className="section-title">Our Implementation Process</h2>
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
          <h2 className="cta-title">Ready to Build Robust Infrastructure?</h2>
          <p className="cta-description">
            Let's discuss how we can help you create a reliable, scalable IT infrastructure 
            that supports your business growth and protects your critical assets.
          </p>
          <a href="/#contact" className="cta-button">
            <span>Get Infrastructure Assessment</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ITInfrastructure;