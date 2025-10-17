import { useState, memo, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import './Announcements.css';

// Timeline Item Component
const TimelineItem = memo(({ announcement }) => {
  const { date, category, title, description, author } = announcement;
  
  const dateObj = new Date(date);
  const month = dateObj.toLocaleDateString('en-US', { month: 'short' });
  const day = dateObj.getDate();
  
  const categoryClass = `category-${category.toLowerCase()}`;

  return (
    <article className="timeline-item">
      <div className="timeline-date-wrapper">
        <span className="timeline-month">{month}</span>
        <span className="timeline-day">{day}</span>
      </div>

      <div className="announcement-content">
        <div className="announcement-header">
          <span className={`announcement-category ${categoryClass}`}>
            {category}
          </span>
        </div>

        <h3 className="announcement-title">{title}</h3>
        <p className="announcement-description">{description}</p>

        <div className="announcement-footer">
          <span className="announcement-author">By {author}</span>
          <a href="#" className="read-more-link">
            Read more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
});
TimelineItem.displayName = 'TimelineItem';
TimelineItem.propTypes = {
  announcement: PropTypes.shape({
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired
};

const Announcements = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const filters = useMemo(() => ['All', 'Feature', 'Update', 'Maintenance', 'News'], []);

  const announcements = useMemo(() => [
    {
      id: 1,
      date: '2025-01-15',
      category: 'Feature',
      title: 'New Analytics Dashboard Released',
      description: 'We\'re excited to announce the launch of our new analytics dashboard with real-time insights, customizable reports, and advanced data visualization capabilities.',
      author: 'Product Team'
    },
    {
      id: 2,
      date: '2025-01-10',
      category: 'Update',
      title: 'Enhanced Security Features',
      description: 'We\'ve implemented additional security measures including two-factor authentication, encrypted data storage, and advanced threat detection to keep your data safe.',
      author: 'Security Team'
    },
    {
      id: 3,
      date: '2025-01-05',
      category: 'News',
      title: 'Company Expands to New Markets',
      description: 'Xeviant is expanding operations to serve clients in Southeast Asia and Europe. This strategic move allows us to provide 24/7 support and localized services.',
      author: 'Executive Team'
    },
    {
      id: 4,
      date: '2024-12-28',
      category: 'Maintenance',
      title: 'Scheduled Maintenance - January 20th',
      description: 'We will be performing system maintenance on January 20th from 2:00 AM to 6:00 AM EST. Services may be temporarily unavailable during this time.',
      author: 'Operations Team'
    },
    {
      id: 5,
      date: '2024-12-20',
      category: 'Feature',
      title: 'API v2.0 Now Available',
      description: 'Our new API version includes improved performance, better documentation, and new endpoints for seamless integrations. Migration guide available in our developer docs.',
      author: 'Engineering Team'
    },
    {
      id: 6,
      date: '2024-12-15',
      category: 'Update',
      title: 'Mobile App Performance Improvements',
      description: 'Latest update brings significant performance enhancements, reduced load times by 40%, and improved offline functionality for better user experience.',
      author: 'Mobile Team'
    },
    {
      id: 7,
      date: '2024-12-10',
      category: 'News',
      title: 'Award-Winning Customer Support',
      description: 'We\'re honored to receive the "Best Customer Support" award from Tech Excellence Awards 2024. Thank you to our amazing support team and loyal customers!',
      author: 'Customer Success'
    },
    {
      id: 8,
      date: '2024-12-05',
      category: 'Feature',
      title: 'Introducing Team Collaboration Tools',
      description: 'New collaboration features including real-time editing, commenting, task assignments, and project management tools to help teams work more efficiently.',
      author: 'Product Team'
    }
  ], []);

  const filteredAnnouncements = useMemo(() => 
    activeFilter === 'All' 
      ? announcements 
      : announcements.filter(item => item.category === activeFilter),
    [activeFilter, announcements]
  );

  const handleFilterChange = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  }, []);

  return (
    <div className="announcements-page">
      {/* Hero Section */}
      <section className="announcements-hero">
        <div className="announcements-hero-container">
          <span className="announcements-badge">ANNOUNCEMENTS</span>
          <h1 className="announcements-hero-title">Stay Updated</h1>
          <p className="announcements-hero-description">
            Get the latest news, feature releases, and important updates from Xeviant.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="announcements-filter">
        <div className="filter-container">
          <div className="filter-pills" role="tablist" aria-label="Filter announcements by category">
            {filters.map((filter) => (
              <button
                key={filter}
                role="tab"
                aria-selected={activeFilter === filter}
                className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="announcements-timeline">
        <div className="timeline-list">
          {filteredAnnouncements.map((announcement) => (
            <TimelineItem key={announcement.id} announcement={announcement} />
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="announcements-subscribe">
        <div className="subscribe-container">
          <h2 className="subscribe-title">Subscribe to Updates</h2>
          <p className="subscribe-description">
            Get important announcements delivered directly to your inbox.
          </p>
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                className="subscribe-input"
                required
                aria-label="Email address"
              />
              <button type="submit" className="subscribe-button" aria-label="Subscribe to announcements">
                Subscribe
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            {submitted && (
              <p className="success-message" role="alert">
                ✓ Successfully subscribed! You'll receive updates at {email}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default memo(Announcements);