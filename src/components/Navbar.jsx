import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active-link' : '';

  return (
    <header className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#1a1f16"/>
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#1a1f16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Realest</span>
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/" className={isActive('/')}>HOME</Link>
          <Link to="/about" className={isActive('/about')}>ABOUT</Link>
          <Link to="/services" className={isActive('/services')}>SERVICES</Link>
          <Link to="/projects" className={isActive('/projects')}>PROJECTS</Link>
          <Link to="/news" className={isActive('/news')}>NEWS</Link>
        </nav>
        <div className="nav-contact">
          <div className="contact-icon-yellow"><Phone size={20} /></div>
          <div className="contact-info">
            <span className="contact-title">Call Anytime</span>
            <span className="contact-phone">017-50050088</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
