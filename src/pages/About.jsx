// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import timaImage from '../assets/images/tima.jpg';
import SEO from '../components/shared/SEO';

function About() {
  return (
    <>
      <SEO 
        title="About Tima - Puppy Luv San Diego" 
        description="Learn about Tima, an experienced pet sitter & dog walker serving the San Diego area with bonded and insured services."
      />
      
      <div className="page-content">  
        <section className="hero">
          <h1>Your pup's in good company with Tima-too!</h1>
          <p>Constantly curious and naturally creative, I have made a lifestyle of wandering around the world with my camera and making meaningful connections...</p>
          <h2><b>*</b>...and I am <b>Bonded </b>&<b> Insured</b> and certified by <b>The American Red Cross</b> in <b>Cat</b> & <b>Dog First Aid</b> </h2>
        </section>

        <section className="features">
          <h2>Why do I do this?</h2>
          <div className="about-grid">
            <div className="feature-item" style={{ marginTop: '-1rem', marginBottom: '1rem' }}>
              <img 
                src={timaImage}
                alt="Tima with dogs"
                className="about-about-image" style={{marginBottom:'1.7rem' }}
              />
             <h3>
    <span style={{ fontWeight: 'bold' }}>Always active, adaptive, and growing</span> - My natural curiosity helps me understand each dog's unique personality, making sure they always feel safe and loved. Having spent most of <span style={{ fontSize: '0.8em' }}>my life traveling and living in different parts of the world, I've been welcomed into many homes, and <span style={{ fontWeight: 'bold' }}>I truly value respecting spaces and creating a sense of comfort</span> for pets and their humans.</span>
  </h3>
              <h4>* "<b>Tima-too</b>" started in childhood, and stuck! And is now an endearing family name for me :)</h4>
            </div>
          </div>
        </section>

        <section className="features">
            <h2>Ready to talk 'pups'?</h2>
            <Link to="/contact">
              <button className="hero-btn" style={{ marginBottom: '2rem' }}>book "meet and greet!"</button>
            </Link>
          </section>

        {/* Reviews section */}
        <section className="features about-section" style={{ marginTop: '2.5rem' }}>
        <h2>What the pack has to say?</h2>
          
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
              href="https://g.co/kgs/2a5i4p1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="review-link"
            >
              <span className="google-icon" aria-label="Google Reviews"></span>
            </a>
          </div>
        </section>
      </div> 
    </>
  );
}

export default About;