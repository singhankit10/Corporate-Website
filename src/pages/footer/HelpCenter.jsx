import { useState, memo, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import './HelpCenter.css';

// Topic Icon Component
const TopicIcon = memo(({ type }) => {
  const icons = {
    'getting-started': (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M24 14l-8 8h6v12h4V22h6l-8-8z" fill="#3b82f6"/>
      </svg>
    ),
    'account': (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
        <circle cx="24" cy="20" r="6" stroke="#3b82f6" strokeWidth="2" fill="none"/>
        <path d="M14 36c0-6 4-9 10-9s10 3 10 9" stroke="#3b82f6" strokeWidth="2"/>
      </svg>
    ),
    'billing': (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
        <rect x="14" y="18" width="20" height="14" rx="2" stroke="#3b82f6" strokeWidth="2" fill="none"/>
        <path d="M14 22h20M18 26h4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    'technical': (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M16 24l4 4 8-8" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="8" stroke="#3b82f6" strokeWidth="2" fill="none"/>
      </svg>
    ),
    'security': (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M24 12L14 18v8c0 6 4 11 10 12 6-1 10-6 10-12v-8l-10-6z" 
          stroke="#3b82f6" strokeWidth="2" fill="none"/>
        <circle cx="24" cy="24" r="3" fill="#3b82f6"/>
      </svg>
    ),
    'integrations': (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#E8F1FF" stroke="#3b82f6" strokeWidth="2"/>
        <circle cx="24" cy="24" r="4" fill="#3b82f6"/>
        <circle cx="18" cy="16" r="3" stroke="#3b82f6" strokeWidth="2" fill="none"/>
        <circle cx="30" cy="16" r="3" stroke="#3b82f6" strokeWidth="2" fill="none"/>
        <circle cx="18" cy="32" r="3" stroke="#3b82f6" strokeWidth="2" fill="none"/>
        <circle cx="30" cy="32" r="3" stroke="#3b82f6" strokeWidth="2" fill="none"/>
        <path d="M20 18l2 4M28 18l-2 4M20 30l2-4M28 30l-2-4" stroke="#3b82f6" strokeWidth="2"/>
      </svg>
    )
  };
  
  return icons[type] || icons['getting-started'];
});
TopicIcon.displayName = 'TopicIcon';
TopicIcon.propTypes = {
  type: PropTypes.string.isRequired
};

// Topic Item Component
const TopicItem = memo(({ topic }) => (
  <a href={topic.link} className="topic-item">
    <div className="topic-icon">
      <TopicIcon type={topic.type} />
    </div>
    <h3 className="topic-title">{topic.title}</h3>
    <p className="topic-count">{topic.count} articles</p>
  </a>
));
TopicItem.displayName = 'TopicItem';
TopicItem.propTypes = {
  topic: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired
};

// FAQ Item Component
const FAQItem = memo(({ faq, isOpen, onToggle }) => (
  <div className={`faq-item ${isOpen ? 'open' : ''}`}>
    <button 
      className="faq-question"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span>{faq.question}</span>
      <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </button>
    <div className="faq-answer">
      <div className="faq-answer-content">
        {faq.answer}
      </div>
    </div>
  </div>
));
FAQItem.displayName = 'FAQItem';
FAQItem.propTypes = {
  faq: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFAQ, setOpenFAQ] = useState(null);

  const topics = useMemo(() => [
    { type: 'getting-started', title: 'Getting Started', count: 12, link: '#getting-started' },
    { type: 'account', title: 'Account Management', count: 18, link: '#account' },
    { type: 'billing', title: 'Billing & Payments', count: 15, link: '#billing' },
    { type: 'technical', title: 'Technical Support', count: 24, link: '#technical' },
    { type: 'security', title: 'Security & Privacy', count: 10, link: '#security' },
    { type: 'integrations', title: 'Integrations', count: 16, link: '#integrations' }
  ], []);

  const faqs = useMemo(() => [
    {
      id: 1,
      question: 'How do I get started with Xeviant services?',
      answer: 'Getting started is easy! Contact us through our form, and we\'ll schedule a consultation to discuss your needs. We\'ll then provide a detailed proposal and timeline for your project.'
    },
    {
      id: 2,
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies including React, Node.js, Python, cloud platforms (AWS, Azure), and mobile development. Our team stays current with the latest industry trends and best practices.'
    },
    {
      id: 3,
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity and scope. Simple projects may take 4-8 weeks, while enterprise solutions can take 3-6 months. We provide detailed timelines during the planning phase.'
    },
    {
      id: 4,
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! We offer comprehensive support and maintenance packages to ensure your systems run smoothly. This includes updates, security patches, performance monitoring, and technical support.'
    },
    {
      id: 5,
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and retainer agreements. Contact us for a detailed quote tailored to your specific needs.'
    },
    {
      id: 6,
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We excel at collaborating with in-house teams and can integrate seamlessly into your existing development processes and workflows.'
    }
  ], []);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const toggleFAQ = useCallback((id) => {
    setOpenFAQ(prev => prev === id ? null : id);
  }, []);

  return (
    <div className="help-center-page">
      {/* Hero Section */}
      <section className="help-hero">
        <div className="help-hero-container">
          <span className="help-badge">HELP CENTER</span>
          <h1 className="help-hero-title">How can we help you?</h1>
          <p className="help-hero-description">
            Search our knowledge base or browse categories below to find answers to your questions.
          </p>
          
          {/* Search Bar */}
          <div className="help-search">
            <div className="search-input-wrapper">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search for articles..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="help-search-input"
                aria-label="Search help articles"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="help-topics">
        <h2 className="section-title">Browse by Topic</h2>
        <div className="topics-grid">
          {topics.map((topic, idx) => (
            <TopicItem key={idx} topic={topic} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="help-faq">
        <div className="faq-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openFAQ === faq.id}
                onToggle={() => toggleFAQ(faq.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="help-contact">
        <div className="contact-container">
          <h2 className="contact-title">Still need help?</h2>
          <p className="contact-description">
            Can't find what you're looking for? Our support team is here to help you.
          </p>
          <a href="/#contact" className="contact-button">
            <span>Contact Support</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default memo(HelpCenter);