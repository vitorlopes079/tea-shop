import React from "react";
import user from "../../images/navBar/user.svg";
import bag from "../../images/navBar/shopping-cart.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "../../css/userAndBarIcon.module.css";

const UserAndBagIcon = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <Link href={"./construction"}>
          <Image src={user} alt="user icon" className={styles.icon} />
        </Link>
        <div className={styles.textContainer}>
          <p className={styles.title}>User Profile</p>
          <p className={styles.text}>We know you as a guest user</p>
        </div>
      </div>
      <div className={styles.iconContainer}>
        <Link href={"./construction"}>
          <Image src={bag} alt="bag icon" className={styles.icon} />
        </Link>
        <div className={styles.textContainer}>
          <p className={styles.title}>Your Bag</p>
          <p className={styles.text}>(3) items have been added</p>
        </div>
      </div>
    </div>
  );
};

export default UserAndBagIcon;
