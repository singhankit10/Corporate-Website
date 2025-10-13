import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">IT SOLUTIONS & SERVICES</div>
          <h1 className="hero-title">
            Transforming businesses through innovative technology
          </h1>
          <p className="hero-description">
            Expert software development and cloud solutions to accelerate your digital transformation.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>

        {/* Animated Globe Illustration */}
        <div className="hero-visual">
          <div className="globe-illustration">
            <svg viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
              <defs>
                {/* Gradients */}
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.4"/>
                  <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.4"/>
                </linearGradient>
                
                {/* Glow effect for points */}
                <radialGradient id="pointGlow">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
                </radialGradient>
              </defs>
              
              {/* Main Globe Circle */}
              <circle 
                cx="250" 
                cy="250" 
                r="180" 
                fill="none" 
                stroke="#cbd5e1" 
                strokeWidth="2.5"
                className="globe-circle"
              />
              
              {/* Vertical longitude lines */}
              <ellipse cx="250" cy="250" rx="180" ry="180" fill="none" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6"/>
              <ellipse cx="250" cy="250" rx="144" ry="180" fill="none" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6"/>
              <ellipse cx="250" cy="250" rx="108" ry="180" fill="none" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6"/>
              <ellipse cx="250" cy="250" rx="72" ry="180" fill="none" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6"/>
              <ellipse cx="250" cy="250" rx="36" ry="180" fill="none" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6"/>
              
              {/* Horizontal latitude lines */}
              <ellipse cx="250" cy="250" rx="180" ry="50" fill="none" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6"/>
              <ellipse cx="250" cy="250" rx="180" ry="100" fill="none" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6"/>
              <ellipse cx="250" cy="250" rx="180" ry="150" fill="none" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6"/>
              
              {/* Center equator line */}
              <line x1="70" y1="250" x2="430" y2="250" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.7"/>
              
              {/* Connection Points with Pulse */}
              {/* Point 1 - Top */}
              <g className="connection-point point-1">
                <circle cx="250" cy="100" r="18" fill="url(#pointGlow)" opacity="0.3" className="point-glow"/>
                <circle cx="250" cy="100" r="8" fill="#3b82f6" className="point-dot"/>
                <circle cx="250" cy="100" r="4" fill="#ffffff"/>
              </g>
              
              {/* Point 2 - Top Right */}
              <g className="connection-point point-2">
                <circle cx="370" cy="180" r="18" fill="url(#pointGlow)" opacity="0.3" className="point-glow"/>
                <circle cx="370" cy="180" r="8" fill="#3b82f6" className="point-dot"/>
                <circle cx="370" cy="180" r="4" fill="#ffffff"/>
              </g>
              
              {/* Point 3 - Right */}
              <g className="connection-point point-3">
                <circle cx="340" cy="280" r="18" fill="url(#pointGlow)" opacity="0.3" className="point-glow"/>
                <circle cx="340" cy="280" r="8" fill="#3b82f6" className="point-dot"/>
                <circle cx="340" cy="280" r="4" fill="#ffffff"/>
              </g>
              
              {/* Point 4 - Bottom */}
              <g className="connection-point point-4">
                <circle cx="280" cy="380" r="18" fill="url(#pointGlow)" opacity="0.3" className="point-glow"/>
                <circle cx="280" cy="380" r="8" fill="#3b82f6" className="point-dot"/>
                <circle cx="280" cy="380" r="4" fill="#ffffff"/>
              </g>
              
              {/* Point 5 - Left */}
              <g className="connection-point point-5">
                <circle cx="130" cy="300" r="18" fill="url(#pointGlow)" opacity="0.3" className="point-glow"/>
                <circle cx="130" cy="300" r="8" fill="#3b82f6" className="point-dot"/>
                <circle cx="130" cy="300" r="4" fill="#ffffff"/>
              </g>
              
              {/* Connection Lines */}
              <line x1="250" y1="100" x2="370" y2="180" stroke="#3b82f6" strokeWidth="2" opacity="0.4" className="connection-line line-1"/>
              <line x1="370" y1="180" x2="340" y2="280" stroke="#3b82f6" strokeWidth="2" opacity="0.4" className="connection-line line-2"/>
              <line x1="340" y1="280" x2="280" y2="380" stroke="#3b82f6" strokeWidth="2" opacity="0.4" className="connection-line line-3"/>
              <line x1="280" y1="380" x2="130" y2="300" stroke="#3b82f6" strokeWidth="2" opacity="0.4" className="connection-line line-4"/>
              <line x1="130" y1="300" x2="250" y2="100" stroke="#3b82f6" strokeWidth="2" opacity="0.4" className="connection-line line-5"/>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;