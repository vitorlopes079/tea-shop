"use client";

import React, { useState } from "react";
import styles from "../../css/desktopIconsContainer.module.css";
import Image from "next/image";
import search from "../../images/navBar/search.svg";
import Search from "./Search";
import UserAndBagIcon from "./UserAndBagIcon";

const DesktopIconsContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.iconsContainer}>
        <div onClick={() => setIsOpen(!isOpen)}>
          <Image src={search} alt="search icon" className={styles.icon} />
        </div>
        <UserAndBagIcon />
        <div
          className={`${styles.searchContainer} ${
            isOpen ? styles.visible : ""
          }`}
        >
          <Search />
        </div>
      </div>
    </>
  );
};

export default DesktopIconsContainer;
