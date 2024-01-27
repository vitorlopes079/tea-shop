"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import down from "../../images/collection/chevron-down.svg";
import styles from "../../css/collections/filterMobile.module.css";
import FilterSlider from "./FilterSlider";
import Overlay from "./Overlay";

const FilterMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 580 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <>
      <div className={styles.filterArrow} onClick={toggleSidebar}>
        <p className={styles.filterText}>FILTER</p>
        <Image src={down} alt="down" className={styles.downIcon} />
      </div>
      <Overlay isOpen={isOpen} onClick={closeSidebar} />
      <div className={`${styles.sliderContainer} ${isOpen ? styles.open : ""}`}>
        <FilterSlider toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
};

export default FilterMobile;
