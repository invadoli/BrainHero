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
      <section className="flex flex-col lg:flex-row items-start justify-between py-20 relative min-h-screen ml-5 lg:ml-[180px]">
        {/* Text and Buttons */}
        <div className="relative z-20 max-w-2xl mt-[-35px] lg:mt-[-5px] text-left lg:text-left">
          {/* Background Cloud */}
          <div className="absolute top-[-5px] left-[190px] lg:top-[-30px] lg:left-[-40px] transform lg:transform-none translate-x-[-50%] lg:translate-x-0 w-[400px] h-[200px] lg:w-[500px] lg:h-[246px] z-20 overflow-hidden">
            <Image src={CloudBackground} alt="Hero Background" layout="fill" objectFit="cover" />
          </div>
          
          <h1 className={`font-chewy text-[55px] lg:mt-2 lg:text-6xl font-bold text-white leading-tight ${chewy.className}`}>
            Create, read, and
          </h1>
          <h1 className={`font-chewy text-[55px] lg:text-6xl font-bold text-white leading-tight ${chewy.className}`}>
            explore with AI-
          </h1>
          <h1 className={`font-chewy text-[55px] lg:text-6xl font-bold text-white leading-tight ${chewy.className}`}>
            powered stories!
          </h1>
          
          {/* Paragraph */}
          <p className={`font-poppins text-sm lg:mt-8 lg:text-base font-normal text-white leading-6 mb-7 ${poppins.className}`}>
            Ignite creativity, reduce screen time, and turn ideas into adventures.
          </p>
          
          {/* App Store and Google Play Links */}
          <div className="flex justify-start gap-4 mb-7">
            <Link href="https://play.google.com/store/apps/details?id=your_app_id" target="_blank">
              <Image src={googlePlay} alt="Get it on Google Play" width={150} height={50} />
            </Link>
            <Link href="https://apps.apple.com/us/app/your-app-id" target="_blank">
              <Image src={appStore} alt="Download on the App Store" width={150} height={50} />
            </Link>
          </div>
          
          {/* Button and Text */}
          <div className="flex flex-col lg:flex-row items-start gap-5">
            <button className="px-5 lg:px-10 py-2 bg-yellow-400 text-black rounded-full font-poppins font-bold text-sm lg:text-lg transition duration-300 hover:bg-red-600">
              Start your journey today
            </button>
            <p className={`font-shadows text-[37px] lg:text-4xl lg:ml-0 ml-[23px] lg:font-normal text-white ${shadowsIntoLight.className}`} style={{ fontSize: '37px' }}>
              it's free!
            </p>
          </div>
        </div>

        {/* Phone Image */}
        <div className="absolute top-[400px] mr-[-30px] left-[140px] transform -translate-x-1 lg:top-10 lg:left-2/3 lg:transform lg:-translate-x-1/2 z-20">
          <Image src={phone} alt="Phone" className="w-[400px] lg:w-[455px] h-auto" />
        </div>

        
        {/* Background Behind Phone */}
        <div className="absolute top-[350px] w-full h-[509px] lg:top-[12%] lg:left-[65%] lg:w-[400px] lg:h-[500px] z-10 overflow-hidden">
          <Image src={MobileBackground} alt="Background Behind Phone" layout="fill" objectFit="cover" className="block lg:hidden z-20" />
          <Image src={BackgroundBehindPhone} alt="Background Behind Phone" layout="fill" objectFit="cover" className="hidden lg:block" />
          <Image src={circle} alt="circle" className="ml-[170px] mt-[100px] lg:hidden z-10" />
        </div>

        {/* Other Decorations */}
        <div className="absolute top-[30%] lg:top-[35%] lg:left-[48%] transform -translate-x-1/2 -translate-y-1/2 rotate-[3deg] w-[50.4px] lg:w-[343px] h-[61.93px] lg:h-[321px] z-0">
          <Image src={object} alt="object" className="hidden lg:block" />
        </div>
        <div className="absolute top-[53%] left-[41%] lg:top-[64%] lg:left-[44.6%] transform -translate-x-1/2 -translate-y-1/2 rotate-[7deg] z-10">
          <Image src={obj} alt="obj" />
        </div>
        <div className="absolute top-[51%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image src={objMobile} alt="obj" className="lg:hidden"/>
        </div>
      </section>

      {/* Clouds Section */}
      <section className="relative">
        <div className="relative">
          <Image src={Clouds} alt="Cloud Background" className="lg:w-full hidden lg:block " />
          <Image src={cloudMobile} alt="Cloud Background" className="w-full lg:hidden mt-[-300px]" />
          <Image src={star} alt="star" className="absolute top-[90px] lg:top-[100px] left-[20px] lg:left-[80px] z-10" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
