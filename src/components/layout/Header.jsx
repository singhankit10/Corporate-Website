import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <h2>Xeviant</h2>
        </div>

        {/* Desktop Navigation */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <div className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </div>
          <div className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </div>
          <div className="nav-item">
            <a href="#services" className="nav-link">
              Services
            </a>
          </div>
          <div className="nav-item">
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
          </div>
          <div className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
        </nav>

        {/* CTA Buttons */}
        <div className="header-actions">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
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
    </header>
  );
};

export default Header;