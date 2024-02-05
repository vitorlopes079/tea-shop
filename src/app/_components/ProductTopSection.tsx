import React from "react";
import styles from "../../css/product/productTopSection.module.css";
import Image from "next/image";
import ProductDescription from "./ProductDescription";
import ProductPriceAndSelection from "./ProductPriceAndSelection";
import { StaticImageData } from "next/image";

type ProductTopSectionProps = {
  name: string;
  description: string;
  image: StaticImageData | string;
  origin: string;
  organic: boolean;
  prices: Record<string, number>;
};

const ProductTopSection = ({
  name,
  description,
  image,
  origin,
  organic,
  prices,
}: ProductTopSectionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={image} alt="tea" className={styles.image} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.insiderWrapper}>
          <ProductDescription
            name={name}
            description={description}
            origin={origin}
            organic={organic}
          />
          <ProductPriceAndSelection 
          prices={prices}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductTopSection;
