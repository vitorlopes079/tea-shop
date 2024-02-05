import React, { useState } from 'react';
import styles from "../../css/collections/sortDropdown.module.css";
import { useFilters } from '@/contexts/FilterContext';


const SortDropdown = () => {
  const { setSortingOption } = useFilters();
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // Declare the selectedOption state

  const options = ['Lowest Price', 'Highest Price', 'Newest Products', 'Most Popular'];

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSelectedOption(newValue); 
    setSortingOption(newValue); 
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