import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import FoodCard from './FoodCard';
import FoodFilterCategories from './FoodFilterCategories';
import '../css/Lists.css';

function FoodList() {
  const {
    getFoodAPI,
    foodData,
    searchInput,
  } = useContext(RecipesContext);

  useEffect(() => {
    const { readyToSearch, filterType, query } = searchInput;

    if (readyToSearch) getFoodAPI(filterType, query);
  }, [searchInput]);

  useEffect(() => {
    getFoodAPI('name-filter', '');
  }, []);

  const handleFoodData = () => {
    const maxSize = 12;
    const startIndex = 0;

    if (foodData.length > maxSize) {
      return foodData.slice(startIndex, maxSize).map((item, index) => (
        <FoodCard
          index={ index }
          key={ `recipe${index}` }
          recipe={ item }
        />
      ));
    }

    if (foodData.length === 1) {
      const { idMeal } = foodData[startIndex];
      return <Redirect to={ `/comidas/${idMeal}` } />;
    }

    return foodData.map((item, index) => (
      <FoodCard
        index={ index }
        key={ `recipe${index}` }
        recipe={ item }
      />
    ));
  };

  return (
    <section className="recipe-container">
      <FoodFilterCategories />
      { handleFoodData() }
    </section>
  );
}

export default FoodList;
