import { useEffect } from 'react';
import './LegalPages.css';

const Security = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      {/* Hero */}
      <section className="legal-hero">
        <div className="legal-hero-container">
          <a href="/" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Back to Home
          </a>
          <h1 className="legal-title">Security</h1>
          <p className="legal-subtitle">Protecting your data is our top priority</p>
        </div>
      </section>

      {/* Content */}
      <section className="legal-content">
        <div className="legal-container">
          
          <div className="legal-section">
            <h2>Our Commitment</h2>
            <p>
              At Xeviant, security is fundamental to everything we do. We implement industry-leading 
              practices and technologies to protect your data and maintain the trust you place in us.
            </p>
          </div>

          <div className="legal-section">
            <h2>Data Protection</h2>
            <p>We protect your data through:</p>
            <ul>
              <li>End-to-end encryption for data in transit and at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>Multi-factor authentication for system access</li>
              <li>Strict access controls and principle of least privilege</li>
              <li>Automated monitoring and threat detection</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Infrastructure Security</h2>
            <p>
              Our infrastructure is hosted on enterprise-grade cloud platforms with SOC 2 Type II 
              certification. We employ redundant systems, automated backups, and disaster recovery 
              procedures to ensure business continuity.
            </p>
          </div>

          <div className="legal-section">
            <h2>Compliance</h2>
            <p>We maintain compliance with:</p>
            <ul>
              <li>GDPR (General Data Protection Regulation)</li>
              <li>ISO 27001 information security standards</li>
              <li>Industry-specific regulations as applicable</li>
              <li>Data localization requirements</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Employee Security</h2>
            <p>
              All employees undergo security training and background checks. Access to sensitive data 
              is restricted to authorized personnel only, and all access is logged and monitored.
            </p>
          </div>

          <div className="legal-section">
            <h2>Incident Response</h2>
            <p>
              We maintain a comprehensive incident response plan. In the unlikely event of a security 
              incident, we will promptly investigate, contain the issue, and notify affected parties 
              in accordance with applicable laws.
            </p>
          </div>

          <div className="legal-section">
            <h2>Third-Party Security</h2>
            <p>
              We carefully vet all third-party service providers and ensure they meet our security 
              standards. Vendor agreements include strict security and confidentiality requirements.
            </p>
          </div>

          <div className="legal-section">
            <h2>Your Role in Security</h2>
            <p>You can help maintain security by:</p>
            <ul>
              <li>Using strong, unique passwords</li>
              <li>Enabling two-factor authentication when available</li>
              <li>Keeping your contact information up to date</li>
              <li>Reporting any suspicious activity immediately</li>
              <li>Not sharing account credentials</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Report a Security Issue</h2>
            <p>
              If you discover a security vulnerability or have concerns about our security practices, 
              please contact us immediately:
            </p>
            <p className="contact-info">
              <strong>Email:</strong> contact@xeviant.com<br/>
              <strong>Subject Line:</strong> Security Issue - [Brief Description]
            </p>
            <p>
              We take all security reports seriously and will respond promptly. We appreciate 
              responsible disclosure and will acknowledge your contribution.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Security;