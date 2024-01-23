import React from "react";
import logo from "../../images/navBar/icon3.png";
import styles from "../../css/logo.module.css";
import Image from "next/image";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Image src={logo} alt="Icon" className={styles.logoIcon} />
      <p className={styles.logoText}>HerbalBliss</p>
    </div>
  );
};

export default Logo;
