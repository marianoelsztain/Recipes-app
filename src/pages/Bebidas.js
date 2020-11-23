import React from 'react';
import Header from '../components/Header';
import DrinkList from '../components/DrinkList';

function Bebidas() {
  const enableSearch = true;
  return (
    <div>
      <Header pageTitle="Bebidas" searchAbled={ enableSearch } />
      <DrinkList />
    </div>
  );
}

export default Bebidas;
