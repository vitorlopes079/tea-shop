"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface FilterSelections {
  collections: Record<string, boolean>;
  origins: Record<string, boolean>;
  flavor: Record<string, boolean>;
  qualities: Record<string, boolean>;
  caffeine: Record<string, boolean>;
  allergens: Record<string, boolean>;
  organic: { isTrue: boolean };
}

interface FilterContextType {
  filterSelections: FilterSelections;
  setFilterSelections: Dispatch<SetStateAction<FilterSelections>>;
  applySingleFilter: (category: keyof FilterSelections, key: string) => void;
  sortingOption: string;
  setSortingOption: Dispatch<SetStateAction<string>>;
  resetFilters: () => void;
}
const defaultState: FilterContextType = {
  filterSelections: {
    collections: {},
    origins: {},
    flavor: {},
    qualities: {},
    caffeine: {},
    allergens: {},
    organic: { isTrue: false },
  },
  setFilterSelections: () => {}, 
  applySingleFilter: () => {}, 
  sortingOption: "", 
  setSortingOption: () => {}, 
  resetFilters: () => {}
};

const FilterContext = createContext<FilterContextType>(defaultState);

export const useFilters = () => useContext(FilterContext);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filterSelections, setFilterSelections] = useState<FilterSelections>(
    defaultState.filterSelections
  );

  const [sortingOption, setSortingOption] = useState<string>("");

  const applySingleFilter = (category: keyof FilterSelections, key: string)  => {
    const resetState = {
      collections: { [key]: true },
      origins: {},
      flavor: {},
      qualities: {},
      caffeine: {},
      allergens: {},
      organic: { isTrue: false },
    };

    setFilterSelections(resetState);
  };

  const resetFilters = () => {
    setFilterSelections(defaultState.filterSelections);
  };


  return (
    <FilterContext.Provider
      value={{
        filterSelections,
        setFilterSelections,
        applySingleFilter,
        sortingOption,
        setSortingOption,
        resetFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
