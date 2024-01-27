import React from "react";
import productImage from "../../images/collection/CeylonGinger.jpg";
import Image from "next/image";
import styles from "../../css/collections/productContainer.module.css";

const ProductContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={productImage} alt="ginger tea" className={styles.image} />
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.textContainer}>
          <p className={styles.text}>Ceylon Ginger</p>
          <p className={styles.text}>Cinnamon chai tea</p>
        </div>
        <p className={styles.price}>
          €4.85 <span className={styles.weight}>/ 50 g</span>
        </p>
      </div>
    </div>
  );
};

export default ProductContainer;
