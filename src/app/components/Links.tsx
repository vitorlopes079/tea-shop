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
      <Link href="#" className={styles.link}>
        TEA COLLECTIONS
      </Link>
      <Link href="#" className={styles.link}>
        ACCESSORIES
      </Link>
      <Link href="#" className={styles.link}>
        BLOG
      </Link>
      <Link href="#" className={styles.link}>
        CONTACT US
      </Link>
    </div>
  );
};

export default Links;
