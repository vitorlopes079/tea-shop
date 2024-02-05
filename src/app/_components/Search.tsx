"use client";

import React, { useState, useEffect } from "react";
import styles from "../../css/search.module.css";
import searchLight from "../../images/navBar/searchLight.svg";
import searchDark from "../../images/navBar/search.svg";
import Image from "next/image";

type SearchProps = {
  onClick: (collectionName: string) => void;
}

const Search = ({onClick}: SearchProps) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const collections = [
    "Black teas",
    "Green teas",
    "White teas",
    "Chai",
    "Matcha",
    "Herbal teas",
    "Oolong",
    "Rooibos",
    "Teaware",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search For Our Teas"
        />
        <div className={styles.searchIconContainer}>
          <Image
            src={isLargeScreen ? searchLight : searchDark}
            alt="search"
            className={styles.searchIcon}
          />
        </div>
      </div>
      <div className={styles.categoryContainer}>
        {collections.map((item) => (
          <p
            className={styles.category}
            key={item}
            onClick={() => onClick(item)}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Search;
