import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app-container">
      {/* --- NAVBAR --- */}
      <header className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#1a1f16"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#1a1f16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Realest</span>
          </div>
          <nav className="nav-links">
            <a href="#home">HOME</a>
            <a href="#pages">PAGES</a>
            <a href="#services">SERVICES</a>
            <a href="#project">PROJECT</a>
            <a href="#news">NEWS</a>
          </nav>
          <div className="nav-contact">
            <div className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div className="contact-info">
              <span className="contact-title">Call Anytime</span>
              <span className="contact-phone">017-50050088</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">
                 <div className="circle-text">
                   <svg viewBox="0 0 100 100" width="120" height="120">
                     <path id="curve" d="M 50 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent"/>
                     <text fill="white" fontSize="12" letterSpacing="2">
                       <textPath href="#curve">MY PROJECTS . MY PROJECTS . </textPath>
                     </text>
                   </svg>
                   <div className="circle-arrow">↓</div>
                 </div>
              </div>
              <h1>Crafting A Brighter Future</h1>
            </div>
          </div>

        </section>

        {/* --- FEATURES SECTION --- */}
        <section className="features container" id="features">
           <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Smart Home System</h3>
           </div>
           <div className="feature-card">
              <div className="feature-icon">☀️</div>
              <h3>Solar Energy Panels</h3>
           </div>
           <div className="feature-card">
              <div className="feature-icon">❄️</div>
              <h3>Central Air Conditioning</h3>
           </div>
           <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Investment Consulting</h3>
           </div>
           <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Reasonable Price</h3>
           </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section className="about container" id="about">
           <div className="about-images">
              <div className="about-img-main"></div>
              <div className="skilled-team-badge">
                 <h4>Skilled Team</h4>
                 <div className="team-avatars">
                    <div className="avatar"></div>
                    <div className="avatar"></div>
                    <div className="avatar"></div>
                    <div className="avatar-more">9+</div>
                 </div>
              </div>
              <div className="about-img-sub"></div>
           </div>
           <div className="about-text">
              <span className="section-subtitle">✦ ABOUT OUR COMPANY</span>
              <h2>The Foremost Privately Held Firm In Global Real Estate Investment And Management.</h2>
              <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. The foremost privately held firm in global real estate investment and management.</p>
              
              <div className="about-features">
                 <div className="about-feature">
                    <div className="feature-icon-large">📏</div>
                    <div>
                       <h4>Creative Solutions</h4>
                       <p>In today's competitive business landscape, the need for efficient IT solutions has been more critical.</p>
                    </div>
                 </div>
                 <div className="about-feature">
                    <div className="feature-icon-large">🏢</div>
                    <div>
                       <h4>Actionable Solutions</h4>
                       <p>In today's competitive business landscape, the need for efficient IT solutions has been more critical.</p>
                    </div>
                 </div>
              </div>
              <div className="about-actions">
                 <button className="btn-primary">
                   <span className="btn-icon">→</span> Read More
                 </button>
                 <div className="contact-info row-contact">
                    <div className="contact-icon bordered">📞</div>
                    <div>
                      <span className="contact-title">Call Anytime</span>
                      <span className="contact-phone-large">+01 7500 500 88</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section className="services-section" id="services">
          <div className="container">
             <span className="section-subtitle" style={{color: '#d1ff1a'}}>✦ OUR SERVICES</span>
             <h2 style={{color: 'white', marginBottom: '40px'}}>Check Out Our Key Services</h2>
             
             <div className="services-grid">
                <div className="service-card">
                   <div className="service-number">01</div>
                   <div className="service-card-icon">🏠</div>
                   <h3>Projects Management</h3>
                   <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur</p>
                   <div className="service-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}></div>
                </div>
                <div className="service-card">
                   <div className="service-number">02</div>
                   <div className="service-card-icon">📐</div>
                   <h3>Architecture & Design</h3>
                   <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur</p>
                   <div className="service-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}></div>
                </div>
                <div className="service-card">
                   <div className="service-number">03</div>
                   <div className="service-card-icon">💰</div>
                   <h3>Investment & Capital</h3>
                   <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur</p>
                   <div className="service-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}></div>
                </div>
             </div>
          </div>
        </section>

        {/* --- GALLERY SECTION --- */}
        <section className="gallery-preview" id="project">
           <div className="container">
              <div className="gallery-header text-center">
                 <span className="section-subtitle">✦ OUR GALLERY</span>
                 <h2>Displaying Your Creations</h2>
              </div>
              
              <div className="gallery-layout">
                 <div className="gallery-item-info">
                    <span className="gallery-category">DEVELOPMENT</span>
                    <h3 style={{fontSize: '2rem'}}>Apartment Building</h3>
                    <button className="btn-outline mt-8">
                       <span className="btn-icon">→</span> View More Details
                    </button>
                 </div>
                 <div className="gallery-item-img img-1"></div>
              </div>
           </div>
        </section>

        {/* --- WHY CHOOSE US --- */}
        <section className="why-choose-us" id="why-choose-us">
          <div className="why-choose-img"></div>
          <div className="why-choose-content">
            <span className="section-subtitle" style={{color: '#d1ff1a'}}>✦ WHY CHOOSE US</span>
            <h2 style={{color: 'white', maxWidth: '600px'}}>Premium Amenities Crafted For Modern Living</h2>
            <p style={{color: '#aaa', maxWidth: '600px', marginBottom: '30px'}}>
              "We design impactful built environments in fields ranging from energy and healthcare to entertainment and data centers, striving to elevate your project beyond expectations."
            </p>
            <ul className="why-choose-list">
              <li><span className="check-icon">✓</span> At vero eos et accusamus et iusto odio.</li>
              <li><span className="check-icon">✓</span> Sed ut perspiciatis unde omnis iste natus sit.</li>
              <li><span className="check-icon">✓</span> Established fact that a reader will be distracted.</li>
            </ul>
            <button className="btn-primary" style={{marginTop: '30px', backgroundColor: '#d1ff1a', color: '#1a1f16'}}>
               <span className="btn-icon" style={{backgroundColor: '#1a1f16', color: 'white'}}>→</span> Read More
            </button>
          </div>
        </section>

        {/* --- AWARDS SECTION --- */}
        <section className="awards-section container">
           <div className="awards-left">
             <div className="award-badge-large">
               <span className="badge-subtitle">PREMIUM QUALITY</span>
               <h3>Old Luxury</h3>
               <div className="badge-stars">★★★</div>
               <div className="badge-year">1854</div>
             </div>
           </div>
           <div className="awards-right">
             <div className="award-row">
               <div className="award-year">2026</div>
               <div className="award-title">Best Real Estate Agency</div>
               <div className="award-status">Winner</div>
               <div className="award-arrow">→</div>
             </div>
             <div className="award-row">
               <div className="award-year">2026</div>
               <div className="award-title">Property Consultant Award</div>
               <div className="award-status">Mentioned</div>
               <div className="award-arrow">→</div>
             </div>
             <div className="award-row">
               <div className="award-year">2026</div>
               <div className="award-title">Best Customer Service</div>
               <div className="award-status">Mentioned</div>
               <div className="award-arrow">→</div>
             </div>
             <div className="award-row">
               <div className="award-year">2026</div>
               <div className="award-title">Project of the year</div>
               <div className="award-status">Winner</div>
               <div className="award-arrow">→</div>
             </div>
           </div>
        </section>

        {/* --- LEADERSHIP TEAM --- */}
        <section className="team-section">
          <div className="container">
            <div className="team-header">
              <h2>Get to Know our leader ship team</h2>
              <div className="team-nav">
                <button className="nav-btn">←</button>
                <button className="nav-btn">→</button>
              </div>
            </div>
            <div className="team-grid">
               <div className="team-card team-1"></div>
               <div className="team-card team-2"></div>
               <div className="team-card team-3"></div>
               <div className="team-card team-4"></div>
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS --- */}
        <section className="testimonials-section container">
          <div className="text-center">
             <span className="section-subtitle">✦ HEAR FROM CUSTOMER</span>
             <h2 style={{maxWidth: '600px', margin: '0 auto 40px auto'}}>Hear What Others Say About Partnering With Us</h2>
          </div>
          <div className="testimonials-grid">
             <div className="testimonial-card">
                <div className="testimonial-img-wrapper">
                  <div className="testimonial-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')"}}></div>
                  <div className="testimonial-stars">★★★★★</div>
                </div>
                <div className="testimonial-content">
                  <p className="quote-text">"I cannot say enough good things about the team at Softeck. They took our vision and turned it into a stunning website."</p>
                  <div className="author-info">
                    <h4>Tina Brown</h4>
                    <span>Designer</span>
                  </div>
                  <div className="quote-icon">❞</div>
                </div>
             </div>
             <div className="testimonial-card">
                <div className="testimonial-img-wrapper">
                  <div className="testimonial-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')"}}></div>
                  <div className="testimonial-stars">★★★★★</div>
                </div>
                <div className="testimonial-content">
                  <p className="quote-text">"I cannot say enough good things about the team at Softeck. They took our vision and turned it into a stunning website."</p>
                  <div className="author-info">
                    <h4>Joan Cooper</h4>
                    <span>Clients of Company</span>
                  </div>
                  <div className="quote-icon">❞</div>
                </div>
             </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="faq-section container">
           <div className="faq-left">
             <span className="section-subtitle">✦ FAQ'S</span>
             <h2>From basics to details everything answered</h2>
             <p>We are all passionate and committed to deliver high quality services to our clients</p>
             <div className="faq-contact-box">
                <div className="faq-icon-box">?</div>
                <div>
                   <h4>Still have questions?</h4>
                   <p>Can't find the answer you're looking for?<br/>Please chat to our friendly team!</p>
                </div>
                <button className="btn-white">GET IN TOUCH</button>
             </div>
           </div>
           <div className="faq-right">
              <div className="faq-item">
                 <div className="faq-question">What is a single property listing? <span>+</span></div>
              </div>
              <div className="faq-item">
                 <div className="faq-question">What information is included in a single property listing? <span>+</span></div>
              </div>
              <div className="faq-item active">
                 <div className="faq-question">Can I add a virtual tour or drone video? <span className="minus">-</span></div>
                 <div className="faq-answer">
                    Project timelines vary depending on complexity, but most projects are completed within 4-12 weeks. We provide a clear timeline after the initial consultation.
                 </div>
              </div>
              <div className="faq-item">
                 <div className="faq-question">How do I know the property price is fair? <span>+</span></div>
              </div>
              <div className="faq-item">
                 <div className="faq-question">How do I schedule a tour for the property? <span>+</span></div>
              </div>
           </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section className="contact-section">
           <div className="contact-img"></div>
           <div className="contact-form-area">
             <span className="section-subtitle" style={{color: '#d1ff1a'}}>✦ SEND MESSAGE</span>
             <h2 style={{color: 'white'}}>Need Help For Project!</h2>
             <p style={{color: '#aaa', marginBottom: '40px'}}>We denounce with righteous indignation and like men beguiled and demoralized by the charms</p>
             
             <div className="contact-form-box">
               <form>
                  <div className="form-row">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="E-mail" />
                  </div>
                  <div className="form-row">
                    <input type="text" placeholder="Phone Number" />
                    <input type="text" placeholder="Subject" />
                  </div>
                  <textarea placeholder="Message" rows="4"></textarea>
                  <button className="btn-dark-full">SEND A MESSAGE</button>
               </form>
             </div>
           </div>
        </section>

        {/* --- BLOG SECTION --- */}
        <section className="blog-section container" id="news">
          <div className="blog-header">
             <div>
               <span className="section-subtitle">✦ NEWS & ARTICLES</span>
               <h2>Experience new inspirations and movements</h2>
             </div>
             <button className="btn-outline">
                <span className="btn-icon">→</span> View All News
             </button>
          </div>
          <div className="blog-grid">
             <div className="blog-card">
                <div className="blog-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')"}}></div>
                <div className="blog-meta">By <b>Kamrul</b> <span style={{marginLeft: '15px', color: '#888'}}>No Comments</span></div>
                <h3>Converting Clicks into Clients: Strategies from Agencies</h3>
             </div>
             <div className="blog-card">
                <div className="blog-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')"}}></div>
                <div className="blog-meta">By <b>Kamrul</b> <span style={{marginLeft: '15px', color: '#888'}}>No Comments</span></div>
                <h3>Driving Tangible Results: How Agencies Convert</h3>
             </div>
             <div className="blog-card">
                <div className="blog-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')"}}></div>
                <div className="blog-meta">By <b>Kamrul</b> <span style={{marginLeft: '15px', color: '#888'}}>No Comments</span></div>
                <h3>Traffic to Customers: How Leading Agencies Succeed</h3>
             </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
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
             <p style={{color: 'white', fontWeight: 'bold', marginBottom: '30px'}}>domain@example.com</p>
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
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Our Portfolio</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
               </div>
               <div className="footer-col">
                  <h4>Our Works</h4>
                  <ul>
                    <li><a href="#">Apartment Building</a></li>
                    <li><a href="#">Construction Management</a></li>
                    <li><a href="#">Investment & Capital</a></li>
                    <li><a href="#">Architecture & Design</a></li>
                    <li><a href="#">Projects Management</a></li>
                  </ul>
               </div>
             </div>
          </div>
        </div>
        <div className="container footer-bottom">
           <p>© Copyright Reserved by Company.com</p>
           <div className="footer-bottom-links">
             <a href="#">Privacy Policy</a>
             <a href="#">Term of Service</a>
           </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
