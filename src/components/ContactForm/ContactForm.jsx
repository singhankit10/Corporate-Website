import { useState } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';

const ContactForm = ({ 
  title = "Get in Touch",
  subtitle = "Have a question or want to work together? We'd love to hear from you.",
  contactInfo = []
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const [errors, setErrors] = useState({});

  // Validation functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[\d\s\-+()]{10,}$/;
    return re.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for reaching out! We\'ll get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, error: false, message: '' });
      }, 5000);
    } else {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fix the errors below'
      });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info-side">
          <div className="contact-header">
            <span className="contact-badge">CONTACT US</span>
            <h2 className="contact-title">{title}</h2>
            <p className="contact-subtitle">{subtitle}</p>
          </div>

          <div className="contact-info-cards">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {info.icon}
                  </svg>
                </div>
                <div className="info-card-content">
                  <h3 className="info-card-title">{info.title}</h3>
                  <p className="info-card-detail">{info.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="contact-decoration">
            <div className="deco-circle circle-1"></div>
            <div className="deco-circle circle-2"></div>
            <div className="deco-line line-1"></div>
            <div className="deco-line line-2"></div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form-side">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {/* Status Messages */}
            {formStatus.message && (
              <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                <div className="message-icon">
                  {formStatus.error ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </div>
                <span>{formStatus.message}</span>
              </div>
            )}

            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input ${errors.name ? 'error' : ''}`}
                placeholder="John Doe"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            {/* Email and Phone Row */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="john@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  placeholder="+1 (555) 000-0000"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>

            {/* Subject Field */}
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject <span className="required">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`form-input ${errors.subject ? 'error' : ''}`}
                placeholder="How can we help you?"
              />
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                placeholder="Tell us more about your inquiry..."
                rows="5"
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-submit">
              <span>Send Message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

ContactForm.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  contactInfo: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired
    })
  )
};

export default ContactForm;