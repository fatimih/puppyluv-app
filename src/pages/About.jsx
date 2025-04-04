// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import naeVideo from '/nae.mp4';
import teddyVideo from '/teddy.mp4';

function About() {
  return (
    <div className="page-content">  
      <section className="hero">
        <h1>Tima</h1>
        <p>Constantly curious and naturally creative, I have made a lifestyle of wandering around the world with my camera and making meaningful connections.</p>
        <h2><b>*</b> I am <b>Bonded & Insured</b> and certified by <b>The American Red Cross</b> in <b>Cat and Dog Firt Aid.</b> </h2>
      </section>

      <section className="features">
        <h2>Why do I do this?</h2>
        <div className="about-grid">
          <div className="feature-item"style={{ marginTop: '-1rem' }}>
            <video 
              autoPlay
              muted
              loop
              src={teddyVideo}
              alt="Tima with dogs"
              className="about-about-image"
            />
            <h3>Always active, adaptive, and growing - My natural curiosity helps me understand each dog's unique personality, making sure they always feel safe and loved.</h3>

              </div>
        </div>

        
                  <div className="about-grid"style={{ marginTop: '-2.5rem' }}>
                    <div className="feature-item">
                      <video 
                        autoPlay
                        muted
                        loop
                        src={naeVideo}
                        alt="Tima with dogs"
                        className="about-image"
                      />
                      
            
            <p> Having spent most of my life traveling and living in different parts of the world, I've been welcomed into many homes, and I truly value respecting spaces and creating a sense of comfort for pets and their humans.</p>

<h4>** "Tima-too" came from childhood. My parents would ask my older sisters to clean their room, 
  and they would say "but what about Tima?" and my parent's would reply, 
  "...and Tima-too!" Later it became an endearing family name for me.</h4>
          
                        </div>
                  </div>
                
      </section>

      <section className="features">
          <h2>Ready to connect?</h2>
          <Link to="/contact">
            <button className="hero-btn"style={{ marginBottom: '2rem' }}>book "meet and greet!"</button>
          </Link>
        </section>

                      {/* Reviews section */}
      <section className="features about-section" style={{ marginTop: '2.5rem' }}>
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

export default About;