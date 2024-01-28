import React from "react";
import Image from "next/image";
import wholesallersImage from "../../images/hero/wholsesaleSection.png";
import styles from "../../css/homePage/wholesallers.module.css";
import Link from "next/link";

const Wholesallers = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImageContainer}>
        <Image
          src={wholesallersImage}
          alt="Tea pouring into a cup."
          className={styles.heroImage}
        />
      </div>
      <div className={styles.textAndButtonContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>For wholesallers</h1>
          <p className={styles.text}>
            We offer loose tea leaves of the best quality for your business.
            With a choice of more than 450 different kinds of loose tea, we can
            make a sophisticated selection that fits exactly in your kind of
            establishment.
          </p>
          <Link href={"./construction"}>
            <button className={styles.button}>get a free consultation</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wholesallers;
