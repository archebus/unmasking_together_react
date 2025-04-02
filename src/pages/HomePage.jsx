import React from 'react';
import Hero from '../components/home/Hero';
import ServiceCategories from '../components/home/ServiceCategories';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <ServiceCategories />
      <Testimonials />
      <CallToAction 
        title="Ready to start your journey?"
        subtitle="Get in touch to learn more about how we can work together."
        buttonText="Contact Me"
        buttonLink="/contact"
      />
    </div>
  );
};

export default HomePage;