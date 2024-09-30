import React from 'react';
import Image from 'next/image';
import brain from '../images/brain.png';
import brainback from '../images/BrainBack.png';
import book from '../images/book.png';
import enjoy from '../images/enjoy.png';
import star from '../images/pinkstar.png';

const Features = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-[40px] md:gap-8 mb-32">
        <div className="text-center w-[350px] md:w-[300px] h-[250px] relative md:top-0 top-[20px]"> 
          <div className="relative w-[130px] h-[130px] mx-auto">
            <Image src={brainback} alt="Brain Up" className="absolute top-0 left-0" />
            <Image 
              src={brain} 
              alt="Brain" 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px]" 
            />
          </div>
          <h3 className="mt-4 text-[20px] font-extrabold leading-[24px] text-[#FCD300]">Brain Up</h3>
          <p className="mt-2 text-[#4C4C4C] text-[16px] leading-[24px]">Use your imagination! Think of a fun story with cool characters and places. Get ready to create something amazing!</p>
        </div>

        <div className="hidden md:block md:h-[350px] md:border-l-2 md:border-[#E2E2E2]"></div>

        <div className="text-center w-[350px] md:w-[300px] h-[250px] relative md:top-0 top-[20px]"> 
          <Image src={book} alt="Tell your Story" className="md:ml-20 ml-28 w-[130px] h-[130px]" />
          <h3 className="mt-4 text-[20px] font-extrabold leading-[24px] text-[#FA5E55]">Tell Your Story</h3>
          <p className="mt-2 text-[#4C4C4C] text-[16px] leading-[24px]">Share your story with Brain Hero! Our superhero listens to your ideas and helps make them even better.</p>
        </div>

        <div className="hidden md:block md:h-[350px] md:border-l-2 md:border-[#E2E2E2]"></div>

        <div className="text-center w-[350px] md:w-[300px] h-[250px] relative md:top-0 top-[20px]"> 
          <Image src={enjoy} alt="Make & Enjoy" className="md:ml-20 ml-28 w-[130px] h-[130px]" />
          <h3 className="mt-4 text-[20px] font-extrabold leading-[24px] text-[#37008E]">Make & Enjoy</h3>
          <p className="mt-2 text-[#4C4C4C] text-[16px] leading-[24px]">Watch your story come to life! Brain Hero helps you create a book that talks. Read it, ask to it, share it, and have fun with your creation!</p>
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute top-[-380px] md:top-[-230px] md:right-10 right-4 z-0">
          <Image src={star} alt="Star" width={47} height={43.26} /> 
        </div>
      </div>
      <p className="font-semibold text-[18px] leading-[24px] text-[#88B520]">BOOKS WRITTEN BY KIDS</p>
      <br />
      <h1 className="text-center font-extrabold text-[35px] leading-[50px]">Discover inspiring stories written by kids, where every</h1>
      <h1 className="text-center font-extrabold text-[35px] leading-[50px]">page brings imagination and adventure to life</h1>
    </section>
  );
};

export default Features;
