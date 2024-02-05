"use client";

import React, { useState } from "react";
import ProductContainer from "./ProductContainer";
import styles from "../../css/collections/products.module.css";
import SortByButton from "./SortByButton";
import { teas } from "../teas";
import { TeaProps } from "../teas";
import { useFilters } from "../../contexts/FilterContext";

const Products = () => {
  const { filterSelections, sortingOption } = useFilters();
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredTeas = teas.filter((tea) => {
    const matchesCollection = Object.keys(filterSelections.collections).every(
      (key) =>
        filterSelections.collections[key] === false ||
        filterSelections.collections[
          tea.characteristics
            .collection as keyof typeof filterSelections.collections
        ] === true
    );

    const matchesOrigin = Object.keys(filterSelections.origins).every(
      (key) =>
        filterSelections.origins[key] === false ||
        filterSelections.origins[
          tea.characteristics.origin as keyof typeof filterSelections.origins
        ] === true
    );

    const matchesFlavor = Object.keys(filterSelections.flavor).every(
      (key) =>
        filterSelections.flavor[key] === false ||
        filterSelections.flavor[
          tea.characteristics.flavour as keyof typeof filterSelections.flavor
        ] === true
    );

    const matchesQualities = Object.keys(filterSelections.qualities).every(
      (key) =>
        filterSelections.qualities[key] === false ||
        filterSelections.qualities[
          tea.characteristics
            .qualities as keyof typeof filterSelections.qualities
        ] === true
    );

    const matchesCaffeine = Object.keys(filterSelections.caffeine).every(
      (key) =>
        filterSelections.caffeine[key] === false ||
        filterSelections.caffeine[
          tea.characteristics.caffeine as keyof typeof filterSelections.caffeine
        ] === true
    );

    const matchesAllergens = Object.keys(filterSelections.allergens).every(
      (key) =>
        filterSelections.allergens[key] === false ||
        filterSelections.allergens[
          tea.characteristics
            .allergens as keyof typeof filterSelections.allergens
        ] === true
    );

    const matchesOrganic =
      !filterSelections.organic.isTrue ||
      (filterSelections.organic.isTrue === true && tea.characteristics.organic);

    return (
      matchesCollection &&
      matchesOrigin &&
      matchesFlavor &&
      matchesQualities &&
      matchesCaffeine &&
      matchesAllergens &&
      matchesOrganic
    );
  });

  switch (sortingOption) {
    case "Lowest Price":
      filteredTeas.sort((a, b) => a.prices["50g"] - b.prices["50g"]);
      break;
    case "Highest Price":
      filteredTeas.sort((a, b) => b.prices["50g"] - a.prices["50g"]);
      break;
    case "Newest Products":
      filteredTeas.sort((a, b) => b.id - a.id);
      break;
    case "Most Popular":
      filteredTeas.sort((a, b) => b.numberOfSells - a.numberOfSells);
      break;
    default:
      filteredTeas.sort((a, b) => b.id - a.id);
      break;
  }

  const showMoreTeas = () => {
    setVisibleCount((prevCount) => prevCount + 9); 
  };

  const remainingTeas = filteredTeas.length - visibleCount;

  return (
    <div className={styles.container}>
      <SortByButton />
      <div className={styles.productsContainer}>
        {filteredTeas.slice(0, visibleCount).map((tea: TeaProps) => (
          <ProductContainer
            key={tea.id}
            image={tea.image}
            name={tea.name}
            price={tea.prices["50g"]}
            description={tea.description}
            id={tea.id}
          />
        ))}
      </div>
      {remainingTeas > 0 && (
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={showMoreTeas}>
            show more ({remainingTeas}) product{remainingTeas > 1 ? "s" : ""}
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
