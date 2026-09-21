import React, { useRef } from 'react';
import PageHeader from '../components/PageHeader';
import { Ruler, Building2, Phone } from 'lucide-react';

const AboutPage = () => {
  const teamCarouselRef = useRef(null);
  
  const scrollTeam = (direction) => {
    if (teamCarouselRef.current) {
      const scrollAmount = 300;
      teamCarouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main>
      <PageHeader title="About Us" breadcrumb="About Us" />
      
      {/* --- ABOUT SECTION --- */}
      <section className="about container" style={{ paddingTop: '40px' }}>
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
               <button className="btn-primary">
                 <span className="btn-icon">→</span> Read More
               </button>
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

      {/* --- LEADERSHIP TEAM --- */}
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <h2>Get to Know our leader ship team</h2>
            <div className="team-nav">
              <button className="nav-btn" onClick={() => scrollTeam('left')}>←</button>
              <button className="nav-btn" onClick={() => scrollTeam('right')}>→</button>
            </div>
          </div>
          <div className="team-carousel" ref={teamCarouselRef}>
             <div className="team-card team-1"></div>
             <div className="team-card team-2"></div>
             <div className="team-card team-3"></div>
             <div className="team-card team-4"></div>
             <div className="team-card team-5"></div>
             <div className="team-card team-6"></div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="testimonials-section container" style={{ marginBottom: '80px', borderRadius: '24px' }}>
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
    </main>
  );
};

export default AboutPage;
