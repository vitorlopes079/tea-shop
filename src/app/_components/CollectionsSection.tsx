"use client"

import React from "react";
import Image from "next/image";
import styles from "../../css/homePage/collectionsSection.module.css";
import Collection1 from "../../images/collection/collection1.png";
import Collection2 from "../../images/collection/collection2.png";
import Collection3 from "../../images/collection/collection3.png";
import Collection4 from "../../images/collection/collection4.png";
import Collection5 from "../../images/collection/collection5.png";
import Collection6 from "../../images/collection/collection6.png";
import Collection7 from "../../images/collection/collection7.png";
import Collection8 from "../../images/collection/collection8.png";
import Collection9 from "../../images/collection/collection9.png";
import { useFilters } from "../../contexts/FilterContext"; 
import { useRouter } from "next/navigation";

const Collections = () => {
  const { applySingleFilter } = useFilters();
  const router = useRouter();

  const handleClick = (collectionName: string) => {
    applySingleFilter('collections', collectionName);
    router.push('/collections'); // Use navigate for programmatic navigation
  };

  // Create an array of collections for easier mapping
  const collections = [
    { src: Collection1, alt: "Black Tea", name: "Black teas" },
    { src: Collection2, alt: "Green Tea", name: "Green teas" },
    { src: Collection3, alt: "White Tea", name: "White teas" },
    { src: Collection4, alt: "Matcha", name: "Matcha" },
    { src: Collection5, alt: "Herbal Tea", name: "Herbal teas" },
    { src: Collection6, alt: "Chai", name: "Chai" },
    { src: Collection7, alt: "Oolong", name: "Oolong" },
    { src: Collection8, alt: "Rooibos", name: "Rooibo" },
    { src: Collection9, alt: "Teaware", name: "Tea ware" },
  ];

  return (
    <div className={styles.collectionContainer}>
      <h1 className={styles.title}>Our Collections</h1>
      <div className={styles.imagesContainer}>
        {collections.map((collection, index) => (
          <div key={index} className={styles.imageContainer} onClick={() => handleClick(collection.name)}>
            <Image src={collection.src} alt={collection.alt} className={styles.image}  />
            <p className={styles.text}>{collection.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;