import React from "react";
import styles from "../../../css/collections/collections.module.css";
import CollectionPhotoSection from "@/app/_components/CollectionPhotoSection";
import Products from "@/app/_components/Products";
import Filters from "@/app/_components/Filters";
import MobileSubHeader from "@/app/_components/MobileSubHeader";

const page = () => {
  return (
    <div className={styles.collectionContainer}>
      <MobileSubHeader />
      <CollectionPhotoSection />
      <div>
        <section className={styles.mainSection}>
          <Filters isMobile={false} />
          <Products />
        </section>
      </div>
    </div>
  );
};

export default page;
