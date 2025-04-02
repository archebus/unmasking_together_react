import React from 'react';
import './CallToAction.css';
import Button from '../shared/Button';

const CallToAction = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="call-to-action">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-subtitle">{subtitle}</p>
          <Button 
            label={buttonText} 
            link={buttonLink} 
            variant="primary"
            size="large"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;