import React from 'react';
import Header from '../components/Header';
import FoodList from '../components/FoodList';

function Comidas() {
  const enableSearch = true;
  return (
    <div>
      <Header pageTitle="Comidas" searchAbled={ enableSearch } />
      <FoodList />
    </div>
  );
}

export default Comidas;
