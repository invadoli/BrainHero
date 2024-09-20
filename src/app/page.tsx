import React from 'react';
import Hero from '../components/hero'; 
import Features from '../components/features';
import BookCards from '../components/bookCards';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features/>
      <BookCards/>
    </div>
  );
};

export default Home;

