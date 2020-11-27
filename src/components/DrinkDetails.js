import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import FoodRecomendationCard from './FoodRecomendationCard';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../css/Details.css';

function DrinkDetail() {
  const {
    getDrinkAPI,
    drinkData,
    foodData,
    getFoodAPI,
  } = useContext(RecipesContext);
  const currentRecipe = drinkData[0];
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  const { id } = useParams();

  const handleRecomendations = () => {
    const maxSize = 6;
    const startIndex = 0;

    if (foodData.length > maxSize) {
      return foodData.slice(startIndex, maxSize).map((item, index) => (

        <FoodRecomendationCard
          testid={ index }
          key={ `recipe${index}` }
          recipe={ item }
          idMeal={ item.idMeal }
        />
      ));
    }
  };

  const handleIngredients = () => {
    if (drinkData.length === 1) {
      const filteredKeys = Object.keys(currentRecipe);
      const filteredMeasurements = [];
      const filteredIngredients = [];

      filteredKeys.forEach((key) => {
        if (key.includes('strIngredient')
        && (currentRecipe[`${key}`] !== ''
        && currentRecipe[`${key}`] !== null)) {
          filteredIngredients.push(currentRecipe[`${key}`]);
        }
      });
      filteredKeys.forEach((key) => {
        if (key.includes('strMeasure')
        && (currentRecipe[`${key}`] !== ' ' || currentRecipe[`${key}`] !== null)) {
          filteredMeasurements.push(currentRecipe[`${key}`]);
        }
      });

      setIngredients(filteredIngredients);
      setMeasures(filteredMeasurements);
    }
  };

  useEffect(() => {
    getDrinkAPI('id-filter', `${id}`);
    getFoodAPI('name-filter', '');
  }, []);

  useEffect(() => {
    handleIngredients();
  }, [drinkData]);

  const handleDetails = () => {
    if (drinkData.length === 1) {
      return (
        <div
          className="detail-container"
        >
          <div className="detail-img-container">
            <img
              src={ currentRecipe.strDrinkThumb }
              alt="Receita"
              data-testid="recipe-photo"
              tagName="IMG"
            />
          </div>
          <div className="detail-title-btn-container">
            <div className="detail-title-container">

              <h3 data-testid="recipe-title">
                { currentRecipe.strDrink }
              </h3>

              <div className="detail-category-container">
                <h3 data-testid="recipe-category">{ currentRecipe.strAlcoholic }</h3>
              </div>

            </div>

            <div className="detail-btn-container">
              <img
                alt="share data"
                data-testid="share-btn"
                src={ shareIcon }
              />
              <img
                alt="Set this recipe as favorite"
                data-testid="favorite-btn"
                src={ whiteHeartIcon }
              />
            </div>
          </div>

          <div className="detail-ingredients-container">
            <h3>Ingredients</h3>
            <ul>
              {ingredients.length && ingredients.map((ingredient, i) => (
                <li
                  data-testid={ `${i}-ingredient-name-and-measure` }
                  key={ `ingredient-${i}` }
                >
                  {`${ingredient} - ${measures[i]}`}
                </li>
              ))}

            </ul>

          </div>

          <div className="detail-instructions-container">
            <h3>Instructions</h3>
            <p data-testid="instructions">
              { currentRecipe.strInstructions }
            </p>
          </div>

          <div className="detail-recomendation-container">
            {handleRecomendations()}
          </div>

          <Link to={ `/comidas/${id}/in-progress` }>
            <button
              className="details-in-progress-btn"
              type="button"
              data-testid="start-recipe-btn"
            >
              Iniciar Receita
            </button>
          </Link>

        </div>
      );
    }
    return <span>Loading</span>;
  };

  return (
    <div>{ handleDetails() }</div>

  );
}

export default DrinkDetail;
