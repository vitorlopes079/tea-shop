"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "../../css/desktopIconsContainer.module.css";
import Image from "next/image";
import search from "../../images/navBar/search.svg";
import Search from "./Search";
import UserAndBagIcon from "./UserAndBagIcon";
import { useRouter } from "next/navigation";
import { useFilters } from "@/contexts/FilterContext";

const DesktopIconsContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchIconRef = useRef<HTMLDivElement>(null);
  const { applySingleFilter } = useFilters();
  const router = useRouter();

  const handleClickOutside = (event: MouseEvent) => {
    const searchContainerElement = searchContainerRef.current;
    const searchIconElement = searchIconRef.current;

    if (
      searchContainerElement &&
      searchIconElement &&
      event.target instanceof Node &&
      !searchContainerElement.contains(event.target) &&
      !searchIconElement.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (collectionName: string) => {
    applySingleFilter("collections", collectionName);
    setIsOpen(false);
    router.push("/collections");
  };

  const toggleSearch = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <>
      <div className={styles.iconsContainer}>
        <div onClick={toggleSearch} ref={searchIconRef}>
          <Image src={search} alt="search icon" className={styles.icon} />
        </div>
        <UserAndBagIcon />
        <div
          ref={searchContainerRef}
          className={`${styles.searchContainer} ${isOpen ? styles.visible : ""}`}
        >
          <Search onClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default DesktopIconsContainer;
