import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';
import '../css/CategoryFilters.css';

function DoneRecipesFilter({ currentList, setList, resetFilters }) {
  const onClick = ({ target }) => {
    const { value } = target;
    if (value === 'all') {
      resetFilters();
    } else {
      const newList = currentList.filter((recipe) => recipe.type === value);
      setList(newList);
    }
  };

  return (
    <div>
      <button
        data-testid="filter-by-all-btn"
        onClick={ onClick }
        type="button"
        value="all"
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        onClick={ onClick }
        type="button"
        value="comida"
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        onClick={ onClick }
        type="button"
        value="bebida"
      >
        Drinks
      </button>
    </div>
  );
}

DoneRecipesFilter.propTypes = {
  currentList: PropTypes.arrayOf(PropTypes.shape()),
  setList: PropTypes.func,
}.isRequired;

export default DoneRecipesFilter;
