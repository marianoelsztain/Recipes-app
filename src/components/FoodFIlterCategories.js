import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

function FoodFilterCategories() {
  const {
    filteredCategories,
  } = useContext(RecipesContext);

  return (
    <div>
      <button>
        All
      </button>
      {filteredCategories.length ? filteredCategories.map((category) => (
        <button
          type="button"
          data-testid={`${category}-category-filter`}
        >
          {category}
        </button>
      )): null}
    </div>
  )
};

export default FoodFilterCategories;
