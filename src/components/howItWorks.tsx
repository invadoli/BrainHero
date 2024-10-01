import Image from 'next/image'; 
import icons from '../images/icon.png';
import { Poppins, Shadows_Into_Light } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});
const shadowsIntoLight = Shadows_Into_Light({
  subsets: ['latin'],
  weight: '400',  
});

export default function HowItWorks() {
  return (
    <div className={`flex flex-col items-center justify-center bg-white ${poppins.className} h-screen relative z-40 md:z-0 mt-[240px] md:mt-8 mx-[15px] md:mx-0`}>
      <section className="text-center mb-4">
        <h2 className="text-[#88B520] text-sm mb-2 relative" style={{fontSize: '18px', fontWeight: '600'}}>HOW IT WORKS</h2>
        <h1 className="text-[25px] md:text-[35px] mx-0 md:mx-[165px] font-bold relative"style={{fontWeight: '800'}} >Creating a story with Brain Hero is simple and fun! Follow these easy steps to get started.</h1>
      </section>

      <div className="flex md:flex-row flex-col gap-12 md:gap-8 mx-[15px] md:mx-[180px] items-center justify-center">
        
        <div className="flex flex-col items-start text-left ml-0 md:ml-[50px]"> 
          <div className="flex items-center justify-center w-[130px] h-[130px]">
            <Image src={icons} alt="Choose a Theme"/>
          </div>
          <div className="w-full">
            <h3 className="text-xl text-[#2D292A] font-bold mt-4" style={{ fontSize: '16px' }}>Choose a Theme</h3>
            <p className="text-[#4C4C4C] mt-6" style={{ fontSize: '16px' }}>
              Select a theme that suits the story you want to create, whether it’s about kindness, courage, or creativity.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end md:items-start text-left mt-0 md:mt-32 ml-0 md:ml-[50px]">
          <div className="flex items-end mr-36 md:mr-0 w-[130px] h-[130px]">
            <Image src={icons} alt="Create your story"/>
          </div>
          <div className="w-full flex items-end flex-col">
            <h3 className="text-xl text-[#2D292A] font-bold md:mr-auto  mr-[122px] mt-4" style={{ fontSize: '16px' }}>Create your story</h3>
            <p className="text-[#4C4C4C] mt-6 md:w-auto ml-32 md:ml-0 w-[265px]" style={{ fontSize: '16px' }}> 
              Use our simple tools to craft your story, adding characters, settings, and plot twists along the way.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start text-left ml-0 md:ml-[50px]"> 
          <div className="flex items-center justify-center w-[130px] h-[130px]">
            <Image src={icons} alt="Enjoy and Share"/>
          </div>
          <div className="w-full">
            <h3 className="text-xl text-[#2D292A] font-bold mt-4" style={{ fontSize: '16px' }}>Enjoy and Share</h3>
            <p className="text-[#4C4C4C] mt-6" style={{ fontSize: '16px' }}>
              Read your story with your child and share it with family and friends to enjoy the magic together.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center mb-[300px] md:mb-0">
        <button className="bg-[#FA5E55] text-white py-3 px-6 rounded-full font-semibold hover:bg-red-600">
          Start your journey today
        </button>
        <p className={`mt-4 text-[#FA5E55] font-bold ${shadowsIntoLight.className}`} style={{fontSize:'37px'}}>It's free!</p>
      </div>
    </div>
  );
}
