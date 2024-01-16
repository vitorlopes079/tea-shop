import React from "react";
import hero from "../../images/hero/hero.png";
import Image from "next/image";
import styles from "../../css/hero.module.css";

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
            Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus
            adipiscing odio. Neque lacus nibh eros in. Lorem ipsum dolor sit
            amet consectetur. Orci nibh nullam risus adipiscing odio. Neque
            lacus nibh eros in.
          </p>
          <button className={styles.button}>BROWES TEA</button>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
