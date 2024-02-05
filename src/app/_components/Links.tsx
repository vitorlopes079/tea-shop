"use client";

import React from "react";
import Link from "next/link";
import styles from "../../css/links.module.css";
import { useFilters } from "../../contexts/FilterContext";
import { useRouter } from "next/navigation";

type LinkProps = {
  isMobile: boolean;
};

const Links = ({ isMobile }: LinkProps) => {
  const { resetFilters } = useFilters();
  const router = useRouter();

  const handleClick = () => {
    resetFilters();
    router.push("/collections");
  };

  return (
    <div
      className={
        isMobile ? styles.navLinksContainerMobile : styles.navLinksContainer
      }
    >
      <Link href="./" className={styles.link}>
        Home
      </Link>
      <p onClick={() => handleClick()} className={styles.link}>
        Tea Collections
      </p>
      <Link href="./construction" className={styles.link}>
        Blog
      </Link>
      <Link href="./construction" className={styles.link}>
        Contact Us
      </Link>
    </div>
  );
};

export default Links;
