import React from 'react';
import Image from 'next/image';
import brain from '../images/brain.png';
import brainback from '../images/BrainBack.png';
import book from '../images/book.png';
import enjoy from '../images/enjoy.png';
import styles from '../app/styles/features.module.css'; 

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.featureItem}>
            <div className={styles.imageContainer}>
              <Image src={brainback} alt="Brain Up" className={styles.brainback} />
              <Image src={brain} alt="Brain" className={styles.brain} />
            </div>
          <h3 style={{color: '#FCD300'}}>Brain Up</h3>
          <p>Use your imagination! Think of a fun story with cool characters and places. Get ready to create something amazing!</p>
        </div>

        <div className={styles.featureItem}>
          <Image src={book} alt="Tell your Story" className={styles.fotot}/>
          <h3 style={{color: '#FA5E55'}}>Tell Your Story</h3>
          <p>Share your story with Brain Hero! Our superhero listens to your ideas and helps make them even better.</p>
        </div>

        <div className={styles.featureItem}>
          <Image src={enjoy} alt="Make & Enjoy" className={styles.fotot}/>
          <h3 style={{color: '#37008E'}}>Make & Enjoy</h3>
          <p>Watch your story come to life! Brain Hero helps you create a book that talks. Read it, ask to it, share it, and have fun with your creation!</p>
        </div>
      </div>
      <p className={styles.booksKids}>BOOKS WRITTEN BY KIDS</p>
      <br />
      <h1 className={styles.text}>Discover inspiring stories written by kids, where every</h1>
      <h1 className={styles.text}>page brings imagination and adventure to life</h1>
    </section>
  );
};

export default Features;
