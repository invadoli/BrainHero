import Image from 'next/image'; 
import Link from 'next/link';
import purpleClouds from '../images/purpleClouds.png';
import logo from '../images/logo2.png';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Poppins} from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export default function Footer() {
  return (
    <>
      <div className='mt-32'>
        <Image src={purpleClouds} alt="cloud"/>
      </div>
      <div className={`bg-[#37008E] h-[416px] flex flex-col justify-between${poppins.className}`}>
        <div className="flex flex-col justify-between items-center h-full">
          
          <div className="mb-6 md:mb-0">
            <Image 
              src={logo} 
              alt="Logo"
              width={300} 
              height={122} 
            />
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0 mt-10">
            <a href="https://www.instagram.com" target="_blank">
              <div className="bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                <FaInstagram className="text-2xl hover:text-pink-500" />
              </div>
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <div className="bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center">
                <FaFacebookF className="text-2xl hover:text-blue-600" />
                </div>
            </a>
          </div>

          <nav className='flex flex-row gap-12 text-white mb-4 mt-10'> 
            <Link href="/books">Books</Link>
            <Link href="/features">Features</Link>
            <Link href="/howitworks">How it works</Link>
            <Link href="/about">About us</Link>
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
          </nav>

          <hr className=" border-[#FFFFFF33] w-full mb-4" />
          <div className="text-[#FFFFFF33] text-center mb-4" style={{fontSize: '14px'}}>
            Copyrights @2024: Brain Hero - Our cool Artificial Intelligence friend
          </div>
        </div>
      </div>
    </>
  );
}
