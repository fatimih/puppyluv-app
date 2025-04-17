import { Link } from 'react-router-dom';
import React from 'react';
import { sharedFeatures } from '../featuresData.jsx';
import FeatureItem from '../components/FeatureItem';
import FeatureGrid from '../components/FeatureGrid';
import yelpIcon from '../assets/icons/yelp.svg';
import googleIcon from '../assets/icons/google.svg';
import timaVideo from '/tima.mp4';



function Home() {
  const features = sharedFeatures;
  

  React.useEffect(() => {
    const video = document.getElementById('heroVideo');
    const container = document.querySelector('.video-container');
  
    container.addEventListener('mouseenter', () => {
      video.muted = false;
    });
  
    container.addEventListener('mouseleave', () => {
      video.muted = true;
    });
  
    return () => {
      container.removeEventListener('mouseenter', () => {
        video.muted = false;
      });
      container.removeEventListener('mouseleave', () => {
        video.muted = true;
      });
    };
  }, []);

  return (
    <>
       {/* Hero Section */}
      <div className="page-content">
        <section className="hero">
          <h1>Pups deserve lots of Luv</h1>
          <div className="video-container">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="hero-video"
              id="heroVideo"
            >
              <source src="/puppyluv.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <svg 
              className="sound-indicator" 
              width="12" 
              height="24" 
              viewBox="0 0 20 40" 
              fill="none" 
              stroke="#FFA500" 
              strokeWidth="2"
            >
              <path d="M2 15 L8 15 L14 8 L14 32 L8 25 L2 25 Z" />
              <path d="M18 15 C20 18 20 22 18 25" />
            </svg>
          </div>
          <p>... and Tima can help, too!</p>
          <Link to="/contact">
            <button className="hero-btn">book "meet and greet!"</button>
          </Link>
        </section>
      </div>

{/* Full-Width Feature Grid */}
<div className="full-width-feature-grid-wrapper">
  <div className="full-width-feature-grid">
    <section className="features">
      <h2>with a Service that suits!</h2>
      <FeatureGrid>
        {features.map((feature, index) => (
          <Link
            key={index}
            to={`/services#${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
          >
            <FeatureItem {...feature} index={index} useShortDescription={true} />
          </Link>
        ))}
      </FeatureGrid>
    </section>
  </div>
</div>


      {/* About Sections */}
      <div className="page-content">
      <section className="features about-section">
  <h2>Who is Tima?</h2>
   <div className="about-grid">
            <div className="feature-item"style={{ marginTop: '-1rem' }}>
              <video 
                autoPlay
                muted
                loop
                src={timaVideo}
                alt="Tima with dogs"
                className="home-about-image" 
              />
<h3 style={{ fontSize: '1.5rem' }}>
  <span style={{ fontWeight: 'bold' }}>Walking</span> has always been a meaningful part of my life - 
  <span style={{ fontWeight: 'bold' }}> it's where I find connection</span>, especially with pups.
</h3>

                </div>
          </div>

        </section>

        <section className="features"style={{ marginTop: '-.5rem'}}>
          <Link to="/about">
            <button className="more-info-hero-btn"style={{ marginBottom: '2.5rem', marginTop: '-2rem'}}>more about Tima</button>
          </Link>
        </section>

        
     <section className="features"style={{ marginTop: '1.5rem'}}>
          <h2>Shall we talk 'pups'?</h2>
          <Link to="/contact">
            <button className="hero-btn"style={{ marginBottom: '2rem'}}>book "meet and greet!"</button>
          </Link>
        </section>

              {/* Reviews section */}
      <section className="features about-section" style={{ marginTop: '2rem' }}>
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

export default Home;