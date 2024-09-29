import Image from 'next/image'; 
import Link from 'next/link';
import purpleClouds from '../images/purpleClouds.png';
import mobileCloudImage from '../images/cloudResponsive.png';
import logo from '../images/logo2.png';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export default function Footer() {
  return (
    <>
      <div className="mt-32 relative">
         <div className="hidden md:block">
           <Image
             src={purpleClouds}
             alt="cloud for desktop"
           />
         </div>
         <div className="block md:hidden absolute -z-10 -mt-[100px]">
           <Image
             src={mobileCloudImage}
             alt="cloud for mobile"
             className="w-[1980px] h-auto"
           />
         </div>
      </div>
      <div className={`bg-[#37008E] md:h-[416px] flex flex-col justify-between ${poppins.className}`}>
        <div className="flex flex-col justify-between items-center h-full">
          
          <div className="mb-6 md:mb-0">
            <Image 
              src={logo} 
              alt="Logo"
              width={300} 
              height={122} 
              className="w-[299.16px] md:w-[300px]"
            />
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0 mt-10">
            <a href="https://www.instagram.com" target="_blank">
              <div className="bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                <FaInstagram className="text-2xl text-[#37008E] hover:text-pink-500" />
              </div>
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <div className="bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                <FaFacebookF className="text-2xl text-[#37008E] hover:text-blue-600" />
              </div>
            </a>
          </div>

          {/* Centered navigation links */}
          <nav className='grid grid-cols-3 gap-4 text-white mb-4 mt-6 md:mt-10 justify-center items-center md:flex md:flex-row md:gap-12 md:justify-center'> 
            <Link href="/books">Books</Link>
            <Link href="/features">Features</Link>
            <Link href="/howitworks">How it works</Link>
            <Link href="/about" className="text-center">About us</Link>
            <Link href="/register" className="text-center">Register</Link>
            <Link href="/login" className="text-center">Login</Link>
          </nav>

          <hr className="border-[#FFFFFF33] w-[90%] md:w-full mb-4" />
          <div className="text-[#FFFFFF33] text-center mb-4 text-xs md:text-sm">
            Copyrights @2024: Brain Hero - Our cool Artificial Intelligence friend
          </div>
        </div>
      </div>
    </>
  );
}
