import Image from 'next/image';
import Link from 'next/link';
import { Poppins, Shadows_Into_Light } from 'next/font/google';
import a from '../images/1.png';
import b from '../images/2.png';
import c from '../images/3.png';
import d from '../images/4.png';
import phone from '../images/phonepic.png';
import googlePlay from '../images/googlePlay.png';
import appStore from '../images/appStore.png';
import yellowstar from '../images/yellowstar.png'; 
import purpledot from '../images/dot.png';   
import purplestar from '../images/purplestar.png'; 
import flake from '../images/flake.png';  
import pattern from '../images/pattern.png'; 
import yellowdot from '../images/yellowdot.png'; 
import pinkdot from '../images/pinkdot.png';

// fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});
const shadowsIntoLight = Shadows_Into_Light({
  subsets: ['latin'],
  weight: '400',
});

export default function FeaturesHero() {
  return (
    <div className={`bg-[#FFB4C0] py-12 relative overflow-hidden ${poppins.className}`}>
      <div className="absolute top-[35px] left-[324px] md:top-10 md:left-[80px] z-10">
        <Image src={purpledot} alt="Star" width={6.75} height={7.22} />
      </div>
      <div className="absolute top-[65px] left-[399px] md:top-20 md:left-[130px] z-10">
        <Image src={purpledot} alt="Dot" width={11.48} height={10.22} />
      </div>
      <div className="absolute top-[20px] left-[38px] md:top-[140px] md:left-10 z-10">
        <Image src={yellowstar} alt="Star" width={20} height={20} />
      </div>
      <div className="absolute top-[90px] left-[340px] md:top-[280px] md:left-10 z-10">
        <Image src={yellowdot} alt="Star" width={11.48} height={10.22} />
      </div>
      <div className="absolute top-[260px] left-[395px] md:top-[480px] md:left-[130px] z-10">
        <Image src={pinkdot} alt="Star" width={11.48} height={10.22} />
      </div>
      <div className="absolute top-[430px] left-[342px] md:top-[550px] md:left-[50px] z-10">
        <Image src={purpledot} alt="Star" width={11.48} height={10.22} />
      </div>
      <div className="absolute top-[460px] left-[363px] md:top-[630px] md:left-[80px] z-10">
        <Image src={flake} alt="Star" width={38.08} height={36.47} />
      </div>
      <div className="absolute top-[670px] left-[301px] md:top-[850px] md:left-[70px] z-10">
        <Image src={purpledot} alt="Star" width={11.48} height={10.22} />
      </div>
      <div className="absolute hidden md:block md:top-[120px] md:right-[240px] z-10">
        <Image src={purpledot} alt="Star" width={7.79} height={7.61} />
      </div>
      <div className="absolute rotate-[6.3deg] md:rotate-[0deg] top-[1310px] left-[249.74px] md:left-auto md:top-[90px] md:right-10 z-10">
        <Image src={pattern} alt="Dot" width={165} height={160} />
      </div>
      <div className="absolute top-[860px] left-[255px] md:left-auto md:top-[340px] md:right-10 z-10">
        <Image src={purpledot} alt="Star" width={11.48} height={10.22} />
      </div>
      <div className="absolute top-[910px] left-[366px] md:top-[420px] md:left-auto md:right-[110px] z-10">
        <Image src={yellowstar} alt="Star" width={20.88} height={20.75} />
      </div>
      <div className="absolute top-[710px] left-[337.61px] md:left-auto md:top-[630px] md:right-[90px] z-10">
        <Image src={purplestar} alt="Star" width={20.88} height={20.75} />
      </div>
      <div className="absolute hidden md:block md:top-[760px] md:right-[30px] z-10">
        <Image src={purplestar} alt="Star" width={20.88} height={20.75} />
      </div>

      <section className="md:mx-[180px] mx-[15px]"> 
        <div className="container mx-auto relative mt-10">
          <p className="text-xl text-[#703841] mb-2" style={{ fontSize: '18px', fontWeight: '600' }}>
            FEATURES
          </p>
          <h2 className="text-[25px] md:text-4xl font-bold text-white mb-8 text-left">
            Cool features of Brain Hero
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4 md:items-center items-start">
            <div className="flex flex-col md:space-y-8 gap-8 md:gap-0">
              <div className="flex flex-col">
                <div className="md:p-4 p-0 rounded-full md:mb-4 mb-0 w-[99.4px] md:w-auto h-auto">
                  <Image src={a} alt="Chat Icon" />
                </div>
                <h3 className="font-bold text-lg text-white">Chat with Your Characters</h3>
                <p className="text-sm text-white">
                  Talk to your story characters and ask them questions! You can learn more about them and get fun facts about your story.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="md:p-4 p-0rounded-full md:mb-4 mb-0 w-[99.4px] md:w-auto h-auto">
                  <Image src={c} alt="Read and Listen Icon" />
                </div>
                <h3 className="font-bold text-lg text-white">Read and Listen</h3>
                <p className="text-sm text-white">
                  You can read your story whenever you want, and we'll even read it to you! It's perfect for bedtime stories or sharing with friends.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src={phone}
                alt="Phone"
                className="hidden md:block md:w-[412px] md:h-auto"
              />
            </div>

            <div className="flex flex-col space-y-8 ml-0 md:ml-[30px]">
              <div className="flex flex-col">
                <div className="md:p-4 p-0 rounded-full md:mb-4 mb-0 w-[99.4px] md:w-auto h-auto">
                  <Image src={b} alt="Share Icon" />
                </div>
                <h3 className="font-bold text-lg text-white">Share Your Masterpieces</h3>
                <p className="text-sm text-white">
                  Share your story with family and friends and get feedback from them. Build a library of your stories and share them!
                </p>
              </div>

              <div className="flex flex-col">
                <div className="md:p-4 p-0 rounded-full md:mb-4 mb-0 w-[99.4px] md:w-auto h-auto">
                  <Image src={d} alt="AI Model Icon" />
                </div>
                <h3 className="font-bold text-lg text-white">Super Cool AI Model</h3>
                <p className="text-sm text-white">
                  We have an extremely fast and smart AI model that can make books really, really fast! It can make hundreds of pages in just a few seconds, which is way faster than you can read a book!
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start relative ml-10 mt-10 z-30 ">
              <Image
                src={phone}
                alt="Phone"
                className="w-[298.88px] h-[464.16px] block md:hidden"
              />
            </div>
          <div className="text-center mt-12 md:mt-[-80px]">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-8 rounded-full shadow-md">
              Start your journey today
            </button>

            <p className={`mt-4 text-white ${shadowsIntoLight.className}`} style={{ fontSize: '37px' }}>
              It's free!
            </p>

            <div className="flex justify-center space-x-4 mt-4 mb-24">
              <Link href="https://play.google.com/store/apps/details?id=your_app_id" target="_blank">
                <Image src={googlePlay} alt="Get it on Google Play" width={150} height={50} />
              </Link>
              <Link href="https://apps.apple.com/us/app/your-app-id" target="_blank">
                <Image src={appStore} alt="Download on the App Store" width={150} height={50} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
