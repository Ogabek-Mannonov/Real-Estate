import React from 'react';
import PageHeader from '../components/PageHeader';

const NewsPage = () => {
  return (
    <main>
      <PageHeader title="News & Articles" breadcrumb="News" />

      {/* --- BLOG SECTION --- */}
      <section className="blog-section container" style={{ paddingTop: '40px' }}>
        <div className="blog-header">
           <div>
             <span className="section-subtitle">✦ NEWS & ARTICLES</span>
             <h2>Experience new inspirations and movements</h2>
           </div>
        </div>
        <div className="blog-grid" style={{ marginBottom: '40px' }}>
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
           
           <div className="blog-card">
              <div className="blog-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')"}}></div>
              <div className="blog-meta">By <b>Smith</b> <span style={{marginLeft: '15px', color: '#888'}}>2 Comments</span></div>
              <h3>Innovations in Modern Urban Planning</h3>
           </div>
           <div className="blog-card">
              <div className="blog-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')"}}></div>
              <div className="blog-meta">By <b>Alex</b> <span style={{marginLeft: '15px', color: '#888'}}>5 Comments</span></div>
              <h3>Green Energy Solutions for Commercial Buildings</h3>
           </div>
           <div className="blog-card">
              <div className="blog-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')"}}></div>
              <div className="blog-meta">By <b>Kamrul</b> <span style={{marginLeft: '15px', color: '#888'}}>1 Comment</span></div>
              <h3>The Future of Real Estate Management</h3>
           </div>
        </div>
      </section>
    </main>
  );
};

export default NewsPage;
