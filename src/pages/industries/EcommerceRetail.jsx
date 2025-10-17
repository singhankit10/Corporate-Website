import { useEffect } from 'react';
import './IndustryPages.css';

const EcommerceRetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      title: "Online Marketplaces",
      description: "Multi-vendor catalog, search, reviews, and order orchestration with robust vendor tooling.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <rect x="30" y="55" width="140" height="90" rx="10" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="40" y="65" width="40" height="30" rx="6" fill="white" stroke="#60a5fa"/>
          <rect x="85" y="65" width="40" height="30" rx="6" fill="white" stroke="#60a5fa"/>
          <rect x="130" y="65" width="30" height="30" rx="6" fill="white" stroke="#60a5fa"/>
          <rect x="40" y="100" width="120" height="35" rx="6" fill="#93c5fd"/>
        </svg>
      )
    },
    {
      title: "Inventory & OMS",
      description: "Real-time stock, multi-location fulfillment, returns, and SLA-aware order routing.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <rect x="45" y="40" width="110" height="120" rx="8" fill="white" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="60" y="55" width="80" height="15" rx="4" fill="#3b82f6"/>
          <rect x="60" y="80" width="30" height="25" rx="4" fill="#E8F1FF" stroke="#60a5fa"/>
          <rect x="95" y="80" width="45" height="25" rx="4" fill="#E8F1FF" stroke="#60a5fa"/>
          <rect x="60" y="110" width="80" height="10" rx="4" fill="#93c5fd"/>
          <rect x="60" y="125" width="50" height="10" rx="4" fill="#60a5fa"/>
        </svg>
      )
    },
    {
      title: "Checkout & Payments",
      description: "Optimized checkout with wallets, BNPL, coupons, tax/shipping, and payment success analytics.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <rect x="30" y="70" width="140" height="70" rx="10" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="40" y="80" width="120" height="16" rx="4" fill="#3b82f6"/>
          <rect x="40" y="102" width="70" height="20" rx="6" fill="white" stroke="#60a5fa"/>
          <rect x="115" y="102" width="45" height="20" rx="6" fill="#93c5fd"/>
        </svg>
      )
    },
    {
      title: "Customer Analytics",
      description: "Cohort analysis, funnels, RFM, and personalized recommendations to lift AOV and retention.",
      graphic: (
        <svg viewBox="0 0 200 200" className="solution-graphic" fill="none">
          <line x1="40" y1="140" x2="160" y2="140" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="40" y1="140" x2="40" y2="55" stroke="#3b82f6" strokeWidth="2"/>
          <rect x="55" y="110" width="20" height="30" fill="#60a5fa" rx="3"/>
          <rect x="85" y="95" width="20" height="45" fill="#3b82f6" rx="3"/>
          <rect x="115" y="80" width="20" height="60" fill="#60a5fa" rx="3"/>
          <rect x="145" y="90" width="20" height="50" fill="#3b82f6" rx="3"/>
          <path d="M55 120 L85 100 L115 85 L145 95" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="55" cy="120" r="4" fill="#06b6d4"/>
          <circle cx="85" cy="100" r="4" fill="#06b6d4"/>
          <circle cx="115" cy="85" r="4" fill="#06b6d4"/>
          <circle cx="145" cy="95" r="4" fill="#06b6d4"/>
        </svg>
      )
    }
  ];

  const benefits = [
    "Fast storefronts with Core Web Vitals focus",
    "Global catalogs, currencies, and tax rules",
    "Resilient checkout with smart retries",
    "Unified inventory & returns across channels",
    "Data layer for personalization & campaigns",
    "SEO-ready architecture and analytics"
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
          <span className="industry-badge">E-COMMERCE & RETAIL</span>
          <h1 className="industry-hero-title">Modern Commerce That Converts</h1>
          <p className="industry-hero-description">
            From marketplace to last-mile, we build end-to-end commerce systems that are fast, scalable,
            and obsessively focused on conversion.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="industry-solutions">
        <div className="industry-container">
          <h2 className="section-heading">Our E-commerce & Retail Solutions</h2>
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
          <h2 className="section-heading">Why Choose Us for Commerce</h2>
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
          <h2 className="cta-heading">Let’s Grow Your Store</h2>
          <p className="cta-text">
            Tell us your goals—conversion lift, expansion, or replatforming—and we’ll propose the fastest path.
          </p>
          <a href="/#contact" className="cta-button">
            <span>Start a Project</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default EcommerceRetail;
