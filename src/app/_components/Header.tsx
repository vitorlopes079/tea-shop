import React from "react";
import styles from "../../css/header.module.css";
import Trigger from "./Trigger";
import Links from "./Links";
import Logo from "./Logo";
import DesktopIconsContainer from "./DesktopIconsContainer";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Links isMobile={false} />
      <div className={styles.hamburguerContainer}>
        <Trigger />
      </div>
      <DesktopIconsContainer />
    </header>
  );
};

export default Header;
