import { memo } from 'react';
import PropTypes from 'prop-types';
import './Services.css';

// Service card icons - IT Services specific
const ServiceIcons = {
  CustomSoftware: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),

  CloudDevOps: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M19 18H6a4 4 0 01-1.8-7.6A6 6 0 0116.5 6a4.5 4.5 0 013.3 7.5A4 4 0 0119 18z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),

  Cybersecurity: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M12 2L3 7v6c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-9-5z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M9 12l2 2 4-4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),

  DataAnalytics: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),

  ITConsulting: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),

  ITInfrastructure: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="2" y="10" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="2" y="16" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
      <circle cx="6" cy="6" r="1" fill="currentColor"/>
      <circle cx="6" cy="12" r="1" fill="currentColor"/>
      <circle cx="6" cy="18" r="1" fill="currentColor"/>
    </svg>
  ),
};

// Service Card Component
const ServiceCard = memo(({ service, index }) => {
  const IconComponent = ServiceIcons[service.iconName];

  return (
    <article className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="card-inner">
        <div className="card-header">
          <div className="service-icon">
            {IconComponent && <IconComponent />}
          </div>
          <div className="service-number">0{index + 1}</div>
        </div>
        
        <h3 className="service-title">{service.title}</h3>
        
        <ul className="service-features">
          {service.features.map((feature, idx) => (
            <li key={idx} className="feature-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="check-icon">
                <path 
                  d="M5 13l4 4L19 7" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className="service-button" onClick={() => window.location.href = '/services/custom-software-development'}>
          <span>Learn More</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="arrow-icon">
            <path 
              d="M5 12h14M12 5l7 7-7 7" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      
      <div className="card-glow"></div>
    </article>
  );
});

ServiceCard.propTypes = {
  service: PropTypes.shape({
    iconName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

ServiceCard.displayName = 'ServiceCard';

// Main Services Component
const Services = () => {
  const services = [
    {
      iconName: 'CustomSoftware',
      title: 'Custom Software Development',
      features: [
        'Web applications',
        'Mobile apps',
        'Enterprise software',
        'API development',
      ],
    },
    {
      iconName: 'CloudDevOps',
      title: 'Cloud Engineering & DevOps',
      features: [
        'AWS & Azure setup',
        'CI/CD pipelines',
        'Infrastructure as code',
        'Container orchestration',
      ],
    },
    {
      iconName: 'Cybersecurity',
      title: 'Cybersecurity Solutions',
      features: [
        'Security audits',
        'Penetration testing',
        'Compliance management',
        'Threat monitoring',
      ],
    },
    {
      iconName: 'DataAnalytics',
      title: 'Data Analytics & AI',
      features: [
        'Machine learning models',
        'Data visualization',
        'Predictive analytics',
        'Business intelligence',
      ],
    },
    {
      iconName: 'ITConsulting',
      title: 'Strategic IT Consulting',
      features: [
        'Digital transformation',
        'Technology roadmap',
        'System architecture',
        'Process optimization',
      ],
    },
    {
      iconName: 'ITInfrastructure',
      title: 'IT Infrastructure Management',
      features: [
        'Network setup',
        'Server management',
        'Backup solutions',
        'Disaster recovery',
      ],
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <header className="services-header">
          <span className="section-badge">WHAT WE OFFER</span>
          <h2 className="services-title">
            Comprehensive IT solutions tailored for your success
          </h2>
          <p className="services-description">
            From custom software development to cloud infrastructure and cybersecurity, 
            we deliver cutting-edge technology solutions that drive your business forward.
          </p>
        </header>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="bg-decoration bg-decoration-1"></div>
      <div className="bg-decoration bg-decoration-2"></div>
    </section>
  );
};

Services.displayName = 'Services';

export default memo(Services);