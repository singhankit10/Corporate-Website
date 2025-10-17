import { useEffect } from 'react';
import './LegalPages.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "October 18, 2025";

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
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-subtitle">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="legal-content">
        <div className="legal-container">
          
          <div className="legal-section">
            <h2>Introduction</h2>
            <p>
              At Xeviant, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <div className="legal-section">
            <h2>Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information (email, phone number)</li>
              <li>Company details and job title</li>
              <li>Communication preferences</li>
              <li>Information you provide when contacting us or requesting services</li>
            </ul>
            <p>We also automatically collect certain information about your device and usage patterns through cookies and similar technologies.</p>
          </div>

          <div className="legal-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with third-party 
              service providers who perform services on our behalf, such as hosting, analytics, and 
              customer support. These providers are bound by confidentiality obligations.
            </p>
          </div>

          <div className="legal-section">
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div className="legal-section">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and receive a copy of your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and 
              store certain information. You can instruct your browser to refuse all cookies or to 
              indicate when a cookie is being sent.
            </p>
          </div>

          <div className="legal-section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </div>

          <div className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="contact-info">
              <strong>Email:</strong> contact@xeviant.com<br/>
              <strong>Address:</strong> Indore, Madhya Pradesh, 453771
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;