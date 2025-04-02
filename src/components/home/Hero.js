import React from 'react';
import './Hero.css';
import Button from '../shared/Button';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Unmasking Together</h1>
          <h2 className="hero-subtitle">Embrace your authentic self</h2>
          <p className="hero-text">
            A neuro-affirming counselling space dedicated to supporting neurodivergent individuals in 
            embracing their authentic selves through compassion, understanding, and lived experience.
          </p>
          <div className="hero-cta">
            <Button 
              label="Learn More" 
              link="/about" 
              variant="primary"
            />
            <Button 
              label="Upcoming Events" 
              link="/events" 
              variant="secondary"
            />
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image">
            {/* Placeholder image - replace with actual image */}
            <div className="placeholder-img"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;