import React from 'react';
import { Link } from 'react-router-dom';

export default function exploreDetailsFood() {
  return (
    <div className="explore-page-container">
      <Link
        to="/explorar/comidas/ingredientes"
        className="link-explore"
      >
        <button
          data-testid="explore-by-ingredient"
          className="btn-explore-page"
          type="button"
        >
          Por Ingredientes
        </button>
      </Link>

      <Link
        to="/explorar/comidas/area"
        className="link-explore"
      >
        <button
          className="btn-explore-page"
          data-testid="explore-by-area"
          type="button"
        >
          Por Local de Origem
        </button>
      </Link>
      <Link
        to="/explorar/comidas/area"
        className="link-explore"
      >
        <button
          className="btn-explore-page"
          data-testid="explore-surprise"
          type="button"
        >
          Me Surpreenda!
        </button>
      </Link>

    </div>
  );
}
