import React from 'react';
import Image from 'next/image';
import { Poppins, Shadows_Into_Light, Chewy } from 'next/font/google';
import Link from 'next/link';
import phone from '../images/phone.png';
import googlePlay from '../images/googlePlay.png'; 
import appStore from '../images/appStore.png'; 
import Clouds from '../images/clouds.png';
import CloudBackground from '../images/cloud.png';
import BackgroundBehindPhone from '../images/square.png';
import object from '../images/object.png';
import obj from '../images/obj.png';
import star from '../images/star.png';
import circle from '../images/rreth.png';
import objMobile from '../images/lakore.png';
import cloudMobile from '../images/re.png';
import MobileBackground from '../images/Image.png';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});
const shadowsIntoLight = Shadows_Into_Light({
  subsets: ['latin'],
  weight: '400',
});
const chewy = Chewy({
  subsets: ['latin'],
  weight: '400', 
});

const Hero = () => {
  return (
    <div style={{ backgroundColor: '#008EA7' }}>
      <section className="flex flex-col md:flex-row items-start justify-between py-20 relative min-h-screen ml-5 md:ml-[180px]">
        <div className="relative z-20 max-w-2xl mt-[-35px] md:mt-[-5px] text-left md:text-left">
          <div className="absolute top-[-5px] left-[190px] md:top-[-30px] md:left-[-40px] transform md:transform-none translate-x-[-50%] md:translate-x-0 w-[400px] h-[200px] md:w-[500px] md:h-[246px] z-20 overflow-hidden">
            <Image src={CloudBackground} alt="Hero Background" layout="fill" objectFit="cover" />
          </div>
          
          <h1 className={`font-chewy text-[55px] md:mt-2 md:text-6xl font-bold text-white leading-tight ${chewy.className}`}>
            Create, read, and
          </h1>
          <h1 className={`font-chewy text-[55px] md:text-6xl font-bold text-white leading-tight ${chewy.className}`}>
            explore with AI-
          </h1>
          <h1 className={`font-chewy text-[55px] md:text-6xl font-bold text-white leading-tight ${chewy.className}`}>
            powered stories!
          </h1>
          
          <p className={`font-poppins text-sm md:mt-8 md:text-base font-normal text-white leading-6 mb-7 ${poppins.className}`}>
            Ignite creativity, reduce screen time, and turn ideas into adventures.
          </p>
          
          <div className="flex justify-start gap-4 mb-7">
            <Link href="https://play.google.com/store/apps/details?id=your_app_id" target="_blank">
              <Image src={googlePlay} alt="Get it on Google Play" width={150} height={50} />
            </Link>
            <Link href="https://apps.apple.com/us/app/your-app-id" target="_blank">
              <Image src={appStore} alt="Download on the App Store" width={150} height={50} />
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-5">
            <button className="px-5 md:px-10 py-2 bg-yellow-400 text-black rounded-full font-poppins font-bold text-sm md:text-md transition duration-300 hover:bg-red-600">
              Start your journey today
            </button>
            <p className={`font-shadows text-[37px] md:text-4xl md:ml-0 ml-[23px] md:font-normal text-white ${shadowsIntoLight.className}`} style={{ fontSize: '37px' }}>
              it's free!
            </p>
          </div>
        </div>

        <div className="absolute top-[400px] mr-[-30px] left-[140px] transform -translate-x-1 md:top-10 md:left-2/3 md:transform md:-translate-x-1/2 z-20">
          <Image src={phone} alt="Phone" className="w-[400px] md:w-[455px] h-auto" />
        </div>

        
        <div className="absolute top-[350px] w-full h-[509px] md:top-[12%] md:left-[65%] md:w-[400px] md:h-[500px] z-10 overflow-hidden">
          <Image src={MobileBackground} alt="Background Behind Phone" layout="fill" objectFit="cover" className="block md:hidden z-20" />
          <Image src={BackgroundBehindPhone} alt="Background Behind Phone" layout="fill" objectFit="cover" className="hidden md:block" />
          <Image src={circle} alt="circle" className="ml-[170px] mt-[100px] md:hidden z-10" />
        </div>

        <div className="absolute top-[30%] md:top-[35%] md:left-[48%] transform -translate-x-1/2 -translate-y-1/2 rotate-[3deg] w-[50.4px] md:w-[343px] h-[61.93px] md:h-[321px] z-0">
          <Image src={object} alt="object" className="hidden md:block" />
        </div>
        <div className="absolute top-[53%] left-[41%] md:top-[64%] md:left-[44.6%] transform -translate-x-1/2 -translate-y-1/2 rotate-[7deg] z-10">
          <Image src={obj} alt="obj" />
        </div>
        <div className="absolute top-[51%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image src={objMobile} alt="obj" className="md:hidden"/>
        </div>
      </section>

      <section className="relative">
        <div className="relative">
          <Image src={Clouds} alt="Cloud Background" className="md:w-full hidden md:block " />
          <Image src={cloudMobile} alt="Cloud Background" className="w-full md:hidden mt-[-300px]" />
          <Image src={star} alt="star" className="absolute top-[90px] md:top-[100px] left-[20px] md:left-[80px] z-10" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
