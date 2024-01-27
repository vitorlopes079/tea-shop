import React from "react";
import styles from "../../css/collections/filterSlider.module.css";
import Filters from "./Filters";
import SortDropdown from "./SortDropdown";
import arrowUp from "../../images/collection/chevron-up.svg";
import Image from "next/image";

interface FilterSliderProps {
  toggleSidebar: () => void;
}

const FilterSlider = ({ toggleSidebar }: FilterSliderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.closeIconContainer}>
        <p>Sort and Filter</p>
        <Image onClick={toggleSidebar} src={arrowUp} alt="arrow-up" />
      </div>
      <div className={styles.sortContainer}>
        <p className={styles.title}>Sort your selected items</p>
        <SortDropdown />
      </div>
      <div className={styles.filtersContainer}>
        <p className={styles.title}>Filter your way</p>
        <Filters isMobile={true} />
      </div>
    </div>
  );
};

export default FilterSlider;
