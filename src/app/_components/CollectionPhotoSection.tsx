import React from "react";
import Image from "next/image";
import collectionsImage from "../../images/collection/collections.jpg";
import styles from "../../css/collections/collectionsPhotoSection.module.css";

const CollectionPhotoSection = () => {
  return (
    <div className={styles.imageContainer}>
      <Image src={collectionsImage} alt="tea" className={styles.image} />
    </div>
  );
};

export default CollectionPhotoSection;
