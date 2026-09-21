import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
           <div className="logo" style={{color: 'white', marginBottom: '30px'}}>
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#d1ff1a"/>
               <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#d1ff1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
             <span>Realest</span>
           </div>
           <h2 style={{color: 'white', fontSize: '2rem'}}>+ (123) 456-7890</h2>
           <p style={{color: 'white', fontWeight: 'bold', marginBottom: '30px'}}>ogabekmannonovv@gmail.com</p>
           <div className="social-links">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
           </div>
        </div>
        <div className="footer-right">
           <div className="footer-newsletter">
              <h3 style={{color: 'white'}}>Get the latest inspiration & insights</h3>
           </div>
           <div className="footer-links-wrapper">
             <div className="footer-col">
                <h4>Quick Link</h4>
                <ul>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/about">Our Team</Link></li>
                  <li><Link to="/projects">Our Portfolio</Link></li>
                  <li><Link to="/">Careers</Link></li>
                  <li><Link to="/about">Contact Us</Link></li>
                </ul>
             </div>
             <div className="footer-col">
                <h4>Our Works</h4>
                <ul>
                  <li><Link to="/projects">Apartment Building</Link></li>
                  <li><Link to="/projects">Construction Management</Link></li>
                  <li><Link to="/services">Investment & Capital</Link></li>
                  <li><Link to="/services">Architecture & Design</Link></li>
                  <li><Link to="/services">Projects Management</Link></li>
                </ul>
             </div>
           </div>
        </div>
      </div>
      <div className="container footer-bottom">
         <p>© Copyright {new Date().getFullYear()} by Ogabek. All Rights Reserved.</p>
         <div className="footer-bottom-links">
           <Link to="/">Privacy Policy</Link>
           <Link to="/">Term of Service</Link>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
