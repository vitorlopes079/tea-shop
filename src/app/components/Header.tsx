import React from "react";
import logo from "../../images/navBar/icon3.png";
import menu from "../../images/navBar/menu.svg";
import Image from "next/image";
import search from "../../images/navBar/search.svg";
import user from "../../images/navBar/user.svg";
import bag from "../../images/navBar/shopping-cart.svg";
import styles from "../../css/header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="Icon" className={styles.logoIcon} />
        <p className={styles.logoText}>HerbalBliss</p>
      </div>
      <div className={styles.navLinkscontainer}>
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
      <div className={styles.hamburguerContainer}>
        <Image src={menu} alt="Icon" className={styles.navImage} />
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
