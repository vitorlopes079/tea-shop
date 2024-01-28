import React from "react";
import logo from "../../images/navBar/icon3.png";
import styles from "../../css/logo.module.css";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
       
          <div className={styles.logoContainer}>
            <Image src={logo} alt="Icon" className={styles.logoIcon} />
            <p className={styles.logoText}>HerbalBliss</p>
          </div>
     
      </Link>
    </>
  );
};

export default Logo;
