import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Talent Management',
      features: [
        'Global team coordination',
        'Automated compliance',
        'Performance tracking',
        'Seamless onboarding'
      ],
      position: 'left'
    },
    {
      id: 2,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Global Payroll',
      features: [
        'Automated processing',
        'Multi-currency support',
        'Tax compliance',
        'Real-time reporting'
      ],
      position: 'right'
    },
    {
      id: 3,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Compliance Management',
      features: [
        'Automated compliance',
        'Global coverage',
        'Document management',
        'Regulatory updates'
      ],
      position: 'left'
    },
    {
      id: 4,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Contract Management',
      features: [
        'Digital signatures',
        'Template library',
        'Automated reminders',
        'Secure storage'
      ],
      position: 'right'
    },
    {
      id: 5,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Analytics & Insights',
      features: [
        'Real-time dashboards',
        'Custom reports',
        'Predictive analytics',
        'Performance metrics'
      ],
      position: 'left'
    },
    {
      id: 6,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Time Tracking',
      features: [
        'Automated time logs',
        'Project tracking',
        'Overtime management',
        'Mobile access'
      ],
      position: 'right'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <div className="services-header-content">
            <div className="section-badge">WORK SOLUTIONS FOR TODAY</div>
            <h2 className="services-title">
              Solutions for the modern workplace
            </h2>
          </div>
          <div className="services-header-description">
            <p>
              Discover our comprehensive suite of business solutions designed to 
              streamline operations, enhance productivity, and drive growth.
            </p>
          </div>
        </div>

        {/* Services Grid - 2x3 Compact Layout */}
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-card ${service.position === 'right' ? 'card-image-left' : 'card-image-right'}`}
            >
              {/* Service Content */}
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                
                <h3 className="service-title">{service.title}</h3>
                
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="service-button">
                  <span>Read More</span>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Service Visual - Clean Gradient Only */}
              <div className="service-visual">
                <div className={`visual-illustration illustration-${service.id}`}>
                  <div className="visual-pattern"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;