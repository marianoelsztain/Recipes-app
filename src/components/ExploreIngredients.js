import React, { useContext, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function ExploreIngredients() {
  const {
    getFoodList,
    filteredList,
    getDrinkList,
    setSearchInput,
  } = useContext(RecipesContext);

  const { pathname } = useLocation();
  
  useEffect(() => {
    if (pathname && pathname.includes('comidas')) {
      getFoodList('ingredient-list');
    } else {
      getDrinkList('ingredient-list');
    }
    
  }, []);

  const handleImageUrl = () => {
    let imgUrl;
    if (pathname && pathname.includes('comidas')) {
      imgUrl = 'https://www.themealdb.com/images/ingredients/';
    } else {
      imgUrl='https://www.thecocktaildb.com/images/ingredients/';
    }
    return imgUrl;
  }

  const handleRedirectRoute = () => {
    let pathUrl;
    if (pathname && pathname.includes('comidas')) {
      pathUrl = '/comidas';
    } else {
      pathUrl='/bebidas';
    }
    return pathUrl;
  }
  
  const onClick = (value) => {
    setSearchInput({
      filterType: 'ingredient-filter',
      query: value,
      readyToSearch: true,
    });
  }

  const handleIngredients = () => {
    const extension = '.png';

    return filteredList.map((ingredient, index) => (
      <Link
        to={ handleRedirectRoute() }
        onClick={ () => onClick(ingredient) }
      >
        <div
          data-testid={ `${index}-ingredient-card` }
          key={ `ingredient-${index}` }
        >
          <h3 data-testid={ `${index}-card-name` }>
            { ingredient }
          </h3>
    
          <img
            src={ `${handleImageUrl()}${ingredient}-Small${extension}` }
            alt={ `${ingredient}` }
            data-testid={ `${index}-card-img` }
          />

        </div>
      </Link>
    ));
  };

  

  return (
    <div>
      { filteredList !== null ? handleIngredients() : <span>Loading</span> }
    </div>
  );
}

export default ExploreIngredients;
