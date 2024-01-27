import React from "react";
import ProductContainer from "./ProductContainer";
import styles from "../../css/collections/products.module.css";
import SortByButton from "./SortByButton";


const Products = () => {
  return (
    <div className={styles.container}>
 
      <SortByButton />
      <div className={styles.productsContainer}>
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>show more (1) product</button>
      </div>
    </div>
  );
};

export default Products;
