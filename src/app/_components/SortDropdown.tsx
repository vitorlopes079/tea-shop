import React, { useState } from 'react';
import styles from "../../css/collections/sortDropdown.module.css";

const SortDropdown = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const options = ['Lowest Price', 'Highest Price', 'Newest Products', 'Most Popular'];

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className={styles.dropdownContainer}>
      {options.map(option => (
        <label key={option} className={styles.label}>
          <input
            type="radio"
            className={styles.radioInput}
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default SortDropdown;