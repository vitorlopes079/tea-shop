import React from "react";
import Links from "./Links";
import styles from "../../css/sidebar.module.css";
import closeX from "../../images/navBar/close.svg";
import Image from "next/image";
import Logo from "./Logo";
import BreakLine from "./BreakLine";
import UserAndBagIcon from "./UserAndBagIcon";
import Search from "./Search";

type SidebarProps = {
  close: React.MouseEventHandler;
};

const Sidebar = ({ close }: SidebarProps) => {
  return (
    <div className={styles.sidebarContainer}>
      <div>
        <div className={styles.closeContainer}>
          <Image
            onClick={close}
            src={closeX}
            alt="close"
            width={24}
            height={24}
          />
        </div>

        <div className={styles.sidebarSection}>
          <Search />
          <UserAndBagIcon />
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
