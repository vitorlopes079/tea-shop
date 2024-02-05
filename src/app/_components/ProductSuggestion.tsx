import React from "react";
import ProductContainer from "./ProductContainer";
import styles from "../../css/product/productSuggestion.module.css";
import { teas, TeaProps } from "@/app/teas"; // Adjust the import path as necessary

const ProductSuggestion = () => {
  // Function to get 3 random teas
  const getRandomTeas = (teas: TeaProps[]): TeaProps[] => {
    const count = 3; 
    const shuffled = [...teas].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  
  const randomTeas = getRandomTeas(teas);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>You may also like</h2>
      <div className={styles.productsContainer}>
        {randomTeas.map((tea) => (
          <ProductContainer
            key={tea.id}
            id={tea.id}
            image={tea.image}
            name={tea.name}
            price={Object.values(tea.prices)[0]} // Assuming you want to display the first price
            description={tea.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSuggestion;