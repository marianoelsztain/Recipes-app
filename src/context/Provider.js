import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import fetchFoodData from '../services/fetchFoodData';
import fetchDrinkData from '../services/fetchDrinkData';
import fetchFoodCategories from '../services/fetchFoodCategories';
import fetchDrinkCategories from '../services/fetchDrinkCategories';

function Provider({ children }) {
  const [foodData, setFoodData] = useState([]);
  const [drinkData, setDrinkData] = useState([]);
  const [searchInput, setSearchInput] = useState({
    filterType: '',
    query: '',
    readyToSearch: false,
  });
  const [foodCategories, setFoodCategories] = useState([]);
  const [drinkCategories, setDrinkCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const getFoodAPI = async (filterType, query) => {
    if (filterType !== 'first-letter-filter' || query.length === 1) {
      const result = await fetchFoodData(filterType, query);
      if (result === null) {
        return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      }
      setFoodData(result);
    } else {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
  };

  const getDrinkAPI = async (filterType, query) => {
    if (filterType !== 'first-letter-filter' || query.length === 1) {
      const result = await fetchDrinkData(filterType, query);
      if (result === null) {
        return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      }
      setDrinkData(result);
    } else {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
  };

  const handleFilters = (response) => {
    const filtersArray = response.map((item) => item.strCategory)
    setFilteredCategories(filtersArray.slice(0, 5));
  }

  const getFoodCategories = async () => {
    const response = await fetchFoodCategories();
    setFoodCategories(response);
    handleFilters(response);
  };

  const getDrinkCategories = async () => {
    const response = await fetchDrinkCategories();
    setDrinkCategories(response);
    handleFilters(response);
  };
  


  const value = {
    getFoodAPI,
    getDrinkAPI,
    drinkData,
    foodData,
    searchInput,
    setSearchInput,
    getFoodCategories,
    getDrinkCategories,
    filteredCategories,
  };

  return (
    <RecipesContext.Provider value={ value }>
      { children }
    </RecipesContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
