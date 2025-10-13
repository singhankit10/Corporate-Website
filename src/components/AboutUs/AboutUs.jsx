import PropTypes from 'prop-types';
import './AboutUs.css';

const AboutUs = ({ 
  companyName = "Xeviant",
  tagline = "IT & Software Solutions",
  mission = "Transforming businesses through innovative technology solutions and exceptional software development services.",
  stats = [],
  values = [],
  team = []
}) => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Hero Introduction */}
        <div className="about-hero">
          <div className="about-hero-content">
            <span className="about-badge">ABOUT US</span>
            <h2 className="about-title">
              Building the future with <span className="gradient-text">innovative solutions</span>
            </h2>
            <p className="about-description">{mission}</p>
            
            {/* Stats */}
            {stats.length > 0 && (
              <div className="about-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="about-hero-visual">
            <div className="floating-illustration">
              {/* Geometric Illustration */}
              <svg className="geo-illustration" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Circuit board pattern */}
                <circle cx="200" cy="200" r="150" stroke="url(#gradient1)" strokeWidth="2" opacity="0.3"/>
                <circle cx="200" cy="200" r="120" stroke="url(#gradient1)" strokeWidth="2" opacity="0.4"/>
                <circle cx="200" cy="200" r="90" stroke="url(#gradient1)" strokeWidth="2" opacity="0.5"/>
                
                {/* Nodes */}
                <circle cx="200" cy="50" r="8" fill="#3b82f6"/>
                <circle cx="350" cy="200" r="8" fill="#60a5fa"/>
                <circle cx="200" cy="350" r="8" fill="#3b82f6"/>
                <circle cx="50" cy="200" r="8" fill="#60a5fa"/>
                
                {/* Connecting lines */}
                <line x1="200" y1="50" x2="350" y2="200" stroke="url(#gradient1)" strokeWidth="2"/>
                <line x1="350" y1="200" x2="200" y2="350" stroke="url(#gradient1)" strokeWidth="2"/>
                <line x1="200" y1="350" x2="50" y2="200" stroke="url(#gradient1)" strokeWidth="2"/>
                <line x1="50" y1="200" x2="200" y2="50" stroke="url(#gradient1)" strokeWidth="2"/>
                
                {/* Center icon */}
                <rect x="180" y="180" width="40" height="40" rx="8" fill="url(#gradient2)"/>
                <path d="M200 190 L200 210 M190 200 L210 200" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6"/>
                    <stop offset="100%" stopColor="#60a5fa"/>
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a2463"/>
                    <stop offset="100%" stopColor="#3b82f6"/>
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating cards */}
              <div className="float-card card-1">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor"/>
                </svg>
                <span>Fast</span>
              </div>
              <div className="float-card card-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7v10c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5z" 
                    stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Secure</span>
              </div>
              <div className="float-card card-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Reliable</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        {values.length > 0 && (
          <div className="about-values">
            <h3 className="section-subtitle">Our Core Values</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      {value.icon}
                    </svg>
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Section */}
        <div className="about-team">
          <div className="team-header">
            <h3 className="section-title">Our Team</h3>
            <p className="section-description">
              Meet the talented individuals who make everything possible
            </p>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card-inner">
                  {/* Front of card */}
                  <div className="team-card-front">
                    <div className="team-image-wrapper">
                      <div className="team-image" style={{ backgroundImage: `url(${member.image})` }}>
                        {!member.image && (
                          <div className="team-placeholder">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="8" r="4" fill="currentColor"/>
                              <path d="M4 20c0-4 3-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="team-ring ring-1"></div>
                      <div className="team-ring ring-2"></div>
                    </div>
                    <div className="team-info">
                      <h4 className="team-name">{member.name}</h4>
                      <p className="team-role">{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background decorations */}
        <div className="about-decorations">
          <div className="deco-blob blob-1"></div>
          <div className="deco-blob blob-2"></div>
          <div className="deco-grid"></div>
        </div>
      </div>
    </section>
  );
};

AboutUs.propTypes = {
  companyName: PropTypes.string,
  tagline: PropTypes.string,
  mission: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  values: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ),
  team: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      image: PropTypes.string
    })
  )
};

export default AboutUs;