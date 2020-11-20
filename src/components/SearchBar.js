import React from 'react';
import '../css/SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="search-input-container">
        <label htmlFor="search-input">
          <input
            data-testid="search-input"
            id="search-input"
            placeholder="Buscar Receita"
            type="text"
          />
        </label>
      </div>
      <div className="filter-selector-container">
        <label
          htmlFor="ingredient-search-radio"
        >
          Ingrediente
          <input
            data-testid="ingredient-search-radio"
            id="ingredient-search-radio"
            name="filter-selector"
            type="radio"
            value="ingredient-filter"
          />
        </label>

        <label
          htmlFor="name-search-radio"
        >
          Nome
          <input
            data-testid="name-search-radio"
            id="name-search-radio"
            name="filter-selector"
            type="radio"
            value="name-filter"
          />
        </label>

        <label
          htmlFor="first-letter-search-radio"
        >
          Primeira Letra
          <input
            data-testid="first-letter-search-radio"
            id="first-letter-search-radio"
            name="filter-selector"
            type="radio"
            value="first-letter-filter"
          />
        </label>
      </div>
      <button
        data-testid="exec-search-btn"
        type="button"
      >
        Pesquisar
      </button>
    </div>
  );
}

export default SearchBar;
