"use client";

import { useState, useEffect } from "react";
import trigger from "../../images/navBar/menu.svg";
import Image from "next/image";
import Sidebar from "./Sidebar";
import styles from "../../css/sidebar.module.css";
import Overlay from "./Overlay";

const Trigger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div onClick={toggleSidebar}>
        <Image src={trigger} alt={"trigger-icon"} />
      </div>
      <Overlay isOpen={isOpen} onClick={closeSidebar}/>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <Sidebar close={closeSidebar}/>
      </div>
    </>
  );
};

export default Trigger;
