import { useEffect } from 'react';
import './IndustryPages.css';

const Healthcare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      title: "Electronic Health Records",
      description: "Secure, cloud-based EHR systems that streamline patient data management and improve care coordination.",
      graphic: (
        <svg viewBox="0 0 200 200" fill="none" className="solution-graphic">
          <rect x="40" y="30" width="120" height="140" rx="8" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="40" y="30" width="120" height="35" rx="8" fill="#3b82f6"/>
          <line x1="60" y1="85" x2="140" y2="85" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
          <line x1="60" y1="105" x2="130" y2="105" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
          <line x1="60" y1="125" x2="140" y2="125" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
          <line x1="60" y1="145" x2="120" y2="145" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="100" cy="47" r="8" fill="white"/>
          <path d="M100 42v10M95 47h10" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Telemedicine Platforms",
      description: "Enable remote consultations with secure video conferencing, prescription management, and patient monitoring.",
      graphic: (
        <svg viewBox="0 0 200 200" fill="none" className="solution-graphic">
          <rect x="30" y="50" width="140" height="100" rx="10" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="40" y="60" width="120" height="70" fill="white" stroke="#60a5fa" strokeWidth="2"/>
          <circle cx="70" cy="85" r="12" fill="#3b82f6"/>
          <path d="M62 100c0-4 3-7 8-7s8 3 8 7" stroke="#3b82f6" strokeWidth="2" fill="none"/>
          <rect x="95" y="75" width="55" height="6" rx="3" fill="#60a5fa"/>
          <rect x="95" y="88" width="45" height="6" rx="3" fill="#93c5fd"/>
          <rect x="95" y="101" width="50" height="6" rx="3" fill="#93c5fd"/>
          <circle cx="100" cy="170" r="4" fill="#3b82f6"/>
          <line x1="100" y1="150" x2="100" y2="166" stroke="#3b82f6" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Patient Management Systems",
      description: "Comprehensive solutions for appointment scheduling, billing, and patient engagement across facilities.",
      graphic: (
        <svg viewBox="0 0 200 200" fill="none" className="solution-graphic">
          <rect x="50" y="40" width="100" height="120" rx="6" fill="white" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="65" y="55" width="70" height="15" rx="4" fill="#3b82f6"/>
          <circle cx="75" cy="90" r="8" fill="#60a5fa"/>
          <line x1="90" y1="87" x2="130" y2="87" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
          <line x1="90" y1="93" x2="125" y2="93" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="75" cy="115" r="8" fill="#60a5fa"/>
          <line x1="90" y1="112" x2="130" y2="112" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
          <line x1="90" y1="118" x2="125" y2="118" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="75" cy="140" r="8" fill="#60a5fa"/>
          <line x1="90" y1="137" x2="130" y2="137" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
          <line x1="90" y1="143" x2="125" y2="143" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Healthcare Analytics",
      description: "Data-driven insights to optimize operations, improve patient outcomes, and reduce costs.",
      graphic: (
        <svg viewBox="0 0 200 200" fill="none" className="solution-graphic">
          <line x1="40" y1="140" x2="160" y2="140" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="40" y1="140" x2="40" y2="50" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="55" y="110" width="20" height="30" fill="#60a5fa" rx="2"/>
          <rect x="85" y="90" width="20" height="50" fill="#3b82f6" rx="2"/>
          <rect x="115" y="70" width="20" height="70" fill="#60a5fa" rx="2"/>
          <rect x="145" y="85" width="20" height="55" fill="#3b82f6" rx="2"/>
          <path d="M65 110 L95 90 L125 70 L155 85" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="65" cy="110" r="4" fill="#06b6d4"/>
          <circle cx="95" cy="90" r="4" fill="#06b6d4"/>
          <circle cx="125" cy="70" r="4" fill="#06b6d4"/>
          <circle cx="155" cy="85" r="4" fill="#06b6d4"/>
        </svg>
      )
    }
  ];

  const benefits = [
    "HIPAA-compliant security and data protection",
    "Seamless integration with existing systems",
    "Reduced administrative overhead",
    "Improved patient satisfaction scores",
    "Real-time access to critical information",
    "Scalable infrastructure for growing practices"
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
          <span className="industry-badge">HEALTHCARE</span>
          <h1 className="industry-hero-title">Healthcare Technology Solutions</h1>
          <p className="industry-hero-description">
            Transforming patient care with secure, compliant, and innovative digital health solutions 
            that improve outcomes and streamline operations.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="industry-solutions">
        <div className="industry-container">
          <h2 className="section-heading">Our Healthcare Solutions</h2>
          <div className="solutions-grid">
            {solutions.map((solution, idx) => (
              <div key={idx} className="solution-item">
                <div className="solution-visual">
                  {solution.graphic}
                </div>
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product - Sahyogi */}
      <section className="industry-product">
        <div className="industry-container">
          <div className="product-content">
            <span className="product-label">FEATURED PRODUCT</span>
            <h2 className="product-heading">Sahyogi Emergency Response</h2>
            <p className="product-text">
              Our flagship healthcare product provides instant emergency assistance and real-time 
              location tracking. Sahyogi connects patients with emergency services and trusted contacts 
              during critical situations, ensuring faster response times and better outcomes.
            </p>
            <div className="product-features">
              <div className="feature-point">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="#3b82f6"/>
                </svg>
                <span>Instant SOS alerts to emergency contacts</span>
              </div>
              <div className="feature-point">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="3" fill="#3b82f6"/>
                </svg>
                <span>Real-time GPS location sharing</span>
              </div>
              <div className="feature-point">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7v10c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-9-5z" 
                    stroke="#3b82f6" strokeWidth="2" fill="none"/>
                </svg>
                <span>24/7 emergency service connectivity</span>
              </div>
            </div>
            <a href="/#sahyogi" className="product-cta">
              Learn More About Sahyogi
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
          <div className="product-visual">
            <svg viewBox="0 0 300 300" fill="none">
              <circle cx="150" cy="150" r="130" fill="#E8F1FF"/>
              <circle cx="150" cy="150" r="100" fill="white" stroke="#3b82f6" strokeWidth="3"/>
              
              {/* Medical cross */}
              <line x1="150" y1="100" x2="150" y2="200" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round"/>
              <line x1="100" y1="150" x2="200" y2="150" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round"/>
              
              {/* Pulse waves */}
              <g opacity="0.6">
                <circle cx="150" cy="150" r="110" stroke="#60a5fa" strokeWidth="2" fill="none">
                  <animate attributeName="r" values="110;120;110" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="150" cy="150" r="115" stroke="#60a5fa" strokeWidth="2" fill="none">
                  <animate attributeName="r" values="115;125;115" dur="2s" begin="0.3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" begin="0.3s" repeatCount="indefinite"/>
                </circle>
              </g>
              
              {/* Corner icons */}
              <circle cx="70" cy="70" r="20" fill="#3b82f6"/>
              <path d="M70 62v16M62 70h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              
              <circle cx="230" cy="70" r="20" fill="#60a5fa"/>
              <circle cx="230" cy="70" r="6" fill="white"/>
              
              <circle cx="70" cy="230" r="20" fill="#60a5fa"/>
              <circle cx="70" cy="230" r="8" stroke="white" strokeWidth="2" fill="none"/>
              
              <circle cx="230" cy="230" r="20" fill="#3b82f6"/>
              <path d="M222 230l6 6 10-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="industry-benefits">
        <div className="industry-container">
          <h2 className="section-heading">Why Choose Us for Healthcare</h2>
          <div className="benefits-list">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
                  <path d="M8 12l3 3 5-6" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="industry-cta">
        <div className="industry-container">
          <h2 className="cta-heading">Ready to Transform Your Healthcare Services?</h2>
          <p className="cta-text">
            Let's discuss how our healthcare technology solutions can help you deliver better patient care.
          </p>
          <a href="/#contact" className="cta-button">
            <span>Get Started</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;