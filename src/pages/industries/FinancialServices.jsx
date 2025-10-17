import { useEffect } from 'react';
import './IndustryPages.css';

const FinancialServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      title: "Digital Banking Apps",
      description: "Seamless mobile and web banking with onboarding, UPI/IMPS/NEFT, bill pay, and personal finance tools.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <rect x="55" y="30" width="90" height="140" rx="12" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="65" y="55" width="70" height="35" rx="6" fill="white" stroke="#60a5fa"/>
          <rect x="65" y="98" width="70" height="10" rx="5" fill="#93c5fd"/>
          <rect x="65" y="115" width="50" height="10" rx="5" fill="#60a5fa"/>
          <circle cx="100" cy="155" r="5" fill="#3b82f6"/>
        </svg>
      )
    },
    {
      title: "Payment Gateways",
      description: "PCI-DSS compliant checkout, payouts, subscriptions, refunds, and smart routing for higher success rates.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <rect x="30" y="60" width="140" height="80" rx="10" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="40" y="70" width="120" height="20" rx="4" fill="#3b82f6"/>
          <rect x="40" y="95" width="60" height="30" rx="4" fill="white" stroke="#60a5fa"/>
          <rect x="105" y="95" width="55" height="12" rx="4" fill="#93c5fd"/>
          <rect x="105" y="113" width="45" height="12" rx="4" fill="#60a5fa"/>
        </svg>
      )
    },
    {
      title: "Fraud Detection & Risk",
      description: "Real-time anomaly detection, velocity checks, device fingerprinting, and rules engine to stop fraud.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <polygon points="100,40 160,80 160,130 100,170 40,130 40,80" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
          <path d="M80 110 l15 15 30-35" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="100" cy="95" r="8" fill="#60a5fa"/>
        </svg>
      )
    },
    {
      title: "Regulatory Compliance",
      description: "Automated KYC/AML, audit trails, encryption at rest/in transit, and detailed reporting dashboards.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <rect x="50" y="45" width="100" height="110" rx="8" fill="white" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="65" y="55" width="70" height="16" rx="4" fill="#3b82f6"/>
          <line x1="65" y1="85" x2="135" y2="85" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
          <line x1="65" y1="105" x2="125" y2="105" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round"/>
          <line x1="65" y1="125" x2="135" y2="125" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="120" cy="150" r="10" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
          <path d="M116 150 l3 3 6-7" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const benefits = [
    "PCI-DSS, ISO 27001, SOC 2 aligned controls",
    "High-availability, low-latency architectures",
    "Secure key management & tokenization",
    "Built-in KYC/AML workflows and audit logs",
    "Realtime telemetry and incident alerting",
    "Scalable for spikes like sale days"
  ];

  return (
    <div className="industry-page">
      {/* Hero */}
      <section className="industry-hero">
        <div className="industry-hero-container">
          <a href="/#industries" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Back to Industries
          </a>
          <span className="industry-badge">FINANCIAL SERVICES</span>
          <h1 className="industry-hero-title">Secure & Compliant Fintech Solutions</h1>
          <p className="industry-hero-description">
            We build resilient, compliant financial platforms—from digital banking to payments and risk—
            so you can move money safely at scale.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="industry-solutions">
        <div className="industry-container">
          <h2 className="section-heading">Our Financial Services Solutions</h2>
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

      {/* Benefits */}
      <section className="industry-benefits">
        <div className="industry-container">
          <h2 className="section-heading">Why Choose Us for Fintech</h2>
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

      {/* CTA */}
      <section className="industry-cta">
        <div className="industry-container">
          <h2 className="cta-heading">Build What Your Customers Trust</h2>
          <p className="cta-text">
            Talk to us about compliant architectures, payment flows, and risk controls tuned for your business.
          </p>
          <a href="/#contact" className="cta-button">
            <span>Speak to an Expert</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default FinancialServices;
