import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/shared/ContactForm';

function Contact() {

  return (
    <div className="page-content">

      {/* Hero Section */}
      <section className="hero">
        <h1>Get in touch with me!</h1>
        <p>Happy to discuss your pups needs</p>
        <h2><b>*</b> <b>Every pup has their own needs</b> and you may not find exactly what you're looking for here. Contact me to <b>curate a service specific to your pup!</b>.</h2>
      </section>

      {/* Content Section */}
      <section className="features">
        <h2>Book a "meet and greet!"</h2>
        <div className="form-container">
           <ContactForm />
        </div>
       </section>
       <section className="features"style={{ marginTop: '1.5rem'}}>
          <h2>Need an overview of my services?</h2>
          <Link to="/services">
            <button className="hero-btn"style={{ marginBottom: '2rem' }}>view services</button>
          </Link>
        </section>

                      {/* Reviews section */}
      <section className="features reviews-section" style={{ marginTop: '2.5rem' }}>
        <h2>Check out my reviews!</h2>
        
{/* Review platform icons */}
<div className="review-links" style={{ marginBottom: '1.5rem' }}>
  <a 
    href="https://www.yelp.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="review-link"
  >
    <span className="yelp-icon" aria-label="Yelp Reviews"></span>
  </a>
  <a 
    href="https://www.google.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="review-link"
  >
    <span className="google-icon" aria-label="Google Reviews"></span>
  </a>
</div>
      </section>
      </div> 
  );
}

export default Contact;