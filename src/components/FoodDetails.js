import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../css/Details.css';

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
          <div className="detail-img-container">
            <img
              src={ foodData[0].strMealThumb }
              alt="Receita"
              data-testid="recipe-photo"
            />
          </div>
          <div className="detail-title-btn-container">
            <div className="detail-title-container">

              <h3
                data-testid="recipe-title"
              >
                { foodData[0].strMeal }
              </h3>

              <div className="detail-category-container">
                <h3 data-testid="recipe-category">{ foodData[0].strCategory }</h3>
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
            <h3 data-testid={ `${index}-ingredient-name-and-measure` }>ingredients</h3>
          </div>
          <div className="detail-instructions-container">
            <p data-testid="instructions">
              { foodData[0].strInstructions }
            </p>
          </div>
          <div className="detail-video-container">
            <img
              src={ foodData[0].strYoutube }
              alt="Receita"
              data-testid="recipe-photo"
            />
          </div>

          <div className="detail-recomendation-container">
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
