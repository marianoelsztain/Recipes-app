import React from 'react';
import Header from '../components/Header';
import DoneRecipeCard from '../components/DoneRecipeCard';

function ReceitasFeitas() {
  const mockRecipe = {
    id: 57522,
    type: 'comida',
    area: 'Argentina',
    category: 'Main course',
    alcoholicOrNot: '',
    name: 'Asado',
    image: '../images/profileIcon.svg',
    doneDate: '20/12/2020',
    tags: ['Grill', 'Meat', 'NonVegan', 'nothing'],
  };

  return (
    <div>
      <Header pageTitle="Receitas Feitas" searchAbled={ false } />
      <DoneRecipeCard recipe={ mockRecipe } index={ 0 } />
    </div>
  );
}

export default ReceitasFeitas;
