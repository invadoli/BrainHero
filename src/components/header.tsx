"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"; 
import { AiOutlineClose } from "react-icons/ai"; 
import logo from "../images/logo.png";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
  <nav className="p-2 bg-[#008EA7]">
    <div className="mx-auto max-w-[1000px] px-2">
      <div className={`hidden md:flex justify-end gap-2 mb-2 ${isMobileMenuOpen ? 'hidden' : ''}`}>
        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <div className="bg-white rounded-full ">
            <FaInstagram size={22} className="text-[#008EA7] transform scale-75" />
          </div>
        </Link>
        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={22} className="text-white" />
        </Link>
      </div>

      <div className={`flex justify-between items-center ${isMobileMenuOpen ? 'hidden' : ''}`}>
        <div>
          <Link href="/">
            <Image src={logo} alt="BrainHero Logo" width={192.6} height={89.73} />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-12 text-white">
          <Link href="/" className="text-sm">Home</Link>
          <Link href="/books" className="text-sm">Books</Link>
          <Link href="/features" className="text-sm">Features</Link>
          <Link href="/howitworks" className="text-sm">How it works</Link>
          <Link href="/about" className="text-sm">About us</Link>

          <Link href="/login">
            <button className="px-6 py-2 bg-[#FA5E55] text-white rounded-full text-sm font-bold">
              Log In
            </button>
          </Link>
        </div>

        {/* Responsivity */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <AiOutlineClose size={30} className="text-white" />
            ) : (
              <GiHamburgerMenu size={30} className="text-white" />
            )}
          </button>
        </div>
      </div>
    </div>

    {isMobileMenuOpen && (
      <div className="flex flex-col items-center bg-[#008EA7] h-auto pt-8 relative z-50 overflow-auto">
        <button onClick={toggleMobileMenu} className="absolute top-4 right-6">
          <AiOutlineClose size={30} className="text-white" />
        </button>

        <Image src={logo} alt="BrainHero Logo" width={192.6} height={89.73} className="mt-8"/>
        <nav className="flex flex-col items-center gap-8 text-white mt-10">
          <Link href="/" onClick={toggleMobileMenu}>Home</Link>
          <Link href="/books" onClick={toggleMobileMenu}>Books</Link>
          <Link href="/features" onClick={toggleMobileMenu}>Features</Link>
          <Link href="/howitworks" onClick={toggleMobileMenu}>How it works</Link>
          <Link href="/about" onClick={toggleMobileMenu}>About us</Link>

          <Link href="/login">
            <button className="px-6 py-2 bg-[#FA5E55] text-white rounded-full text-sm font-bold">
              Log In
            </button>
          </Link>
        </nav>

        <div className="flex gap-4 mt-8">
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="text-white" />
          </Link>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} className="text-white" />
          </Link>
        </div>
      </div>
    )}
  </nav>
</header>

  );
};

export default Header;
