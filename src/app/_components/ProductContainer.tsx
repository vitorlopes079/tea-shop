import React from "react";
import Image from "next/image";
import styles from "../../css/collections/productContainer.module.css";
import { StaticImageData } from "next/image";
import Link from "next/link";

type ProductContainerProps = {
  image: StaticImageData | string;
  name: string;
  price: number;
  description: string;
  id: number;
};

const ProductContainer = ({ image, name, price, id }: ProductContainerProps) => {
  return (
    <div className={styles.container}>
      <Link href={`/${id}`}>
        <div className={styles.imageContainer}>
          <Image src={image} alt={name} className={styles.image} />
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.textContainer}>
            <p className={styles.text}>{name}</p>
          </div>
          <p className={styles.price}>
            €{price} <span className={styles.weight}>/ 50 g</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductContainer;
