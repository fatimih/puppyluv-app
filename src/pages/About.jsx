// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import timaImg from '../assets/images/tima.jpg';

function About() {
  return (
    <div className="page-content">  
      <section className="hero">
        <h1>Tima</h1>
        <p>Constantly curious and naturally creative, I have made a lifestyle of wandering around the world with my camera and making meaningful connections. Always active, adaptive, and growing. </p>
        <h2><b>*</b> I am <b>Bonded & Insured</b> and certified by <b>The American Red Cross</b> in <b>Cat and Dog Firt Aid.</b> </h2>
      </section>

      <section className="features">
        <h2>Why do I do this?</h2>
        <div className="about-grid">
          <div className="feature-item">
            <img 
              src={timaImg}
              alt="Tima with dogs"
              className="about-image"
            />
            <h3>Walking has always been a meaningful part of my life—it's where I find connection, especially with pups. My natural curiosity</h3>
            <p>helps me understand each dog's unique personality, making sure they always feel safe and loved. Having spent most of my life traveling and living in different parts of the world, I've been welcomed into many homes, and I truly value respecting spaces and creating a sense of comfort for pets and their humans.</p>

            <br />** "Tima-too" came from childhood. My parents would ask my older sisters to clean their room, 
              and they would say "but what about Tima?" and my parent's would reply, 
              "...and Tima-too!" Later it became an endearing family name for me.
              </div>
        </div>
      </section>

      <section className="features">
          <h2>Ready to connect?</h2>
          <Link to="/contact">
            <button className="hero-btn">book "meet and greet!"</button>
          </Link>
        </section>
      </div> 
  );
}

export default About;