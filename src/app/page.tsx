import React from 'react';
import Hero from '../components/hero'; 
import Features from '../components/features';
import BookCards from '../components/bookCards';
import FeaturesHero from '../components/featuresBrainHero';
import About from '../components/about';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features/>
      <BookCards/>
      <FeaturesHero/>
      <About/>
    </div>
  );
};

export default Home;

