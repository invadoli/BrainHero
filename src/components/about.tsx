import Image from 'next/image';
import innovationIcon from '../images/003-learning.png'; 
import growthIcon from '../images/002-professor.png';
import heightsIcon from '../images/001-idea.png';
import learningIcon from '../images/004-graduation.png';
import phoneMockup from '../images/phoneMock.png';
import clouds2 from '../images/clouds2.png';
import clouds from '../images/ret.png';
import phone from '../images/phoneMobile.png';
import circle from '../images/rrethi.png';
import backgroundIcon from '../images/Blue.png';
import backgroundIcon2 from '../images/Purple.png';
import backgroundIcon3 from '../images/Yellow.png';
import backgroundIcon4 from '../images/Green.png';
import { Poppins, Shadows_Into_Light } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});
const shadowsIntoLight = Shadows_Into_Light({
  subsets: ['latin'],
  weight: '400',  
});

export default function About() {
  return (
    <>
    <section className={`bg-[#E1F1F0] relative  ${poppins.className}`}>
      <div className="max-w-7xl md:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ml-[15px] lg:ml-[170px]"> 
        <div>
          <h2 className="text-[#88B520] mb-2 mt-20 md:mt-0 text-sm" style={{fontSize: '18px', fontWeight: '600'}}>ABOUT US</h2>
          <h1 className="text-[25px] lg:text-4xl font-bold mt-4">Brainhero Academy, Inspiring Creativity</h1>
          <p className="mt-4 text-[#4C4C4C] text-[16px] lg:text-[14px]">
            Brainhero Academy empowers young minds to explore, learn, and grow through engaging, AI-driven experiences.
            We believe in fostering creativity, critical thinking, and a love for learning in every child. Our programs
            are designed to reduce screen time while sparking imagination and innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="relative flex items-center space-x-4 mb-0 md:mb-8">
              <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <Image src={backgroundIcon2} alt="Background" fill className="absolute top-0 left-0" />
                <Image src={innovationIcon} alt="Tradition of Innovation" width={50} height={50} className="relative z-10" />
              </div>
              <div className="whitespace-nowrap">
                <h3 className="font-bold text-lg text-[18px] md:text-[16px]">Tradition of Innovation</h3>
              </div>
            </div>

            <div className="relative flex items-center space-x-4 ml-0 md:ml-8 mb-0 md:mb-8"> 
              <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <Image src={backgroundIcon4} alt="Background" fill className="absolute top-0 left-0" />
                <Image src={growthIcon} alt="Partnership in Growth" width={50} height={50} className="relative z-10" />
              </div>
              <div className="whitespace-nowrap">
                <h3 className="font-bold text-lg text-[18px] md:text-[16px]">Partnership in Growth</h3>
              </div>
            </div>

            <div className="relative flex items-center space-x-4">
              <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <Image src={backgroundIcon} alt="Background" fill className="absolute top-0 left-0" />
                <Image src={heightsIcon} alt="Achieving New Heights" width={50} height={50} className="relative z-10" />
              </div>
              <div className="whitespace-nowrap">
                <h3 className="font-bold text-lg text-[18px] md:text-[16px]">Achieving New Heights</h3>
              </div>
            </div>

            <div className="relative flex items-center space-x-4 ml-0 md:ml-8"> 
              <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <Image src={backgroundIcon3} alt="Background" fill className="absolute top-0 left-0" />
                <Image src={learningIcon} alt="Foundation for Lifelong Learning" width={50} height={50} className="relative z-10" />
              </div>
              <div className="whitespace-nowrap">
                <h3 className="font-bold text-lg text-[18px] md:text-[16px]">Foundation for Lifelong Learning</h3>
              </div>
            </div>
          </div>

          <p className="mt-6 text-text-[#4C4C4C] text-[16px] md:text-[14px]">
            Every step with Brainhero Academy is a journey towards brighter, imaginative futures for children everywhere.
          </p>

          <button className="mt-6 bg-[#FA5E55] text-white px-6 py-3 rounded-full font-bold">
            Start your journey today
          </button>
          <span className={`ml-4  text-[#FA5E55] font-bold ${shadowsIntoLight.className}`} style={{fontSize:'37px'}}>it's free!</span>
        </div>

        <div className="relative flex justify-end items-end lg:ml-24"> 
          <div className="hidden md:block flex justify-end w-full">
            <Image 
              src={phoneMockup} 
              alt="Phone Mockup" 
              width={884.76} 
              height={838.56} 
              className="mt-[300px]" 
            />
          </div>
          <div className="md:hidden block flex justify-end w-full z-20">
            <Image 
              src={phone} 
              alt="Phone Mockup"
              className="mt-[30px]" 
            />
          </div>
          <div className="md:hidden absolute block flex justify-end mb-32 w-full z-10">
            <Image 
              src={circle} 
              alt="circle" 
              width={304.79} 
              height={304.79} 
              className="mt-[-10px] mr-[26px]" 
            />
          </div>
        </div>
      </div>
      <div className='-mt-[110px] md:-mt-[76px] relative'>
      <Image src={clouds2} alt="cloud" className='hidden md:block'/>
      <Image src={clouds} alt="cloud" className='block md:hidden relative z-30'/>
      </div>
    </section>
    </>
  );
};
