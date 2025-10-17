import { useState } from 'react';
import './Careers.css';

const Careers = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission for job alerts
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  const values = [
    {
      icon: (
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      ),
      title: "Innovation First",
      description: "We encourage creative thinking and embrace new technologies to solve complex problems."
    },
    {
      icon: (
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      ),
      title: "Team Collaboration",
      description: "We believe in the power of teamwork and value every voice in our organization."
    },
    {
      icon: (
        <path d="M12 2L2 7v10c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5z" stroke="currentColor" strokeWidth="2" fill="none"/>
      ),
      title: "Growth Mindset",
      description: "Continuous learning and professional development are at the heart of what we do."
    },
    {
      icon: (
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      ),
      title: "Work-Life Balance",
      description: "We prioritize your wellbeing with flexible work arrangements and comprehensive benefits."
    }
  ];

  const benefits = [
    { icon: "💰", title: "Competitive Salary", description: "Industry-leading compensation packages" },
    { icon: "🏥", title: "Health Insurance", description: "Comprehensive medical coverage for you and family" },
    { icon: "🏖️", title: "Flexible PTO", description: "Generous vacation and personal time off" },
    { icon: "📚", title: "Learning Budget", description: "Annual budget for courses and conferences" },
    { icon: "🏠", title: "Remote Work", description: "Work from anywhere with flexible hours" },
    { icon: "🎯", title: "Career Growth", description: "Clear advancement paths and mentorship" }
  ];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="careers-hero-container">
          <span className="careers-badge">JOIN OUR TEAM</span>
          <h1 className="careers-hero-title">Build the Future with Xeviant</h1>
          <p className="careers-hero-description">
            We're building innovative solutions that transform businesses. Join a team of passionate 
            technologists who are making a real impact.
          </p>
        </div>
      </section>

      {/* Current Status */}
      <section className="careers-status">
        <div className="status-container">
          <div className="status-card">
            <div className="status-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="status-title">Currently Building Our Team</h2>
            <p className="status-description">
              We're not actively hiring at the moment, but we're always interested in connecting with 
              talented individuals. Leave your email below and we'll notify you when new positions open up.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="careers-values">
        <div className="values-container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">What drives us every day</p>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    {value.icon}
                  </svg>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="careers-benefits">
        <div className="benefits-container">
          <h2 className="section-title">Benefits & Perks</h2>
          <p className="section-subtitle">We take care of our team</p>
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-card">
                <div className="benefit-emoji">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
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
                onChange={(e) => setEmail(e.target.value)}
                className="signup-input"
                required
              />
              <button type="submit" className="signup-button">
                Notify Me
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            {submitted && (
              <p className="success-message">✓ Thanks! We'll notify you about future opportunities.</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Careers;