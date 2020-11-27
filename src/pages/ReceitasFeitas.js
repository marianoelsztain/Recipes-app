import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import DoneRecipeCard from '../components/DoneRecipeCard';

function ReceitasFeitas() {
  const [doneRecipesList, setDoneRecipesList] = useState([]);

  useEffect(() => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipesList(doneRecipes);
  }, []);

  return (
    <div>
      <Header pageTitle="Receitas Feitas" searchAbled={ false } />
      { doneRecipesList && doneRecipesList.map((recipe, index) => (
        <DoneRecipeCard key={ `${index}-recipe` } recipe={ recipe } index={ index } />
      ))}
    </div>
  );
}

export default ReceitasFeitas;
