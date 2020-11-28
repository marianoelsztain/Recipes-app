import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function ExploreDetailsDrinks() {
  const {
    getDrinkAPI,
    drinkData,
  } = useContext(RecipesContext);

  useEffect(() => {
    getDrinkAPI('random-filter', '');
  }, []);

  const handleRendering = () => {
    if (drinkData.length) {
      return (
        <div>
          <Link to="/explorar/bebidas/ingredientes">
            <button
              type="button"
              data-testid="explore-by-ingredient"
            >
              Por Ingredientes
            </button>
          </Link>

          <Link to={ `/bebidas/${drinkData[0].idDrink}` }>
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
export default ExploreDetailsDrinks;
