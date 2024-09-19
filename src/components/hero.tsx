import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import phone from '../images/phone.png';
import googlePlay from '../images/googlePlay.png'; 
import appStore from '../images/appStore.png'; 
import CloudBackground from '../images/cloud.png';
import BackgroundBehindPhone from '../images/square.png';
import object from '../images/object.png';
import obj from '../images/obj.png';
import styles from '../app/styles/hero.module.css';

const Hero: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#008EA7' }}>
      <section className={styles.heroSection} style={{ marginLeft: '150px' }}>
        <div className={styles.textContent}>
          <div className={styles.backgroundImage}>
            <Image src={CloudBackground} alt="Hero Background" />
          </div>
          <h1 className={styles.heroHeading}>Create, read, and</h1>
          <h1 className={styles.heroHeading}>explore with AI-</h1>
          <h1 className={styles.heroHeading}>powered stories!</h1>
          <p className={styles.heroSubheading}>
            Ignite creativity, reduce screen time, and turn ideas into adventures.
          </p>
          
          <div className={styles.storeButtons}>
            <Link href="https://play.google.com/store/apps/details?id=your_app_id" target="_blank">
              <Image src={googlePlay} alt="Get it on Google Play" width={150} height={50} />
            </Link>
            <Link href="https://apps.apple.com/us/app/your-app-id" target="_blank">
              <Image src={appStore} alt="Download on the App Store" width={150} height={50} />
            </Link>
          </div>
          <div style={{display:'flex', flexDirection:'row', gap: '20px'}}>
          <div className={styles.heroButtons}>
            <button className={styles.startButton}>Start your journey today</button>
          </div>
          <p className={styles.free}>
            it's free!.
          </p>
          </div>
        </div>

        <div className={styles.object}>
          <Image src={object} alt="object" />
        </div>
        <div className={styles.obj}>
          <Image src={obj} alt="obj" />
        </div>

        <div className={styles.backgroundBehindPhone}>
          <Image src={BackgroundBehindPhone} alt="Background Behind Phone" layout="fill" objectFit="cover" />
        </div>
        
        <div className={styles.phone}>
          <Image src={phone} alt="Phone" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
