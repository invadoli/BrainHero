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
        <div className="mx-auto max-w-[1200px] px-4">
          <div className={`hidden md:flex justify-end gap-2 mb-2 ${isMobileMenuOpen ? 'hidden' : ''}`}>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} className="text-white" />
            </Link>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} className="text-white" />
            </Link>
          </div>

          <div className={`flex justify-between items-center ${isMobileMenuOpen ? 'hidden' : ''}`}>
            <div>
              <Link href="/">
                <Image src={logo} alt="BrainHero Logo" width={192.6} height={89.73} />
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-7 text-white">
              <Link href="/">Home</Link>
              <Link href="/books">Books</Link>
              <Link href="/features">Features</Link>
              <Link href="/howitworks">How it works</Link>
              <Link href="/about">About us</Link>

              <Link href="/login">
                <button className="px-8 py-2 bg-[#FA5E55] text-white rounded-full font-bold">
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
          <div className="flex flex-col items-center bg-[#008EA7] h-screen pt-4 relative">
            <button onClick={toggleMobileMenu} className="absolute top-4 right-6">
              <AiOutlineClose size={30} className="text-white" />
            </button>

            <Image src={logo} alt="BrainHero Logo" width={192.6} height={89.73} className="mt-10"/>
            <nav className="flex flex-col items-center gap-12 text-white mt-20">
              <Link href="/" onClick={toggleMobileMenu}>Home</Link>
              <Link href="/books" onClick={toggleMobileMenu}>Books</Link>
              <Link href="/features" onClick={toggleMobileMenu}>Features</Link>
              <Link href="/howitworks" onClick={toggleMobileMenu}>How it works</Link>
              <Link href="/about" onClick={toggleMobileMenu}>About us</Link>

              <Link href="/login">
                <button className="px-8 py-2 bg-[#FA5E55] text-white rounded-full font-bold">
                  Log In
                </button>
              </Link>
            </nav>

            <div className="flex gap-4 mt-8">
              <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="text-white" />
              </Link>
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="text-white" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
