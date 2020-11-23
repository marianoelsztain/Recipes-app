import React from 'react';
import PropTypes from 'prop-types';
import '../css/Cards.css';

function FoodCard({ recipe, index }) {
  return (
    <div
      className="card-container"
      data-testid={ `${index}-recipe-card` }
    >
      <div className="img-container">
        <img
          src={ recipe.strMealThumb }
          alt="Receita"
          data-testid={ `${index}-card-img` }
        />
      </div>
      <div className="title-container">

        <h3
          data-testid={ `${index}-card-name` }
        >
          { recipe.strMeal }
        </h3>

      </div>
    </div>
  );
}

export default FoodCard;

FoodCard.propTypes = {
  recipe: PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
