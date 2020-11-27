import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import '../css/Cards.css';

function DoneRecipeCard(recipe, index) {
  const {
    recipe: {
      id,
      type,
      area,
      category,
      alcoholicOrNot,
      name,
      image,
      doneDate,
      tags,
    },
  } = recipe;

  const preTitle = () => {
    if (type === 'bebida') {
      return alcoholicOrNot;
    }
    return `${area} - ${category}`;
  };

  const minTag = 0;
  const maxTag = 2;
  console.log(recipe);
  return (
    <div className="card-container">
      <div className="done-recipe-img-container">
        <Link to={ `/${type}s/${id}` }>
          <img
            alt="prato já feito"
            src={ image }
            data-testid={ `${index}-horizontal-image` }
          />
        </Link>
      </div>
      <div className="done-recipe-info-container">
        <h3 data-testid={ `${index}-horizontal-top-text` }>{ preTitle() }</h3>
        <Link to={ `/${type}s/${id}` }>
          <h4 data-testid={ `${index}-horizontal-name` }>{ name }</h4>
        </Link>
        <p data-testid={ `${index}-horizontal-done-date` }>{ `Feita em: ${doneDate}` }</p>
        { tags.slice(minTag, maxTag).map((tag, i) => (
          <span
            key={ `${i}-tag` }
            data-testid={ `${index}-${tag}-horizontal-tag` }
          >
            { tag }
          </span>
        )) }
      </div>
      <div>
        <img
          alt="share button"
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
        />
      </div>
    </div>
  );
}

export default DoneRecipeCard;

DoneRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    area: PropTypes.string,
    category: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    doneDate: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
};
