import React from 'react';
import './ServiceCategories.css';
import Card from '../shared/Card';

const ServiceCategories = () => {
  const categories = [
    {
      id: 1,
      title: 'About',
      description: 'Learn about Unmasking Together and Sarah Callaghan\'s mission.',
      icon: '🧠', // Placeholder icon - would be replaced with proper SVG or image
      link: '/about'
    },
    {
      id: 2,
      title: 'What\'s On',
      description: 'Discover upcoming events, workshops, and speaking engagements.',
      icon: '📅', // Placeholder icon
      link: '/events'
    },
    {
      id: 3,
      title: 'Work With Me',
      description: 'Explore collaboration opportunities for businesses and organizations.',
      icon: '🤝', // Placeholder icon
      link: '/work-with-me'
    },
    {
      id: 4,
      title: 'Resources',
      description: 'Access educational tools and materials for neurodivergent individuals.',
      icon: '📚', // Placeholder icon
      link: '/resources'
    }
  ];

  return (
    <section className="service-categories">
      <div className="container">
        <h2 className="section-title">How I Can Support You</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <Card 
              key={category.id}
              title={category.title}
              description={category.description}
              icon={category.icon}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;