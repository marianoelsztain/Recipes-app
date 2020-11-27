import React from 'react';
import { Link } from 'react-router-dom';

function exploreDetailsDrinks() {
  return (
    <div className="explore-page-container">
      <Link
        to="/explorar/bebidas/ingredientes"
        className="link-explore"
      >
        <button
          className="btn-explore-page"
          data-testid="explore-by-ingredient"
          type="button"
        >
          Por Ingredientes
        </button>
      </Link>

      <Link
        to="/explorar/bebidas/ingredientes"
        className="link-explore"
      >
        <button
          className="btn-explore-page"
          type="button"
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </Link>

    </div>
  );
}
export default exploreDetailsDrinks;
