import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['home', 'services', 'industries', 'sahyogi', 'about', 'blog', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo - Left */}
        <div className="logo">
          <a href="/#home" onClick={() => handleNavClick('home')}>
            <span className="logo-main">Xeviant</span>
          </a>
        </div>

        {/* Navigation - Center (Pill Shape) */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <div className="nav-pill">
            <a 
              href="/#home" 
              className={`nav-link ${activeSection === 'home' ? 'nav-link-active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </a>
            <a 
              href="/#services" 
              className={`nav-link ${activeSection === 'services' ? 'nav-link-active' : ''}`}
              onClick={() => handleNavClick('services')}
            >
              Services
            </a>
            <a 
              href="/#industries" 
              className={`nav-link ${activeSection === 'industries' ? 'nav-link-active' : ''}`}
              onClick={() => handleNavClick('industries')}
            >
              Industries
            </a>
            <a 
              href="/#about" 
              className={`nav-link ${activeSection === 'about' ? 'nav-link-active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About
            </a>
            <a 
              href="/#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'nav-link-active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Get in Touch Button - Right */}
        <div className="header-cta">
          <a href="/#contact" className="btn-touch" onClick={() => handleNavClick('contact')}>
            <span>Get in Touch</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="btn-arrow">
              <path 
                d="M5 12h14M12 5l7 7-7 7" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'menu-toggle-open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && <div className="nav-overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;