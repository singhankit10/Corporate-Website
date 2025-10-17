import { useState } from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Healthcare', 'Finance', 'E-commerce', 'Education'];

  const caseStudies = [
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
      image: '🏥',
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
      image: '📈',
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
      image: '🛒',
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
      image: '🎓',
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
      image: '🔒',
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
      image: '🔬',
      color: '#06b6d4'
    }
  ];

  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

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
          <div className="filter-pills">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="case-studies-grid">
        <div className="grid-container">
          {filteredStudies.map((study) => (
            <article key={study.id} className="case-study-card">
              <div className="case-card-header">
                <div className="case-emoji" style={{ background: `${study.color}15` }}>
                  <span style={{ color: study.color }}>{study.image}</span>
                </div>
                <span className="case-category" style={{ background: `${study.color}15`, color: study.color }}>
                  {study.category}
                </span>
              </div>

              <h3 className="case-title">{study.title}</h3>
              <p className="case-client">Client: {study.client}</p>

              <div className="case-section">
                <h4 className="case-section-title">Challenge</h4>
                <p className="case-text">{study.challenge}</p>
              </div>

              <div className="case-section">
                <h4 className="case-section-title">Solution</h4>
                <p className="case-text">{study.solution}</p>
              </div>

              <div className="case-section">
                <h4 className="case-section-title">Key Results</h4>
                <ul className="case-results">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="result-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke={study.color} strokeWidth="2.5" strokeLinecap="round"/>
                      </svg>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="case-tech">
                <h4 className="case-section-title">Technologies</h4>
                <div className="tech-tags">
                  {study.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;