import React from 'react';
import Hero from '../components/home/Hero';
import GalleryShowcase from '../components/home/GalleryShowcase';
import TestimonialSlider from '../components/home/TestimonialSlider';
import LuxuryStats from '../components/home/LuxuryStats';

const Home = () => {
  return (
    <div>
      <Hero />
      <LuxuryStats />
      <GalleryShowcase />
      <TestimonialSlider />
    </div>
  );
};

export default Home;