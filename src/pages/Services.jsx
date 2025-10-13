import { memo } from 'react';
import PropTypes from 'prop-types';
import './Services.css';

// Service card icons - centralized for maintainability
const ServiceIcons = {
  TalentManagement: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),

  GlobalPayroll: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),

  Compliance: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),

  ContractManagement: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),

  Analytics: () => (
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

  TimeTracking: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),
};

// Checkmark icon for features - reusable component
const CheckIcon = memo(() => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path 
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
      fill="currentColor"
    />
  </svg>
));

CheckIcon.displayName = 'CheckIcon';

// Arrow icon for buttons - reusable component
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
 * Renders individual service with icon, title, features, and CTA
 */
const ServiceCard = memo(({ service, onReadMore }) => {
  const IconComponent = ServiceIcons[service.iconName];

  return (
    <article className="service-card">
      <div className="service-content">
        {/* Service Icon */}
        <div className="service-icon" aria-hidden="true">
          {IconComponent && <IconComponent />}
        </div>

        {/* Service Title */}
        <h3 className="service-title">{service.title}</h3>

        {/* Service Features List */}
        <ul className="service-features" role="list">
          {service.features.map((feature, index) => (
            <li key={index} className="feature-item">
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Call to Action Button */}
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
 * Main Services Component
 * Displays all services in a responsive grid layout
 */
const Services = () => {
  // Service data - could be moved to a separate data file or fetched from API
  const services = [
    {
      id: 1,
      iconName: 'TalentManagement',
      title: 'Talent Management',
      features: [
        'Global team coordination',
        'Automated compliance',
        'Performance tracking',
        'Seamless onboarding',
      ],
    },
    {
      id: 2,
      iconName: 'GlobalPayroll',
      title: 'Global Payroll',
      features: [
        'Automated processing',
        'Multi-currency support',
        'Tax compliance',
        'Real-time reporting',
      ],
    },
    {
      id: 3,
      iconName: 'Compliance',
      title: 'Compliance Management',
      features: [
        'Automated compliance',
        'Global coverage',
        'Document management',
        'Regulatory updates',
      ],
    },
    {
      id: 4,
      iconName: 'ContractManagement',
      title: 'Contract Management',
      features: [
        'Digital signatures',
        'Template library',
        'Automated reminders',
        'Secure storage',
      ],
    },
    {
      id: 5,
      iconName: 'Analytics',
      title: 'Analytics & Insights',
      features: [
        'Real-time dashboards',
        'Custom reports',
        'Predictive analytics',
        'Performance metrics',
      ],
    },
    {
      id: 6,
      iconName: 'TimeTracking',
      title: 'Time Tracking',
      features: [
        'Automated time logs',
        'Project tracking',
        'Overtime management',
        'Mobile access',
      ],
    },
  ];

  /**
   * Handle "Read More" button click
   * @param {number} serviceId - ID of the service
   */
  const handleReadMore = (serviceId) => {
    // TODO: Implement navigation or modal logic
    console.log(`Read more about service ${serviceId}`);
    // Example: navigate(`/services/${serviceId}`);
  };

  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="services-container">
        {/* Section Header */}
        <header className="services-header">
          <div className="services-header-content">
            <p className="section-badge" aria-label="Section category">
              WORK SOLUTIONS FOR TODAY
            </p>
            <h2 id="services-heading" className="services-title">
              Solutions for the modern workplace
            </h2>
          </div>
          <div className="services-header-description">
            <p>
              Discover our comprehensive suite of business solutions designed to
              streamline operations, enhance productivity, and drive growth.
            </p>
          </div>
        </header>

        {/* Services Grid */}
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