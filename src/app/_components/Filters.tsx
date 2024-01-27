"use client";

import React, { useState } from "react";
import styles from "../../css/collections/filters.module.css";
import BreakLine from "./BreakLine";
import CategoryFilter from "./CategoryFilter";

interface FilterSelections {
  collections: { [key: string]: boolean };
  origins: { [key: string]: boolean };
  flavor: { [key: string]: boolean };
  qualities: { [key: string]: boolean };
  caffeine: { [key: string]: boolean };
  allergens: { [key: string]: boolean };
  organic: { isTrue: boolean };
}

type FiltersProps = {
  isMobile: boolean;
};

const Filters = ({ isMobile }: FiltersProps) => {
  const [filterSelections, setFilterSelections] = useState<FilterSelections>({
    collections: {},
    origins: {},
    flavor: {},
    qualities: {},
    caffeine: {},
    allergens: {},
    organic: { isTrue: false },
  });

  const collections = [
    "Black teas",
    "Green teas",
    "White teas",
    "Chai",
    "Matcha",
    "Herbal teas",
    "Oolong",
    "Rooibos",
    "Teaware",
  ];

  const origin = ["India", "Japan", "Iran", "South Africa "];
  const flavor = [
    "Spicy",
    "Sweet",
    "Citrus",
    "Smooth",
    "Fruity",
    "Floral",
    "Grassy",
    "Minty",
    "Bitter",
    "Creamy",
  ];

  const qualities = ["Detox", "Energy", "Relax", "Digestion"];
  const caffeine = [
    "No Caffeine",
    "Low Caffeine",
    "Medium Caffeine",
    "High Caffeine ",
  ];

  const allergens = ["Lactose-free", "Gluten-free", "Nuts-free ", "Soy-free"];

  const handleOptionChange = (
    category: keyof FilterSelections,
    option?: string
  ) => {
    setFilterSelections((prevState) => {
      if (category === "organic") {
        return {
          ...prevState,
          organic: { isTrue: !prevState.organic.isTrue },
        };
      }

      const categoryState = prevState[category]
        ? { ...prevState[category] }
        : {};

      if (option === undefined) {
        return prevState;
      }

      return {
        ...prevState,
        [category]: {
          ...categoryState,
          [option]: !categoryState[option],
        },
      };
    });
  };
  return (
    <div className={isMobile ? styles.mobileContainer : styles.container}>
      <CategoryFilter
        title={"Collections"}
        options={collections}
        selectedOptions={filterSelections.collections}
        onOptionChange={(option) => handleOptionChange("collections", option)}
      />
      <BreakLine />

      <CategoryFilter
        title={"Origin"}
        options={origin}
        selectedOptions={filterSelections.origins}
        onOptionChange={(option) => handleOptionChange("origins", option)}
      />
      <BreakLine />

      <CategoryFilter
        title={"Flavor"}
        options={flavor}
        selectedOptions={filterSelections.flavor}
        onOptionChange={(option) => handleOptionChange("flavor", option)}
      />
      <BreakLine />

      <CategoryFilter
        title={"Qualities"}
        options={qualities}
        selectedOptions={filterSelections.qualities}
        onOptionChange={(option) => handleOptionChange("qualities", option)}
      />
      <BreakLine />

      <CategoryFilter
        title={"Caffeine"}
        options={caffeine}
        selectedOptions={filterSelections.caffeine}
        onOptionChange={(option) => handleOptionChange("caffeine", option)}
      />
      <BreakLine />

      <CategoryFilter
        title={"Allergens"}
        options={allergens}
        selectedOptions={filterSelections.allergens}
        onOptionChange={(option) => handleOptionChange("allergens", option)}
      />
      <BreakLine />
      <div className={styles.toggleTextContainer}>
        <p className={styles.text}>Organic</p>
        <div className={styles.toggleContainer}>
          <input
            type="checkbox"
            id={`toggle-${isMobile ? "mobile" : "desktop"}`}
            className={styles.toggleCheckbox}
            onChange={() => handleOptionChange("organic")}
            checked={filterSelections.organic.isTrue}
          />
          <label
            htmlFor={`toggle-${isMobile ? "mobile" : "desktop"}`}
            className={styles.toggleLabel}
          ></label>
        </div>
      </div>

      <BreakLine />
    </div>
  );
};

export default Filters;
