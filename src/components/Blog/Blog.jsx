import { useState } from 'react';
import PropTypes from 'prop-types';
import './Blog.css';

const Blog = ({ posts = [] }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Technology', 'Business', 'Innovation'];

  const filteredPosts = activeCategory === 'All' 
    ? posts.slice(0, 3) 
    : posts.filter(post => post.category === activeCategory).slice(0, 3);

  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        {/* Header with Enhanced Illustration */}
        <div className="blog-header">
          <div className="blog-header-content">
            <span className="blog-badge">INSIGHTS & NEWS</span>
            <h2 className="blog-title">Latest from our <span className="gradient-text">blog</span></h2>
            <p className="blog-subtitle">
              Discover insights, trends, and stories from our team of experts
            </p>
            
            {/* Category Pills */}
            <div className="blog-categories">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-pill ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Artistic Illustration */}
          <div className="blog-illustration">
            <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Main Document/Notepad */}
              <rect x="80" y="60" width="180" height="220" rx="12" fill="url(#notepadGrad)" />
              <rect x="80" y="60" width="180" height="220" rx="12" stroke="#0a2463" strokeWidth="3" opacity="0.1"/>
              
              {/* Notepad Header */}
              <rect x="80" y="60" width="180" height="45" rx="12" fill="url(#headerGrad)"/>
              
              {/* Lines on notepad */}
              <line x1="100" y1="130" x2="220" y2="130" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.3"/>
              <line x1="100" y1="155" x2="240" y2="155" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.3"/>
              <line x1="100" y1="180" x2="200" y2="180" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.3"/>
              <line x1="100" y1="205" x2="230" y2="205" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.3"/>
              
              {/* Pen writing */}
              <g className="float-element">
                <rect x="220" y="30" width="70" height="12" rx="6" fill="url(#penGrad)" transform="rotate(45 255 36)"/>
                <circle cx="268" cy="24" r="8" fill="#3b82f6"/>
                <path d="M265 27 L248 44" stroke="#0a2463" strokeWidth="3" strokeLinecap="round"/>
              </g>
              
              {/* Floating icons around */}
              <g className="float-element" style={{animationDelay: '0.5s'}}>
                <circle cx="50" cy="100" r="25" fill="url(#iconGrad1)"/>
                <path d="M45 100 L50 105 L60 90" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              
              <g className="float-element" style={{animationDelay: '1s'}}>
                <rect x="265" y="140" width="40" height="40" rx="8" fill="url(#iconGrad2)"/>
                <circle cx="275" cy="150" r="3" fill="white"/>
                <circle cx="285" cy="150" r="3" fill="white"/>
                <circle cx="295" cy="150" r="3" fill="white"/>
                <path d="M275 162 L285 172 L295 162" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              
              <g className="float-element" style={{animationDelay: '1.5s'}}>
                <circle cx="45" cy="240" r="30" fill="url(#iconGrad3)"/>
                <path d="M35 240 L45 230 L55 240 L45 250 Z" fill="white"/>
              </g>
              
              {/* Sparkles */}
              <circle cx="120" cy="40" r="3" fill="#60a5fa" opacity="0.8" className="float-element"/>
              <circle cx="280" cy="100" r="2" fill="#06b6d4" opacity="0.6" className="float-element" style={{animationDelay: '0.7s'}}/>
              <circle cx="70" cy="180" r="2.5" fill="#3b82f6" opacity="0.7" className="float-element" style={{animationDelay: '1.2s'}}/>
              
              <defs>
                <linearGradient id="notepadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa"/>
                  <stop offset="100%" stopColor="#93c5fd"/>
                </linearGradient>
                <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0a2463"/>
                  <stop offset="100%" stopColor="#3b82f6"/>
                </linearGradient>
                <linearGradient id="penGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0a2463"/>
                  <stop offset="100%" stopColor="#1e3a8a"/>
                </linearGradient>
                <linearGradient id="iconGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981"/>
                  <stop offset="100%" stopColor="#34d399"/>
                </linearGradient>
                <linearGradient id="iconGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b"/>
                  <stop offset="100%" stopColor="#fbbf24"/>
                </linearGradient>
                <linearGradient id="iconGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6"/>
                  <stop offset="100%" stopColor="#a78bfa"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Enhanced Blog Cards */}
        <div className="blog-cards">
          {filteredPosts.map((post, index) => (
            <article key={index} className="blog-card-compact">
              <div className="card-compact-header">
                <span className="card-category">{post.category}</span>
                <span className="card-date">{formatDate(post.date)}</span>
              </div>
              <h3 className="card-title-compact">{post.title}</h3>
              <p className="card-excerpt-compact">{post.excerpt}</p>
              <div className="card-footer-compact">
                <div className="card-author-compact">
                  <div className="author-avatar-small">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" fill="currentColor"/>
                      <path d="M4 20c0-4 3-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span className="author-name-small">{post.author.name}</span>
                </div>
                <button className="btn-read-compact">
                  Read more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="blog-cta">
          <button className="btn-view-all">
            View All Articles
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Enhanced Background Art */}
        <div className="blog-bg-art">
          <div className="art-circle circle-1"></div>
          <div className="art-circle circle-2"></div>
          <div className="art-dots"></div>
        </div>
      </div>
    </section>
  );
};

Blog.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired
      }).isRequired
    })
  )
};

export default Blog;