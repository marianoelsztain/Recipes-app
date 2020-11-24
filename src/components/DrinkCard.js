import React from 'react';
import PropTypes from 'prop-types';
import '../css/Cards.css';

function DrinkCard({ recipe, index }) {
  return (
    <div
      className="card-container"
      data-testid={ `${index}-recipe-card` }
    >
      <div className="img-container">
        <img
          src={ recipe.strDrinkThumb }
          alt="Receita"
          data-testid={ `${index}-card-img` }
        />
      </div>
      <div className="title-container">

        <h3
          data-testid={ `${index}-card-name` }
        >
          { recipe.strDrink }
        </h3>

      </div>
    </div>
  );
}

export default DrinkCard;

DrinkCard.propTypes = {
  recipe: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
