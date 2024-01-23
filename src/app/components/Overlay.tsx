import React from "react";
import styles from "../../css/overlay.module.css";

type OverlayProps = {
  isOpen: boolean;
  onClick: React.MouseEventHandler;
};

const Overlay = ({ isOpen, onClick }: OverlayProps) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
    ></div>
  );
};

export default Overlay;
