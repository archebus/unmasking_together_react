import React from 'react';
import './Card.css';

const Card = ({ title, description, icon, link, imageUrl }) => {
  return (
    <div className="card">
      {imageUrl ? (
        <div className="card-image">
          <img src={imageUrl} alt={title} />
        </div>
      ) : icon ? (
        <div className="card-icon">
          <span>{icon}</span>
        </div>
      ) : null}
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      
      {link && (
        <a href={link} className="card-link">
          Learn More
          <span className="arrow">→</span>
        </a>
      )}
    </div>
  );
};

export default Card;