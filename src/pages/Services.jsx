import { memo } from 'react';
import PropTypes from 'prop-types';
import './Services.css';

// Service card icons - IT Services specific
const ServiceIcons = {
  CustomSoftware: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="2" y="10" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="2" y="16" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
      <circle cx="6" cy="6" r="1" fill="currentColor"/>
      <circle cx="6" cy="12" r="1" fill="currentColor"/>
      <circle cx="6" cy="18" r="1" fill="currentColor"/>
    </svg>
  ),
};

// Checkmark icon for features
const CheckIcon = memo(() => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path 
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
      fill="currentColor"
    />
  </svg>
));

CheckIcon.displayName = 'CheckIcon';

// Arrow icon for buttons
const ArrowIcon = memo(() => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path 
      d="M7.5 15L12.5 10L7.5 5" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
));

ArrowIcon.displayName = 'ArrowIcon';

/**
 * Service Card Component
 */
const ServiceCard = memo(({ service, onReadMore }) => {
  const IconComponent = ServiceIcons[service.iconName];

  return (
    <article className="service-card">
      <div className="service-content">
        <div className="service-icon" aria-hidden="true">
          {IconComponent && <IconComponent />}
        </div>
        <h3 className="service-title">{service.title}</h3>
        <ul className="service-features" role="list">
          {service.features.map((feature, index) => (
            <li key={index} className="feature-item">
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          className="service-button"
          onClick={() => onReadMore(service.id)}
          aria-label={`Read more about ${service.title}`}
        >
          <span>Read More</span>
          <ArrowIcon />
        </button>
      </div>
    </article>
  );
});

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    iconName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onReadMore: PropTypes.func.isRequired,
};

ServiceCard.displayName = 'ServiceCard';

/**
 * Services Illustration Component
 */
const ServicesIllustration = memo(() => (
  <div className="services-illustration-wrapper">
    <svg viewBox="0 0 400 400" className="services-diagram">
      <defs>
        <linearGradient id="serverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc"/>
          <stop offset="100%" stopColor="#e2e8f0"/>
        </linearGradient>
      </defs>
      
      {/* Outer dotted circle */}
      <circle 
        cx="200" 
        cy="200" 
        r="140" 
        fill="none" 
        stroke="#cbd5e1" 
        strokeWidth="2"
        strokeDasharray="5,5"
        className="outer-circle"
      />
      
      {/* Central Server/Database Stack - Centered */}
      <g className="central-server">
        <path d="M 200 185 L 230 170 L 230 205 L 200 220 L 170 205 L 170 170 Z" 
          fill="url(#serverGrad)" 
          stroke="#64748b" 
          strokeWidth="2"/>
        <path d="M 170 170 L 200 155 L 230 170 L 200 185 Z" 
          fill="#cbd5e1" 
          stroke="#64748b" 
          strokeWidth="2"/>
        <line x1="180" y1="177" x2="180" y2="197" stroke="#94a3b8" strokeWidth="1.5"/>
        <line x1="190" y1="172" x2="190" y2="192" stroke="#94a3b8" strokeWidth="1.5"/>
        <line x1="200" y1="167" x2="200" y2="187" stroke="#94a3b8" strokeWidth="1.5"/>
        <line x1="210" y1="172" x2="210" y2="192" stroke="#94a3b8" strokeWidth="1.5"/>
        <line x1="220" y1="177" x2="220" y2="197" stroke="#94a3b8" strokeWidth="1.5"/>
      </g>
      
      {/* Top Icon - Eye/Monitor */}
      <g className="orbit-icon icon-1">
        <circle cx="200" cy="50" r="24" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5"/>
        <path d="M 200 42 Q 206 45, 206 50 Q 206 55, 200 58 Q 194 55, 194 50 Q 194 45, 200 42" 
          fill="none" stroke="#64748b" strokeWidth="2"/>
        <circle cx="200" cy="50" r="4" fill="#64748b"/>
      </g>
      
      {/* Right Icon - Shield */}
      <g className="orbit-icon icon-2">
        <circle cx="340" cy="200" r="24" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5"/>
        <path d="M 340 186 L 332 190 L 332 200 Q 332 206, 340 210 Q 348 206, 348 200 L 348 190 Z" 
          fill="none" stroke="#64748b" strokeWidth="2"/>
      </g>
      
      {/* Bottom Icon - Eye/Monitor */}
      <g className="orbit-icon icon-3">
        <circle cx="200" cy="350" r="24" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5"/>
        <path d="M 200 342 Q 206 345, 206 350 Q 206 355, 200 358 Q 194 355, 194 350 Q 194 345, 200 342" 
          fill="none" stroke="#64748b" strokeWidth="2"/>
        <circle cx="200" cy="350" r="4" fill="#64748b"/>
      </g>
      
      {/* Left Icon - User */}
      <g className="orbit-icon icon-4">
        <circle cx="60" cy="200" r="24" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5"/>
        <circle cx="60" cy="195" r="6" fill="none" stroke="#64748b" strokeWidth="2"/>
        <path d="M 50 210 Q 50 206, 54 204 Q 60 202, 66 204 Q 70 206, 70 210" 
          fill="none" stroke="#64748b" strokeWidth="2"/>
      </g>
      
      {/* Connection lines */}
      <line x1="200" y1="74" x2="200" y2="155" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" className="connection-line line-1"/>
      <line x1="316" y1="200" x2="230" y2="200" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" className="connection-line line-2"/>
      <line x1="200" y1="326" x2="200" y2="220" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" className="connection-line line-3"/>
      <line x1="84" y1="200" x2="170" y2="200" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" className="connection-line line-4"/>
    </svg>
  </div>
));

ServicesIllustration.displayName = 'ServicesIllustration';

/**
 * Main Services Component
 */
const Services = () => {
  // IT Services data matching your requirements
  const services = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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

  const handleReadMore = (serviceId) => {
    console.log(`Read more about service ${serviceId}`);
  };

  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="services-container">
        <header className="services-header">
          <div className="services-header-content">
            <p className="section-badge" aria-label="Section category">
              OUR SERVICES
            </p>
            <h2 id="services-heading" className="services-title">
              Comprehensive IT solutions for your business
            </h2>
            <div className="services-header-description">
              <p>
                From custom software development to cloud infrastructure and cybersecurity, we deliver end-to-end technology solutions tailored to your needs.
              </p>
            </div>
          </div>
          <ServicesIllustration />
        </header>

        <div className="services-grid" role="list">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onReadMore={handleReadMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

Services.displayName = 'Services';

export default memo(Services);