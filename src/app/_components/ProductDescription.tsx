import React from "react";
import styles from "../../css/product/productDescription.module.css";
import check from "../../images/product/check1.svg";
import globe from "../../images/product/globe1.svg";
import Image from "next/image";

type ProductDescriptionProps = {
  name: string;
  description: string;
  origin: string;
  organic: boolean;
};

const ProductDescription = ({
  name,
  description,
  origin,
  organic,
}: ProductDescriptionProps) => {
  return (
    <div className={styles.informationContainer}>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.iconsContainer}>
        <div className={styles.iconContainer}>
          <Image src={globe} alt="globe" className={styles.icon} />
          <p>
            <span className={styles.span}>origin:</span> {origin}
          </p>
        </div>
        {organic && (
          <>
            <div className={styles.iconContainer}>
              <Image src={check} alt="check" className={styles.icon} />
              <p>Organic</p>
            </div>
            <div className={styles.iconContainer}>
              <Image src={check} alt="check" className={styles.icon} />
              <p>Vegan</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
