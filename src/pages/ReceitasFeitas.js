import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import DoneRecipeCard from '../components/DoneRecipeCard';
import DoneRecipesFilter from '../components/DoneRecipesFilter';
import '../css/Cards.css';

function ReceitasFeitas() {
  const [doneRecipesList, setDoneRecipesList] = useState([]);
  const AllDoneRecipes = () => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipesList(doneRecipes);
  };
  useEffect(() => {
    AllDoneRecipes();
  }, []);

  return (
    <div className="done-recipes-body">
      <Header pageTitle="Receitas Feitas" searchAbled={ false } />
      <DoneRecipesFilter
        currentList={ doneRecipesList }
        setList={ setDoneRecipesList }
        resetFilters={ AllDoneRecipes }
      />
      { doneRecipesList && doneRecipesList.map((recipe, index) => (
        <DoneRecipeCard key={ `${index}-recipe` } recipe={ recipe } index={ index } />
      ))}
    </div>
  );
}

export default ReceitasFeitas;
