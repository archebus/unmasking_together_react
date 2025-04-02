import React from 'react';
import './Button.css';

const Button = ({ label, link, onClick, variant = 'primary', type = 'button', size = 'medium', disabled = false }) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''}`;
  
  // If a link is provided, render an anchor tag
  if (link) {
    return (
      <a href={link} className={buttonClass} role="button">
        {label}
      </a>
    );
  }
  
  // Otherwise, render a button element
  return (
    <button 
      className={buttonClass} 
      onClick={onClick} 
      type={type} 
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;