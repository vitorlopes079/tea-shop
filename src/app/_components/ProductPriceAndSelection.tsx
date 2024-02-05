"use client"

import React, { useState, useEffect } from "react";
import styles from "../../css/product/productPriceAndSelection.module.css";

type OptionsType = {
  size: string;
  price: number;
};

type ProductPriceAndSelectionProps = {
  prices: Record<string, number>;
};

const ProductPriceAndSelection = ({ prices }: ProductPriceAndSelectionProps) => {
  const [options, setOptions] = useState<OptionsType[]>([]);
  useEffect(() => {
    const newOptions = Object.entries(prices).map(([size, price]) => ({
      size,
      price,
    }));
    setOptions(newOptions);
  }, [prices]);

  const [selectedSize, setSelectedSize] = useState<OptionsType>(options[0]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (options.length > 0) {
      setSelectedSize(options[0]);
    }
  }, [options]);

  const total = selectedSize?.price * count;

  const handleSizeClick = (option: OptionsType) => {
    setSelectedSize(option);
  };

  const handleIncreaseQuantity = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecreaseQuantity = () => {
    setCount((prevState) => (prevState > 1 ? prevState - 1 : 1));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.price}>€{total.toFixed(2)}</h2>
      <div className={styles.sizesContainer}>
        {options.map((option) => (
          <div
            key={option.size}
            onClick={() => handleSizeClick(option)}
            className={`${styles.sizeContainer} ${
              selectedSize && selectedSize.size === option.size ? styles.selected : ""
            }`}
          >
            <p>{option.size}</p>
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.quantitySelectorContainer}>
          <p onClick={handleDecreaseQuantity} className={styles.quantitySelectorSignal}>-</p>
          <p className={styles.quantitySelectorNumber}>{count}</p>
          <p onClick={handleIncreaseQuantity} className={styles.quantitySelectorSignal}>+</p>
        </div>
        <button className={styles.button}>Add to Bag</button>
      </div>
    </div>
  );
};

export default ProductPriceAndSelection;