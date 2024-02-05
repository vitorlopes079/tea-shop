"use client";

import React from "react";
import Image from "next/image";
import location from "../../images/contact/location.png";
import mail from "../../images/contact/mail.png";
import call from "../../images/contact/call.png";
import styles from "../../css/footer.module.css";
import { useFilters } from "@/contexts/FilterContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const { applySingleFilter } = useFilters();
  const router = useRouter();

  const handleClick = (collectionName: string) => {
    applySingleFilter("collections", collectionName);
    router.push("/collections"); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <h2 className={styles.title}>Collections</h2>
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            <li
              className={styles.link}
              onClick={() => handleClick("Black teas")}
            >
              Black teas
            </li>
            <li
              className={styles.link}
              onClick={() => handleClick("Green teas")}
            >
              Green teas
            </li>
            <li
              className={styles.link}
              onClick={() => handleClick("White teas")}
            >
              White teas
            </li>
            <li
              className={styles.link}
              onClick={() => handleClick("Herbal teas")}
            >
              Herbal teas
            </li>
            <li className={styles.link} onClick={() => handleClick("Matcha")}>
              Matcha
            </li>
          </ul>
          <ul className={styles.list}>
            <li className={styles.link} onClick={() => handleClick("Chai")}>
              Chai
            </li>
            <li className={styles.link} onClick={() => handleClick("Oolong")}>
              Oolong
            </li>
            <li className={styles.link} onClick={() => handleClick("Rooibos")}>
              {" "}
              Rooibos
            </li>
            <li className={styles.link} onClick={() => handleClick("Teaware")}>
              Teaware
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.container2}>
        <h2 className={styles.title}>Learn</h2>
        <ul className={styles.list}>
          <Link href={"/construction"}>
            {" "}
            <li className={styles.link}>About us</li>
          </Link>
          <Link href={"/construction"}>
            {" "}
            <li className={styles.link}>About our teas</li>
          </Link>
          <Link href={"/construction"}>
            {" "}
            <li className={styles.link}>Tea academy</li>
          </Link>
        </ul>
      </div>

      <div className={styles.container3}>
        <h2 className={styles.title}>Customer Service</h2>
        <ul className={styles.list}>
          <Link href={"/construction"}>
            {" "}
            <li className={styles.link}>Ordering and liayment </li>{" "}
          </Link>
          <Link href={"/construction"}>
            {" "}
            <li className={styles.link}>Delivery</li>
          </Link>
          <Link href={"/construction"}>
            {" "}
            <li className={styles.link}>Terms & Conditions</li>
          </Link>
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
