import React from "react";
import Image from "next/image";
import styles from "../../css/homePage/collectionsSection.module.css";
import Collection1 from "../../images/collection/collection1.png"
import Collection2 from "../../images/collection/collection2.png";
import Collection3 from "../../images/collection/collection3.png";
import Collection4 from "../../images/collection/collection4.png";
import Collection5 from "../../images/collection/collection5.png";
import Collection6 from "../../images/collection/collection6.png";
import Collection7 from "../../images/collection/collection7.png";
import Collection8 from "../../images/collection/collection8.png";
import Collection9 from "../../images/collection/collection9.png";

const Collections = () => {
  return (
    <div className={styles.collectionContainer}>
      <h1 className={styles.title}>Our Collections</h1>
      <div className={styles.imagesContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={Collection1}
            alt="black tea"
            className={styles.image}
          />
          <p className={styles.text}>black tea</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={Collection2}
            alt="green tea"
            className={styles.image}
          />
          <p className={styles.text}>green tea</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={Collection3}
            alt="white tea"
            className={styles.image}
          />
          <p className={styles.text}>white tea</p>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Collection4} alt="matcha" className={styles.image} />
          <p className={styles.text}>matcha</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={Collection5}
            alt="herbal tea"
            className={styles.image}
          />
          <p className={styles.text}>herbal tea</p>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Collection6} alt="chai" className={styles.image} />
          <p className={styles.text}>chai</p>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Collection7} alt="oolong" className={styles.image} />
          <p className={styles.text}>oolong</p>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Collection8} alt="rooibo" className={styles.image} />
          <p className={styles.text}>rooibo</p>
        </div>
        <div className={styles.imageContainer }>
          <Image
            src={Collection9}
            alt="tea ware"
            className={styles.image}
          />
          <p className={styles.text}> tea ware</p>
        </div>
      </div>
    </div>
  );
};

export default Collections;
