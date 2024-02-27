// components/HeroSection.js

import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Founded in 2017, Bluetick Consultants</h1>
        <p>
          A technology-driven firm that has made a significant impact in the Indian and US startup ecosystems.
        </p>
        <p>
          Transforming Enterprises with cutting-edge, scalable, privacy-focused Generative AI Solutions.
        </p>
        <a href="https://www.bluetickconsultants.com/generative-ai.html" target="_blank" rel="noopener noreferrer">
          <button>To know more about us</button>
        </a>
      </div>
      {/* <img src={BluetickImage} alt="Bluetick Consultants" /> */}
    </section>
  );
};

export default HeroSection;
