import React from 'react';
import Header from '../components/Header';

function ExplorarIngredientes() {
  const enableSearch = false;
  return (
    <Header pageTitle="Explorar Ingredientes" searchAbled={ enableSearch } />
  );
}

export default ExplorarIngredientes;
