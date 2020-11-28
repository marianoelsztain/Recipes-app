import React, { useContext, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';
import FoodCard from './FoodCard';

function ExploreArea() {
  const {
    getFoodAPI,
    foodData,
    getFoodList,
    filteredList,
  } = useContext(RecipesContext);

  useEffect(() => {
    getFoodAPI('name-filter', '');
  }, []);

  useEffect(() => {
    getFoodList('area-list');
  }, []);

  const handleCards = () => {
    const maxSize = 12;
    const startIndex = 0;

    if (foodData.length > maxSize) {
      return foodData.slice(startIndex, maxSize).map((item, index) => (
        <FoodCard
          index={ index }
          key={ `recipe${index}` }
          recipe={ item }
          idMeal={ item.idMeal }
        />
      ));
    }
  };

  const handleDropDown = () => {
    if (filteredList !== null) {
      const optionsList = ['All', ...filteredList];

      return (
        <div>
          <select data-testid="explore-by-area-dropdown">
            {optionsList.map((area) => (
              <option
                data-testid={ `${area}-option` }
                key={ `area-${area}` }
                value={ area }
              >
                { area }
              </option>
            ))}
          </select>
        </div>
      );
    }
  };

  return (
    <div className="recipe-container">
      { handleDropDown() }
      { handleCards() }
    </div>
  );
}

export default ExploreArea;
