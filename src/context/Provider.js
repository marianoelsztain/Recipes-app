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
  const [filteredList, setFilteredList] = useState(null);
  const [activeFilter, setActiveFilter] = useState('');

  const sliceStart = 0;

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

  const getFoodList = async (type) => {
    const response = await fetchFoodCategories(type);
    let listArray = [];

    if (type === 'category-list') {
      const sliceEnd = 5;

      listArray = response.map((item) => item.strCategory);
      setFilteredList(listArray.slice(sliceStart, sliceEnd));
    } else if (type === 'ingredient-list') {
      const sliceEnd = 12;

      listArray = response.map((item) => item.strIngredient);
      setFilteredList(listArray.slice(sliceStart, sliceEnd));
    }
  };

  const getDrinkCategories = async () => {
    const sliceEnd = 5;
    const response = await fetchDrinkCategories();
    const filtersArray = response.map((item) => item.strCategory);
    setFilteredList(filtersArray.slice(sliceStart, sliceEnd));
  };

  const value = {
    getFoodAPI,
    getDrinkAPI,
    drinkData,
    foodData,
    searchInput,
    setSearchInput,
    getDrinkCategories,
    getFoodList,
    filteredList,
    activeFilter,
    setActiveFilter,
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
