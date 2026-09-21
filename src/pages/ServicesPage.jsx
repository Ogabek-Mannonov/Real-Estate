import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const ServicesPage = () => {
  const [activeFaq, setActiveFaq] = useState(2);

  return (
    <main>
      <PageHeader title="Our Services" breadcrumb="Services" />

      {/* --- WHY CHOOSE US --- */}
      <section className="why-choose-us" style={{ marginTop: '40px' }}>
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
            {[
              "What is a single property listing?",
              "What information is included in a single property listing?",
              "Can I add a virtual tour or drone video?",
              "How do I know the property price is fair?",
              "How do I schedule a tour for the property?"
            ].map((q, idx) => (
              <div key={idx} className={`faq-item ${activeFaq === idx ? 'active' : ''}`}>
                 <div className="faq-question" onClick={() => setActiveFaq(idx)}>
                   {q} 
                   <span className={activeFaq === idx ? 'minus' : ''}>{activeFaq === idx ? '-' : '+'}</span>
                 </div>
                 {activeFaq === idx && (
                   <div className="faq-answer">
                      Project timelines vary depending on complexity, but most projects are completed within 4-12 weeks. We provide a clear timeline after the initial consultation.
                   </div>
                 )}
              </div>
            ))}
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
    </main>
  );
};

export default ServicesPage;
