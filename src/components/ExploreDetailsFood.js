import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function ExploreDetailsFood() {
  const {
    getFoodAPI,
    foodData,
  } = useContext(RecipesContext);

  useEffect(() => {
    getFoodAPI('random-filter', '');
  }, []);

  const handleRendering = () => {
    if (foodData.length) {
      return (
        <div>
          <Link to="/explorar/comidas/ingredientes">
            <button
              type="button"
              data-testid="explore-by-ingredient"
            >
              Por Ingredientes
            </button>
          </Link>

          <Link to="/explorar/comidas/area">
            <button
              type="button"
              data-testid="explore-by-area"
            >
              Por Local de Origem
            </button>
          </Link>

          <Link to={ `/comidas/${foodData[0].idMeal}` }>
            <button
              type="button"
              data-testid="explore-surprise"
            >
              Me Surpreenda!
            </button>
          </Link>

        </div>
      );
    }
  };

  return (
    <div>
      { handleRendering() }
    </div>
  );
}

export default ExploreDetailsFood;
