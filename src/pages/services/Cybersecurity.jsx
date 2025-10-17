import { useEffect } from 'react';
import './CommonServicesStyles.css';

const Cybersecurity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const offerings = [
    {
      title: "Security Audits & Assessments",
      description: "Comprehensive security evaluations to identify vulnerabilities and compliance gaps in your systems.",
      icon: (
        <>
          <path d="M12 2L3 7v6c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-9-5z" 
            stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
        </>
      )
    },
    {
      title: "Penetration Testing",
      description: "Ethical hacking and penetration testing to discover and fix security weaknesses before attackers do.",
      icon: (
        <>
          <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      )
    },
    {
      title: "Compliance Management",
      description: "Ensure compliance with GDPR, HIPAA, SOC 2, ISO 27001, and other regulatory frameworks.",
      icon: (
        <>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </>
      )
    },
    {
      title: "24/7 Threat Monitoring",
      description: "Round-the-clock security monitoring with real-time threat detection and incident response.",
      icon: (
        <>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </>
      )
    }
  ];

  const technologies = [
    { name: "SIEM", category: "Monitoring" },
    { name: "Firewall", category: "Network Security" },
    { name: "WAF", category: "Application Security" },
    { name: "Burp Suite", category: "Testing" },
    { name: "Metasploit", category: "Penetration Testing" },
    { name: "Splunk", category: "Analytics" },
    { name: "Nessus", category: "Vulnerability Scan" },
    { name: "Wireshark", category: "Network Analysis" }
  ];

  const process = [
    {
      step: "01",
      title: "Security Posture Assessment",
      description: "Comprehensive evaluation of your current security infrastructure, policies, and vulnerabilities."
    },
    {
      step: "02",
      title: "Risk Analysis & Strategy",
      description: "Identify critical risks, prioritize threats, and develop a tailored security improvement roadmap."
    },
    {
      step: "03",
      title: "Implementation & Hardening",
      description: "Deploy security controls, patch vulnerabilities, and harden systems against known attack vectors."
    },
    {
      step: "04",
      title: "Penetration Testing",
      description: "Conduct ethical hacking exercises to validate security measures and uncover hidden weaknesses."
    },
    {
      step: "05",
      title: "Continuous Monitoring",
      description: "Implement 24/7 security monitoring, threat intelligence, and incident response protocols."
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
          <span className="service-badge">SECURITY SOLUTIONS</span>
          <h1 className="service-hero-title">Cybersecurity Solutions</h1>
          <p className="service-hero-description">
            Protect your digital assets with enterprise-grade security solutions. From vulnerability assessments 
            to 24/7 threat monitoring, we safeguard your business against evolving cyber threats.
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
          <h2 className="section-title">Our Security Process</h2>
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
          <h2 className="cta-title">Ready to Strengthen Your Security?</h2>
          <p className="cta-description">
            Let's discuss how we can help protect your organization from cyber threats 
            and ensure compliance with industry regulations.
          </p>
          <a href="/#contact" className="cta-button">
            <span>Schedule Security Assessment</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;