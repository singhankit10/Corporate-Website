import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">WORKTECH</div>
          <h1 className="hero-title">
            The infrastructure of modern work
          </h1>
          <p className="hero-description">
            Engineering new ways of connecting talents and organizations to 
            enhance their financial performance and simplify compliance.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">I'm a Talent</button>
            <button className="btn btn-secondary">I'm a Business</button>
          </div>
          <div className="hero-rating">
            <span className="rating-label">Excellent</span>
            <span className="rating-score">4.7 out of 5</span>
            <span className="rating-stars">★ Trustpilot</span>
          </div>
        </div>

        <div className="hero-visual">
          {/* Card 1 - With icons and metrics */}
          <div className="visual-card card-1">
            <div className="card-header">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor"/>
                </svg>
              </div>
              <div className="card-stats">
                <div className="stat-item">
                  <span className="stat-value">98%</span>
                  <span className="stat-label">Uptime</span>
                </div>
              </div>
            </div>
            <div className="card-pattern pattern-1"></div>
          </div>

          {/* Card 2 - With graph visualization */}
          <div className="visual-card card-2">
            <div className="card-content">
              <div className="mini-graph">
                <div className="graph-bar" style={{height: '40%'}}></div>
                <div className="graph-bar" style={{height: '70%'}}></div>
                <div className="graph-bar" style={{height: '55%'}}></div>
                <div className="graph-bar" style={{height: '85%'}}></div>
                <div className="graph-bar" style={{height: '60%'}}></div>
              </div>
              <div className="card-badge">Real-time Analytics</div>
            </div>
            <div className="card-pattern pattern-2"></div>
          </div>

          {/* Card 3 - With circular progress */}
          <div className="visual-card card-3">
            <div className="card-content">
              <div className="circular-progress">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="35" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="6"/>
                  <circle cx="40" cy="40" r="35" fill="none" stroke="white" strokeWidth="6" 
                    strokeDasharray="220" strokeDashoffset="44" 
                    transform="rotate(-90 40 40)" strokeLinecap="round"/>
                </svg>
                <div className="progress-text">
                  <span className="progress-value">80%</span>
                </div>
              </div>
              <div className="card-label">Performance Score</div>
            </div>
            <div className="card-pattern pattern-3"></div>
          </div>

          {/* Floating elements for extra visual interest */}
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;