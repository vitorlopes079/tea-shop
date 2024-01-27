"use client"

import React, { useState, useEffect } from 'react';
import styles from "../../css/collections/mobileSubHeader.module.css";
import FilterMobile from "./FilterMobile";
import left from "../../images/collection/arrow-left.svg";
import Image from "next/image";

const MobileSubHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const scrolled = offset > 175; 
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.container} ${isScrolled? styles.scrolled : ""}`}>
      <Image src={left} alt="left" className={styles.left} />
      <FilterMobile />
    </div>
  );
};

export default MobileSubHeader;
