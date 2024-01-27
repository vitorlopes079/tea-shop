import React from "react";
import styles from "../../css/homePage/services.module.css";

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <p className={styles.tagText}>450+ Kind of loosef tea</p>
      <p className={styles.tagText}>Certificated organic teas</p>
      <p className={styles.tagText}>Free delivery</p>
      <p className={styles.tagText}>Sample for all teas</p>
    </div>
  );
};

export default Services;
