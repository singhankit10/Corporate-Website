import { useEffect } from 'react';
import './LegalPages.css';

const TermsOfService = () => {
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
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-subtitle">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="legal-content">
        <div className="legal-container">
          
          <div className="legal-section">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using Xeviant's services, you accept and agree to be bound by these 
              Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div className="legal-section">
            <h2>Services</h2>
            <p>
              Xeviant provides IT consulting, software development, cloud engineering, cybersecurity, 
              and related technology services. We reserve the right to modify, suspend, or discontinue 
              any aspect of our services at any time.
            </p>
          </div>

          <div className="legal-section">
            <h2>User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services in compliance with applicable laws</li>
              <li>Not interfere with or disrupt our services</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services are owned by Xeviant and are 
              protected by copyright, trademark, and other intellectual property laws. You may not 
              copy, modify, distribute, or reverse engineer any part of our services without written permission.
            </p>
          </div>

          <div className="legal-section">
            <h2>Service Level & Availability</h2>
            <p>
              While we strive to maintain high availability, we do not guarantee uninterrupted access 
              to our services. We may perform maintenance or updates that temporarily affect service availability.
            </p>
          </div>

          <div className="legal-section">
            <h2>Payment Terms</h2>
            <p>
              Payment terms are specified in individual service agreements. All fees are non-refundable 
              unless otherwise stated in your agreement. Late payments may result in suspension of services.
            </p>
          </div>

          <div className="legal-section">
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Xeviant shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages resulting from your use or 
              inability to use our services.
            </p>
          </div>

          <div className="legal-section">
            <h2>Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our services immediately, 
              without prior notice, for any reason, including breach of these Terms.
            </p>
          </div>

          <div className="legal-section">
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, 
              without regard to its conflict of law provisions.
            </p>
          </div>

          <div className="legal-section">
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any 
              material changes by posting the updated Terms on our website.
            </p>
          </div>

          <div className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
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

export default TermsOfService;