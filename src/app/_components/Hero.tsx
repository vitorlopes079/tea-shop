import React from "react";
import hero from "../../images/hero/hero.png";
import Image from "next/image";
import styles from "../../css/homePage/hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImageContainer}>
        <Image src={hero} alt="hero-image" className={styles.heroImage} />
      </div>
      <div className={styles.textAndButtoncontainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Every day is unique, just like our tea
          </h1>
          <p className={styles.text}>
          Discover the symphony of flavors in each blend, meticulously crafted for your daily moments of tranquility and refined taste. Each sip offers a unique experience, transforming your day with exceptional teas. Embrace the journey of unparalleled tastes and aromas, elevating every moment with our carefully selected blends.
          </p>
          <button className={styles.button}>BROWES TEA</button>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
