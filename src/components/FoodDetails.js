import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import DrinkRecomendationCard from './DrinkRecomendationCard';
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
  const [recipeBtn, setRecipeBtn] = useState('Iniciar Receita');

  const { id } = useParams();

  const handleRecomendations = () => {
    const maxSize = 6;
    const startIndex = 0;

    if (drinkData.length > maxSize) {
      return drinkData.slice(startIndex, maxSize).map((item, index) => (

        <DrinkRecomendationCard
          testid={ index }
          key={ `recipe${index}` }
          recipe={ item }
          idDrink={ item.idDrink }
        />

      ));
    }
  };

  const handleIngredients = () => {
    if (foodData.length === 1) {
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

  function handleUrl(url) {
    if (foodData.length === 1) {
      if (url && url !== '' && url !== null) {
        const videoId = url.split('=')[1];
        return (
          <div>
            <iframe
              data-testid="video"
              title="video"
              width="360"
              height="315"
              src={ `https://www.youtube.com/embed/${videoId}` }
            />
            <hr />
          </div>
        );
      }
      return <span>No video for YOU!</span>;
    }
  }

  function HandleBtn(text) {
    setRecipeBtn(text);
  }

  useEffect(() => {
    getFoodAPI('id-filter', `${id}`);
    getDrinkAPI('name-filter', '');
    const data = localStorage.getItem('button-state');
    if (data) {
      setRecipeBtn(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    handleIngredients();
  }, [foodData]);

  useEffect(() => {
    localStorage.setItem('button-state', JSON.stringify(recipeBtn));
  });

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
            <div className="datail-ingredients-title">
              <h3>Ingredients</h3>
            </div>

            <div className="datail-ingredients">
              <ul>
                {ingredients.length && ingredients.map((ingredient, i) => (
                  <li
                    data-testid={ `${i}-ingredient-name-and-measure` }
                    key={ `ingredient-${i}` }
                  >
                    <span>{ingredient}</span>
                    <span>{measures[i]}</span>
                  </li>
                ))}

              </ul>
            </div>

          </div>

          <div className="detail-instructions-container">
            <div className="datail-instructions-title">
              <h3>Instructions</h3>
            </div>

            <div className="datail-instructions">
              <p data-testid="instructions">
                { currentRecipe.strInstructions }
              </p>
            </div>

          </div>

          <div className="video-container">
            {handleUrl(currentRecipe.strYoutube)}
          </div>

          <div className="detail-recomendation-container">
            {handleRecomendations()}
          </div>

          <Link to={ `/comidas/${id}/in-progress` }>
            <button
              className="details-in-progress-btn"
              type="button"
              data-testid="start-recipe-btn"
              onClick={ () => HandleBtn('Continuar Receita') }
            >
              {recipeBtn}
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
