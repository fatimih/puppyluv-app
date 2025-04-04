import React from 'react';
import { sharedFeatures } from '../featuresData.jsx';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import dropinvisitImg from '../assets/images/dropinvisit.jpg';
import neighborhoodwalksImg from '../assets/images/neighborhoodwalks.jpg';
import dogparkvisitImg from '../assets/images/dogparkvisit.jpg';
import dogbeachvisitImg from '../assets/images/dogbeachvisit.jpg';
import hikingadventuresImg from '../assets/images/hikingadventures.jpg';
import inhomedogsittingImg from '../assets/images/inhomedogsitting.jpg';

const serviceImages = {
  'drop-in visits': dropinvisitImg,
  'neighborhood walks': neighborhoodwalksImg,
  'dog park visits': dogparkvisitImg,
  'dog beach visits': dogbeachvisitImg,
  'hiking adventures': hikingadventuresImg,
  'in home dog sitting': inhomedogsittingImg
};


function Services() {
    const location = useLocation(); 
  
    useEffect(() => { // Add this useEffect hook here
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
  
    const services = sharedFeatures;

    return (
      <div className="page-content">  
        <section className="hero">
          <h1>What kind of Luv do you want for your pup?</h1> 
          <p>Don't find a package that quite fits?<br/>I'm happy to curate one to suit your pups individual needs!</p>
        
            <h2><b>*</b> <b>Additional Services</b> also include: <b>Watering plants</b> / <b>Sweeping</b> & <b>moping</b> of your floors / Taking <b>trash</b> out / Collecting <b>mail</b> & <b>packages</b>.</h2>
        </section>
   
        <section className="features">
          <h2>Let's start here</h2>
          <div className="services-grid">
  {services.map((service, index) => (
    <div 
      id={service.title.toLowerCase().replace(/\s+/g, '-')} 
      key={index} 
      className="feature-item"
    >
      <img 
        src={serviceImages[service.title.toLowerCase()]}
        alt={service.title}
        className="service-image"
      />
      <h3>{service.title}</h3>
      <br/>
      {service.description}
      <Link to="/contact" className="book-btn">
        Book
      </Link>
    </div>
  ))}
</div>
        </section>

            <section className="features"style={{ marginTop: '1.5rem'}}>
                <h2>Want to learn more?</h2>
                <Link to="/about">
                  <button className="hero-btn"style={{ marginBottom: '2rem' }}>about Tima</button>
                </Link>
              </section>

                            {/* Reviews section */}
      <section className="features about-section" style={{ marginTop: '2.5rem' }}>
        <h2>Check out my reviews!</h2>
        
{/* Review platform icons */}
<div className="review-links" style={{ marginBottom: '1.5rem' }}>
  <a 
    href="https://www.yelp.com/biz/puppy-luv-san-diego" 
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
   
   export default Services;