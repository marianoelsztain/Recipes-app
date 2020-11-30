import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import DoneRecipeCard from '../components/DoneRecipeCard';
import '../css/Cards.css';

function ReceitasFeitas() {
  const [doneRecipesList, setDoneRecipesList] = useState([]);

  useEffect(() => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipesList(doneRecipes);
    console.log(doneRecipes);
  }, []);

  return (
    <div className="done-recipes-body">
      <Header pageTitle="Receitas Feitas" searchAbled={ false } />
      { doneRecipesList && doneRecipesList.map((recipe, index) => (
        <DoneRecipeCard key={ `${index}-recipe` } recipe={ recipe } index={ index } />
      ))}
    </div>
  );
}

export default ReceitasFeitas;
