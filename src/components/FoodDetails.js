import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import DrinkCard from './DrinkCard';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../css/Details.css';

function FoodDetail() {
  const {
    getFoodAPI,
    foodData,
    drinkData,
    getDrinkAPI,
  } = useContext(RecipesContext);
  const currentRecipe = foodData[0];
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  const { id } = useParams();
  // console.log(id);

  const handleRecomendations = () => {
    const maxSize = 6;
    const startIndex = 0;

    if (drinkData.length > maxSize) {
      return drinkData.slice(startIndex, maxSize).map((item, index) => (
        <div
          key={ `recomendation-${index}` }
          data-testid={ `${index}-recomendation-card` }
        >
          <DrinkCard
            testid={ index }
            key={ `recipe${index}` }
            recipe={ item }
            idDrink={ item.idDrink }
          />
        </div>
      ));
    }
  };

  const handleIngredients = () => {
    if (foodData.length === 1) {
      const filteredKeys = Object.keys(currentRecipe);
      const filteredMeasurements = [];

      const filteredIngredients = [];
      filteredKeys.forEach((key) => {
        if (key.includes('strIngredient') && currentRecipe[`${key}`] !== '') {
          filteredIngredients.push(currentRecipe[`${key}`]);
        }
      });
      filteredKeys.forEach((key) => {
        if (key.includes('strMeasure') && currentRecipe[`${key}`] !== ' ') {
          filteredMeasurements.push(currentRecipe[`${key}`]);
        }
      });

      setIngredients(filteredIngredients);
      setMeasures(filteredMeasurements);
      console.log(filteredIngredients);
    }
  };
  console.log(ingredients, measures);

  function sliceUrl(url) {
    const videoId = url.split('=')[1];
    console.log(videoId);
    return videoId;
  }

  useEffect(() => {
    getFoodAPI('id-filter', `${id}`);
    getDrinkAPI('name-filter', '');
  }, []);

  useEffect(() => {
    handleIngredients();
  }, [foodData]);

  const handleDetails = () => {
    if (foodData.length === 1) {
      return (
        <div
          className="detail-container"
        >
          <div className="detail-img-container">
            <img
              src={ currentRecipe.strMealThumb }
              alt="Receita"
              data-testid="recipe-photo"
            />
          </div>
          <div className="detail-title-btn-container">
            <div className="detail-title-container">

              <h3 data-testid="recipe-title">
                { currentRecipe.strMeal }
              </h3>

              <div className="detail-category-container">
                <h3 data-testid="recipe-category">{ currentRecipe.strCategory }</h3>
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

          <div className="video-container">
            <iframe
              data-testid="video"
              title="video"
              width="360"
              height="315"
              src={ `https://www.youtube.com/embed/${sliceUrl(currentRecipe.strYoutube)}` }
            />
          </div>

          <div className="detail-recomendation-container">
            {handleRecomendations()}
          </div>

          <Link to={ `/comidas/${id}/in-progress` }>
            <button
              type="button"
              data-testid="start-recipe-btn"
            >
              Start Recipe
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

export default FoodDetail;
