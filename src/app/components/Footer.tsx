import React from "react";
import Image from "next/image";
import location from "../../images/contact/location.png";
import mail from "../../images/contact/mail.png";
import call from "../../images/contact/call.png";
import styles from "../../css/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <h2 className={styles.title}>Collections</h2>
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            <li className={styles.text}>Black teas</li>
            <li className={styles.text}>Green teas</li>
            <li className={styles.text}>White teas</li>
            <li className={styles.text}>Herbal teas</li>
            <li className={styles.text}>Matcha</li>
          </ul>
          <ul className={styles.list}>
            <li className={styles.text}>Chai</li>
            <li className={styles.text}>Oolong</li>
            <li className={styles.text}> Rooibos</li>
            <li className={styles.text}>Teaware</li>
          </ul>
        </div>
      </div>

      <div className={styles.container2}>
        <h2 className={styles.title}>Learn</h2>
        <ul className={styles.list}>
          <li className={styles.text}>About us</li>
          <li className={styles.text}>About our teas</li>
          <li className={styles.text}>Tea academy</li>
        </ul>
      </div>

      <div className={styles.container3}>
        <h2 className={styles.title}>Customer Service</h2>
        <ul className={styles.list}>
          <li className={styles.text}>Ordering and liayment </li>
          <li className={styles.text}>Delivery</li>
          <li className={styles.text}>Terms & Conditions</li>
        </ul>
      </div>

      <div className={styles.container4}>
        <h2 className={styles.title}>Contact us</h2>
        <div className={styles.iconContainer}>
          <Image src={location} alt="location pin" className={styles.icon} />
          <p className={styles.text}>
            42 Earl Grey Alley, Infusion Square, Steep Hill, Brewtown, Sipshire,
            Planet Teapot
          </p>
        </div>
        <div className={styles.iconContainer}>
          <Image src={mail} alt="mail" className={styles.icon} />
          <p className={styles.text}>vitorlopes079@gmail.com</p>
        </div>
        <div className={styles.iconContainer}>
          <Image src={call} alt="phone" className={styles.icon} />
          <p className={styles.text}> +60 174742215</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
