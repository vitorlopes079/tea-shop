import React from "react";
import Link from "next/link";
import styles from "../../css/links.module.css";

type LinkProps = {
  isMobile: boolean;
};

const Links = ({ isMobile }: LinkProps) => {
  return (
    <div
      className={
        isMobile ? styles.navLinksContainerMobile : styles.navLinksContainer
      }
    >
      <Link href="./" className={styles.link}>
        Home
      </Link>
      <Link href="./collections" className={styles.link}>
        Tea Collections
      </Link>
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
