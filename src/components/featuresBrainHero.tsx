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
      <div className="absolute top-10 left-[80px] z-10">
        <Image src={purpledot} alt="Star" width={6.75} height={7.22} />
      </div>
      <div className="absolute top-20 left-[130px] z-10">
        <Image src={purpledot} alt="Dot" width={11.48} height={10.22} />
      </div>
      <div className="absolute top-[140px] left-10 z-10">
        <Image src={yellowstar} alt="Star" width={20} height={20} />
      </div>
      <div className="absolute top-[280px] left-10 z-10">
        <Image src={yellowdot} alt="Star" width={11.48} height={10.22} />
      </div>
      <div className="absolute top-[480px] left-[130px] z-10">
        <Image src={pinkdot} alt="Star" width={11.48} height={10.22} />
      </div>
      <div className="absolute top-[550px] left-[50px] z-10">
        <Image src={purpledot} alt="Star" width={11.48} height={10.22} />
      </div>
      <div className="absolute top-[630px] left-[80px] z-10">
        <Image src={flake} alt="Star" width={38.08} height={36.47} />
      </div>
      <div className="absolute top-[850px] left-[70px] z-10">
        <Image src={purpledot} alt="Star" width={11.48} height={10.22} />
      </div>
      <div className="absolute top-[120px] right-[240px] z-10">
        <Image src={purpledot} alt="Star" width={7.79} height={7.61} />
      </div>
      <div className="absolute top-[90px] right-10 z-10">
        <Image src={pattern} alt="Dot" width={165} height={160} />
      </div>
      <div className="absolute top-[340px] right-10 z-10">
        <Image src={purpledot} alt="Star" width={11.48} height={10.22} />
      </div>
      <div className="absolute top-[420px] right-[110px] z-10">
        <Image src={yellowstar} alt="Star" width={20.88} height={20.75} />
      </div>
      <div className="absolute top-[630px] right-[90px] z-10">
        <Image src={purplestar} alt="Star" width={20.88} height={20.75} />
      </div>
      <div className="absolute top-[760px] right-[30px] z-10">
        <Image src={purplestar} alt="Star" width={20.88} height={20.75} />
      </div>

      <section className="mx-[180px]"> 
        <div className="container mx-auto relative mt-10">
          <p className="text-xl text-[#703841] mb-2" style={{ fontSize: '18px', fontWeight: '600' }}>
            FEATURES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Cool features of Brain Hero
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col">
                <div className="p-4 rounded-full mb-4">
                  <Image src={a} alt="Chat Icon" />
                </div>
                <h3 className="font-bold text-lg text-white">Chat with Your Characters</h3>
                <br />
                <p className="text-sm text-white">
                  Talk to your story characters and ask them questions! You can
                  learn more about them and get fun facts about your story.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="p-4 rounded-full mb-4">
                  <Image src={c} alt="Read and Listen Icon" />
                </div>
                <h3 className="font-bold text-lg text-white">Read and Listen</h3>
                <br />
                <p className="text-sm text-white">
                  You can read your story whenever you want, and we'll even read
                  it to you! It's perfect for bedtime stories or sharing with
                  friends.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src={phone}
                alt="Phone"
                className="w-[300px] h-[466.08px]"
              />
            </div>

            <div className="flex flex-col space-y-8 ml-[30px]">
              <div className="flex flex-col">
                <div className="p-4 rounded-full mb-4">
                  <Image src={b} alt="Share Icon" />
                </div>
                <h3 className="font-bold text-lg text-white">Share Your Masterpieces</h3>
                <br />
                <p className="text-sm text-white">
                  Share your story with family and friends and get feedback from
                  them. Build a library of your stories and share them!
                </p>
              </div>

              <div className="flex flex-col">
                <div className="p-4 rounded-full mb-4">
                  <Image src={d} alt="AI Model Icon" />
                </div>
                <h3 className="font-bold text-lg text-white">Super Cool AI Model</h3>
                <br />
                <p className="text-sm text-white">
                  We have an extremely fast and smart AI model that can make books really, 
                  really fast! It can make hundreds of pages in just a few seconds, which is 
                  way faster than you can read a book!
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-8 rounded-full shadow-md">
              Start your journey today
            </button>

            <p className={`mt-4 text-white ${shadowsIntoLight.className}`} style={{ fontSize: '37px' }}>
              It's free!
            </p>

            <div className="flex justify-center space-x-4 mt-4">
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
