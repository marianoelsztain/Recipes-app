import React from 'react';
import PropTypes from 'prop-types';

function FoodDetail({ recipe, index }) {
  return (
    <div
      className="detail-container"
    >
      <div className="img-container">
        <img
          src={ recipe.strMealThumb }
          alt="Receita"
          data-testid="recipe-photo"
        />
      </div>
      <div className="title-container">

        <h3
          data-testid="recipe-title"
        >
          { recipe.strMeal }
        </h3>

      </div>

      <button type="button" data-testid="share-btn">share</button>
      <button type="button" data-testid="favorite-btn">favorite</button>

      <div className="category-container">
        <h3 data-testid="recipe-category">{ recipe.strCategory }</h3>
      </div>

      <div className="ingredients-container">
        <h3 data-testid={ `${index}-ingredient-name-and-measure` }>ingredients</h3>
      </div>
      <div className="instructions-container">
        <h3 data-testid="instructions">
          { recipe.strInstructions }
        </h3>
      </div>
      <div className="video-container">
        <img
          src={ recipe.strYoutube }
          alt="Receita"
          data-testid="recipe-photo"
        />
      </div>

      <div className="recomendation-container">
        <img
          src={ recipe.strYoutube }
          alt="Receita"
          data-testid={ `${index}-recomendation-card` }
        />
      </div>
      <button type="button" data-testid="start-recipe-btn">Start Recipe</button>

    </div>
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
