import { memo } from 'react';
import PropTypes from 'prop-types';
import './Industries.css';

// Industry card icons
const IndustryIcons = {
  Healthcare: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M12 2L3 7v6c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-9-5z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 8v8M8 12h8" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  ),

  Finance: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),

  Ecommerce: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),

  Education: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M12 14l9-5-9-5-9 5 9 5z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 14v7" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),
};

// Checkmark icon
const CheckIcon = memo(() => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path 
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
      fill="currentColor"
    />
  </svg>
));

CheckIcon.displayName = 'CheckIcon';

/**
 * Industry Card Component
 */
const IndustryCard = memo(({ industry }) => {
  const IconComponent = IndustryIcons[industry.iconName];

  return (
    <article className="industry-card">
      <div className="industry-content">
        <div className="industry-icon" aria-hidden="true">
          {IconComponent && <IconComponent />}
        </div>
        <h3 className="industry-title">{industry.title}</h3>
        <p className="industry-description">{industry.description}</p>
        <ul className="industry-solutions" role="list">
          {industry.solutions.map((solution, index) => (
            <li key={index} className="solution-item">
              <CheckIcon />
              <span>{solution}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
});

IndustryCard.propTypes = {
  industry: PropTypes.shape({
    id: PropTypes.number.isRequired,
    iconName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    solutions: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

IndustryCard.displayName = 'IndustryCard';

/**
 * Industries Illustration Component
 * Network of interconnected industries
 */
const IndustriesIllustration = memo(() => (
  <div className="industries-illustration-wrapper">
    <svg viewBox="0 0 400 300" className="industries-diagram">
      <defs>
        <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc"/>
          <stop offset="100%" stopColor="#e2e8f0"/>
        </linearGradient>
      </defs>
      
      {/* Connection mesh */}
      <line x1="100" y1="150" x2="200" y2="80" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" className="mesh-line line-1"/>
      <line x1="100" y1="150" x2="200" y2="220" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" className="mesh-line line-2"/>
      <line x1="300" y1="150" x2="200" y2="80" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" className="mesh-line line-3"/>
      <line x1="300" y1="150" x2="200" y2="220" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" className="mesh-line line-4"/>
      <line x1="200" y1="80" x2="200" y2="220" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" className="mesh-line line-5"/>
      
      {/* Healthcare - Center Top (Priority) */}
      <g className="industry-node node-1">
        <circle cx="200" cy="80" r="35" fill="url(#nodeGrad)" stroke="#3b82f6" strokeWidth="3"/>
        <path d="M 200 70 L 200 90 M 190 80 L 210 80" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="200" cy="80" r="15" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.3" className="pulse-ring"/>
      </g>
      
      {/* Finance - Left */}
      <g className="industry-node node-2">
        <circle cx="100" cy="150" r="30" fill="url(#nodeGrad)" stroke="#3b82f6" strokeWidth="2.5"/>
        <text x="100" y="155" textAnchor="middle" fill="#64748b" fontSize="24" fontWeight="bold">$</text>
      </g>
      
      {/* E-commerce - Right */}
      <g className="industry-node node-3">
        <circle cx="300" cy="150" r="30" fill="url(#nodeGrad)" stroke="#3b82f6" strokeWidth="2.5"/>
        <path d="M 290 145 L 310 145 L 308 150 L 292 150 Z M 295 155 A 3 3 0 1 0 295 161 M 305 155 A 3 3 0 1 0 305 161" 
          stroke="#64748b" strokeWidth="2" fill="none"/>
      </g>
      
      {/* Education - Bottom */}
      <g className="industry-node node-4">
        <circle cx="200" cy="220" r="30" fill="url(#nodeGrad)" stroke="#3b82f6" strokeWidth="2.5"/>
        <path d="M 190 215 L 200 210 L 210 215 L 210 225 L 190 225 Z" 
          stroke="#64748b" strokeWidth="2" fill="none"/>
        <circle cx="200" cy="220" r="3" fill="#64748b"/>
      </g>
      
      {/* Data flow particles */}
      <circle r="3" fill="#3b82f6" className="data-particle particle-1">
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath href="#path1"/>
        </animateMotion>
      </circle>
    </svg>
  </div>
));

IndustriesIllustration.displayName = 'IndustriesIllustration';

/**
 * Main Industries Component
 */
const Industries = () => {
  const industries = [
    {
      id: 1,
      iconName: 'Healthcare',
      title: 'Healthcare',
      description: 'Transforming patient care with secure, scalable digital solutions.',
      solutions: [
        'Electronic Health Records',
        'Telemedicine platforms',
        'Patient management systems',
        'HIPAA compliance',
      ],
    },
    {
      id: 2,
      iconName: 'Finance',
      title: 'Financial Services',
      description: 'Secure, compliant solutions for modern financial operations.',
      solutions: [
        'Banking applications',
        'Payment gateways',
        'Fraud detection',
        'Regulatory compliance',
      ],
    },
    {
      id: 3,
      iconName: 'Ecommerce',
      title: 'E-commerce & Retail',
      description: 'Building seamless shopping experiences that drive sales.',
      solutions: [
        'Online stores',
        'Inventory management',
        'Order processing',
        'Customer analytics',
      ],
    },
    {
      id: 4,
      iconName: 'Education',
      title: 'Education & E-learning',
      description: 'Empowering institutions with innovative learning platforms.',
      solutions: [
        'Learning management systems',
        'Virtual classrooms',
        'Student portals',
        'Assessment tools',
      ],
    },
  ];

  return (
    <section className="industries-section" id="industries" aria-labelledby="industries-heading">
      <div className="industries-container">
        <header className="industries-header">
          <div className="industries-header-content">
            <p className="section-badge">INDUSTRIES WE SERVE</p>
            <h2 id="industries-heading" className="industries-title">
              Tailored solutions across diverse industries
            </h2>
            <div className="industries-header-description">
              <p>
                We bring deep industry expertise and technical excellence to deliver solutions that address your unique challenges.
              </p>
            </div>
          </div>
          <IndustriesIllustration />
        </header>

        <div className="industries-grid" role="list">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

Industries.displayName = 'Industries';

export default memo(Industries);