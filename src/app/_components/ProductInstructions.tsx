import React from "react";
import styles from "../../css/product/productInstructions.module.css";
import tea from "../../images/product/tea.svg";
import clock from "../../images/product/clock.svg";
import drop from "../../images/product/drop.svg";
import Image from "next/image";
import BreakLine from "./BreakLine";

type ProductInstructionsProps = {
  flavour: string;
  qualities: string;
  caffeine: string;
  allergens: string;
  ingredients: string;
};

const ProductInstructions = ({
  flavour,
  qualities,
  caffeine,
  allergens,
  ingredients,
}: ProductInstructionsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.instructionsContainer}>
          <h2 className={styles.title}>Steeping instructions</h2>
          <div className={styles.iconAndTextContainer}>
            <Image className={styles.icon} src={tea} alt="tea" />
            <p className={styles.text}>
              <span className={styles.bold}>Serving size:</span> 2 tsp per cup,
              6 tsp per pot{" "}
            </p>
          </div>
          <BreakLine />
          <div className={styles.iconAndTextContainer}>
            <Image className={styles.icon} src={drop} alt="drop" />
            <p className={styles.text}>
              <span className={styles.bold}>Water Temperature:</span> 100°C{" "}
            </p>
          </div>
          <BreakLine />

          <div className={styles.iconAndTextContainer}>
            <Image className={styles.icon} src={clock} alt="clock" />
            <p className={styles.text}>
              <span className={styles.bold}>Steping time:</span> 3 - 5 minutes{" "}
            </p>
          </div>
          <BreakLine />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.aboutSectionContainer}>
          <h2 className={styles.title}>About this tea</h2>
          <div className={styles.about}>
            <div className={styles.aboutTextContainer}>
              <p className={styles.bold}>flavour</p>
              <p>{flavour}</p>
            </div>
            <div className={styles.aboutTextContainer}>
              <p className={styles.bold}>Qualities</p>
              <p>{qualities}</p>
            </div>
            <div className={styles.aboutTextContainer}>
              <p className={styles.bold}>{caffeine}</p>
              <p>Medium</p>
            </div>
            <div className={styles.aboutTextContainer}>
              <p className={styles.bold}>Allergens</p>
              <p>{allergens}</p>
            </div>
          </div>
        </div>
        <div className={styles.IngredientsContainer}>
          <h2 className={styles.title}>Ingredients</h2>
          <p className={styles.Ingredientstext}>{ingredients}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInstructions;
