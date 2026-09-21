import React, { useRef, useState, useEffect } from 'react';
import { Home as HomeIcon, Sun, Wind, Briefcase, DollarSign, Ruler, Building2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
];

const Home = () => {
  const servicesCarouselRef = useRef(null);
  const teamCarouselRef = useRef(null);
  const [currentHeroImg, setCurrentHeroImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImg((prev) => (prev + 1) % heroImages.length);
    }, 4000); // changes every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const scrollServices = (direction) => {
    if (servicesCarouselRef.current) {
      const scrollAmount = 380;
      servicesCarouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollTeam = (direction) => {
    if (teamCarouselRef.current) {
      const scrollAmount = 300;
      teamCarouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main>
        {/* --- HERO SECTION --- */}
        <section className="hero" style={{ backgroundImage: `url('${heroImages[currentHeroImg]}')`, transition: 'background-image 1s ease-in-out' }}>
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
        <section className="features container">
           <div className="feature-card">
              <div className="feature-icon"><HomeIcon size={32} strokeWidth={1.5} /></div>
              <h3>Smart Home System</h3>
           </div>
           <div className="feature-card">
              <div className="feature-icon"><Sun size={32} strokeWidth={1.5} /></div>
              <h3>Solar Energy Panels</h3>
           </div>
           <div className="feature-card">
              <div className="feature-icon"><Wind size={32} strokeWidth={1.5} /></div>
              <h3>Central Air Conditioning</h3>
           </div>
           <div className="feature-card">
              <div className="feature-icon"><Briefcase size={32} strokeWidth={1.5} /></div>
              <h3>Investment Consulting</h3>
           </div>
           <div className="feature-card">
              <div className="feature-icon"><DollarSign size={32} strokeWidth={1.5} /></div>
              <h3>Reasonable Price</h3>
           </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section className="about container">
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
                    <div className="feature-icon-large"><Ruler size={32} strokeWidth={1.5} /></div>
                    <div>
                       <h4>Creative Solutions</h4>
                       <p>In today's competitive business landscape, the need for efficient IT solutions has been more critical.</p>
                    </div>
                 </div>
                 <div className="about-feature">
                    <div className="feature-icon-large"><Building2 size={32} strokeWidth={1.5} /></div>
                    <div>
                       <h4>Actionable Solutions</h4>
                       <p>In today's competitive business landscape, the need for efficient IT solutions has been more critical.</p>
                    </div>
                 </div>
              </div>
              <div className="about-actions">
                 <Link to="/about" className="btn-primary" style={{ textDecoration: 'none' }}>
                   <span className="btn-icon">→</span> Read More
                 </Link>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div className="contact-icon bordered" style={{ width: '45px', height: '45px' }}><Phone size={20} /></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="contact-title" style={{ margin: 0 }}>Call Anytime</span>
                      <span className="contact-phone-large" style={{ margin: 0 }}>+01 7500 500 88</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section className="services-section">
          <div className="container" style={{ position: 'relative' }}>
             <span className="section-subtitle" style={{color: '#d1ff1a'}}>✦ OUR SERVICES</span>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                <h2 style={{color: 'white', margin: 0}}>Check Out Our Key Services</h2>
                <div className="carousel-nav" style={{ display: 'flex', gap: '10px' }}>
                   <button className="nav-btn" onClick={() => scrollServices('left')}>←</button>
                   <button className="nav-btn" onClick={() => scrollServices('right')}>→</button>
                </div>
             </div>
             
             <div className="services-carousel" ref={servicesCarouselRef}>
                <div className="service-card active">
                   <div className="service-number">05</div>
                   <div className="service-card-icon"><Building2 size={40} strokeWidth={1} /></div>
                   <h3>Property Rentals Services</h3>
                   <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur</p>
                   <div className="service-img-wrapper">
                     <div className="service-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}></div>
                     <div className="service-img-arrow">↗</div>
                   </div>
                </div>
                <div className="service-card">
                   <div className="service-number">01</div>
                   <div className="service-card-icon"><HomeIcon size={40} strokeWidth={1} /></div>
                   <h3>Projects Management</h3>
                   <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur</p>
                   <div className="service-img-wrapper">
                     <div className="service-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}></div>
                     <div className="service-img-arrow">↗</div>
                   </div>
                </div>
                <div className="service-card">
                   <div className="service-number">02</div>
                   <div className="service-card-icon"><Ruler size={40} strokeWidth={1} /></div>
                   <h3>Architecture & Design</h3>
                   <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur</p>
                   <div className="service-img-wrapper">
                     <div className="service-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}></div>
                     <div className="service-img-arrow">↗</div>
                   </div>
                </div>
                <div className="service-card">
                   <div className="service-number">03</div>
                   <div className="service-card-icon"><Briefcase size={40} strokeWidth={1} /></div>
                   <h3>Investment & Capital</h3>
                   <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur</p>
                   <div className="service-img-wrapper">
                     <div className="service-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}></div>
                     <div className="service-img-arrow">↗</div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* --- BLOG SECTION --- */}
        <section className="blog-section container">
          <div className="blog-header">
             <div>
               <span className="section-subtitle">✦ NEWS & ARTICLES</span>
               <h2>Experience new inspirations and movements</h2>
             </div>
             <Link to="/news" className="btn-outline" style={{ textDecoration: 'none' }}>
                <span className="btn-icon">→</span> View All News
             </Link>
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
  );
};

export default Home;
