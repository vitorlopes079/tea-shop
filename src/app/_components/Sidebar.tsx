import React from "react";
import Links from "./Links";
import styles from "../../css/sidebar.module.css";
import user from "../../images/navBar/user.svg";
import bag from "../../images/navBar/shopping-cart.svg";
import search from "../../images/navBar/search.svg";
import closeX from "../../images/navBar/close.svg"
import Image from "next/image";
import Logo from "./Logo";
import BreakLine from "./BreakLine";

type SidebarProps = {
  close: React.MouseEventHandler
}

const Sidebar = ({close}: SidebarProps) => {
  return (
    <div className={styles.sidebarContainer}>
      <div>
        <div className={styles.closeContainer}>
          <Image onClick={close} src={closeX} alt="close" width={24} height={24}/>
        </div>
        <div className={styles.sidebarSection}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search products..."
              className={styles.searchInput}
            />
            <div className={styles.searchIcon}>
              <Image src={search} alt="Search" width={20} height={20} />
            </div>
          </div>
         
          <div className={styles.iconContainer}>
            <Image src={user} alt="user-icon" height={24} width={24} />
            <div className={styles.iconTextContainer}>
              <p className={styles.title}>User Profile</p>
              <p className={styles.text}>We know you as a guest user</p>
            </div>
          </div>

          <div className={styles.iconContainer}>
            <Image src={bag} alt="bag-icon" height={24} width={24} />
            <div className={styles.iconTextContainer}>
              <p className={styles.title}>Your Bag</p>
              <p className={styles.text}>(3) items have been added</p>
            </div>
          </div>
        </div>
        <BreakLine />
        <div className={styles.sidebarSection}>
          <Links isMobile={true} />
        </div>
      </div>

      <div className={styles.logoContainer}>
        <Logo />
      </div>
    </div>
  );
};

export default Sidebar;
