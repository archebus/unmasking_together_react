import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Working with Sarah has been truly transformative. Her approach to neurodiversity is refreshing, validating, and empowering.",
      name: "Alex M.",
      role: "Client"
    },
    {
      id: 2,
      quote: "The workshop Sarah delivered to our organization opened our eyes to the importance of neuro-affirming spaces. Highly recommended!",
      name: "Jamie L.",
      role: "HR Director"
    },
    {
      id: 3,
      quote: "Finally someone who understands! Sarah's resources have helped me navigate my neurodivergence with confidence and self-compassion.",
      name: "Sam K.",
      role: "Workshop Participant"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What People Are Saying</h2>
        
        <div className="testimonial-carousel">
          <div className="testimonial-content">
            <div className="quote-mark">"</div>
            <p className="testimonial-quote">{testimonials[activeIndex].quote}</p>
            <div className="testimonial-author">
              <p className="author-name">{testimonials[activeIndex].name}</p>
              <p className="author-role">{testimonials[activeIndex].role}</p>
            </div>
          </div>
          
          <div className="testimonial-controls">
            <button 
              className="control-btn prev-btn" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              &#8592;
            </button>
            
            <div className="indicators">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`indicator ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="control-btn next-btn" 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;