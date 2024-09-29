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
      <section className="flex items-center justify-between py-20 relative min-h-screen ml-[180px]">
        <div className="relative z-20 max-w-2xl">
          <div className="absolute top-[-20px] left-[-50px] w-[564px] h-[277px] z-10 overflow-hidden">
            <Image src={CloudBackground} alt="Hero Background" layout="fill" objectFit="cover" />
          </div>
          <h1 className={`font-chewy text-6xl font-bold text-white leading-tight mb-5 ${chewy.className}`}>Create, read, and</h1>
          <h1 className={`font-chewy text-6xl font-bold text-white leading-tight mb-5 ${chewy.className}`}>explore with AI-</h1>
          <h1 className={`font-chewy text-6xl font-bold text-white leading-tight mb-5 ${chewy.className}`}>powered stories!</h1>
          <p className={`font-poppins text-base font-normal text-white leading-6 mb-7 ${poppins.className}`}>
            Ignite creativity, reduce screen time, and turn ideas into adventures.
          </p>
          
          <div className="flex gap-4 mb-7">
            <Link href="https://play.google.com/store/apps/details?id=your_app_id" target="_blank">
              <Image src={googlePlay} alt="Get it on Google Play" width={150} height={50} />
            </Link>
            <Link href="https://apps.apple.com/us/app/your-app-id" target="_blank">
              <Image src={appStore} alt="Download on the App Store" width={150} height={50} />
            </Link>
          </div>
          <div className="flex flex-row items-center gap-5">
            <button className="px-10 py-2 bg-yellow-400 text-black rounded-full font-poppins font-bold text-lg transition duration-300 hover:bg-red-600">
              Start your journey today
            </button>
            <p className={`font-shadows text-4xl font-normal text-white ${shadowsIntoLight.className}`} style={{ fontSize: '37px' }}>
              it's free!
            </p>
          </div>
        </div>

        <div className="absolute top-10 left-2/3 transform -translate-x-1/2 z-20">
          <Image src={phone} alt="Phone" />
        </div>
        
        <div className="absolute top-[12%] left-[65%] w-[400px] h-[500px] z-10 overflow-hidden">
          <Image src={BackgroundBehindPhone} alt="Background Behind Phone" layout="fill" objectFit="cover" />
        </div>

        <div className="absolute top-[40%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 rotate-[7deg] w-[343px] h-[321px] z-0">
          <Image src={object} alt="object" />
        </div>
        <div className="absolute top-[70%] left-[42.6%] transform -translate-x-1/2 -translate-y-1/2 rotate-[7deg] z-10">
          <Image src={obj} alt="obj" />
        </div>
      </section>

      <section className="relative">
        <div className="relative">
          <Image src={Clouds} alt="Cloud Background" className="w-full" />
          <Image src={star} alt="star" className="absolute top-[100px] left-[80px] z-10" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
