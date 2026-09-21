import React from 'react';
import PageHeader from '../components/PageHeader';

const ProjectsPage = () => {
  return (
    <main>
      <PageHeader title="Our Projects" breadcrumb="Projects" />

      {/* --- GALLERY PREVIEW SECTION --- */}
      <section className="gallery-preview" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
             <div>
                <span className="section-subtitle">✦ OUR ALL PROJECT</span>
                <h2>Explore Some of Our<br/>Most Recent Works</h2>
             </div>
             <button className="btn-outline">
                <span className="btn-icon">→</span> Read More
             </button>
          </div>
          <div className="gallery-grid">
             <div className="gallery-item large" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}>
               <div className="gallery-overlay">
                  <div className="gallery-text">
                    <span>Architecture</span>
                    <h4>Molaris Town House</h4>
                  </div>
                  <div className="gallery-arrow">↗</div>
               </div>
             </div>
             <div className="gallery-item tall" style={{backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')"}}>
               <div className="gallery-overlay">
                  <div className="gallery-text">
                    <span>Modern</span>
                    <h4>Eco Building</h4>
                  </div>
                  <div className="gallery-arrow">↗</div>
               </div>
             </div>
             <div className="gallery-item" style={{backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')"}}>
               <div className="gallery-overlay">
                  <div className="gallery-text">
                    <span>Commercial</span>
                    <h4>City Central</h4>
                  </div>
                  <div className="gallery-arrow">↗</div>
               </div>
             </div>
             <div className="gallery-item" style={{backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')"}}>
               <div className="gallery-overlay">
                  <div className="gallery-text">
                    <span>Residential</span>
                    <h4>Luxury Villa</h4>
                  </div>
                  <div className="gallery-arrow">↗</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- AWARDS SECTION --- */}
      <section className="awards-section container">
         <span className="section-subtitle">✦ AWARDS & RECOGNITION</span>
         <h2>Company Award Win</h2>
         
         <div className="awards-list">
            <div className="award-item">
               <div className="award-date">MAR 2012 <span style={{color: '#d1ff1a'}}>•</span> <span style={{color: 'var(--text-dark)'}}>BEST DESIGN</span></div>
               <div className="award-title">Awwwards Interior Excellence</div>
               <div className="award-icon">↗</div>
            </div>
            <div className="award-item">
               <div className="award-date">SEP 2015 <span style={{color: '#d1ff1a'}}>•</span> <span style={{color: 'var(--text-dark)'}}>INNOVATION</span></div>
               <div className="award-title">Global Architecture Awards</div>
               <div className="award-icon">↗</div>
            </div>
            <div className="award-item">
               <div className="award-date">NOV 2018 <span style={{color: '#d1ff1a'}}>•</span> <span style={{color: 'var(--text-dark)'}}>SUSTAINABILITY</span></div>
               <div className="award-title">Eco-Friendly Building of the Year</div>
               <div className="award-icon">↗</div>
            </div>
            <div className="award-item">
               <div className="award-date">JAN 2023 <span style={{color: '#d1ff1a'}}>•</span> <span style={{color: 'var(--text-dark)'}}>URBAN DEVELOPMENT</span></div>
               <div className="award-title">Cityscape Global Awards</div>
               <div className="award-icon">↗</div>
            </div>
         </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
