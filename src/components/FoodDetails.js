import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function FoodDetail({ index }) {
  const { getFoodAPI, foodData } = useContext(RecipesContext);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getFoodAPI('id-filter', `${id}`);
  }, []);
  console.log(foodData);

  const handleDetails = () => {
    if (foodData.length === 1) {
      return (
        <div
          className="detail-container"
        >
          <div className="img-container">
            <img
              src={ foodData[0].strMealThumb }
              alt="Receita"
              data-testid="recipe-photo"
            />
          </div>
          <div className="title-container">

            <h3
              data-testid="recipe-title"
            >
              { foodData[0].strMeal }
            </h3>

          </div>

          <button type="button" data-testid="share-btn">share</button>
          <button type="button" data-testid="favorite-btn">favorite</button>

          <div className="category-container">
            <h3 data-testid="recipe-category">{ foodData[0].strCategory }</h3>
          </div>

          <div className="ingredients-container">
            <h3 data-testid={ `${index}-ingredient-name-and-measure` }>ingredients</h3>
          </div>
          <div className="instructions-container">
            <h3 data-testid="instructions">
              { foodData[0].strInstructions }
            </h3>
          </div>
          <div className="video-container">
            <img
              src={ foodData[0].strYoutube }
              alt="Receita"
              data-testid="recipe-photo"
            />
          </div>

          <div className="recomendation-container">
            <img
              src={ foodData[0].strYoutube }
              alt="Receita"
              data-testid={ `${index}-recomendation-card` }
            />
          </div>
          <button type="button" data-testid="start-recipe-btn">Start Recipe</button>

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

FoodDetail.propTypes = {
  recipe: PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strYoutube: PropTypes.string,
    strInstructions: PropTypes.string,
    strCategory: PropTypes.string,

  }).isRequired,
  index: PropTypes.number.isRequired,
};
