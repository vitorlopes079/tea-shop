import React, { useState } from "react";
import styles from "../../css/collections/categoryFilter.module.css";

interface GenericFilterProps {
  title: string;
  options: string[];
  selectedOptions: { [key: string]: boolean };
  onOptionChange: (option: string) => void;
}

const CategoryFilter = ({
  title,
  options,
  selectedOptions,
  onOptionChange,
}: GenericFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.optionContainer}>
      <div className={styles.buttonContainer}>
        <p className={styles.title}>{title} (1)</p>
        <p className={styles.plus} onClick={toggleOpen}>
          {isOpen ? "-" : "+"}
        </p>
      </div>

      {isOpen && (
        <div className={styles.subMenu}>
          {options.map((option) => (
            <div key={option} className={styles.customCheckboxContainer}>
              <input
                type="checkbox"
                id={option}
                className={styles.hiddenCheckbox}
                checked={selectedOptions[option] ?? false}
                onChange={() => onOptionChange(option)}
              />
              <label
                htmlFor={option}
                className={styles.customCheckboxLabel}
              ></label>
              <span className={styles.labelText}>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
