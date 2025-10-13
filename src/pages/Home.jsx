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

                {/* Animated gradient for connection lines */}
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1">
                    <animate attributeName="offset" values="0;1;0" dur="3s" repeatCount="indefinite"/>
                  </stop>
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8">
                    <animate attributeName="offset" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
                  </stop>
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1">
                    <animate attributeName="offset" values="1;1;1" dur="3s" repeatCount="indefinite"/>
                  </stop>
                </linearGradient>
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
              
              {/* Connection Lines - Network Paths with Flow */}
              <g className="network-connections">
                {/* Line 1: North America to Europe */}
                <line x1="250" y1="100" x2="370" y2="180" stroke="#3b82f6" strokeWidth="2.5" opacity="0.2" className="connection-base"/>
                <line x1="250" y1="100" x2="370" y2="180" stroke="url(#connectionGradient)" strokeWidth="2.5" className="connection-line line-1"/>
                
                {/* Line 2: Europe to Asia */}
                <line x1="370" y1="180" x2="340" y2="280" stroke="#3b82f6" strokeWidth="2.5" opacity="0.2" className="connection-base"/>
                <line x1="370" y1="180" x2="340" y2="280" stroke="url(#connectionGradient)" strokeWidth="2.5" className="connection-line line-2"/>
                
                {/* Line 3: Asia to South America */}
                <line x1="340" y1="280" x2="280" y2="380" stroke="#3b82f6" strokeWidth="2.5" opacity="0.2" className="connection-base"/>
                <line x1="340" y1="280" x2="280" y2="380" stroke="url(#connectionGradient)" strokeWidth="2.5" className="connection-line line-3"/>
                
                {/* Line 4: South America to Africa */}
                <line x1="280" y1="380" x2="130" y2="300" stroke="#3b82f6" strokeWidth="2.5" opacity="0.2" className="connection-base"/>
                <line x1="280" y1="380" x2="130" y2="300" stroke="url(#connectionGradient)" strokeWidth="2.5" className="connection-line line-4"/>
                
                {/* Line 5: Africa to North America */}
                <line x1="130" y1="300" x2="250" y2="100" stroke="#3b82f6" strokeWidth="2.5" opacity="0.2" className="connection-base"/>
                <line x1="130" y1="300" x2="250" y2="100" stroke="url(#connectionGradient)" strokeWidth="2.5" className="connection-line line-5"/>

                {/* Additional cross connections for mesh network */}
                <line x1="250" y1="100" x2="340" y2="280" stroke="#3b82f6" strokeWidth="2" opacity="0.15" className="connection-base"/>
                <line x1="250" y1="100" x2="340" y2="280" stroke="url(#connectionGradient)" strokeWidth="2" className="connection-line line-6"/>
                
                <line x1="370" y1="180" x2="130" y2="300" stroke="#3b82f6" strokeWidth="2" opacity="0.15" className="connection-base"/>
                <line x1="370" y1="180" x2="130" y2="300" stroke="url(#connectionGradient)" strokeWidth="2" className="connection-line line-7"/>
              </g>

              {/* Data Packets traveling along connections */}
              <g className="data-packets">
                {/* Packet 1 */}
                <circle r="3" fill="#3b82f6" className="data-packet packet-1">
                  <animateMotion dur="4s" repeatCount="indefinite">
                    <mpath href="#path1"/>
                  </animateMotion>
                </circle>
                
                {/* Packet 2 */}
                <circle r="3" fill="#3b82f6" className="data-packet packet-2">
                  <animateMotion dur="3.5s" repeatCount="indefinite">
                    <mpath href="#path2"/>
                  </animateMotion>
                </circle>
                
                {/* Packet 3 */}
                <circle r="3" fill="#3b82f6" className="data-packet packet-3">
                  <animateMotion dur="4.5s" repeatCount="indefinite">
                    <mpath href="#path3"/>
                  </animateMotion>
                </circle>
              </g>

              {/* Hidden paths for animation */}
              <defs>
                <path id="path1" d="M 250,100 L 370,180 L 340,280" fill="none"/>
                <path id="path2" d="M 340,280 L 280,380 L 130,300" fill="none"/>
                <path id="path3" d="M 130,300 L 250,100 L 370,180" fill="none"/>
              </defs>
              
              {/* Connection Points - Global Tech Hubs */}
              {/* Point 1 - North America (Top) */}
              <g className="connection-point point-1">
                <circle cx="250" cy="100" r="18" fill="url(#pointGlow)" opacity="0.3" className="point-glow"/>
                <circle cx="250" cy="100" r="8" fill="#3b82f6" className="point-dot"/>
                <circle cx="250" cy="100" r="4" fill="#ffffff"/>
                {/* Mini tech icon */}
                <g transform="translate(250, 100)">
                  <path d="M -3,-8 L 3,-8 L 3,-12 L -3,-12 Z" fill="#ffffff" opacity="0.8"/>
                </g>
              </g>
              
              {/* Point 2 - Europe (Top Right) */}
              <g className="connection-point point-2">
                <circle cx="370" cy="180" r="18" fill="url(#pointGlow)" opacity="0.3" className="point-glow"/>
                <circle cx="370" cy="180" r="8" fill="#3b82f6" className="point-dot"/>
                <circle cx="370" cy="180" r="4" fill="#ffffff"/>
                {/* Mini server icon */}
                <g transform="translate(370, 180)">
                  <rect x="-3" y="-10" width="6" height="3" rx="1" fill="#ffffff" opacity="0.8"/>
                </g>
              </g>
              
              {/* Point 3 - Asia (Right) */}
              <g className="connection-point point-3">
                <circle cx="340" cy="280" r="18" fill="url(#pointGlow)" opacity="0.3" className="point-glow"/>
                <circle cx="340" cy="280" r="8" fill="#3b82f6" className="point-dot"/>
                <circle cx="340" cy="280" r="4" fill="#ffffff"/>
                {/* Mini cloud icon */}
                <g transform="translate(340, 280)">
                  <ellipse cx="0" cy="-9" rx="4" ry="2" fill="#ffffff" opacity="0.8"/>
                </g>
              </g>
              
              {/* Point 4 - South America (Bottom) */}
              <g className="connection-point point-4">
                <circle cx="280" cy="380" r="18" fill="url(#pointGlow)" opacity="0.3" className="point-glow"/>
                <circle cx="280" cy="380" r="8" fill="#3b82f6" className="point-dot"/>
                <circle cx="280" cy="380" r="4" fill="#ffffff"/>
                {/* Mini data icon */}
                <g transform="translate(280, 380)">
                  <circle cx="0" cy="-9" r="2" fill="#ffffff" opacity="0.8"/>
                </g>
              </g>
              
              {/* Point 5 - Africa (Left) */}
              <g className="connection-point point-5">
                <circle cx="130" cy="300" r="18" fill="url(#pointGlow)" opacity="0.3" className="point-glow"/>
                <circle cx="130" cy="300" r="8" fill="#3b82f6" className="point-dot"/>
                <circle cx="130" cy="300" r="4" fill="#ffffff"/>
                {/* Mini network icon */}
                <g transform="translate(130, 300)">
                  <line x1="-3" y1="-9" x2="3" y2="-9" stroke="#ffffff" strokeWidth="1" opacity="0.8"/>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;