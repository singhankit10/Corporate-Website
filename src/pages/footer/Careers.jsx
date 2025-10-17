import { useState, memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import './Careers.css';

// Illustrated Icons
const StatusIcon = memo(() => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="30" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
    <path d="M32 16v16l8 4" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="3" fill="#3b82f6"/>
  </svg>
));
StatusIcon.displayName = 'StatusIcon';

const ValueIcon = memo(({ icon }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    {icon}
  </svg>
));
ValueIcon.displayName = 'ValueIcon';
ValueIcon.propTypes = {
  icon: PropTypes.node.isRequired
};

const BenefitIcon = memo(({ children }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="8" fill="#E8F1FF"/>
    {children}
  </svg>
));
BenefitIcon.displayName = 'BenefitIcon';
BenefitIcon.propTypes = {
  children: PropTypes.node.isRequired
};

// Value Item Component
const ValueItem = memo(({ icon, title, description }) => (
  <div className="value-item">
    <div className="value-icon">
      <ValueIcon icon={icon} />
    </div>
    <div className="value-content">
      <h3 className="value-title">{title}</h3>
      <p className="value-description">{description}</p>
    </div>
  </div>
));
ValueItem.displayName = 'ValueItem';
ValueItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

// Benefit Item Component
const BenefitItem = memo(({ icon, title, description }) => (
  <div className="benefit-item">
    <div className="benefit-icon">
      <BenefitIcon>{icon}</BenefitIcon>
    </div>
    <div className="benefit-content">
      <h4 className="benefit-title">{title}</h4>
      <p className="benefit-description">{description}</p>
    </div>
  </div>
));
BenefitItem.displayName = 'BenefitItem';
BenefitItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const Careers = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  }, []);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const values = [
    {
      icon: (
        <path d="M24 8L8 28h12l-2 12 16-20H22l2-12z" fill="#3b82f6"/>
      ),
      title: "Innovation First",
      description: "We encourage creative thinking and embrace new technologies to solve complex problems."
    },
    {
      icon: (
        <>
          <circle cx="18" cy="15" r="6" stroke="#3b82f6" strokeWidth="2" fill="none"/>
          <path d="M10 36c0-6 5-9 12-9s12 3 12 9" stroke="#3b82f6" strokeWidth="2"/>
          <circle cx="34" cy="12" r="4" stroke="#3b82f6" strokeWidth="2" fill="none"/>
          <path d="M38 24c4 0 6 2 6 5" stroke="#3b82f6" strokeWidth="2"/>
        </>
      ),
      title: "Team Collaboration",
      description: "We believe in the power of teamwork and value every voice in our organization."
    },
    {
      icon: (
        <>
          <path d="M24 6L8 14v16c0 8 6 14 16 16 10-2 16-8 16-16V14L24 6z" 
            stroke="#3b82f6" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="22" r="4" fill="#3b82f6"/>
        </>
      ),
      title: "Growth Mindset",
      description: "Continuous learning and professional development are at the heart of what we do."
    },
    {
      icon: (
        <path d="M24 36L12 24l2.8-2.8 9.2 9.2 19.2-19.2L46 14 24 36z" fill="#3b82f6"/>
      ),
      title: "Work-Life Balance",
      description: "We prioritize your wellbeing with flexible work arrangements and comprehensive benefits."
    }
  ];

  const benefits = [
    {
      icon: <circle cx="20" cy="20" r="6" fill="#3b82f6"/>,
      title: "Competitive Salary",
      description: "Industry-leading compensation"
    },
    {
      icon: <path d="M20 12l-3 8h6l-3 8" fill="#3b82f6"/>,
      title: "Health Coverage",
      description: "Comprehensive medical benefits"
    },
    {
      icon: <rect x="12" y="12" width="16" height="16" rx="2" fill="#3b82f6"/>,
      title: "Flexible PTO",
      description: "Generous time off policy"
    },
    {
      icon: <path d="M14 14h12v12H14z M18 14v-4h4v4" fill="#3b82f6"/>,
      title: "Learning Budget",
      description: "Annual education stipend"
    },
    {
      icon: <path d="M12 20h16M20 12v16" stroke="#3b82f6" strokeWidth="2"/>,
      title: "Remote Work",
      description: "Work from anywhere"
    },
    {
      icon: <polygon points="20,10 25,20 20,30 15,20" fill="#3b82f6"/>,
      title: "Career Growth",
      description: "Clear advancement paths"
    }
  ];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="careers-hero-container">
          <span className="careers-badge">JOIN OUR TEAM</span>
          <h1 className="careers-hero-title">Build the Future with Xeviant</h1>
          <p className="careers-hero-description">
            Join a team of passionate technologists building innovative solutions 
            that transform businesses and make a real impact.
          </p>
        </div>
      </section>

      {/* Current Status */}
      <section className="careers-status">
        <div className="status-container">
          <div className="status-icon-wrapper">
            <StatusIcon />
          </div>
          <h2 className="status-title">Currently Building Our Team</h2>
          <p className="status-description">
            We're not actively hiring at the moment, but we're always interested in connecting with 
            talented individuals. Leave your email below and we'll notify you when positions open.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="careers-values">
        <div className="values-container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-list">
            {values.map((value, idx) => (
              <ValueItem key={idx} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="careers-benefits">
        <div className="benefits-container">
          <h2 className="section-title">Benefits & Perks</h2>
          <div className="benefits-list">
            {benefits.map((benefit, idx) => (
              <BenefitItem key={idx} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Notification Signup */}
      <section className="careers-signup">
        <div className="signup-container">
          <h2 className="signup-title">Stay Connected</h2>
          <p className="signup-description">
            Be the first to know when we start hiring. We'll send you updates about new opportunities.
          </p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                className="signup-input"
                required
                aria-label="Email address"
              />
              <button type="submit" className="signup-button" aria-label="Subscribe to job alerts">
                Notify Me
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            {submitted && (
              <p className="success-message" role="alert">
                ✓ Thanks! We'll notify you about future opportunities.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default memo(Careers);