import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';
import '../css/CategoryFilters.css';

function DoneRecipesFilter() {
  return (
    <div>
      <button type="button">
        All
      </button>
      <button type="button">
        Food
      </button>
      <button type="button">
        Drinks
      </button>
    </div>
  );
}

export default DoneRecipesFilter;