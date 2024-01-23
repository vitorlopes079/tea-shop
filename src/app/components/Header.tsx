import React from "react";
import Image from "next/image";
import search from "../../images/navBar/search.svg";
import user from "../../images/navBar/user.svg";
import bag from "../../images/navBar/shopping-cart.svg";
import styles from "../../css/header.module.css";
import Trigger from "./Trigger";
import Links from "./Links";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Links isMobile={false} />
      <div className={styles.hamburguerContainer}>
        <Trigger />
      </div>
      <div className={styles.iconsContainer}>
        <Image src={search} alt="search icon" className={styles.icon} />
        <Image src={user} alt="user icon" className={styles.icon} />
        <Image src={bag} alt="bag icon" className={styles.icon} />
      </div>
    </header>
  );
};

export default Header;
