import PropTypes from 'prop-types';
import './ProductShowcase.css';

const ProductShowcase = ({ 
  badge = "PRODUCT SHOWCASE",
  title = "A new connection protocol for work",
  description = "Say goodbye to the old and outdated payroll system. Modern work demands a new employment protocol between talents and businesses. Ruul pioneers this revolutionary transformation.",
  infoBox = {
    title: "Agency of Record (AOR) service",
    description: "enables off-payroll talents and organizations to work together in a streamlined and compliant manner, simplifying cross-border work relations for both parties."
  },
  features = []
}) => {
  return (
    <section className="product-showcase" id="product-showcase">
      <div className="product-showcase-container">
        {/* Left Side - Phone Mockup */}
        <div className="product-visual">
          <div className="phone-mockup">
            <div className="decorative-circuit">
              <div className="circuit-node node-1">
                <div className="node-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="6" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div className="circuit-line line-1"></div>
              <div className="circuit-node node-2">
                <div className="node-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M6 10h12M10 6v12" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <div className="circuit-line line-2"></div>
              <div className="circuit-node node-3">
                <div className="node-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div className="circuit-line line-3"></div>
              <div className="circuit-node node-4">
                <div className="node-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Product Name Card */}
            <div className="product-name-card">
              <span className="product-name"></span>
            </div>

            {/* Placeholder for App Screenshot */}
            <div className="app-screenshot-placeholder">
              <div className="placeholder-content">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <p>App Screenshot</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="product-content">
          <span className="product-badge">{badge}</span>
          <h2 className="product-title">{title}</h2>
          <p className="product-description">{description}</p>

          {/* Info Box */}
          <div className="product-info-box">
            <div className="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="info-content">
              <strong>{infoBox.title}</strong> {infoBox.description}
            </div>
          </div>

          {/* Features Grid */}
          <div className="product-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {feature.icon}
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

ProductShowcase.propTypes = {
  badge: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  infoBox: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  }),
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};

export default ProductShowcase;