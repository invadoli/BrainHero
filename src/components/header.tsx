"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { FaInstagram, FaFacebook } from 'react-icons/fa'; 
import logo from '../images/logo.png';

const Header: React.FC = () => {
  return (
    <header>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '10px 20px',
          background: '#008EA7'
        }}
      >
        <div style={{marginLeft:'190px', marginRight:'190px'}}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} style={{ color: 'white' }} />
            </Link>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} style={{ color: 'white' }} />
            </Link>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <Link href="/">
              <Image src={logo} alt="BrainHero Logo" width={192.6} height={89.73} />
            </Link>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '30px',
              color: 'white',
            }}
          >
            <Link href="/">Home</Link>
            <Link href="/books">Books</Link>
            <Link href="/features">Features</Link>
            <Link href="/howitworks">How it works</Link>
            <Link href="/about">About us</Link>

            <Link href="/login">
              <button
                style={{
                  padding: '10px 20px',
                  width: '126px',
                  background: '#FA5E55',
                  color: 'white',
                  border: 'none',
                  borderRadius: '100px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                Log In
              </button>
            </Link>
          </div>
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
