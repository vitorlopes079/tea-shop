"use client";

import React, { useState } from "react";
import Image from "next/image";
import arrowDown from "../../images/collection/chevron-down2.svg";
import arrowUp from "../../images/collection/chevron-up.svg"
import styles from "../../css/collections/sortByButton.module.css";
import SortDropdown from "./SortDropdown";

const SortByButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sortButton} onClick={handleClick}>
        <p className={styles.text}>Sort By</p>
        <Image className={styles.icon} src={isOpen ? arrowUp : arrowDown} alt="arrow-down" />
      </div>
      <div>{isOpen && <SortDropdown />}</div>
    </div>
  );
};

export default SortByButton;
