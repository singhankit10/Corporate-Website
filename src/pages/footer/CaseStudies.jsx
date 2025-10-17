import { useState, memo, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import './CaseStudies.css';

// Category Icons
const CategoryIcon = memo(({ category, color }) => {
  const icons = {
    Healthcare: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" fill={`${color}10`} stroke={color} strokeWidth="2"/>
        <path d="M30 18v24M18 30h24" stroke={color} strokeWidth="3" strokeLinecap="round"/>
        <circle cx="30" cy="30" r="8" stroke={color} strokeWidth="2" fill="none"/>
      </svg>
    ),
    Finance: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" fill={`${color}10`} stroke={color} strokeWidth="2"/>
        <path d="M30 15v30M35 20h-7a4 4 0 000 8h4a4 4 0 010 8h-7" 
          stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    'E-commerce': (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" fill={`${color}10`} stroke={color} strokeWidth="2"/>
        <path d="M20 22l3 12h14l3-12M23 34v4M37 34v4" 
          stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="23" cy="42" r="2" fill={color}/>
        <circle cx="37" cy="42" r="2" fill={color}/>
      </svg>
    ),
    Education: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" fill={`${color}10`} stroke={color} strokeWidth="2"/>
        <path d="M30 18L18 24l12 6 12-6-12-6z" stroke={color} strokeWidth="2" fill="none"/>
        <path d="M18 24v8c0 4 5 7 12 7s12-3 12-7v-8" stroke={color} strokeWidth="2"/>
      </svg>
    )
  };

  return icons[category] || icons.Healthcare;
});
CategoryIcon.displayName = 'CategoryIcon';
CategoryIcon.propTypes = {
  category: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

// Case Study Item Component
const CaseStudyItem = memo(({ study }) => {
  const { category, title, client, challenge, solution, results, tech, color } = study;

  return (
    <article className="case-item">
      <div className="case-icon-wrapper">
        <CategoryIcon category={category} color={color} />
      </div>

      <div className="case-header">
        <div className="case-meta">
          <span className="case-category" style={{ background: `${color}15`, color }}>
            {category}
          </span>
          <span className="case-client">{client}</span>
        </div>
      </div>

      <h3 className="case-title">{title}</h3>

      <div className="case-details">
        <div className="case-detail-row">
          <span className="case-label">Challenge</span>
          <p className="case-text">{challenge}</p>
        </div>

        <div className="case-detail-row">
          <span className="case-label">Solution</span>
          <p className="case-text">{solution}</p>
        </div>

        <div className="case-detail-row">
          <span className="case-label">Results</span>
          <ul className="case-results-list">
            {results.map((result, idx) => (
              <li key={idx} className="result-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="case-tech-row">
        <div className="case-detail-row">
          <span className="case-label">Tech Stack</span>
          <div className="tech-tags">
            {tech.map((item, idx) => (
              <span key={idx} className="tech-tag">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
});
CaseStudyItem.displayName = 'CaseStudyItem';
CaseStudyItem.propTypes = {
  study: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    challenge: PropTypes.string.isRequired,
    solution: PropTypes.string.isRequired,
    results: PropTypes.arrayOf(PropTypes.string).isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    color: PropTypes.string.isRequired
  }).isRequired
};

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = useMemo(() => ['All', 'Healthcare', 'Finance', 'E-commerce', 'Education'], []);

  const caseStudies = useMemo(() => [
    {
      id: 1,
      category: 'Healthcare',
      title: 'Digital Health Platform for Regional Hospital Network',
      client: 'MediCare Regional',
      challenge: 'Outdated patient management system causing inefficiencies and data silos across 12 hospitals.',
      solution: 'Built a cloud-based unified health platform with real-time patient records, appointment scheduling, and telemedicine capabilities.',
      results: [
        '40% reduction in patient wait times',
        '99.9% system uptime achieved',
        '60% faster patient record access',
        'Integrated telemedicine serving 5,000+ patients monthly'
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'HL7 FHIR'],
      color: '#10b981'
    },
    {
      id: 2,
      category: 'Finance',
      title: 'Real-Time Trading Analytics Platform',
      client: 'FinVest Capital',
      challenge: 'Manual data processing delaying critical trading decisions, resulting in missed opportunities.',
      solution: 'Developed AI-powered analytics platform with real-time market data processing and predictive modeling.',
      results: [
        '80% faster trade execution',
        '$2.3M additional revenue in Q1',
        '95% prediction accuracy for market trends',
        'Processing 100K+ transactions per second'
      ],
      tech: ['Python', 'TensorFlow', 'Apache Kafka', 'Redis', 'React'],
      color: '#3b82f6'
    },
    {
      id: 3,
      category: 'E-commerce',
      title: 'Omnichannel Retail Platform Transformation',
      client: 'ShopNow Retail',
      challenge: 'Disconnected online and offline sales channels causing inventory issues and poor customer experience.',
      solution: 'Created unified omnichannel platform with real-time inventory sync, personalized recommendations, and seamless checkout.',
      results: [
        '125% increase in online sales',
        '35% boost in customer retention',
        '50% reduction in cart abandonment',
        'Unified inventory across 200+ stores'
      ],
      tech: ['Next.js', 'MongoDB', 'Stripe', 'Shopify API', 'AWS Lambda'],
      color: '#f59e0b'
    },
    {
      id: 4,
      category: 'Education',
      title: 'Interactive E-Learning Platform for Universities',
      client: 'EduTech University Network',
      challenge: 'Traditional learning methods ineffective during remote education transition, low student engagement.',
      solution: 'Built comprehensive LMS with interactive content, live classes, AI-powered assessments, and collaboration tools.',
      results: [
        '90% student satisfaction rate',
        '75% improvement in engagement',
        'Supporting 50,000+ active learners',
        '40% better learning outcomes'
      ],
      tech: ['React', 'WebRTC', 'Node.js', 'MongoDB', 'AWS'],
      color: '#8b5cf6'
    },
    {
      id: 5,
      category: 'Finance',
      title: 'Automated Compliance & Risk Management System',
      client: 'SecureBank International',
      challenge: 'Manual compliance checks taking weeks, increasing regulatory risks and operational costs.',
      solution: 'Implemented AI-driven compliance automation with real-time risk assessment and automated reporting.',
      results: [
        '90% reduction in compliance time',
        'Zero regulatory violations in 18 months',
        '$1.2M annual cost savings',
        'Real-time risk monitoring across 50+ markets'
      ],
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'ML Models', 'Azure'],
      color: '#ef4444'
    },
    {
      id: 6,
      category: 'Healthcare',
      title: 'AI-Powered Diagnostic Assistance Tool',
      client: 'DiagnoTech Labs',
      challenge: 'Radiologists overwhelmed with imaging analysis, leading to delays in critical diagnoses.',
      solution: 'Developed AI diagnostic tool using deep learning to assist in medical imaging analysis with high accuracy.',
      results: [
        '60% faster diagnosis turnaround',
        '98% accuracy in anomaly detection',
        'Supporting 200+ radiologists',
        'Analyzed 100K+ medical images'
      ],
      tech: ['Python', 'PyTorch', 'DICOM', 'Flask', 'GCP'],
      color: '#06b6d4'
    }
  ], []);

  const filteredStudies = useMemo(() => 
    activeFilter === 'All' 
      ? caseStudies 
      : caseStudies.filter(study => study.category === activeFilter),
    [activeFilter, caseStudies]
  );

  const handleFilterChange = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  return (
    <div className="case-studies-page">
      {/* Hero Section */}
      <section className="case-hero">
        <div className="case-hero-container">
          <span className="case-badge">SUCCESS STORIES</span>
          <h1 className="case-hero-title">Real Results, Real Impact</h1>
          <p className="case-hero-description">
            Discover how we've helped organizations across industries achieve their digital transformation 
            goals and drive measurable business outcomes.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="case-filter-section">
        <div className="filter-container">
          <div className="filter-pills" role="tablist" aria-label="Filter case studies by category">
            {filters.map((filter) => (
              <button
                key={filter}
                role="tab"
                aria-selected={activeFilter === filter}
                className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="case-studies-list">
        <div className="case-items">
          {filteredStudies.map((study) => (
            <CaseStudyItem key={study.id} study={study} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="case-cta">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Write Your Success Story?</h2>
          <p className="cta-description">
            Let's discuss how we can help you achieve similar results for your organization.
          </p>
          <a href="/#contact" className="cta-button">
            <span>Start Your Project</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default memo(CaseStudies);